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

export default Button;

