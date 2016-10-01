import {MyButton} from './my-button'
import {MyH1} from './my-h1'
import {Counter} from './counter'
import {MyInput} from './my-input'
import  {Link} from 'react-router';

export class Root extends React.Component {

    constructor(){
        super();

        this.state = {
            isH1Shown: true,
            counter: 1,
            inputValue: ''
        }

        this.toggleH1 = this.toggleH1.bind(this);
        this.renderH1 = this.renderH1.bind(this);
        this.incCounter = this.incCounter.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }

    toggleH1(){
        this.setState({
            isH1Shown: !this.state.isH1Shown
        })

    }

    renderH1(){
        return this.state.isH1Shown ? <MyH1 /> : null;
    }

    incCounter(){
        this.setState({
            counter: this.state.counter +1
        })
    }

    updateInput(e){
        this.setState({
            inputValue: e.target.value,
            targetInputElm: e.target

        })

    }


    render() {
        return (
            <div>
                <MyButton clickHandler = {this.toggleH1} >Toggle My-H1</MyButton>
                {this.renderH1()}
                <MyButton clickHandler = {this.incCounter} />
                <Counter val = {this.state.counter}/>
                <MyInput val = {this.state.inputValue} updateInput = {this.updateInput}  targetElm = {this.state.targetInputElm} />
                <MyInput val = {this.state.inputValue} updateInput = {this.updateInput}  targetElm = {this.state.targetInputElm} />
                <MyInput val = {this.state.inputValue} updateInput = {this.updateInput}  targetElm = {this.state.targetInputElm}/>
                {this.props.children}
                <ul>
                    <li>
                        <Link to="/tab1" activeStyle = {{background: 'red'}} >
                            Tab1
                        </Link>
                    </li>
                    <li>
                        <Link to="/tab2" activeStyle = {{background: 'red'}} >
                            Tab2
                        </Link>

                    </li>
                </ul>
            </div>

        )
    }
}

