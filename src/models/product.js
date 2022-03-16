import mongoose,{Schema} from "mongoose";
const ProductSchema = new Schema({
    name :{
        type : String,
        minLength : 5,
        required : true,
        unique : true
    },
    price :{
        type : Number,
        required : true
    }
},{timestamps: true})
export default  mongoose.model('Product',ProductSchema)