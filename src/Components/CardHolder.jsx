import React, { useState } from 'react';
import Card from './Card';

function throttle() {}

function CardHolder() {
    const [data, setData] = useState(25);

    const handleScroll = (e) => {
        if (
            e.target.scrollHeight -
                e.target.scrollTop -
                e.target.clientHeight ===
            0
        ) {
            setData((prevState) => prevState + 25);
        }
    };

    return (
        <div
            style={{
                width: 'max-content',
                padding: '15px',
                margin: '5rem auto',
                border: '4px solid red',
                borderRadius: '5px',
                background: '#e4e4e4',
                overflowY: 'auto',
                height: '500px'
            }}
            onScroll={handleScroll}
        >
            {new Array(data)
                .fill(0)
                .map((ele, index) => index + 1)
                .map((ele) => (
                    <Card key={ele}>{ele}</Card>
                ))}
        </div>
    );
}

export default CardHolder;
