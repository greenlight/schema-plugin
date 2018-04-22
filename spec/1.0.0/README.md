# Greenlight Plugin Spec

## Data Structure

Plugin data is expected to be declared using [`Dockerfile` labels][labels] and should adhere to the JSON schema equivalent described here

###### Dockerfile

> ```yml
> LABEL version="1.0.0"
> LABEL greenlight.version="1.0.0"
> LABEL greenlight.name="greenlight/plugin-name"
> LABEL greenlight.description="detailed description"
> ```

###### JSON

```json
{
  "version": "x.y.z",
  "greenlight.version": "1.0.0",
  "greenlight.name": "greenlight/plugin-name",
  "greenlight.description": "detailed description"
}
```

---

### Schema

```json
{
  "version": "1.0.0",
  "greenlight.version": "1.0.0",
  "greenlight.name": "foolint",
  "greenlight.description": "foo linting tool"
}
```

name                       | type     | required | default | description                                          
-------------------------- | -------- | -------- | ------- | -----------------------------------------------------
**version**                | `String` | ✗        | `-`     | Optional Plugin version                              
**greenlight.version**     | `String` | 🗸        | `-`     | Spec version. Format must follow [semver][]          
**greenlight.name**        | `String` | 🗸        | `-`     | Unique and descriptive name for your plugin          
**greenlight.description** | `String` | ✗        | `-`     | Full description of the plugin and it's functionality

---

[json]: https://www.json.org/

[semver]: https://semver.org

[labels]: https://docs.docker.com/engine/reference/builder/#label
