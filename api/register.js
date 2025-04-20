import clientPromise from './lib/mongodb.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end('Method Not Allowed');
    }

    const { email, password } = req.body;

    const client = await clientPromise;
    const db = client.db('tve23cs118'); // use your db name
    const users = db.collection('users');

    const existingUser = await users.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // For real apps, hash the password!
    await users.insertOne({ email, password });

    res.status(201).json({ message: 'User registered successfully' });

}
