import React from 'react';

function button({title='onthing'}){
    return (
        <div>
            <button className='button'>{title} </button>
        </div>
    );
};

export default button;