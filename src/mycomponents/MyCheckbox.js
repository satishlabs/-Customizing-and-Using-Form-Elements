import propTypes from 'prop-types';

const MyCheckBox =(props) =>{
    return(
        <div className="form-check">
            <h3>
                <input
                    type={props.mytype}
                    value = {props.myvalue}
                    onChange = {props.myOnChange}
                    checked = {props.mychecked}
                    className ="form-check-input"
                />
                    &nbsp;&nbsp;
                    <label>{props.mylabel}</label>
                </h3>
        </div>
    );
};

MyCheckBox.propTypes = {
    mylabel:propTypes.string.isRequired,
    myvalue:propTypes.string.isRequired,
    mychecked:propTypes.bool.isRequired,
    myOnChange:propTypes.func.isRequired
};

MyCheckBox.defaultProps = {
    mytype:"checkbox",
};
export default MyCheckBox;