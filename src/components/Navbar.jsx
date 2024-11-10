"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { useRouter } from 'next/router';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const session = useSession();
    console.log(session);
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
                {
                    session.status === "authenticated" ? <Link href="/api/auth/signin"><button onClick={handler} className='bg-slate-600 p-2'>Login</button></Link> : <Link href="/api/auth/signin"><button onClick={handler} className='bg-slate-600 p-2'>Log Out</button></Link>
                }
            </div>
            <div className='flex justify-between items-center gap-4'>
                <Image className='rounded-full' width={30} height={30} alt={session?.data?.user?.name} src={session?.data?.user?.image} />
                <div>
                    <h6>{session?.data?.user?.name}</h6>
                    <h6>{session?.data?.user?.type}</h6>
                </div>
            </div>
        </div>
    );
};

export default Navbar;