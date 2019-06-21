const app = require("express")();
const schema = require("./schemas");
const graphql = require("express-graphql");
const PORT = 3000;

app.use(
  "/graphql",
  graphql({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
