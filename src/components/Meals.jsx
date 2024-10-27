'use client'
import React, { useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);

    const loadData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${search}`);
        const data = await res.json();
        console.log(data);
        setMeals(data);
    }

    const handler = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className='flex justify-center items-center'>
            <input onChange={handler} className='bg-gray-500 border-transparent text-white p-3' type="text" placeholder='Search Meal...' />
            <button onClick={() => loadData()} className='btn'>Search</button>
            <div className='grid grid-cols-4 gap-8 p-4'>
                {
                    meals?.map(meal =>
                        <div key={meal.id} className='border-2 p-4'>
                            <h6>Title: {meal.title}</h6>
                            <h6>Description: {meal.body}</h6>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Meals;