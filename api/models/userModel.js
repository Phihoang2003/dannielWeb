import mongoose from "mongoose";
import bcrypt from "bcrypt"

import crypto from "crypto"
var userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    mobile:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:"user"
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    cart:{
        type:Array,
        default:[]
    },
    address:{
        type:String
    },
    wishlist:[{type:mongoose.Schema.ObjectId,ref:"Product"}],
    refreshToken:{
        type:String
    },
    passwordChangedAt:Date,
    passwordResetToken:String,
    passwordResetExpires:Date,

},{
    timestamps:true
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }

    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next();
})

userSchema.methods.isPasswordMatched=async function(enteredPassword){
    return bcrypt.compare(enteredPassword,this.password)
}

userSchema.methods.createPasswordResetToken=async function(){
    const resetToken=crypto.randomBytes(32).toString("hex");
    this.passwordResetToken=crypto.createHash("sha256").update(resetToken).digest("hex");
    this.passwordResetExpires=Date.now()+30*60*1000 //10 minutes
    return resetToken;
}
export default mongoose.model("User",userSchema);