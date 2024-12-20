import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch('http://localhost:8080/api/items', {
            method: req.method,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to backend' });
    }
}
