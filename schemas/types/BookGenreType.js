const { GraphQLEnumType } = require("graphql");

module.exports = new GraphQLEnumType({
  name: "BookGenreType",
  values: {
    Mysteries: { value: "Mysteries" },
    ScienceFiction: { value: "Science Fiction" },
    Fantasy: { value: "Fantasy" }
  }
});
