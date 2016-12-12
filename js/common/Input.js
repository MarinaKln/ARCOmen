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

export default Input;