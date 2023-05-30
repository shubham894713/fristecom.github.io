const ProductModel = require('../../models/product.model');
async function getAllproducts(req,res){
    try{
        const { limit = 100, skip = 0 } = req.query;
        const projection = {
            name:1,
            pic:1,
            price:1,
            rating:1
        }
        const products = await ProductModel.find({},projection).limit(limit).skip(skip);
        return res.status(200).json({
            data: { products },
            code: 200,
            message: 'Fetched all products',
        });
    } catch(err) {
        console.log(err);
        return res.status(200).json({
            data: {},
            code: 200,
            message: 'something went wrong',
        });
    }
}

async function getProductDetail(req,res){
    try{
        console.log('getting product detail');
        const { productId } = req.query;
        const product = await ProductModel.findOne({ _id: productId });
        if(!product){
            return res.status(200).json({
                data: { },
                code: 400,
                message: 'Invalid product id',
            }); 
        }
        return res.status(200).json({
            data: { product },
            code: 200,
            message: 'Fetched all products',
        });
    } catch(err) {
        console.log(err);
        return res.status(200).json({
            data: {},
            code: 200,
            message: 'something went wrong',
        });
    }
}

async function createNewProduct(req,res){
    try{
        console.log('create new product');
        const {name, description, price, stock, pic } = req.body;
        const product = new ProductModel({
            name,
            description,
            price,
            stock,
            pic,
        });
        await product.save();
        return res.status(201).json({
            data:{ product },
            code: 201,
            message: 'New product created successfully'
        });
    } catch(err) {
        console.log(err);
        return res.status(200).json({
            data: {},
            code: 200,
            message: 'something went wrong',
        });
    }
}

async function editProduct(req,res){
    try{
        console.log('edit product');
        const { productId } = req.body;
        const product = await ProductModel.findOne({ _id: productId });
        if(!product){
            return res.status(200).json({
                data: {},
                code: 400,
                message: 'Invalid product id',
            }); 
        }
        const updateObj = {
            ...req.body
        };
        delete updateObj.productId;
        const updateProduct = await ProductModel.updateOne({
            _id: productId  
        },{
            $set: updateObj
        });
        return res.status(201).json({
            data:{ updateProduct },
            code: 201,
            message: 'New product created successfully'
        });
    } catch(err) {
        console.log(err);
        return res.status(200).json({
            data: {},
            code: 200,
            message: 'something went wrong',
        });
    }
}

async function deleteProduct(req,res){
    try{
        console.log('getting product detail');
        const { productId } = req.query;
        const product = await ProductModel.findOne({ _id: productId });
        if(!product){
            return res.status(200).json({
                data: {},
                code: 400,
                message: 'Invalid product id',
            }); 
        }
        await ProductModel.deleteOne({ _id: productId });
        return res.status(200).json({
            data: {},
            code: 200,
            message: 'product delete Successfully',
        });
    } catch(err) {
        console.log(err);
        return res.status(200).json({
            data: {},
            code: 400,
            message: 'something went wrong',
        });
    }
}

module.exports = {
    getAllproducts,
    getProductDetail,
    createNewProduct,
    editProduct,
    deleteProduct
}