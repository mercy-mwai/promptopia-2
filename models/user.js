import { Schema,model,models } from "mongoose";


const UserSchema=new Schema({
    email:{
        type: String,
        unique:[true,'email already exist!'],
        required:[true, 'email is required!']
    },
    username:{
        type: String,
        required:[true, 'username is required!'],
        match:[/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image:{
        type:String
    }
})

const User= models.user || model("user", UserSchema);

export default User;