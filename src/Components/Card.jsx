import React from 'react';

function Card({ children }) {
    return (
        <div
            style={{
                padding: '25px',
                margin: '15px 5px',
                background: 'white',
                borderRadius: '3px',
                textAlign: 'center',
                width: '200px'
            }}
        >
            Masai Student {children}
        </div>
    );
}

export default React.memo(Card);
