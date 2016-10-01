import React from 'react';


export class Counter extends React.Component{

    componentWillReceiveProps(nextProps){
        nextProps.val>this.props.val ? console.log(`counter increased from ${this.props.val} to ${nextProps.val}`): console.log(`counter hasn't changed`)
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.val % 5 === 0;
    }

    render(){return <h2>{this.props.val}</h2>}
};



Counter.propTypes ={
    val: React.PropTypes.number.isRequired
}

Counter.defaultProps = {
    val: 1
}