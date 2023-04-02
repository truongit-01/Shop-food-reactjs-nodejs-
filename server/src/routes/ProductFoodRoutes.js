const express = require('express');
const ProductController = require('../controller/ProductFoodController');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

let router = express.Router();

const initProductFood = (app) => {
    router.get('/food', ProductController.getProductFood);
    router.get('/food/:foodId', ProductController.getProductFoodByID);
    router.delete('/food/:foodId', ProductController.deleteProductFoodByID);


    // Tạo danh mục
    router.post('/food/category/list', ProductController.postCateProduct);
    // Lấy tất cả danh mục thức ăn
    router.get('/food/category/list', ProductController.getCateProduct);
    // lấy tất cả món ăn theo danh mục
    router.get('/category/food/list', ProductController.getAllCateFood);
    // Tạo thức ăn và thêm 1 món ăn mới vào danh mục
    router.post('/product/food/cate-add', ProductController.postAddFoodCate);


    // 
    router.post('/upload_images', ProductController.postImageFood)

    return app.use('/api/v1/', router);
}

module.exports = initProductFood;