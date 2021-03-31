import { Component } from "react";
import MyTextInput from "../mycomponents/MyTextInput";
import MyButton from "../mycomponents/MyButton";

class TextInputDemo extends Component{
    state ={
        username: "satish",
        password: "satish"
    };

    onChangeHandler = (event) =>{
        console.log("onChangeHandler");
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmiHandler = (event) =>{
        event.preventDefault();
        console.log("onSubmiHandler");
        const {username,password} = this.state;
        console.log(username);
        console.log(password);

        //Do the validations
        //Make Call to Server
        //Form Reset
        this.setState({
            username:"",
            password:""
        });
    };

    render(){
        const {username,password} = this.state;

        return(
            <div className="card-body container col-md-6">
                <h3 className="text-center">InputTextDemo</h3>
                <form onSubmit = {this.onSubmiHandler}>
                    <MyTextInput 
                        myname ="username"
                        mylabel ="Username"
                        myvalue = {username}
                        myOnChange = {this.onChangeHandler}
                    />
                    <MyTextInput 
                        myname ="password"
                        mylabel ="Password"
                        myvalue = {password}
                        myOnChange = {this.onChangeHandler}
                    />
                  <MyButton myvalue = "Submit Now"/>
                </form>
            </div>
        );
    }
}
export default TextInputDemo;