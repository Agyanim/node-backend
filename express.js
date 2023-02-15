const Express = require("express");
const App = Express();
const product = require("./products");

App.get("/", (req, res) => {
  res.send('<h1>BBS API.</h1><a href="/api/products"> product </a>');
});
App.get("/api/products", (req, res) => {
  const newProduct = product.map((product) => {
    const { id, name } = product;
    return { id, name };
  });
  res.status(200).json(newProduct);
});

App.all("*", (req, res) => {
  res.send("Sorry, The page is not available");
});
App.listen(8080, () => {
  console.log("Server started and listening on port 8080..");
});
