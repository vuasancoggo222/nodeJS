import Category from "../models/category"
import Product from "../models/product"
export const create = async (req, res) => {
    try {
const category = await new Category(req.body).save();
res.json(category);
    }
    catch (err) {
res.status(400).json({
    "err":"Cannot add category"
})
    }
}
export const read = async (req, res) => {
    const condition = { _id : req.params.id}
    try {
        const category = await Category.findOne(condition).exec();
        const products = await Product.find({category}).select('-category').exec();
        res.json({
            category, products
        });
    } catch (error) {
        res.status(400).json({
            "error": error.message
        })
    }
}