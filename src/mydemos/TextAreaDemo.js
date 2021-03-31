import { Component } from "react";
import MyButton from "../mycomponents/MyButton";
import MyTextArea from "../mycomponents/MyTextArea";

class TextAreaDemo extends Component{
    constructor(props){
        super(props);

        this.state = {
            remarks: "",
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        
    }
    onChangeHandler = (event) =>{
        console.log("onChangeHandler");
        this.setState({
            remarks :event.target.value,
        });
    };

    onSubmitHandler = (event) =>{
        event.preventDefault();
        console.log("onSubmitHandler");
        console.log(this.state.remarks);
        //Do the Validations
        //Make Call to Server
        //Form Reset
        this.setState({
            remarks:"",
        });
    };
    render(){
        const {remarks} = this.state;
        return(
            <div className="card-body container col-md-6">
                <h3 className="text-center">TextAreaDemo</h3>
                <form onSubmit={this.onSubmitHandler}>
                    <MyTextArea
                        mylabel="Remarks"
                        myvalue={remarks}
                        myOnChange ={this.onChangeHandler}
                    />
                    <MyButton myvalue="Submit Now"/>
                </form>
            </div>
        );
    }
}
export default TextAreaDemo;