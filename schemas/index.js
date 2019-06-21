const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLList
} = require("graphql");
const _ = require("lodash");
const BookType = require("./types/BookType");
const AuthorType = require("./types/AuthorType");
const { books, authors } = require("../json");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      description: "Fetch a book by id from the bookshop",
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: (obj, args) => _.find(books, { id: args.id })
    },
    books: {
      type: new GraphQLList(BookType),
      description: "Fetch all the books from the bookshop",
      resolve: () => books
    },
    author: {
      type: AuthorType,
      description: "Fetch an author by id from the bookshop",
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: (obj, args) => _.find(authors, { id: args.id })
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: "Fetch all the authors from the bookshop",
      resolve: () => authors
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQueryType
});
