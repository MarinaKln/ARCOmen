var headerNavItems = [
        {
            text: "ПРАВИЛА",
            link: "#",
            className: "rules"
        },
        {
            text: "ПЕРЕМОЖЦІ",
            link: "#",
            className: "winners"
        },
        {
            text: "ДЕ ПРИДБАТИ?",
            link: "#",
            className: "shops"
        }],
    secondScreenItems = [
        {
            title: "ДИВИСЬ ДІЛИСЬ",
            description: "xtrm роликами з друзями",
            number: "01",
            textBtn: "ПЕРЕГЛЯНУТИ"
        },
        {
            title: "КУПУЙ РЕЄСТРУЙ",
            description: "промокоди з упаковки",
            number: "02",
            textBtn: "ДЕ ПРИДБАТИ?"
        },
        {
            title: "ГРАЙ ВИГРАВАЙ",
            description: "круті призи",
            number: "03",
            textBtn: "ПЕРЕМОЖЦІ"
        }],
    footerNavItems = [
        {
            text: "ПРАВИЛА",
            link: "#",
            className: "nav-item--order1"
        },
        {
            text: "ПОДАРУНКИ",
            link: "#",
            className: "nav-item--order2"
        },
        {
            text: "ПЕРЕМОЖЦІ",
            link: "#",
            className: "nav-item--order4"
        },
        {
            text: "ДЕ ПРИДБАТИ?",
            link: "#",
            className: "nav-item--order5"
        }],
    footerSocItems = [
        {
            link: "#",
            className: "social-link_fb"
        },
        {
            link: "#",
            className: "social-link_vk"
        },
        {
            link: "#",
            className: "social-link_inst"
        }
    ],
    winners = [
        {
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
        }
    ],
    shops = [
        {
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
        },{
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
        }
    ];


var PopUp = React.createClass({
    render: function() {
        var props = this.props,
            content = this.props.content;
        return (
            <div className={"popup ".concat(props.className)}>
                <Button
                    className="close-pop-up"
                    click={this.props.close}
                    text = "&#215;">
                </Button>
                {content}
            </div>
        )
    }
});

var NavItem = React.createClass({
    render: function() {
        var props = this.props;
        return (
            <div className={"nav-item ".concat(props.className)}  >
                <a href={props.link} onClick={props.click} className={props.className}>
                    {props.text}
                </a>
            </div>
        )
    }
});

var Button = React.createClass({
    render: function() {
        var props = this.props;
        return (
            <button className={"button ".concat(props.className)} onClick={props.click} type="button">
                {props.text}
            </button>
        )
    }
});

var Input = React.createClass({
    render: function() {
        var props = this.props;
        return (
            <input className={"input ".concat(props.className)}
                   type={props.type}
                   placeholder={props.placeholder}
                   onChange={props.change}
                   value={props.inputValue}
                   id={props.className}
                   checked={props.checked}
            >
            </input>
        )
    }
});

var WinnerItem = React.createClass({
    render: function () {
        return (
            <li className="winner-item">
                <div>{this.props.date}</div>
                <div className="winner-name">
                    <img src={this.props.image}/>
                    {this.props.name}
                    </div>
                <div>{this.props.phoneNumber}</div>
            </li>
        )
    }
});

var ShopPopupItem = React.createClass({
    render: function () {
        return (
            <div className={"shop-item ".concat(this.props.name)}>
                <a className="shop-link">
                    <img className={"shop-img ".concat(this.props.name)} src={this.props.image} alt=""/>
                </a>
            </div>
        )

    }
});

var WinnerPopupContent = React.createClass({
    getInitialState: function () {
        return ({
            displayedNumbers: winners
        })
    },
    heandlerSearch: function (e) {
        var searchQuery = e.target.value;
        var displayedNumbers = winners.filter(function(item) {
            var searchValue = item.phoneNumber;
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({
            displayedNumbers: displayedNumbers
        })
    },
    createWinnerItem: function (item, index) {
        return (
            <WinnerItem
                key = {index}
                date = {item.date}
                image = {item.image}
                name = {item.name}
                phoneNumber = {item.phoneNumber}
            />
        )
    },
    render: function () {
        return (
            <div className="winner-popup_content">
                <h1>ПЕРЕМОЖЦІ АКЦІЇ<span className="popup-logo"> </span></h1>
                <Input className = "winner-popup_input"
                       type = "text"
                       placeholder = "Перевірити номер"
                       change = {this.heandlerSearch}
                />
                <div className="winners-list_title">
                    <span>ДАТА</span>
                    <span>ПЕРЕМОЖЕЦЬ</span>
                    <span>НОМЕР ТЕЛЕФОНУ</span>
                </div>
                <ul>
                    {this.state.displayedNumbers.map(this.createWinnerItem)}
                </ul>
            </div>
        )
    }
});

var ShopsPopupContent = React.createClass({
    createShopItem: function (item, index) {
        return (
            <ShopPopupItem
                key = {index}
                image = {item.image}
                link = {item.link}
                name = {item.name}
            />
        )
    },
    render: function () {
        return (
            <div className="shops-popup_content">
                <h1>Магазини продажу продукції<span className="popup-logo"> </span></h1>
                <h2>Купуй онлайн</h2>
                <ShopPopupItem
                    image = "style/images/MakeUp.png"
                    name = "make-up"
                />
                <h3>А також у мережах</h3>
                <div className="shops-box">
                    {shops.map(this.createShopItem)}
                </div>
            </div>
        )
    }
});

var SecondScreenItem = React.createClass({
    render: function() {
        var props = this.props;
        return (
            <div className="second-screen_item">
                <div className="second-screen_item-left">
                    <div className="second-screen_item-title">
                        <span>{props.title}</span>
                    </div>
                    <span className="second-screen_item-desc">{props.description}</span>
                </div>
                <div className="second-screen_item-right">
                    <span className="second-screen_item-num">{props.number}</span>
                    <Button
                        className = "second-screen_btn"
                        text = {props.textBtn}
                        />
                </div>
            </div>
        )
    }
});

var Header = React.createClass({
    getInitialState: function() {
        return ({
            visibility: false,
            content: null
        })
    },
    openPopUp: function(e) {
        var name = e.target.className;
        this.setState({
            visibility: true
        });
        switch (name) {
            case "winners":
                return this.setState({
                    content: <WinnerPopupContent />
                });
            case "shops":
                return this.setState({
                    content: <ShopsPopupContent />
                });
            default:
                return this.setState({
                    visibility: false
                })
        }
    },
    closePopUp: function() {
        this.setState ({
            visibility: false
        })
    },
    createNavItem: function(item, index) {
        return (
            <NavItem
                key = {index}
                text = {item.text}
                link = {item.link}
                className = {item.className}
                click = {this.openPopUp}
            />
        )
    },
    render: function() {
        var popup = null,
            visibility = this.state.visibility;
        if(visibility == true) {
            popup = (
                <PopUp
                    className = "header_popup"
                    close = {this.closePopUp}
                    content = {this.state.content}
                    />
            )
        }
        return (
            <div className="header">
                <div className="header_logo"><a href="#"> </a></div>
                <div className="header_navigation">
                    {headerNavItems.map(this.createNavItem)}
                </div>
                <NavItem
                    link = "#"
                    className = "social-link_vk"
                    />
                {popup}
            </div>
        )
    }
});

var FirstScreen = React.createClass({
    render: function() {
        return (
            <div className="first-screen">
                <a name="top" className="top-anchor"> </a>
                <div className="first-screen_content">
                    <h1 className="first-screen_title">СЛІДКУЙ ЗА ПРИГОДАМИ <span className="first-screen_title--big">ARCOMEN</span></h1>
                    <Button
                        className = "first-screen_btn"
                        text = "ПРИГОДА ПЕРША"
                        click = {this.props.click}
                        />
                </div>
                <a className="to-bottom-arrow" href="#bottom"> </a>
            </div>
        )
    }
});

var SecondScreen = React.createClass({
    createItem: function(item, index) {
        return (
            <SecondScreenItem
                key = {index}
                title = {item.title}
                description = {item.description}
                number = {item.number}
                textBtn = {item.textBtn}
                />
        )
    },
    render: function() {
        var data = this.props.data;
        return (
            <div className="second-screen">
                <a name="bottom" className="bottom-anchor"> </a>
                {data.map(this.createItem)}
                <a className="to-top-arrow" href="#top"> </a>
            </div>
        )
    }
});

var ThirdScreen = React.createClass({
    getInitialState: function() {
        return ({
            visibility: false,
            checked: false,
            warning_phone: false,
            warning_code: false,
            phone_code: "",
            phone_number: "",
            action_code: "",
            warningInputPhoneCode: "",
            warningInputPhoneNumber: "",
            warningInputActionCode: "",
            warningCheckRule: ""
        })
    },
    validation: function() {
        console.log("jjjj");
        var state = this.state;
        if(state.phone_number.length !== 7 || isNaN(+state.phone_number) !== false || state.phone_code.length !== 2) {
            this.setState({
                warning_phone: true,
                warningInputPhoneNumber: "warning",
                warningInputPhoneCode: "warning"
            })
        } else {
            this.setState({
                warning_phone: false,
                warningInputPhoneNumber: "",
                warningInputPhoneCode: ""
            })
        }
        if(state.action_code.length !== 11) {
            this.setState({
                warning_code: true,
                warningInputActionCode: "warning"
            })
        } else {
            this.setState({
                warning_code: false,
                warningInputActionCode: ""
            })
        }
        if(!state.checked) {
            this.setState({
                warningCheckRule: "warning"
            })

        } else {
            this.setState({
                warningCheckRule: ""
            })
        }
        if(state.warning_phone === false && state.warning_code === false && state.checked) {
            this.setState({
                visibility: true,
                checked: false,
                phone_code: "",
                phone_number: "",
                action_code: ""
            })
        }
        console.log("без !", state.warning_phone, "!", !state.warning_phone);
    },
    closePopUp: function() {
        this.setState ({
            visibility: false
        })
    },
    phoneCodeChange: function(e) {
        this.setState({
            phone_code: e.target.value
        })
    },
    phoneChange: function(e) {
        this.setState({
            phone_number: e.target.value
        })
    },
    codeChange: function(e) {
        this.setState({
            action_code: e.target.value
        })
    },
    checkRule: function (e) {
        if(e.target.checked) {
            this.setState ({
                checked: true
            })
        } else {
            this.setState ({
                checked: false
            })
        }
    },
    render: function() {
        var popup = null,
            visibility = this.state.visibility,
            warningPhone = null,
            warning_phone = this.state.warning_phone,
            warningCode = null,
            warning_code = this.state.warning_code;
        if(visibility == true) {
            popup = (
                <PopUp
                    className = "registration_popup"
                    close = {this.closePopUp}
                    content = {
                    <div>
                       <h1>Дякуємо за реєстрацію!</h1>
                       <h2>Ваш код успішно зареєстровано, чекайте на розіграш призів та акції.</h2>
                       <h3>Більше кодів, більша ймовірність виграшу!</h3>
                       <Button className = "popup-confirm_btn"
                               text = "ГАРАЗД!"
                               click = {this.closePopUp}
                               />
                    </div>}
                />
            )
        }
        if(warning_phone == true) {
            warningPhone = (
                <span className="phone-code_warning">Введіть дійсний номер телефону</span>
            )
        }
        if(warning_code == true) {
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
                                inputValue = {this.state.phone_code}
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
                                inputValue = {this.state.phone_number}
                            />
                            {warningPhone}
                            </div>
                        <div className="action-code_box">
                            <span className="input-description_code">АКЦІЙНИЙ КОД</span>
                            <Input
                                type = "text"
                                className = {"action-code ".concat(this.state.warningInputActionCode)}
                                placeholder = "000 0000 0000"
                                inputValue = {this.state.action_code}
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

var Footer = React.createClass({
    createNavItem: function(item, index) {
        return (
            <NavItem
                key = {index}
                text = {item.text}
                link = {item.link}
                className = {item.className}
                />
        )
    },
    render: function() {
        var dataNav = this.props.dataNav,
            dataSoc = this.props.dataSoc;
        return (
            <div className="footer">
                <h2>РОЗПОВІДАЙ ДРУЗЯМ</h2>
                <div className="footer_navigation">
                    {dataNav.map(this.createNavItem)}
                    <div className="nav-items_social">
                        {dataSoc.map(this.createNavItem)}
                    </div>
                </div>
                <div className="footer_info">2016 &#169; ARCO</div>
            </div>
        )
    }
});

var Main = React.createClass({
    render: function() {
        return (
            <div className="main">
                <Header
                    data = {headerNavItems}
                    />
                <FirstScreen />
                <SecondScreen
                    data = {secondScreenItems}
                />
                <ThirdScreen />
                <Footer
                    dataNav = {footerNavItems}
                    dataSoc = {footerSocItems}
                    />
            </div>
        )
    }
});

ReactDOM.render(
<Main />,
    document.getElementsByClassName("container")[0]
);
