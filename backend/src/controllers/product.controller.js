const formidable = require('formidable')
const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const {productService} = require('../services');
const addProuct = catchAsync(async (req, res) => {
    const product = await productService.createProduct(req.body);
    res.json({
      message: "Create product successFully",
      product
    })
});
// const searchProduct = catchAsync(async (req,res)=>{
//   const data = await productService.searchProduct(req.query.keyword);
//   res.json(data);
// })
const getProducts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name','slug']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await productService.queryProduct(filter, options);
  res.json(result);
});
const getProduct = catchAsync(async (req, res) => {
  let product = await productService.getProduct(req.params.productId);
  res.json(product)
})
const updateProduct = catchAsync(async (req, res) => {
  const product = await productService.editProduct(req.params.productId, req.body);
  res.json({
    message: "Update product successFully",
    product: product
  })
});

const removeProduct = catchAsync(async (req, res) => {
  const product = await productService.deleteProduct(req.params.productId);
  res.json({
    message: "Delete product successFully",
    productDelete: product
  })
})

module.exports = {
  getProduct,
  addProuct,
  getProducts,
  updateProduct,
  removeProduct,
  // searchProduct,
}