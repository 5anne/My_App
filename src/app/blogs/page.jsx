import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            {data?.map((blog) => <div key={blog.slug} className='border-2 border-teal-950 p-4'>
                <h1>{blog.slug}</h1>
                <p>{blog.title}</p>
                <p>{blog.description}</p>
                <button className='bg-yellow-500 p-2'><Link href={`/blogs/${blog.slug}`}>View Details</Link></button>
            </div>)}
        </div>
    );
};

const data = [
    {
        slug: 'blog-post-1',
        title: 'My First Blog Post',
        description: 'This is the first post on my new blog. I am excited to share my thoughts and ideas with you.'
    },
    {
        slug: 'how-to-code',
        title: 'How to Code Like a Pro',
        description: 'Learn the fundamentals of coding and become a master programmer.'
    },
    {
        slug: 'travel-tips',
        title: 'Travel Tips for the Budget Traveler',
        description: 'Discover how to travel the world without breaking the bank.'
    },
    {
        slug: 'healthy-recipes',
        title: 'Delicious and Healthy Recipes',
        description: 'Cook up a storm with these easy-to-follow healthy recipes.'
    },
    {
        slug: 'productivity-hacks',
        title: 'Productivity Hacks to Boost Your Workflow',
        description: 'Learn how to get more done in less time with these productivity tips.'
    }
];

console.log(data);

export default page;