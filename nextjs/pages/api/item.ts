import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    try {
        const response = await fetch(`http://localhost:8080/api/items/${id}`, {
            method: req.method,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Error connecting to backend');
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
    }
}
