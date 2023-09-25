const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const orderSchema = new Schema({

    ordername :{

        type : String,
        required:true
    },

    orderID :{

        type:String,
        required:true
    },

    orderdate :{

        type:String,
        required:true
    },

    customername :{

        type:String,
        required:true
    },

    quantity :{

        type:String,
        required:true
    }


})

const order = mongoose.model("order",orderSchema);

module.exports = order;

