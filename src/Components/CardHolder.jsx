import React, { useState } from 'react';
import Card from './Card';
import './CardHolder.css'

function throttleWork(cb, time) {
    let throttle = null

    return () => {
        if (!throttle) {
            throttle = setTimeout(() => {
                cb()
                throttle = null
                console.log('updated')
            }, 5000)
        }
    }
}


function CardHolder() {
    const [data, setData] = useState(25);
    const [loading, setLoading] = useState(true)

    const setDataThrottle = throttleWork(() => {
        setData(prevState => prevState + 25)
        setLoading(false)
    }, 3000)

    const handleScroll = (e) => {
        if (
            e.target.scrollHeight -
            e.target.scrollTop -
            e.target.clientHeight ===
            0
        ) {
            setLoading(true)
            setDataThrottle()
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

            {loading && <div className='loading' ></div>}
        </div>
    );
}

export default CardHolder;
