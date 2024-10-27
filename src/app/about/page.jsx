import AboutContent from '@/components/AboutContent';
import React from 'react';

const getTime = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}time`, { cache: 'no-store', next: { revalidate: 5 } });
    // const res = await fetch('http://localhost:3000/time', { cache: 'no-store' });
    const data = await res.json();
    return data.currentTime;
}

const page = async () => {
    const currentTime = await getTime();
    return (
        <div className='text-center p-8'>
            <h6>Time: {currentTime}</h6>
            <AboutContent></AboutContent>
        </div>
    );
};

export default page;