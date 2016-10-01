import React from 'react';

export class MyH1 extends React.Component {

    render(){return <h1> Now You See It! :) </h1>}

    componentWillUnmount(){
        console.log(`now you don't`);
    }
}
