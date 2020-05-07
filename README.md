# nestjs-gql-server

Opinionated Node.JS GraphQL server using:

- [NestJS](https://nestjs.com/)

This graphql server proxies [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a proof of concept.

Uses the GraphQL plugin for NestJS, and the schema first approach.

Features:

- List of all Users/Posts/TODOs
- Single Users/Posts/TODO by id
- List all Users/Posts/TODOs sorted by any field of its composition:
  `sortByDiretion: ("ASC"||"DESC"), sortByField: "username"`
- List all Users/Posts/TODOs with title starting with a given string, i.e:
  all TODOs starting with `todos(startsWithField: "name", startsWith: “S”) { ... }`
- You can mix filters for all TODOs (even the single TODO by id, if the TODO doesn't `startsWith` with whatever string set, will return an empty array)

## Example queries

```graphql
query users {
  users(startsWith: "a", startsWithField: "username") {
    id
    username
    name
    phone
    website
    address {
      street
      suite
      city
      zipcode
      geo {
        lat
        lon
      }
    }
    company {
      name
      catchPhrase
      bs
    }
  }
}

query posts {
  posts(sortByField: "title", sortByDirection: "DESC") {
    id
    userId
    title
    body
    user {
      username
    }
  }
}

query todos {
  todos(startsWith: "true", startsWithField: "completed") {
    id
    userId
    title
    completed
    user {
      username
    }
  }
}

query oneTodo {
  todos(id: 99) {
    id
    title
    completed
    user {
      id
      username
    }
  }
}

query onePost {
  posts(id: 99) {
    id
    title
    body
    user {
      id
      username
    }
  }
}

query oneUser {
  users(id: 5) {
    id
    username
    name
    phone
    website
    address {
      street
      suite
      city
      zipcode
      geo {
        lat
        lon
      }
    }
    company {
      name
      catchPhrase
      bs
    }
  }
}
```
