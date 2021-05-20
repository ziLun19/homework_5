import React from 'react';
import Button from '@material-ui/core/Button';

class CounterButton extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            counter:0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState({counter:this.state.counter + 1})
        console.log(this.state);
    }
    render() {
        var text = this.state.counter;
        return (
                <Button variant = "contained" color ="default" onClick={changeText,this.handleClick}>
                    你點了 {text} 次
                </Button>
        );
    }
}

const changeText=(event)=>{
    console.log(event.target)
    event.target.innerText = event.target.innerText + "被點了"
}

const MultiButton=(num)=>{
    var output = [];
    for(let i = 1; i<num+1; i++)  
        output.push(<CounterButton />);
    return output;
}

export default MultiButton;