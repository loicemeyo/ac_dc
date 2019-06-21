const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} = require("graphql");
const BookGenreType = require("./BookGenreType");
const { authors } = require("../../json");

const BookType = new GraphQLObjectType({
  name: "BookType",
  fields: {
    id: {
      type: GraphQLID,
      description: "This is the id of the book"
    },
    authorId: {
      type: GraphQLID,
      description: "The id of the author that wrote the book"
    },
    authorName: {
      type: GraphQLString,
      description: "This is the author id of the book",
      resolve: obj =>
        authors.filter(author => author.id === obj.authorId)[0].name
    },
    title: {
      type: GraphQLString,
      description: "This is the title of book"
    },
    genre: { type: new GraphQLNonNull(BookGenreType) },
    year: {
      type: GraphQLString,
      description: "This is the year the book was written"
    }
  }
});

module.exports = BookType;
