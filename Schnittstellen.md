<!-- Headings -->

# Moderator

**GET api/moderators/** Returns a list of all moderators

```json
[
  {
    "idmoderator": 0,
    "username": "string",
    "name": "string",
    "lastname": "string",
    "picture-path": "string"
  },
  {
    "idmoderator": 1,
    "username": "string",
    "name": "string",
    "lastname": "string",
    "picture-path": "url"
  }
]
```

```diff
StatusCode: 200 OK
```

**POST api/moderators/** Saves a new moderator

```json
{
  "username": "string",
  "name": "string",
  "lastname": "string",
  "password": "string"
}
```

```diff
StatusCode: 201 Created
```

**PUT api/moderators/IDmoderator** Updates given moderator

```json
{
  "idmoderator": 0,
  "username": "string",
  "name": "string",
  "lastname": "string",
  "password": "string"
}
```

```diff
StatusCode: 200 OK
```

**DELETE api/moderators/idmoderator** Deletes the given moderator (with all meetings)

```diff
StatusCode: 204 NoContext
```

---

# Meeting

**GET api/meetings?fk_moderator** Returns a list of all meetings of one moderator

```json
[
  {
    "idmeeting": 0,
    "title": "string",
    "description": "string",
    "savedate": "datetime"
  }
]
```

```diff
StatusCode: 200 OK
```

**GET api/meetings/idmeeting** Returns a list of a meeting (with all items)

```json
[
  {
    "idmeeting": 0,
    "title": "string",
    "description": "string",
    "items": [
      {
        "number": 1,
        "description": "string",
        "color": "string",
        "type": "enum(p,i,b,l)",
        "bookmark": false,
        "ofcourse": false
      }
    ]
  }
]
```

```diff
StatusCode: 200 OK
```

**POST api/meetings/** Saves a new meeting (with all items)

```json
[
  {
    "title": "string",
    "description": "string",
    "items": [
      {
        "number": 1,
        "description": "string",
        "color": "string",
        "type": "enum(p,i,b,l)",
        "bookmark": false,
        "ofcourse": false
      }
    ],
    "savedate": "datetime"
  }
]
```

```diff
StatusCode: 201 Created
```

**PUT api/meetings/idmeeting** Updates given meeting (with all items)

```json
[
  {
    "idmeeting": 0,
    "title": "string",
    "description": "string",
    "items": [
      {
        "number": 1,
        "description": "string",
        "color": "string",
        "type": "enum(p,i,b,l)",
        "bookmark": false,
        "ofcourse": false
      }
    ],
    "savedate": "datetime"
  }
]
```

```diff
StatusCode: 200 OK
```

**DELETE api/meetings/idmeeting** Deletes given meeting (with all items)

```diff
StatusCode: 204 NoContext
```
