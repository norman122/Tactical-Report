import { useState } from 'react';
import Head from 'next/head';
import router from 'next/router';
import withAuth from "../components/withAuth";

const AddItem = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        const item = { id, name, description };
        fetch('/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {throw new Error(err.message)});
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                router.push('/home');
            } else {
                    const modal = document.createElement('div');
                    Object.assign(modal.style, {
                    position: 'fixed',
                    top: '25%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: '#cccccc',
                    padding: '5em',
                    zIndex: '1000',
                    borderRadius: '10px',
                });
                modal.textContent = data.name;
                document.body.appendChild(modal);
            }
        });
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
                        <h1 className="text-center text-2xl text-green-700 mb-4">Add a new product</h1>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded mb-4" onClick={() => router.push('/home')}>
                            Home
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="table-auto w-full bg-white border border-gray-300">
                            <div className="px-4 py-2">
                                <label htmlFor="id" className="text-sm font-medium text-gray-900 dark:text-white">Product ID</label>
                                <input type="text" name="id" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product id" value={id} onChange={(e) => setId(e.target.value)} />
                            </div>
                            <div className="px-4 py-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="px-4 py-2">
                                <label htmlFor="description" className="text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>
                            <div className="flex justify-center mt-4 mb-4">
                                <button type="submit" className="bg-gray-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded" >
                                    Add product
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default withAuth(AddItem);
