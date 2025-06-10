import axios from 'axios';

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODE3NWFmYTNiMmY2NjY1ZGM3YWY0OTQiLCJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJpYXQiOjE3NDc3NzU0NTAsImV4cCI6MTc0Nzc3OTA1MH0.CSQPvObbuDbNeHIxpWsUsdmDNp6fuVL4gAI8UrcDG8c"; // 🔒 Replace with your JWT

const products = [
  { name: "Product 1", description: "Description 1", price: 10.99, imageUrl: "https://dimg04.c-ctrip.com/images/02Y5r120009zkfyt76298_R_1080_808_Q90.jpg", stock: 20 },
  { name: "Product 2", description: "Description 2", price: 20.99, imageUrl: "https://dimg04.c-ctrip.com/images/02Y5r120009zkfyt76298_R_1080_808_Q90.jpg", stock: 15 },
  { name: "Product 3", description: "Description 3", price: 15.49, imageUrl: "https://a.1stdibscdn.com/image3.jpg", stock: 30 },
  { name: "Product 4", description: "Description 4", price: 5.99, imageUrl: "https://a.1stdibscdn.com/image4.jpg", stock: 50 },
  { name: "Product 5", description: "Description 5", price: 8.75, imageUrl: "https://th.bing.com/image5.jpg", stock: 25 },
  { name: "Product 6", description: "Description 6", price: 12.00, imageUrl: "https://th.bing.com/image6.jpg", stock: 10 },
  { name: "Product 7", description: "Description 7", price: 9.99, imageUrl: "https://th.bing.com/image7.jpg", stock: 18 },
  { name: "Product 8", description: "Description 8", price: 17.50, imageUrl: "https://th.bing.com/image8.jpg", stock: 12 },
  { name: "Product 9", description: "Description 9", price: 22.99, imageUrl: "https://th.bing.com/image9.jpg", stock: 7 },
  { name: "Product 10", description: "Description 10", price: 19.95, imageUrl: "https://th.bing.com/image10.jpg", stock: 14 },
  { name: "Product 11", description: "Description 11", price: 13.30, imageUrl: "https://th.bing.com/image11.jpg", stock: 6 },
  { name: "Product 12", description: "Description 12", price: 16.00, imageUrl: "https://th.bing.com/image12.jpg", stock: 28 },
  { name: "Product 13", description: "Description 13", price: 11.45, imageUrl: "https://th.bing.com/image13.jpg", stock: 22 },
  { name: "Product 14", description: "Description 14", price: 6.99, imageUrl: "https://th.bing.com/image14.jpg", stock: 33 },
  { name: "Product 15", description: "Description 15", price: 14.25, imageUrl: "https://th.bing.com/image15.jpg", stock: 19 },
  { name: "Product 16", description: "Description 16", price: 24.99, imageUrl: "https://th.bing.com/image16.jpg", stock: 8 },
  { name: "Product 17", description: "Description 17", price: 21.50, imageUrl: "https://th.bing.com/image17.jpg", stock: 16 },
  { name: "Product 18", description: "Description 18", price: 18.75, imageUrl: "https://th.bing.com/image18.jpg", stock: 11 },
  { name: "Product 19", description: "Description 19", price: 7.45, imageUrl: "https://th.bing.com/image19.jpg", stock: 29 },
  { name: "Product 20", description: "Description 20", price: 23.99, imageUrl: "https://th.bing.com/image20.jpg", stock: 4 },
  { name: "Product 21", description: "Description 21", price: 9.80, imageUrl: "https://th.bing.com/image21.jpg", stock: 13 },
  { name: "Product 22", description: "Description 22", price: 8.40, imageUrl: "https://th.bing.com/image22.jpg", stock: 21 },
  { name: "Product 23", description: "Description 23", price: 10.10, imageUrl: "https://th.bing.com/image23.jpg", stock: 17 },
  { name: "Product 24", description: "Description 24", price: 12.99, imageUrl: "https://th.bing.com/image24.jpg", stock: 35 },
  { name: "Product 25", description: "Description 25", price: 14.75, imageUrl: "https://th.bing.com/image25.jpg", stock: 9 },
  { name: "Product 26", description: "Description 26", price: 20.00, imageUrl: "https://th.bing.com/image26.jpg", stock: 40 },
  { name: "Product 27", description: "Description 27", price: 25.50, imageUrl: "https://th.bing.com/image27.jpg", stock: 3 },
  { name: "Product 28", description: "Description 28", price: 19.00, imageUrl: "https://th.bing.com/image28.jpg", stock: 5 },
  { name: "Product 29", description: "Description 29", price: 6.49, imageUrl: "https://th.bing.com/image29.jpg", stock: 24 },
  { name: "Product 30", description: "Description 30", price: 17.25, imageUrl: "https://th.bing.com/image30.jpg", stock: 38 }
];

// --- Helper: Fetch all collections ---
async function getCollections() {
  const res = await axios.get('http://localhost:3000/api/collections', {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  });
  return res.data;
}

// --- Helper: Fetch all categories ---
async function getCategories() {
  const res = await axios.get('http://localhost:3000/api/category', {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  });
  return res.data;
}

// --- Helper: Pick 1–2 random collections ---
function getRandomCollections(collections) {
  const shuffled = [...collections].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * 2) + 1).map(c => c._id);
}

// --- Helper: Pick 1 random category ---
function getRandomCategory(categories) {
  const index = Math.floor(Math.random() * categories.length);
  return categories[index]._id;
}

// --- Main seeding function ---
async function seedProducts() {
  try {
    const [collections, categories] = await Promise.all([
      getCollections(),
      getCategories()
    ]);

    if (!collections.length) {
      console.error('❌ No collections found.');
      return;
    }

    if (!categories.length) {
      console.error('❌ No categories found.');
      return;
    }

    for (const product of products) {
      const collectionIds = getRandomCollections(collections);
      const categoryId = getRandomCategory(categories);

      const payload = {
        ...product,
        collections: collectionIds,
        category: categoryId
      };

      try {
        const res = await axios.post('http://localhost:3000/api/product', payload, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json',
          },
        });
        console.log(`✅ Created: ${res.data.name || res.data.product?.name}`);
      } catch (err) {
        console.error(`❌ Failed to create ${product.name}:`, err.response?.data || err.message);
      }
    }
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

seedProducts();
