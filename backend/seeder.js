import mongoose from 'mongoose';
import dotenv from 'dotenv';

import products from './data/products.js';
import Product from './models/Product.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
  console.log('MongoDB Connected');

  try {
    await Product.deleteMany();

    await Product.insertMany(products);

    console.log('Products Imported Successfully');

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
});