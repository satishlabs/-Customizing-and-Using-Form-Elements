import propTypes from 'prop-types';

const MyRadioButton =(props) =>{
    return(
        <span>
            <h3>
                <input
                    type = {props.mytype}
                    name = {props.myname}
                    checked = {props.mychecked}
                    value = {props.myvalue}
                    onChange = {props.myOnChange}
                />
                &nbsp;&nbsp;
                <label>{props.mylable}</label>
            </h3>
        </span>
    );
};

MyRadioButton.propTypes = {
    mylable: propTypes.string.isRequired,
    myname : propTypes.string.isRequired,
    myvalue : propTypes.string.isRequired,
    mychecked: propTypes.bool.isRequired,
    myOnChange: propTypes.func.isRequired
};

MyRadioButton.defaultProps = {
    mytype:"radio"
};
export default MyRadioButton;