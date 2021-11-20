const express = require('express');
const  auth = require('../../middlewares/auth')
const {categoriesController} = require("../../controllers");
const router = express();

router
  .get('/', auth(),categoriesController.getCategories)
  .get('/:categoryId', auth(),categoriesController.getCategory)
  .post('/add',auth('MANAGE_ALL_CATEGORIES'),categoriesController.addCategory)
  .post('/edit/categoryId',auth('MANAGE_ALL_CATEGORIES'),categoriesController.updateCategory)
  .post('/delete/categoryId',auth('MANAGE_ALL_CATEGORIES'),categoriesController.removeCategory)
module.exports = router;