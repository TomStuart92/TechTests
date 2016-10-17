## Database Server

This is a solution to the [First Makers Academy TechTest.](https://github.com/makersacademy/course/blob/master/individual_challenges/database_server.md)

```
Before your interview, write a program that runs a server that is accessible on http://localhost:4000/.
When your server receives a request on http://localhost:4000/set?somekey=somevalue it should store the passed key and value in memory.
When it receives a request on http://localhost:4000/get?key=somekey it should return the value stored at somekey.
During your [mock] interview, you will pair on saving the data to a file.
```

## Instructions

- Clone Repository to your local machine.
- Install NPM and Node ([Guide](https://docs.npmjs.com/getting-started/installing-node))
- Run `NPM Install`
- Run `Node Server.js`. The server will run on localhost:4000 by default.
- Run `jasmine-node spec` to access the test suite.

## Usage

After running the localhost server, any request made to `/set?key=value` will save the given key, value pair to the database.

A request to `/get?key=value` will retrieve the value associated with the given key. For example:

```
GET localhost:4000/set?fish=tuna
fish = tuna saved to the database

GET localhost:4000/get?key=fish
tuna retrieved from the database
```

## Design Notes

For simplicity the server is built on core NodeJS. The server is provided using the HTTP_Server package.

Jasmine-Node and Request are used for testing.

QueryString and URL are used for parsing params.

## Saving to Database

Adding a database to the system is a simple matter of amending the DataStorage module to become a wrapper for whatever database ORM is needed.
