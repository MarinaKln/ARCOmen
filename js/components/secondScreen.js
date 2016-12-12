import Button from "../common/Button";

var secondScreenItems = [
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
    }];


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
        return (
            <div className="second-screen">
                <a name="bottom" className="bottom-anchor"> </a>
                {secondScreenItems.map(this.createItem)}
                <a className="to-top-arrow" href="#top"> </a>
            </div>
        )
    }
});

export  default SecondScreen;