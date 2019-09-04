const Employee = require('../models/employee')

module.exports.create = (req, res) => {
    const data = req.body
    const employee = new Employee(data)
    employee.save()
        .then((employee) => {
            res.json(employee)
        })
        .catch((err) => {
            res.json(err)
        })
}

//localhost:3005/employees?department=5d11fe8d4cbfb6174c869b9b

module.exports.list = (req, res) => {
    // if (req.query.department) {
    //     Employee.find({ department: req.query.department }).populate('department')
    //         .then((employee) => {
    //             res.json(employee)
    //         })
    //         .catch((err) => {
    //             res.json(err)
    //         })
    // } else {
    Employee.find().populate('department')
        .then((employee) => {
            res.json(employee)
        })
        .catch((err) => {
            res.json(err)
        })
}



module.exports.show = (req, res) => {
    const id = req.params.id
    Employee.findById(id).populate('department')
        .then((employee) => {
            res.json(employee)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.showDepartmentWise = (req, res) => {
    const id = req.params.id
    Employee.find({ department: id }).populate('department')
        .then((employee) => {
            res.json(employee)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body

    Employee.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })
        .then((employee) => {
            res.json(employee)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Employee.findByIdAndDelete(id)
        .then((employee) => {
            res.json(employee)
        })
        .catch((err) => {
            res.json(err)
        })
}
