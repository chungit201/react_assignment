const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const {Product} = require('../models');
const removeSign = require('../utils/deletesign')

const createProduct = async (productBody) => {
  console.log(productBody);
  return Product.create(productBody);
}

/**
 * Query projects
 * @param {Object} filter
 * @param {Object} options
 * @param {string} options.sortBy
 * @param {number} options.limit
 * @param {number} options.page
 * @returns {Promise<QueryResult>}
 */

const queryProduct = async (filter, options) => {
  Object.assign(options, {populate: "categories"})
  return Product.paginate(filter, options)
}
// const searchProduct = async (dataSearch) => {
//   const name = removeSign(dataSearch)
//   const products = await Product.find();
//   const data = products.filter((item) => {
//     const listData = item.name;
//     const newvalue = removeSign(listData);
//     return newvalue.toLowerCase().indexOf(name.toLowerCase()) !== -1;
//   });
//   return data;
// }
const getProduct = async (productId) => {
  if (!productId) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found')
  }
  console.log(productId)
  let product = await Product.findOne({_id: productId});
  return product;
}

const editProduct = async (productId, updateBody) => {
  const product = await Product.findOne({_id: productId});
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  Object.assign(product, updateBody);
  await product.save();
  return product;
}
const deleteProduct = async (productId) => {
  let product = await Product.findOne({_id: productId});
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  ;
  await product.deleteOne();
  return product;
}
module.exports = {
  createProduct,
  queryProduct,
  getProduct,
  editProduct,
  deleteProduct,
}