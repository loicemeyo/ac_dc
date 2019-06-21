const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} = require("graphql");
const { books } = require("../../json");
const BookType = require("./BookType");

const AuthorType = new GraphQLObjectType({
  name: "AuthorType",
  fields: {
    id: {
      type: GraphQLID,
      description: "This is the id of the author"
    },
    name: {
      type: GraphQLString,
      description: "This is the name of the author"
    },
    age: {
      type: GraphQLInt,
      description: "This is the age of the author"
    },
    country: {
      type: GraphQLString,
      description: "This is the country where the author lives"
    },
    books: {
      type: new GraphQLList(BookType),
      description: "A list of all the books written by this author",
      resolve: obj => books.filter(book => book.authorId === obj.id)
    }
  }
});

module.exports = AuthorType;
