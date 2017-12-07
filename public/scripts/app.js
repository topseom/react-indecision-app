"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibleToggle = function (_React$Component) {
    _inherits(VisibleToggle, _React$Component);

    function VisibleToggle(props) {
        _classCallCheck(this, VisibleToggle);

        var _this = _possibleConstructorReturn(this, (VisibleToggle.__proto__ || Object.getPrototypeOf(VisibleToggle)).call(this, props));

        _this.handleToggle = _this.handleToggle.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(VisibleToggle, [{
        key: "handleToggle",
        value: function handleToggle() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
            console.log(this.state);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Visibility Toggle"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleToggle },
                    this.state.visibility ? "Show Detail" : "Hide Detail"
                ),
                React.createElement(
                    "p",
                    null,
                    this.state.visibility && "content is here!"
                )
            );
        }
    }]);

    return VisibleToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibleToggle, null), document.getElementById('app'));
