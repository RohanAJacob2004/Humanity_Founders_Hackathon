export default async function handler(req, res) {
    if (req.method !== 'GET') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    try {
      const token = req.headers.authorization.split(' ')[1];
      const loginResponse = await fetch('http://34.10.166.233/campaigns/get-all-campaigns', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      const data = await loginResponse.text(); // try to get raw text in case it's not JSON
  
      let parsed;
      try {
        parsed = JSON.parse(data);
      } catch {
        parsed = { message: data };
      }
  
      res.status(loginResponse.status).json(parsed);
    } catch (err) {
      console.error('Proxy login error:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }