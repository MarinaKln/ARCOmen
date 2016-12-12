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

export default NavItem;