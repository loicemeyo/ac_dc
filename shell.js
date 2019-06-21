const { graphql } = require("graphql");
const schema = require("./schema");

const query = process.argv[2];

graphql(schema, query)
  .then(result => console.log(result))
  .catch(error => console.log(error));
