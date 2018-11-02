import React from 'react';

//color array code
const colorArray = [ 
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "brow",
    "white",
    "purple",
    "#000"
]


//create class
class ColorPlay extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            color: "hotpink"
        };
    }

    // this component will be rendered first
    componentDidMount() {
        //make variable for colorPos
        let colorPos = 0;
        setInterval(() => {
            if(colorArray.length - 1 > colorPos) {
                this.setState({
                    color: colorArray[colorPos]
                });
                colorPos++
            } else{

            }
        }, 1000); //the color will change in 1000 ms
    }

    //function for button toggle
    toggleColor() {
        if(this.state.color === "hotpink") { //if state color equal hotpink
            this.setState({ // the state will change in this code
                color:"yellow"
            });
        } else { 
            this.setState({
                color:"hotpink"
            });
        }
    }

    changeColor(event) {  //event fungction
        this.setState({
            color:event.target.value
        })
    }

    render() { //will be render here
        console.log(this.state) //to check the state data
        const styleObj = { //this examle for style
            backgroundColor: this.state.color 
        }

        console.log(this.props.name); //too check the props name
        return( //will show in your browser
            <section style={styleObj}> // from const 
                <h2 onClick={this.toggleColor.bind(this)}> //function click
                    { this.state.color }
                </h2>
                <input value={this.state.color} onChange={this.changeColor.bind(this)}/> //input and the data will change automaticly
            </section>
        )
    }
}

export default ColorPlay;