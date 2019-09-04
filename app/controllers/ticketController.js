const Ticket = require('../models/ticket')

module.exports.create = (req, res) => {
    const data = req.body
    const ticket = new Ticket(data)
    ticket.save()
        .then((ticket) => {
            res.json(ticket)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.list = (req, res) => {
    Ticket.find().populate("customer").populate("department").populate("employee")
        // Ticket.find().populate({ path: 'employee', populate: { path: 'department' } }).populate("customer").populate("department")
        .then((ticket) => {
            res.json(ticket)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Ticket.findById(id).populate('department').populate('employee').populate('customer')
        .then((ticket) => {
            res.json(ticket)
        })
        .catch((err) => {
            res.json(err)
        })
}


module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body

    Ticket.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })
        .then((ticket) => {
            res.json(ticket)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Ticket.findByIdAndDelete(id)
        .then((ticket) => {
            res.json(ticket)
        })
        .catch((err) => {
            res.json(err)
        })
}
