const mongoose = require("mongoose");
const uri = "mongodb+srv://sumitrajtiwari5:vitboysumit@cluster0.9ouq6gr.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);


// we need to create schema
const productSchema = new mongoose.Schema({
    name: String,
    company: String,
    price: Number,
    colors: [String],
    image: String,
    category: String,
    isFeatured: Boolean,
});

// we need to create an model
const Product = mongoose.model("Product", productSchema);

// 2nd step while inserting the data
const data1 = {
    name: "Designer Handbag1",
    company: "64c23350e32f4a51b19b23a",
    price: 2466,
    colors: ["#000000", "#cc6600", "#663300"],
    image: "/images/product-handbag.png",
    category: "64c234de32f4a51b19b9250",
    isFeatured: true,
};

async function main() {
    try {
        // 2: insert documents
        await Product.insertMany(data1);
        const data = await Product.find({ price: {$eq: 2466} });
        console.log(data);

        // 3 update querry
        const updateQuery = await Product.findOneAndUpdate(
            { name: "Designer Handbag2", price: 2466 },
            { $set: { price: 2499 } }
        );
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.connection.close();
    }
}

main();
