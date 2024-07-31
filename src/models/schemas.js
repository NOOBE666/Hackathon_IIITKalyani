import mongoose from "mongoose";

export const userSchema= new mongoose.Schema({
    number:{
        type:Number,
        required:true,
        unique:true,
        min:1000000000,
        max:9999999999
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/.+\@.+\../,"Wrong E-mail"]
    },
    password:{
        type:String,
        validator:{
            function (value) {
                return /^(?=.*[!@$%&*])[a-zA-Z\d!@$%&*]{8,12}$/.test(value)
            },
            message:"Password needs to be between 8-12 length"
        }
    },
});

export const businessSchema= new mongoose.Schema({
    number:{type:Number,
        required:true,
        unique:true,
        min:1000000000,
        max:9999999999
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/.+\@.+\../,"Wrong E-mail"]
    },
    password:{
        type:String,
        validator:{
            function (value) {
                return /^(?=.*[!@$%&*])[a-zA-Z\d!@$%&*]{8,12}$/.test(value)
            },
            message:"Password needs to be between 8-12 length"
        }
    },
    busnumber:{
        type:String,
        required:true,
        unique:true
    },
    location:{
        lat:{type:Number,required:false},
        lng:{type:Number,required:false}
    }
})