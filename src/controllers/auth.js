import Users from '../models/users'
export const register = async (req, res) => {
    try {
       const user = await new Users(req.body).save()
       res.json(user);
    }
    catch(error){
        res.status(400).json({
            error:"Khong thanh cong"
        })
    }
   }
export const login = async (req, res) => {
    try {
    const user = await Users.findOne({ email : req.body.email, password : req.body.password}).exec()
    res.json(user)
    } catch (error) {
        res.status(400).json({
            error:"Khong thanh cong"
        }
        )
    }
}