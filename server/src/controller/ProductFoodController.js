const { Foods, CategoryFood } = require("../models/ProductFoodModel");


const getProductFood = async (req, res) => {
    try {
        const foods = await Foods.findAll({
            attributes: ['FoodId', 'FoodName', 'cateId', 'description', 'price', 'image', 'quantity']
        });
        res.json(foods);
    } catch (err) {
        console.log(err);
    }
}

/* product Food Detail */
const getProductFoodByID = async (req, res) => {
    const paramIdFood = req.params.foodId;

    if (paramIdFood) {
        try {
            const productFood = await Foods.findByPk(paramIdFood);

            if (productFood) {
                const productDetail = await Foods.findOne({
                    where: {
                        FoodId: paramIdFood
                    }
                })
                res.send(productDetail);

            } else {
                res.send("ko tìm thấy thức ăn này!")
            }
        } catch (error) {
            console.log(error)
        }

        // try {
        //     const productDetail = await Foods.findByPk(paramIdFood)
        //     res.send(productDetail);
        // } catch (error) {
        //     console.log(error);
        //     res.send("ko tìm thấy food")
        // }

    } else {
        res.send("Ko xác định đc params!")
    }
}

/* product Food Detail */
const deleteProductFoodByID = async (req, res) => {
    try {
        const paramIdFood = req.params.foodId;
        const productFood = await Foods.findOne(paramIdFood);

        if (!productFood) {
            res.status(404).json({ message: 'Không tìm thấy thức ăn!' });
        } else {
            await productFood.destroy();
            res.status(200).json({ message: 'Xoá thức ăn thành công!' });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};


/* Tạo danh mục cho đồ ăn */
const postCateProduct = (req, res) => {
    CategoryFood.create({
        cateName: 'Bun',
        cateImage: "imagecate2"
    }).then(category => {
        console.log(category)
    }).catch(err => {
        console.log(err);
    })
}

/* Lấy các danh mục thức ăn  */
const getCateProduct = (req, res) => {
    CategoryFood.findAll({
        attributes: ['categoryId', 'cateName', 'cateImage']
    }).then(category => {
        res.json(category)
    }).catch(err => {
        console.log(err);
    })
}


/* Tạo và thêm thức ăn vào danh mục */
const postAddFoodCate = (req, res) => {
    const infoFood = req.body;

    CategoryFood.findOne({ where: { cateName: 'Nem' } }).then(category => {
        Foods.create({
            FoodName: infoFood.FoodName,
            description: infoFood.description,
            cateId: category.categoryId,
            price: infoFood.price,
            quantity: infoFood.quantity
        }).then(food => {
            console.log(food);
        }).catch(err => {
            console.error('Unable to create food:', err);
        });
    }).catch(err => {
        console.error('Unable to find category:', err);
    });

}


/* lấy tất cả sản phâm theo danh mục */
const getAllCateFood = async (req, res) => {
    try {
        const queryTypeCaye = req.query.type;
        const limitFood = req.query.limit || '15';


        if (queryTypeCaye) {

            const FoodCategory = await CategoryFood.findOne({
                where: { cateName: `${queryTypeCaye}` }
            });

            if (FoodCategory) {
                console.log(limitFood)
                const allFood = await Foods.findAll({
                    where: { cateId: FoodCategory.categoryId },
                    limit: parseInt(limitFood)
                })

                res.json({
                    message: "Lấy các món ăn thành công!",
                    data: allFood
                })
            } else {
                res.json({
                    error: 'Không tim thấy sản phẩm!',
                    data: []
                })
            }
        }

    } catch (error) {
        console.log(error, 'lỗi server')
    }
}

module.exports = {
    getProductFood,
    getProductFoodByID,
    deleteProductFoodByID,
    postCateProduct,
    postAddFoodCate,
    getAllCateFood,
    getCateProduct
}