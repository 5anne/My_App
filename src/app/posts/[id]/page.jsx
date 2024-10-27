import React from 'react';

const postDetailsData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}

export const generateMetadata = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const postData = await res.json();
    return {
        title: {
            absolute: `${postData.title}`
        },
        description: postData.body,
        keywords: postData.body.split(' ')
    }
}

const page = async ({ params }) => {
    const { title, body } = await postDetailsData(params.id);
    return (
        <div>
            <h6>{title}</h6>
            <h6>{body}</h6>
        </div>
    );
};

export default page;