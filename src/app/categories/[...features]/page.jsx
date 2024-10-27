import React from 'react';

const page = ({ params }) => {
    console.log({ params });
    if (params.features.length == 3)
        return <div>{params.features[2]}</div>
    if (params.features.length == 2)
        return <div>{params.features[1]}</div>
    if (params.features.length == 1)
        return <div>{params.features[0]}</div>
};

export default page;