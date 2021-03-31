import { Component } from "react";
import MyButton from "../mycomponents/MyButton";
import MySelectBox from "../mycomponents/MySelectBox";


class SelectBoxDemo extends Component{
    constructor(props){
        super(props);

        this.state = {
            timings : null
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onChangeHandler = (event) =>{
        console.log("onChangeHandler");
        this.setState({
            timings :event.target.value
        });
    }

    onSubmitHandler = (event) =>{
        event.preventDefault();
        console.log("onSubmitHandler");
        console.info(this.state.timings);
        //Do the Validations
        //Make Call to Server

        //Form Reset
        this.setState({
            timings:null,
        });
    };

    render(){
        const timingOptions = ["Select Timings","WeekDays","Weekends"];
        return(
            <div className="card-body container col-md-6">
                <h3 className="text-center">SelectBoxDemo</h3>
                <form onSubmit={this.onSubmitHandler}>
                    <MySelectBox
                        mylabel="Timings"
                        myname="timings"
                        myOnChange = {this.onChangeHandler}
                        myoptions={timingOptions}
                    />
                    <MyButton myvalue="Submit Now"></MyButton>
                </form>
            </div>
        );
    }
}
export default SelectBoxDemo;