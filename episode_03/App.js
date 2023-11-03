import React from 'react';
import ReactDOM from 'react-dom';

const Title = () => {
    return(
        <h1>Hello World!</h1>
    )
}

const HeadingComponent = () => {
    return (
    <div>
        <Title />
        <h1 className='heading'>
            I am learning React
        </h1>
    </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);





















