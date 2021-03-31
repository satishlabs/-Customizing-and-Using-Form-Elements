
import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextInputDemo from './mydemos/TextInputDemo';
import TextAreaDemo from './mydemos/TextAreaDemo';
import SelectBoxDemo from './mydemos/SelectBoxDemo';
import RadioButtonDemo from './mydemos/RadioButtonDemo';
import CheckBoxDemo from './mydemos/CheckBoxDemo';


class App extends Component{
  render(){
    return(
      <div className="card">
       <div className="card-header">
       <h1 className="text-center">Welcome to Satish Labs!</h1>
       </div>
       <div className="card-body">
        <TextInputDemo />
        <TextAreaDemo />
        <SelectBoxDemo />
        <RadioButtonDemo />
        <CheckBoxDemo />
       </div>
      </div>
    );
  }
}

export default App;
