import  {PopUp, RegistrationPopupContent} from "../common/PopUp";
import Button from "../common/Button";
import Input from "../common/Input";

var ThirdScreen = React.createClass({
    getInitialState: function() {
        return ({
            visibility: false,
            checked: false,
            warningPhone: false,
            warningCode: false,
            phoneCode: "",
            phoneNumber: "",
            actionCode: "",
            warningInputPhoneCode: "",
            warningInputPhoneNumber: "",
            warningInputActionCode: "",
            warningCheckRule: ""
        })
    },
    validation: function() {
        var state = this.state;
        this.setState({
            warningPhone: (state.phoneNumber.length !== 7 || isNaN(+state.phoneNumber)),
            warningInputPhoneNumber: (state.phoneNumber.length !== 7 || isNaN(+state.phoneNumber)) ? "warning" : "",
            warningCode: (state.actionCode.length !== 11),
            warningInputActionCode: (state.actionCode.length !== 11) ? "warning" : "",
            warningCheckRule: (!state.checked) ? "warning" : "",
            warningInputPhoneCode: (state.phoneCode.length !== 2) ? "warning" : ""
        });
        this.setState({
            warningPhone: (state.phoneCode.length !== 2),
        });
        if(!state.warningPhone && !state.warningCode && state.checked) {
            this.setState({
                visibility: true,
                checked: false,
                phoneCode: "",
                phoneNumber: "",
                actionCode: ""
            })
        }
    },
    closePopUp: function() {
        this.setState ({
            visibility: false
        })
    },
    phoneCodeChange: function(e) {
        this.setState({
            phoneCode: e.target.value
        })
    },
    phoneChange: function(e) {
        this.setState({
            phoneNumber: e.target.value
        })
    },
    codeChange: function(e) {
        this.setState({
            actionCode: e.target.value
        })
    },
    checkRule: function (e) {
        this.setState ({
            checked: e.target.checked
        })
    },
    render: function() {
        var popup = null,
            currentContent = <RegistrationPopupContent click = {this.closePopUp}/>,
            visibility = this.state.visibility,
            warningPhone = null,
            warningPhoneVisibility = this.state.warningPhone,
            warningCode = null,
            warningCodeVisibility = this.state.warningCode;
        if(visibility) {
            popup = (
                <PopUp
                    className = "registration_popup"
                    close = {this.closePopUp}
                    content = {currentContent}
                />
            )
        }
        if(warningPhoneVisibility) {
            warningPhone = (
                <span className="phone-code_warning">Введіть дійсний номер телефону</span>
            )
        }
        if(warningCodeVisibility) {
            warningCode = (
                <span className="action-code_warning">Введіть дійсний акційний код</span>
            )
        }
        return (
            <div className="third-screen">
                <h1 className="third-screen_title">РЕЄСТРУЙ КОДИ З УПАКОВКИ</h1>
                <div className="phone-registration_box">
                    <div className="phone-registration">
                        <div>
                            <span className = "phone-code--country">+380</span>
                            <Input
                                type = "text"
                                className = {"phone-code ".concat(this.state.warningInputPhoneCode)}
                                inputValue = {this.state.phoneCode}
                                change = {this.phoneCodeChange}
                            />
                        </div>
                        <div className="phone-number_box">
                            <span className="input-description_num">КОНТАКТНИЙ НОМЕР ТЕЛЕФОНУ</span>
                            <Input
                                type = "text"
                                className = {"phone-number ".concat(this.state.warningInputPhoneNumber)}
                                placeholder = "000 00 00"
                                change = {this.phoneChange}
                                inputValue = {this.state.phoneNumber}
                            />
                            {warningPhone}
                        </div>
                        <div className="action-code_box">
                            <span className="input-description_code">АКЦІЙНИЙ КОД</span>
                            <Input
                                type = "text"
                                className = {"action-code ".concat(this.state.warningInputActionCode)}
                                placeholder = "000 0000 0000"
                                inputValue = {this.state.actionCode}
                                change = {this.codeChange}
                            />
                            {warningCode}
                        </div>
                        <Button
                            className = "phone-registration_btn"
                            text = "ЗАРЕЄСТРУВАТИ"
                            click = {this.validation}
                        />
                    </div>
                    <Input
                        type = "checkbox"
                        className = "check-rule"
                        change = {this.checkRule}
                        checked = {this.state.checked}
                    />
                    <label htmlFor="check-rule" className={"for-check-rule ".concat(this.state.warningCheckRule)}>
                        Я погоджуюсь з <a href="#">офіційними правилами</a> акції
                    </label>
                </div>
                {popup}
            </div>
        )
    }
});

export  default  ThirdScreen;