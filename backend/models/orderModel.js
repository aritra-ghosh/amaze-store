const Mongoose = require("mongoose");

const OrderSchema = new Mongoose.Schema({
    products: [
        {
            product: { type: Object, required: true },
            quantity: { type: Number, required: true }
        }
    ],
    useName: {
        type: String
    },
    userEmail: {
        type: String,
        required: true
    },
    userPhone: {
        type: String,
        required: true
    },
    billingAddress: {
        type: String,
        required: true,

    },
    billingPincode: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });

OrderSchema.methods.addToProducts = function (product, quantity) {
    const updatedProducts = this.products;
    updatedProducts.push({
        product: product._id,
        quantity: quantity
    });
    this.product = updatedProducts;
    this.save();
}

const Order = Mongoose.model("Order", OrderSchema);
module.exports = Order;