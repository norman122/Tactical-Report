import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (username === 'admin' && password === 'password') {
            localStorage.setItem('user', JSON.stringify({ username }));
            localStorage.setItem("authenticated", "true");
            router.push('/home');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
            </Head>
            <div className="flex items-center justify-center min-h-screen bg-gray-200">
                <div className="main bg-white rounded-lg shadow-md p-10 transition-transform w-96 text-center">
                    <h1 className="text-green-600 text-3xl">Tactical Report</h1>
                    <h3 className="text-lg">Enter your login credentials</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username" className="block mt-4 mb-2 text-left text-gray-700 font-bold">Username:</label>
                        <input type="text" id="username" name="username" placeholder="Enter your Username" className="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400" value={username} onChange={(e) => setUsername(e.target.value)} required />

                        <label htmlFor="password" className="block mb-2 text-left text-gray-700 font-bold">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter your Password" className="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400" value={password} onChange={(e) => setPassword(e.target.value)} required />

                        <div className="flex justify-center items-center">
                            <button type="submit" className="bg-green-600 text-white py-3 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-green-500">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
