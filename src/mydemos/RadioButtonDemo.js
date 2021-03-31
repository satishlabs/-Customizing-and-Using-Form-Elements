import { Component } from "react";
import MyButton from "../mycomponents/MyButton";
import MyRadioButton from "../mycomponents/MyRadioButton";

class RadioButtonDemo extends Component{
    state = {
        gender : "",
    }
    onChangeHandler = (event) => { 
        console.log("onChangeHandler"); 
        this.setState({ 
        gender: event.target.value, 
        }); 
        }; 
        onSubmitHandler = (event) => { 
        event.preventDefault(); 
        console.log("onSubmitHandler"); 
        console.log(this.state.gender); 
        }; 
       
    render(){
        return(
            <div className="card-body container col-md-6">
                <h3 className="text-center">RadioButton Demo</h3>
                <form onSubmit="onSubmitHandler">
                    <div className="radio">
                        <MyRadioButton
                            mylable="Male"
                            myvalue="Male"
                            myname="gender"
                            mychecked={this.state.gender === "Male"}
                            myOnChange = {this.onChangeHandler}
                        />

                        <MyRadioButton
                            mylable="Female"
                            myvalue="Female"
                            myname="gender"
                            mychecked={this.state.gender === "Female"}
                            myOnChange = {this.onChangeHandler}
                        />
                        <MyButton myvalue="Submit Now"></MyButton>
                    </div>
                </form>
            </div>
        )
    }
};

export default RadioButtonDemo;