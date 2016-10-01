import React from 'react';



export class MyInput extends React.Component{

    constructor(){
        super();
        this.state = {
            disabled: false
        }
    }

    componentWillReceiveProps(nextProps){

        //this next if condition is what disables only the inputs which are not focused
        if(!(nextProps.targetElm === this.refs.inp)){
            this.setState({
                disabled: true
            })
            setTimeout(()=> {
                this.setState({disabled: false})
            }, 1000);
        }

    }
    
    render(){return (
        <div>
            <input ref="inp" type="text" value={this.props.val} onChange = {this.props.updateInput} disabled = {this.state.disabled}/>
        </div>
    )}
};



MyInput.propTypes ={
    val: React.PropTypes.string.isRequired,
    updateInput: React.PropTypes.func
}

MyInput.defaultProps = {
    val: ''
}