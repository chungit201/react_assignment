const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const slugify = require('../utils/slugify')
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxLength: 255
    },
    slug: {
        type: String
    },
    categories: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
    },
    img:{
        type:String
    },
    price:{
        type:Number,
        maxlength:32
    },
  
    description:{
        type:String,
        maxlength:400
    },
    status:{
        type:Boolean,
        default:false
    },
    quantity:{
        type:Number
    },
    shipping:{
        type:Boolean,
    },

},{timestamps: true});

productSchema.plugin(toJSON);
productSchema.plugin(paginate);

productSchema.statics.slugGenerator = async function(productName) {
    let newSlug = slugify(productName);
    let count = 0;
    while (await this.exists({slug: newSlug})) {
        newSlug = `${slugify(productName)}_${++count}`;
    }
    return newSlug;
};
productSchema.statics.statusGenerator = async function(statusName) {
    let newStatus = statusName;
    while (await this.exists({status: newStatus})) {
        newStatus = statusName;
    }
    return statusName;
};
productSchema.pre('save', async function (next) {
    const product = this;
    if (product.isModified("name")) {
        product.slug = await Product.slugGenerator(product.name);
    }
    if(product.isModified('quantity')){
        if(product.quantity <=0){
            product.status = false;
        }else{
            product.status = true;
        }
    }
    next();
});
const  Product = mongoose.model('Product',productSchema)
module.exports = Product