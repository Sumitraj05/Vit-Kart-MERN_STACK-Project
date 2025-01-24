const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);

const data1 = {
    name: "Designer Handbag1",
    company: "64c23350e32f4a51b19b23a",
    price: 3466,
    colors: ["#000000", "#cc6600", "#663300"],
    image: "/images/product-handbag.png",
    category: "64c234de32f4a51b19b9250",
    isFeatured: true,
};

async function main() {
    try {
        await client.connect();
        const db = client.db("shop");
        const collection = db.collection("products");
        await collection.insertOne(data1);
        const data = await collection.find({ price: { $eq: 3466 } }).toArray();
        console.log(data);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

main()
    .then(() => console.log("done"))
    .catch((e) => console.log(e));
