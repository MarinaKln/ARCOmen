import Button from "../common/Button";

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

export default FirstScreen;