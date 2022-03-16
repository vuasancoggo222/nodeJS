import mongoose,{Schema} from "mongoose";
const UsersSchema = new Schema({
    email :{
        type : String,
        minLength : 10,
        required : true,
        unique : true
    },
     password :{
        type: String,
        minLength : 8,
        required : true,
     },
     username :{
         type: String,
         minLength :5,
     }
   
},{timestamps: true})
export default  mongoose.model('Users',UsersSchema)