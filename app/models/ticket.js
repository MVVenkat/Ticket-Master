const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    message: {
        type: String,
    },
    priority: {
        type: String,

    },
    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department'
    },
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    },
    ticketCode: {
        type: String,
    },
    isCompleted: {
        type: String,
        default: false
    },
    createAt: {
        type: Date,
        default: Date.now()
    }

})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket

