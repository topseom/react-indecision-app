"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        // 1. default state value
        _this.state = {
            counter: props.counter,
            name: props.name
        };
        return _this;
    }

    _createClass(Counter, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            // fetch data
            var data = localStorage.getItem("counter");
            if (data) {
                var counter = parseInt(data, 10);
                this.setState(function () {
                    return {
                        counter: counter
                    };
                });
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            // save data
            if (prevState.counter !== this.state.counter) {
                localStorage.setItem("counter", this.state.counter);
            }
        }
    }, {
        key: "handleAddOne",
        value: function handleAddOne() {
            this.setState(function (prevState) {
                return {
                    counter: prevState.counter + 1
                };
            });
            console.log(this.state);
        }
    }, {
        key: "handleMinusOne",
        value: function handleMinusOne() {
            // 3. change state based on event
            // 4. rerendered use new state values with "setState"
            this.setState(function (prevState) {
                return {
                    counter: prevState.counter > 0 ? prevState.counter - 1 : prevState.counter
                };
            });
        }
    }, {
        key: "handleReset",
        value: function handleReset() {

            // Don't use this.state in setState 
            // 1. it's asynchoronous
            /*this.setState({
                counter:0  
            });
            this.setState({
                counter: this.state.counter + 1 
            });*/

            // it's synchoronous
            this.setState(function () {
                return {
                    counter: 0
                };
            });
            /*this.setState((prevState)=>{
                return{
                    counter:prevState.counter+1
                };
            });*/
        }

        // 2. component rendered with default state value

    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.name,
                React.createElement(
                    "h1",
                    null,
                    "Count: ",
                    this.state.counter
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleAddOne },
                    "+1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleMinusOne },
                    "-1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleReset },
                    "reset"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

Counter.defaultProps = {
    counter: 0,
    name: "Julie"
};
ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
