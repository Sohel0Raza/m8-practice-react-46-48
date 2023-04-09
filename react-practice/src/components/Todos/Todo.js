import React, { useEffect, useState } from 'react';
import Title from '../Titles/Title';
import './Todo.css'

const Todo = () => {
    const [titles, setTitle] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data =>setTitle((data)))
    },[])
    return (
        <div>
            <h4>All Title</h4>
            <div className='title-container'>
                {titles.map(title =><Title 
                title={title}
                key={title.id}
                ></Title>)}
            </div>
        </div>
    );
};

export default Todo;