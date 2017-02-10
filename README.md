# visitors
Node.js restify api

## Requirements
Requires ES6 compatible node.js

## NPM install dependencies
> `sudo npm install -g restify`

> `sudo npm install -g mocha`

> `git clone https://github.com/asheldo/visitors`

> `cd visitors`

> `mocha ./*/*spec.js`

> ... 15 tests passed ...

> `node index.js`

> ... Server listening, port: 3000 `

Terminal 2:

> `curl --data "name=bob" http://localhost:3000/person`

> `curl http://localhost:3000/person/1`
> {"id":1,"name":"bob"}

> `curl --data "name=b&latitude=1&longitude=1" http://localhost:3000/place`

> `curl http://localhost:3000/place/1`
> {"id":1,"name":"b","latitude":"1","longitude":"1"}^C

> `curl -X POST http://localhost:3000/person/1/place/1`
> {"person_id":1,"place_id":1}

> `curl http://localhost:3000/person/1/place`
> [{"id":1,"name":"b","latitude":"1","longitude":"1"}]
