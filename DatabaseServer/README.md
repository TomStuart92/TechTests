## Database Server

This is a solution to the [First Makers Academy TechTest.](https://github.com/makersacademy/course/blob/master/individual_challenges/database_server.md)

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
