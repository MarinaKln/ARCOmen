import NavItem from "../common/NavItem";
import {PopUp, WinnerPopupContent, ShopsPopupContent} from "../common/PopUp";

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
    }];



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
        if(visibility) {
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

export default Header;