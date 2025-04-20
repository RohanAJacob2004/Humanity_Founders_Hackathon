import clientPromise from './lib/mongodb.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { email, password } = req.body;

  const client = await clientPromise;
  const db = client.db('tve23cs118');
  const users = db.collection('users');

  const user = await users.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const userName = user.email;
  res.status(200).json({ token: 'fake-jwt-token', userName });
}