
import withAuth from "../components/withAuth";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Home = () => {
    const router = useRouter();
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch('/api/items')
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => setError(err.message));
    }, []);

    if (error) {
        return (
            <div>
                <h1>Error Loading Items</h1>
                <p>Unable to load items. Please try again later.</p>
            </div>
        );
    }

    const handleItemClick = (id: string) => {
        fetch(`/api/item?id=${id}`)
            .then((res1) => res1.json())
            .then((data1) => setItem(data1))
            .catch((err1) => setError(err1.message));
    }

    return (
        <>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
        </Head>
        <div className="bg-gray-200 min-h-screen">
            <div className="p-4 mr-20 ml-20">
            <div className="flex justify-between items-center">
                <div></div>
                <h1 className="text-center text-2xl text-green-700 mb-4">Items</h1>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded mb-4" onClick={() => router.push('/add-item')}>
                    Add Item
                </button>
            </div>
            <table className="table-auto w-full bg-white border border-gray-300">
                <thead className="bg-green-500 text-white">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item['id']} className="hover:bg-green-100">
                            <td className="border border-gray-300 px-4 py-2 cursor-pointer text-center" onClick={() => handleItemClick(item['id'])}>{item['id']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {item && (
                <table className="table-auto w-full bg-white border border-gray-300 mt-10">
                <thead className="bg-green-500 text-white">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 text-center">{item['name']}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{item['description']}</td>
                    </tr>
                </tbody>
            </table>
            )}
            </div>
        </div>
        </>
    );
}

export default withAuth(Home);