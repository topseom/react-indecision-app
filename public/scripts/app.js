"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*const obj = {
    name:'Vikram',
    getName(){
        return this.name;   
    }
};

const getName = obj.getName.bind({name:"top"});
console.log(getName());*/

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handleEditOption = _this.handleEditOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function (prevState) {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var n = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[n]);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            } else {
                this.setState(function (prevState) {
                    var options = prevState.options;
                    options.push(option);
                    return {
                        options: options
                    };
                });
            }
        }
    }, {
        key: "handleDeleteOption",
        value: function handleDeleteOption(option) {
            this.setState(function (prevState) {
                var options = prevState.options;
                options = options.filter(function (op) {
                    return op != option;
                });
                return {
                    options: options
                };
            });
        }
    }, {
        key: "handleEditOption",
        value: function handleEditOption(option, index) {
            this.setState(function (prevState) {
                var options = prevState.options;
                options[index] = option;
                return {
                    options: options
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision";
            var subtitle = "Put your lide in the hand of computer";

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    handlePick: this.handlePick,
                    hasOptions: this.state.options.length > 0
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption,
                    handleEditOption: this.handleEditOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    {
                        onClick: this.props.handlePick,
                        disabled: !this.props.hasOptions
                    },
                    "What should I do"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        // override method must use super(props) to keep props value
        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
        // Override
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            var _this5 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.props.handleDeleteOptions },
                    "Remove all"
                ),
                React.createElement(
                    "ol",
                    null,
                    this.props.options.map(function (option, index) {
                        return React.createElement(Option, {
                            key: index,
                            handleDeleteOption: _this5.props.handleDeleteOption,
                            index: index,
                            optionText: option,
                            handleEditOption: _this5.props.handleEditOption
                        });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option(props) {
        _classCallCheck(this, Option);

        var _this6 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

        _this6.handleChangeMode = _this6.handleChangeMode.bind(_this6);
        _this6.handleFormEdit = _this6.handleFormEdit.bind(_this6);
        _this6.state = {
            editMode: false
        };
        return _this6;
    }

    _createClass(Option, [{
        key: "handleChangeMode",
        value: function handleChangeMode() {
            this.setState(function (prevState) {
                return {
                    editMode: !prevState.editMode
                };
            });
        }
    }, {
        key: "handleFormEdit",
        value: function handleFormEdit(e) {
            e.preventDefault();

            var index = this.props.index;
            var option = e.target.elements.edit.value;
            if (option) {
                this.props.handleEditOption(option, this.props.index);
                this.handleChangeMode();
                e.target.elements.edit.value = null;
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "li",
                    null,
                    this.state.editMode ? React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "form",
                            { onSubmit: this.handleFormEdit },
                            React.createElement("input", { name: "edit", placeholder: this.props.optionText }),
                            React.createElement(
                                "button",
                                { type: "submit" },
                                "edit"
                            )
                        ),
                        React.createElement(
                            "button",
                            { onClick: this.handleChangeMode },
                            "view"
                        )
                    ) : React.createElement(
                        "div",
                        null,
                        this.props.optionText,
                        React.createElement(
                            "button",
                            { onClick: this.props.handleDeleteOption.bind(null, this.props.optionText) },
                            "-"
                        ),
                        React.createElement(
                            "button",
                            { onClick: this.handleChangeMode },
                            "edit"
                        )
                    )
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this7 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this7.handleAddOption = _this7.handleAddOption.bind(_this7);
        _this7.state = {
            error: undefined
        };
        return _this7;
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            if (option) {
                var err = this.props.handleAddOption(option);
                this.setState(function () {
                    return {
                        error: err && err
                    };
                });
                if (!err) {
                    e.target.elements.option.value = null;
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", { autoComplete: "off", autoFocus: true, type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        { type: "submit" },
                        "Add Option"
                    )
                ),
                React.createElement(
                    "p",
                    null,
                    this.state.error
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
