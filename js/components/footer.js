import NavItem from "../common/NavItem";

var footerNavItems = [
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
    ];


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
        return (
            <div className="footer">
                <h2>РОЗПОВІДАЙ ДРУЗЯМ</h2>
                <div className="footer_navigation">
                    {footerNavItems.map(this.createNavItem)}
                    <div className="nav-items_social">
                        {footerSocItems.map(this.createNavItem)}
                    </div>
                </div>
                <div className="footer_info">2016 &#169; ARCO</div>
            </div>
        )
    }
});

export default Footer;