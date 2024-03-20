'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Dashboard() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/users`, { cache: 'no-store' });
                const data = await res.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-around p-24">
            <h1>Mon Dashboard</h1>
            {userData && (
                <div>
                    {userData.map(user => (
                        <div key={user.id}>
                            <span>Nom: {user.name} / </span>
                            <span>Age: {user.age}</span>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}
