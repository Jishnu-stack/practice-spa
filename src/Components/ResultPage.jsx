import React from 'react'

export default(props) => {
    return (
        <div style={{marginTop: '10px',minHeight: '250px',width: '400px'}}>
            {/* {JSON.stringify(props.data)} */}
            <div style={{display: 'inline-flex',marginTop: '6px',marginLeft: '8px'}}>
                <div width="30%">
                    <img src={`http://localhost:4000/uploads/${props.name}`} width="60px" height="60px" alt="kksdjfgkj" />
                </div>
                <div style={{marginLeft: '8px'}} width="70%">
                    <h3>{props.data}</h3>
                    <p style={{backgroundColor: '#b5b1af',marginRight: '8px'}}>Cancer Predictor.</p>
                </div>
            </div>
        </div>
    )
}