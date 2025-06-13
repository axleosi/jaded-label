const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes/users.js');
const orderRouter = require('./routes/orders.js');
const productRouter = require('./routes/products.js');
const cartRouter = require('./routes/cart.js');
const collectionRouter = require('./routes/collections.js');
const categoryRouter = require('./routes/category.js');
const adminRouter =require ('./routes/admin.js')
const cors = require('cors');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(cors({
  origin: 'https://jaded-label.vercel.app',
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  credentials: true,
}));

// Connect to MongoDB
const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log('Database connected');
    });

    await mongoose.connect(`${MONGO_URI}/nodetest`);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Connection error:', error);
  }
};

(async () => {
  await connectDB();

  // Register routes
  app.use('/api', router);
  app.use('/api', orderRouter);
  app.use('/api', productRouter);
  app.use('/api', cartRouter);
  app.use('/api', collectionRouter);
  app.use('/api', categoryRouter);
  app.use('/api', adminRouter);

  app.get('/', (req, res) => {
    res.send('Hello world');
  });

  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
})();
