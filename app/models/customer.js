const mongoose=require('mongoose')

const Schema=mongoose.Schema

const customerSchema=new Schema({
    name:{
         type:String,
         required:true
    },
    email:{
        type:String,
    },
    mobile:{
        type:String,

    }
})

const Customer=mongoose.model('Customer',customerSchema)

module.exports=Customer
