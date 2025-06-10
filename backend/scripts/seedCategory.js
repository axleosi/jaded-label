import axios from 'axios';

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODE3NWFmYTNiMmY2NjY1ZGM3YWY0OTQiLCJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJpYXQiOjE3NDc3NzU0NTAsImV4cCI6MTc0Nzc3OTA1MH0.CSQPvObbuDbNeHIxpWsUsdmDNp6fuVL4gAI8UrcDG8c"; // Use your valid JWT token

const categories = [
  { name: 'Gold' },
  { name: 'Moissanite' },
  { name: 'Natural Diamond' },
  { name: 'Lab Diamond' },
];

async function seedCategory() {
  for (const category of categories) {
    try {
      const res = await axios.post('http://localhost:3000/api/category', category, {
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

seedCategory();
