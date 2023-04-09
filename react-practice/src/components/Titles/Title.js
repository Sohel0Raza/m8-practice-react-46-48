import React from 'react';
import './Title.css'

const Title = (props) => {
    const {id, title} =props.title
    return (
        <div className='title'>
            <h4>ID-{id}</h4>
            <p>Title: {title}</p>
        </div>
    );
};

export default Title;