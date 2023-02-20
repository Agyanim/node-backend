const Express = require("express");
const Cors =require("cors")
const App = Express();
const {products,emailNotification} = require("./products");

// App.use(Express.urlencoded({extended:false}))
App.use(Express.json())
App.use(Cors())

App.get("/", (req, res) => {
  res.send('<h1>BBS API.</h1><a href="/api/products"> product </a>');
});
App.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name } = product;
    return { id, name };
  });
  res.status(200).json(newProduct);
});

App.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (singleProduct) {
    return res.status(200).json(singleProduct);
  } else return res.send("Item not fund");
});

App.get("/api/v1/query",(req,res)=>{
  let {search}=req.query
  const products = [...products];
  const sortedItem=products.filter(product=>product.name.startsWith(search))
  res.send(sortedItem)
  // console.log(req.query.name)
})

 App.post("/api/email/notification",(req,res)=>{
  console.log("Connection successful");
  const data=req.body
  emailNotification.push(data)
  res.status(200).json({Success:true, data:emailNotification})
 })


App.all("*", (req, res) => {
  res.send("Sorry, The page is not available");
});

App.listen(8080, () => {
  console.log("Server started and listening on port 8080..");
});
