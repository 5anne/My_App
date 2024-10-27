"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { useRouter } from 'next/router';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    // const router = useRouter();

    const links = [
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        {
            title: 'Service',
            path: '/service'
        },
        {
            title: 'Blogs',
            path: '/blogs'
        },
        {
            title: 'Categories',
            path: '/categories'
        },
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
    ]

    const handler = () => {
        // router.push('/about');
    }

    if (pathName.includes('/userDashboard')) {
        return (
            <div className='bg-blue-950 text-white text-center p-2'>
                Admin Dashboard
            </div>
        )
    }

    return (
        <div className='bg-yellow-600 p-4 flex items-center justify-around'>
            <div className=''>
                <p>My <span className='text-red-900'>App</span></p>
            </div>
            <div className='flex gap-4'>
                {links.map((link) => <Link className={`${pathName === link.path && 'text-blue-700'}`} key={link.path} href={link.path}>{link.title}</Link>)}
            </div>
            <div>
                <button onClick={handler} className='bg-slate-600 p-2'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;