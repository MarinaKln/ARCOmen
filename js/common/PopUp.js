import Button from "../common/Button";
import Input from "../common/Input";

var winners = [
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

var RegistrationPopupContent = React.createClass({
     render: function () {
         return (
             <div>
                 <h1>Дякуємо за реєстрацію!</h1>
                 <h2>Ваш код успішно зареєстровано, чекайте на розіграш призів та акції.</h2>
                 <h3>Більше кодів, більша ймовірність виграшу!</h3>
                 <Button className = "popup-confirm_btn"
                         text = "ГАРАЗД!"
                         click = {this.props.click}
                 />
             </div>
         )
     }
 });

export {PopUp, RegistrationPopupContent, ShopsPopupContent, WinnerPopupContent};