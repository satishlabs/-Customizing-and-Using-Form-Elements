
import propTypes from 'prop-types';

const MyTextInput = (props) =>{
    return(
        <div className="container">
            <div className="form-group">
                <label htmlFor={props.myname} >{props.mylabel}</label>
                <input
                    type ={props.mytype}
                    name = {props.myname}
                    placeholder = {props.myplaceholder}
                    value = {props.myvalue}
                    onChange = {props.myOnChange}
                    className = "form-control form-control-lg"
                />
            </div>
        </div>
    )
}

MyTextInput.propTypes = {
    mylabel : propTypes.string.isRequired,
    myname : propTypes.string.isRequired,
    myvalue : propTypes.string.isRequired,
    myOnChange : propTypes.func.isRequired,
}

MyTextInput.defaultProps = {
    mytype:'text'
}

export default MyTextInput;