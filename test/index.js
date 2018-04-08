const { test } = require('tap')
const Ajv = require('ajv')
const spawn = require('@ahmadnassri/spawn-promise')

const schema = require('..')

const ajv = new Ajv()

test('schema compiles successfully', assert => {
  assert.plan(2)

  assert.doesNotThrow(() => ajv.addSchema(schema))
  assert.type(ajv.compile(schema), 'function')
})

test('valid data', async assert => {
  assert.plan(1)

  // docker run args
  const args = [
    'inspect',
    '--format="{{json .ContainerConfig.Labels}}"',
    'greenlight/foo'
  ]

  const { stdout } = await spawn('docker', args, { shell: true })
  const data = JSON.parse(stdout)

  assert.ok(ajv.validate(schema, data))
})
