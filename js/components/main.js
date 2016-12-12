import Header from "./header";
import FirstScreen from "./firstScreen";
import SecondScreen from "./secondScreen";
import ThirdScreen from "./thirdScreen";
import Footer from "./footer";

let Main = React.createClass({
    render: function() {
        return (
            <div className="main">
                <Header />
                <FirstScreen />
                <SecondScreen />
                <ThirdScreen />
                <Footer />
            </div>
        )
    }
});

export default Main;