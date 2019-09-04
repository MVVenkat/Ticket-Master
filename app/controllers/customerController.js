const Customer=require('../models/customer')

module.exports.create=(req,res)=>{
    const data=req.body
    const customer= new Customer(data)
    customer.save()
    .then((customer)=>{
        res.json(customer)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.list=(req,res)=>{
    Customer.find()
    .then((customer)=>{
        res.json(customer)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Customer.findById(id)
    .then((customer)=>{
        res.json(customer)
    })
    .catch((err)=>{
        res.json(err)
    })
}


module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body

    Customer.findByIdAndUpdate( id ,{$set:body}, { new: true, runValidators: true })
    .then((customer)=>{
        res.json(customer)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Customer.findByIdAndDelete(id)
    .then((customer)=>{
        res.json(customer)
    })
    .catch((err)=>{
        res.json(err)
    })
}
