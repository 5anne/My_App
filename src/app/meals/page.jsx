import Meals from '@/components/Meals';
import React from 'react';

const page = () => {
    return (
        <div className='my-10'>
            <h6 className='text-center font-bold'>Choose your meals!</h6>
            <Meals></Meals>
        </div>
    );
};

export default page;