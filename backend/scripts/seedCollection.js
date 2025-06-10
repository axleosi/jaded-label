import axios from 'axios';

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODE3NWFmYTNiMmY2NjY1ZGM3YWY0OTQiLCJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJpYXQiOjE3NDcxNzA0OTEsImV4cCI6MTc0NzE3NDA5MX0.6L4So3ZXtxsoqWXDkRJjLL4D80qWOR1C_fJ7fxP7jF0"; // Use your valid JWT token

const collections = [
  { name: 'Minimalist jewelry' },
  { name: 'Women' },
  { name: 'Men' },
  { name: 'Engagement' },
];

async function seedCollections() {
  for (const collection of collections) {
    try {
      const res = await axios.post('http://localhost:3000/api/collections', collection, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Created:', res.data.name);
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
    }
  }
}

seedCollections();
