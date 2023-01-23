<!-- Headings -->

# Auth Routes

**POST api/login**

```json
{
  "username": "string",
  "password": "string",
}
des kriagsch du vo mia (glaube)
```

```diff
StatusCode: 200 OK
```

frontend sends User/Moderator Data and backend returns JWT (uid und role als private claims) inkl roles and Refresh Token or throw authorisation error
-> https://www.geeksforgeeks.org/jwt-authentication-with-refresh-tokens/ als reference und fürs Verständnis
beschäftig di pls damit bc des brucha ma fürd anmeldung, du kannsch mi aba gern froga falls was bruchsch
des mit den roles isch damit ma identifizieren kann obs an admin isch oda ned und da refresh token isch dass ma wenn da jwt abloft an neuer kriagt
https://www.toptal.com/angular/angular-6-jwt-authentication
https://www.syncfusion.com/blogs/post/best-practices-for-jwt-authentication-in-angular-apps.aspx

**POST api/refresh** frontend sends refresh Token and server returns new jwt/access token or throw authorisation error

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

**PUT api/moderators/{IDmoderator}** Updates given moderator

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

**DELETE api/moderators/{idmoderator}** Deletes the given moderator (with all meetings)

```diff
StatusCode: 204 NoContext
```

---

# Meeting

**GET api/moderators/{idmoderator}/meetings** Returns a list of all meetings of one moderator

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

**GET api/meetings/{idmeeting}** Returns a a meeting (with all items)

```json
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
```

```diff
StatusCode: 200 OK
```

**POST api/meetings/** Saves a new meeting, returns full Meeting (id, title, description, items[])

```json
{
  "title": "string",
  "description": "string"
}
```

```diff
StatusCode: 201 Created
```

**POST api/meetings/{idmeeting}/items/** Saves added item

```json
{
  "number": 1,
  "description": "string",
  "color": "string",
  "type": "enum(p,i,b,l)",
  "bookmark": false,
  "ofcourse": false
}
```

**PUT api/meetings/{idmeeting}** Updates given meeting

```json
{
  "idmeeting": 0,
  "title": "string",
  "description": "string",
  "savedate": "datetime"
}
```

```diff
StatusCode: 200 OK
```

**PUT api/meetings/{idmeeting}/items/{number}** Updates given Item (number is unique for meeting)

```json
{
  "number": 1,
  "description": "string",
  "color": "string",
  "type": "enum(p,i,b,l)",
  "bookmark": false,
  "ofcourse": false
}
```

**DELETE api/meetings/{idmeeting}** Deletes given meeting (with all items)

```diff
StatusCode: 204 NoContext
```

**DELETE api/meetings/{idmeeting}/items/{number}** Deletes given item

```diff
StatusCode: 204 NoContext
```

**GET api/meetings/items?bookmark** (maybe jenochdem ob mas jett bruchen)
Get bookmarks of latest meeting of moderator (token)

```json
[
  {
    "number": 1,
    "description": "string",
    "color": "string",
    "type": "enum(p,i,b,l)",
    "bookmark": true,
    "ofcourse": false
  }
]
```
