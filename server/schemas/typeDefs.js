const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
_id: ID!
username: String!
email: String!
bookCount: Int
savdBooks: [Book]
  }

  type Book {
    bookId: ID!
  authors: [String]
  description: String!
  title: String!
  image: String
  link: String

  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }

  input BookDataInput {
    authots: [String]
    description: String!
    bookId: String!
    title: String!
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!) Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookDataInput): User
    removeBook(bookId: ID!): User

    
  }
`;

module.exports = typeDefs;