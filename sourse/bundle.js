(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _main = require("./components/main");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(_main2.default, null), document.getElementsByClassName("container")[0]);

},{"./components/main":9}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Button = React.createClass({
    displayName: "Button",

    render: function render() {
        var props = this.props;
        return React.createElement(
            "button",
            { className: "button ".concat(props.className), onClick: props.click, type: "button" },
            props.text
        );
    }
});

exports.default = Button;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Input = React.createClass({
    displayName: "Input",

    render: function render() {
        var props = this.props;
        return React.createElement("input", { className: "input ".concat(props.className),
            type: props.type,
            placeholder: props.placeholder,
            onChange: props.change,
            value: props.inputValue,
            id: props.className,
            checked: props.checked
        });
    }
});

exports.default = Input;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var NavItem = React.createClass({
    displayName: "NavItem",

    render: function render() {
        var props = this.props;
        return React.createElement(
            "div",
            { className: "nav-item ".concat(props.className) },
            React.createElement(
                "a",
                { href: props.link, onClick: props.click, className: props.className },
                props.text
            )
        );
    }
});

exports.default = NavItem;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WinnerPopupContent = exports.ShopsPopupContent = exports.RegistrationPopupContent = exports.PopUp = undefined;

var _Button = require("../common/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Input = require("../common/Input");

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var winners = [{
    date: "07/11/16",
    name: "ім'я",
    image: "style/images/winner.png",
    phoneNumber: "+380506812085"
}, {
    date: "07/11/16",
    name: "ім'я",
    image: "style/images/winner.png",
    phoneNumber: "+380686814085"
}, {
    date: "07/11/16",
    name: "ім'я",
    image: "style/images/winner.png",
    phoneNumber: "+38095681785"
}, {
    date: "07/11/16",
    name: "ім'я",
    image: "style/images/winner.png",
    phoneNumber: "+380996810085"
}, {
    date: "07/11/16",
    name: "ім'я",
    image: "style/images/winner.png",
    phoneNumber: "+380696810085"
}, {
    date: "07/11/16",
    name: "ім'я",
    image: "style/images/winner.png",
    phoneNumber: "+380556810085"
}],
    shops = [{
    image: "style/images/ashan.png",
    link: "#",
    name: "ashan"
}, {
    image: "style/images/billa.png",
    link: "#",
    name: "billa"
}, {
    image: "style/images/EVA.png",
    link: "#",
    name: "eva"
}, {
    image: "style/images/brusnichka_logo.png",
    link: "#",
    name: ""
}, {
    image: "style/images/Epicentrk_logo.png",
    link: "#",
    name: ""
}, {
    image: "style/images/kishenya.png",
    link: "#"
}, {
    image: "style/images/Karavan.png",
    link: "#",
    name: ""
}, {
    image: "style/images/Novus.png",
    link: "#",
    name: ""
}, {
    image: "style/images/Watsons_logo.png",
    link: "#"
}, {
    image: "style/images/Fozzy.png",
    link: "#",
    name: "fozzy"
}, {
    image: "style/images/ecomarket.png",
    link: "#",
    name: ""
}, {
    image: "style/images/klass_market.png",
    link: "#",
    name: ""
}, {
    image: "style/images/prostor-logo.png",
    link: "#",
    name: ""
}, {
    image: "style/images/kosmo.png",
    link: "#",
    name: ""
}, {
    image: "style/images/atb.png",
    link: "#",
    name: "atb"
}, {
    image: "style/images/metro-logo.png",
    link: "#",
    name: ""
}, {
    image: "style/images/logo_silpo.png",
    link: "#",
    name: ""
}, {
    image: "style/images/varus_logo.png",
    link: "#",
    name: ""
}, {
    image: "style/images/logo-novaya-liniya.png",
    link: "#",
    name: ""
}, {
    image: "style/images/furshet.png",
    link: "#",
    name: ""
}];

var PopUp = React.createClass({
    displayName: "PopUp",

    render: function render() {
        var props = this.props,
            content = this.props.content;
        return React.createElement(
            "div",
            { className: "popup ".concat(props.className) },
            React.createElement(_Button2.default, {
                className: "close-pop-up",
                click: this.props.close,
                text: "\xD7" }),
            content
        );
    }
});

var WinnerItem = React.createClass({
    displayName: "WinnerItem",

    render: function render() {
        return React.createElement(
            "li",
            { className: "winner-item" },
            React.createElement(
                "div",
                null,
                this.props.date
            ),
            React.createElement(
                "div",
                { className: "winner-name" },
                React.createElement("img", { src: this.props.image }),
                this.props.name
            ),
            React.createElement(
                "div",
                null,
                this.props.phoneNumber
            )
        );
    }
});

var ShopPopupItem = React.createClass({
    displayName: "ShopPopupItem",

    render: function render() {
        return React.createElement(
            "div",
            { className: "shop-item ".concat(this.props.name) },
            React.createElement(
                "a",
                { className: "shop-link" },
                React.createElement("img", { className: "shop-img ".concat(this.props.name), src: this.props.image, alt: "" })
            )
        );
    }
});

var WinnerPopupContent = React.createClass({
    displayName: "WinnerPopupContent",

    getInitialState: function getInitialState() {
        return {
            displayedNumbers: winners
        };
    },
    heandlerSearch: function heandlerSearch(e) {
        var searchQuery = e.target.value;
        var displayedNumbers = winners.filter(function (item) {
            var searchValue = item.phoneNumber;
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({
            displayedNumbers: displayedNumbers
        });
    },
    createWinnerItem: function createWinnerItem(item, index) {
        return React.createElement(WinnerItem, {
            key: index,
            date: item.date,
            image: item.image,
            name: item.name,
            phoneNumber: item.phoneNumber
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "winner-popup_content" },
            React.createElement(
                "h1",
                null,
                "\u041F\u0415\u0420\u0415\u041C\u041E\u0416\u0426\u0406 \u0410\u041A\u0426\u0406\u0407",
                React.createElement(
                    "span",
                    { className: "popup-logo" },
                    " "
                )
            ),
            React.createElement(_Input2.default, { className: "winner-popup_input",
                type: "text",
                placeholder: "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u043D\u043E\u043C\u0435\u0440",
                change: this.heandlerSearch
            }),
            React.createElement(
                "div",
                { className: "winners-list_title" },
                React.createElement(
                    "span",
                    null,
                    "\u0414\u0410\u0422\u0410"
                ),
                React.createElement(
                    "span",
                    null,
                    "\u041F\u0415\u0420\u0415\u041C\u041E\u0416\u0415\u0426\u042C"
                ),
                React.createElement(
                    "span",
                    null,
                    "\u041D\u041E\u041C\u0415\u0420 \u0422\u0415\u041B\u0415\u0424\u041E\u041D\u0423"
                )
            ),
            React.createElement(
                "ul",
                null,
                this.state.displayedNumbers.map(this.createWinnerItem)
            )
        );
    }
});

var ShopsPopupContent = React.createClass({
    displayName: "ShopsPopupContent",

    createShopItem: function createShopItem(item, index) {
        return React.createElement(ShopPopupItem, {
            key: index,
            image: item.image,
            link: item.link,
            name: item.name
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "shops-popup_content" },
            React.createElement(
                "h1",
                null,
                "\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u0438 \u043F\u0440\u043E\u0434\u0430\u0436\u0443 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u0457",
                React.createElement(
                    "span",
                    { className: "popup-logo" },
                    " "
                )
            ),
            React.createElement(
                "h2",
                null,
                "\u041A\u0443\u043F\u0443\u0439 \u043E\u043D\u043B\u0430\u0439\u043D"
            ),
            React.createElement(ShopPopupItem, {
                image: "style/images/MakeUp.png",
                name: "make-up"
            }),
            React.createElement(
                "h3",
                null,
                "\u0410 \u0442\u0430\u043A\u043E\u0436 \u0443 \u043C\u0435\u0440\u0435\u0436\u0430\u0445"
            ),
            React.createElement(
                "div",
                { className: "shops-box" },
                shops.map(this.createShopItem)
            )
        );
    }
});

var RegistrationPopupContent = React.createClass({
    displayName: "RegistrationPopupContent",

    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "\u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0437\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044E!"
            ),
            React.createElement(
                "h2",
                null,
                "\u0412\u0430\u0448 \u043A\u043E\u0434 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u043E, \u0447\u0435\u043A\u0430\u0439\u0442\u0435 \u043D\u0430 \u0440\u043E\u0437\u0456\u0433\u0440\u0430\u0448 \u043F\u0440\u0438\u0437\u0456\u0432 \u0442\u0430 \u0430\u043A\u0446\u0456\u0457."
            ),
            React.createElement(
                "h3",
                null,
                "\u0411\u0456\u043B\u044C\u0448\u0435 \u043A\u043E\u0434\u0456\u0432, \u0431\u0456\u043B\u044C\u0448\u0430 \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0456\u0441\u0442\u044C \u0432\u0438\u0433\u0440\u0430\u0448\u0443!"
            ),
            React.createElement(_Button2.default, { className: "popup-confirm_btn",
                text: "\u0413\u0410\u0420\u0410\u0417\u0414!",
                click: this.props.click
            })
        );
    }
});

exports.PopUp = PopUp;
exports.RegistrationPopupContent = RegistrationPopupContent;
exports.ShopsPopupContent = ShopsPopupContent;
exports.WinnerPopupContent = WinnerPopupContent;

},{"../common/Button":2,"../common/Input":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Button = require("../common/Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FirstScreen = React.createClass({
    displayName: "FirstScreen",

    render: function render() {
        return React.createElement(
            "div",
            { className: "first-screen" },
            React.createElement(
                "a",
                { name: "top", className: "top-anchor" },
                " "
            ),
            React.createElement(
                "div",
                { className: "first-screen_content" },
                React.createElement(
                    "h1",
                    { className: "first-screen_title" },
                    "\u0421\u041B\u0406\u0414\u041A\u0423\u0419 \u0417\u0410 \u041F\u0420\u0418\u0413\u041E\u0414\u0410\u041C\u0418 ",
                    React.createElement(
                        "span",
                        { className: "first-screen_title--big" },
                        "ARCOMEN"
                    )
                ),
                React.createElement(_Button2.default, {
                    className: "first-screen_btn",
                    text: "\u041F\u0420\u0418\u0413\u041E\u0414\u0410 \u041F\u0415\u0420\u0428\u0410",
                    click: this.props.click
                })
            ),
            React.createElement(
                "a",
                { className: "to-bottom-arrow", href: "#bottom" },
                " "
            )
        );
    }
});

exports.default = FirstScreen;

},{"../common/Button":2}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _NavItem = require("../common/NavItem");

var _NavItem2 = _interopRequireDefault(_NavItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var footerNavItems = [{
    text: "ПРАВИЛА",
    link: "#",
    className: "nav-item--order1"
}, {
    text: "ПОДАРУНКИ",
    link: "#",
    className: "nav-item--order2"
}, {
    text: "ПЕРЕМОЖЦІ",
    link: "#",
    className: "nav-item--order4"
}, {
    text: "ДЕ ПРИДБАТИ?",
    link: "#",
    className: "nav-item--order5"
}],
    footerSocItems = [{
    link: "#",
    className: "social-link_fb"
}, {
    link: "#",
    className: "social-link_vk"
}, {
    link: "#",
    className: "social-link_inst"
}];

var Footer = React.createClass({
    displayName: "Footer",

    createNavItem: function createNavItem(item, index) {
        return React.createElement(_NavItem2.default, {
            key: index,
            text: item.text,
            link: item.link,
            className: item.className
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "footer" },
            React.createElement(
                "h2",
                null,
                "\u0420\u041E\u0417\u041F\u041E\u0412\u0406\u0414\u0410\u0419 \u0414\u0420\u0423\u0417\u042F\u041C"
            ),
            React.createElement(
                "div",
                { className: "footer_navigation" },
                footerNavItems.map(this.createNavItem),
                React.createElement(
                    "div",
                    { className: "nav-items_social" },
                    footerSocItems.map(this.createNavItem)
                )
            ),
            React.createElement(
                "div",
                { className: "footer_info" },
                "2016 \xA9 ARCO"
            )
        );
    }
});

exports.default = Footer;

},{"../common/NavItem":4}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _NavItem = require("../common/NavItem");

var _NavItem2 = _interopRequireDefault(_NavItem);

var _PopUp = require("../common/PopUp");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headerNavItems = [{
    text: "ПРАВИЛА",
    link: "#",
    className: "rules"
}, {
    text: "ПЕРЕМОЖЦІ",
    link: "#",
    className: "winners"
}, {
    text: "ДЕ ПРИДБАТИ?",
    link: "#",
    className: "shops"
}];

var Header = React.createClass({
    displayName: "Header",

    getInitialState: function getInitialState() {
        return {
            visibility: false,
            content: null
        };
    },
    openPopUp: function openPopUp(e) {
        var name = e.target.className;
        this.setState({
            visibility: true
        });
        switch (name) {
            case "winners":
                return this.setState({
                    content: React.createElement(_PopUp.WinnerPopupContent, null)
                });
            case "shops":
                return this.setState({
                    content: React.createElement(_PopUp.ShopsPopupContent, null)
                });
            default:
                return this.setState({
                    visibility: false
                });
        }
    },
    closePopUp: function closePopUp() {
        this.setState({
            visibility: false
        });
    },
    createNavItem: function createNavItem(item, index) {
        return React.createElement(_NavItem2.default, {
            key: index,
            text: item.text,
            link: item.link,
            className: item.className,
            click: this.openPopUp
        });
    },
    render: function render() {
        var popup = null,
            visibility = this.state.visibility;
        if (visibility) {
            popup = React.createElement(_PopUp.PopUp, {
                className: "header_popup",
                close: this.closePopUp,
                content: this.state.content
            });
        }
        return React.createElement(
            "div",
            { className: "header" },
            React.createElement(
                "div",
                { className: "header_logo" },
                React.createElement(
                    "a",
                    { href: "#" },
                    " "
                )
            ),
            React.createElement(
                "div",
                { className: "header_navigation" },
                headerNavItems.map(this.createNavItem)
            ),
            React.createElement(_NavItem2.default, {
                link: "#",
                className: "social-link_vk"
            }),
            popup
        );
    }
});

exports.default = Header;

},{"../common/NavItem":4,"../common/PopUp":5}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _header = require("./header");

var _header2 = _interopRequireDefault(_header);

var _firstScreen = require("./firstScreen");

var _firstScreen2 = _interopRequireDefault(_firstScreen);

var _secondScreen = require("./secondScreen");

var _secondScreen2 = _interopRequireDefault(_secondScreen);

var _thirdScreen = require("./thirdScreen");

var _thirdScreen2 = _interopRequireDefault(_thirdScreen);

var _footer = require("./footer");

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = React.createClass({
    displayName: "Main",

    render: function render() {
        return React.createElement(
            "div",
            { className: "main" },
            React.createElement(_header2.default, null),
            React.createElement(_firstScreen2.default, null),
            React.createElement(_secondScreen2.default, null),
            React.createElement(_thirdScreen2.default, null),
            React.createElement(_footer2.default, null)
        );
    }
});

exports.default = Main;

},{"./firstScreen":6,"./footer":7,"./header":8,"./secondScreen":10,"./thirdScreen":11}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Button = require("../common/Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secondScreenItems = [{
    title: "ДИВИСЬ ДІЛИСЬ",
    description: "xtrm роликами з друзями",
    number: "01",
    textBtn: "ПЕРЕГЛЯНУТИ"
}, {
    title: "КУПУЙ РЕЄСТРУЙ",
    description: "промокоди з упаковки",
    number: "02",
    textBtn: "ДЕ ПРИДБАТИ?"
}, {
    title: "ГРАЙ ВИГРАВАЙ",
    description: "круті призи",
    number: "03",
    textBtn: "ПЕРЕМОЖЦІ"
}];

var SecondScreenItem = React.createClass({
    displayName: "SecondScreenItem",

    render: function render() {
        var props = this.props;
        return React.createElement(
            "div",
            { className: "second-screen_item" },
            React.createElement(
                "div",
                { className: "second-screen_item-left" },
                React.createElement(
                    "div",
                    { className: "second-screen_item-title" },
                    React.createElement(
                        "span",
                        null,
                        props.title
                    )
                ),
                React.createElement(
                    "span",
                    { className: "second-screen_item-desc" },
                    props.description
                )
            ),
            React.createElement(
                "div",
                { className: "second-screen_item-right" },
                React.createElement(
                    "span",
                    { className: "second-screen_item-num" },
                    props.number
                ),
                React.createElement(_Button2.default, {
                    className: "second-screen_btn",
                    text: props.textBtn
                })
            )
        );
    }
});

var SecondScreen = React.createClass({
    displayName: "SecondScreen",

    createItem: function createItem(item, index) {
        return React.createElement(SecondScreenItem, {
            key: index,
            title: item.title,
            description: item.description,
            number: item.number,
            textBtn: item.textBtn
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "second-screen" },
            React.createElement(
                "a",
                { name: "bottom", className: "bottom-anchor" },
                " "
            ),
            secondScreenItems.map(this.createItem),
            React.createElement(
                "a",
                { className: "to-top-arrow", href: "#top" },
                " "
            )
        );
    }
});

exports.default = SecondScreen;

},{"../common/Button":2}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PopUp = require("../common/PopUp");

var _Button = require("../common/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Input = require("../common/Input");

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThirdScreen = React.createClass({
    displayName: "ThirdScreen",

    getInitialState: function getInitialState() {
        return {
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
        };
    },
    validation: function validation() {
        var state = this.state;
        this.setState({
            warningPhone: state.phoneNumber.length !== 7 || isNaN(+state.phoneNumber),
            warningInputPhoneNumber: state.phoneNumber.length !== 7 || isNaN(+state.phoneNumber) ? "warning" : "",
            warningCode: state.actionCode.length !== 11,
            warningInputActionCode: state.actionCode.length !== 11 ? "warning" : "",
            warningCheckRule: !state.checked ? "warning" : "",
            warningInputPhoneCode: state.phoneCode.length !== 2 ? "warning" : ""
        });
        this.setState({
            warningPhone: state.phoneCode.length !== 2
        });
        if (!state.warningPhone && !state.warningCode && state.checked) {
            this.setState({
                visibility: true,
                checked: false,
                phoneCode: "",
                phoneNumber: "",
                actionCode: ""
            });
        }
    },
    closePopUp: function closePopUp() {
        this.setState({
            visibility: false
        });
    },
    phoneCodeChange: function phoneCodeChange(e) {
        this.setState({
            phoneCode: e.target.value
        });
    },
    phoneChange: function phoneChange(e) {
        this.setState({
            phoneNumber: e.target.value
        });
    },
    codeChange: function codeChange(e) {
        this.setState({
            actionCode: e.target.value
        });
    },
    checkRule: function checkRule(e) {
        this.setState({
            checked: e.target.checked
        });
    },
    render: function render() {
        var popup = null,
            currentContent = React.createElement(_PopUp.RegistrationPopupContent, { click: this.closePopUp }),
            visibility = this.state.visibility,
            warningPhone = null,
            warningPhoneVisibility = this.state.warningPhone,
            warningCode = null,
            warningCodeVisibility = this.state.warningCode;
        if (visibility) {
            popup = React.createElement(_PopUp.PopUp, {
                className: "registration_popup",
                close: this.closePopUp,
                content: currentContent
            });
        }
        if (warningPhoneVisibility) {
            warningPhone = React.createElement(
                "span",
                { className: "phone-code_warning" },
                "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0456\u0439\u0441\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443"
            );
        }
        if (warningCodeVisibility) {
            warningCode = React.createElement(
                "span",
                { className: "action-code_warning" },
                "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0456\u0439\u0441\u043D\u0438\u0439 \u0430\u043A\u0446\u0456\u0439\u043D\u0438\u0439 \u043A\u043E\u0434"
            );
        }
        return React.createElement(
            "div",
            { className: "third-screen" },
            React.createElement(
                "h1",
                { className: "third-screen_title" },
                "\u0420\u0415\u0404\u0421\u0422\u0420\u0423\u0419 \u041A\u041E\u0414\u0418 \u0417 \u0423\u041F\u0410\u041A\u041E\u0412\u041A\u0418"
            ),
            React.createElement(
                "div",
                { className: "phone-registration_box" },
                React.createElement(
                    "div",
                    { className: "phone-registration" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "span",
                            { className: "phone-code--country" },
                            "+380"
                        ),
                        React.createElement(_Input2.default, {
                            type: "text",
                            className: "phone-code ".concat(this.state.warningInputPhoneCode),
                            inputValue: this.state.phoneCode,
                            change: this.phoneCodeChange
                        })
                    ),
                    React.createElement(
                        "div",
                        { className: "phone-number_box" },
                        React.createElement(
                            "span",
                            { className: "input-description_num" },
                            "\u041A\u041E\u041D\u0422\u0410\u041A\u0422\u041D\u0418\u0419 \u041D\u041E\u041C\u0415\u0420 \u0422\u0415\u041B\u0415\u0424\u041E\u041D\u0423"
                        ),
                        React.createElement(_Input2.default, {
                            type: "text",
                            className: "phone-number ".concat(this.state.warningInputPhoneNumber),
                            placeholder: "000 00 00",
                            change: this.phoneChange,
                            inputValue: this.state.phoneNumber
                        }),
                        warningPhone
                    ),
                    React.createElement(
                        "div",
                        { className: "action-code_box" },
                        React.createElement(
                            "span",
                            { className: "input-description_code" },
                            "\u0410\u041A\u0426\u0406\u0419\u041D\u0418\u0419 \u041A\u041E\u0414"
                        ),
                        React.createElement(_Input2.default, {
                            type: "text",
                            className: "action-code ".concat(this.state.warningInputActionCode),
                            placeholder: "000 0000 0000",
                            inputValue: this.state.actionCode,
                            change: this.codeChange
                        }),
                        warningCode
                    ),
                    React.createElement(_Button2.default, {
                        className: "phone-registration_btn",
                        text: "\u0417\u0410\u0420\u0415\u0404\u0421\u0422\u0420\u0423\u0412\u0410\u0422\u0418",
                        click: this.validation
                    })
                ),
                React.createElement(_Input2.default, {
                    type: "checkbox",
                    className: "check-rule",
                    change: this.checkRule,
                    checked: this.state.checked
                }),
                React.createElement(
                    "label",
                    { htmlFor: "check-rule", className: "for-check-rule ".concat(this.state.warningCheckRule) },
                    "\u042F \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u044E\u0441\u044C \u0437 ",
                    React.createElement(
                        "a",
                        { href: "#" },
                        "\u043E\u0444\u0456\u0446\u0456\u0439\u043D\u0438\u043C\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438"
                    ),
                    " \u0430\u043A\u0446\u0456\u0457"
                )
            ),
            popup
        );
    }
});

exports.default = ThirdScreen;

},{"../common/Button":2,"../common/Input":3,"../common/PopUp":5}]},{},[1]);
