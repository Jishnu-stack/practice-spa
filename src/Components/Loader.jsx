import React from 'react'
import SpinnerImg from './spinner.gif';

export default () => {
    return(
        <div style={{ height: '100%', alignItems: 'center' ,background: 'rgb(28, 45, 37)', display: 'flex', justifyContent: 'center' }}>
            <img src={SpinnerImg} style={{height: '25%'}} />
        </div>
    )

}