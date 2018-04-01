# Greenlight Plugin Spec

## Data Structure & File Format

Plugin files are required to be saved in `UTF-8` encoding, other encodings are forbidden. Allowed formats are limited to [`JSON`][json] & [`YAML`][yaml].

### File Naming

Acceptable file name must match the following pattern:

```regex
^plugin\.(json|ya?ml){1}$
```

###### Example

- [`plugin.json`](#json-example)
- [`plugin.yml`](#yaml-example)

---

### `plugin.json`

```json
{
  "greenlight": "1.0.0",
  "name": "foolint",
  "description": "foo linting tool",
  "drivers": {}
}
```

name            | type     | required | default | description                                          
--------------- | -------- | -------- | ------- | -----------------------------------------------------
**greenlight**  | `String` | ✔        | `-`     | Spec version. Format must follow [semver][]          
**version**     | `String` | ✖        | `-`     | Optional Plugin version                              
**name**        | `String` | ✔        | `-`     | Unique and descriptive name for your plugin          
**description** | `String` | ✖        | `-`     | Full description of the plugin and it's functionality
**drivers**     | `Object` | ✔        | `-`     | List of [supported drivers](#drivers)                

### `drivers`

```json
{
  "drivers": {
    "filesystem": true,
    "git": ["commit"],
    "github": ["issue", "pull-request"]
  }
}
```

name           | type            | required | default | description                                      
-------------- | --------------- | -------- | ------- | -------------------------------------------------
**filesystem** | `Array|Boolean` | ✖        | `-`     | a [`filesystem`](#filesystem) type driver context
**git**        | `Array|Boolean` | ✖        | `-`     | a [`git`](#git) type driver context              
**github**     | `Array|Boolean` | ✖        | `-`     | a [`github`](#github) type driver context        

> Drivers can either been an array of supported contexts, or a boolean indicating full support or lack of

#### Supported Contexts

###### Filesystem

context | description                                                       
------- | ------------------------------------------------------------------
`file`  | scans all files in the directory, typically used for style linters

###### Git

context  | description             
-------- | ------------------------
`commit` | scans git commit history

###### GitHub

context | description                
------- | ---------------------------
`issue` | scans GitHub issues        
`issue` | scans GitHub pull-requests 
`repo`  | scans GitHub repo meta data

---

###### JSON Example

> ```json
> {
>   "version": "1.0.0",
>   "name": "foolint",
>   "description": "foo linting tool",
>   "drivers": {
>     "filesystem": ["scan"],
>     "git": true
>   }
> }
> ```

###### YAML Example

> ```yml
> version: 1.0.0
>
> name: foolint
> description: foo linting tool
>
> drivers:
>   filesystem: true
> ```

[json]: https://www.json.org/

[semver]: https://semver.org

[yaml]: http://www.yaml.org/
