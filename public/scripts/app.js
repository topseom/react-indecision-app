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

// it's object!
// - props use to pass data between component
// - props come from above(parent)
// - props can't be change by component it'self

// - state can change it'self not change props because it's parent
// - state defined in component it'self
// - state can be change by component it'self

// stateless function component
// - it's component use props only not have state
// - it's for present component. not use logical

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
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            try {
                //when enter after render() 
                var json = localStorage.getItem("options");
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
                console.log("fetching data");
            } catch (e) {
                //Do noting at all
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            //when state update
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem("options", json);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("componentWillUnmount");
        }
    }, {
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
                    return {
                        options: prevState.options.concat([option])
                    };
                });
            }
        }
    }, {
        key: "handleDeleteOption",
        value: function handleDeleteOption(option) {
            this.setState(function (prevState) {

                return {
                    options: prevState.options.filter(function (op) {
                        return op !== option;
                    })
                };
            });
        }
    }, {
        key: "handleEditOption",
        value: function handleEditOption(option, index) {
            this.setState(function (prevState) {
                prevState.options[index] = option;
                return {
                    options: prevState.options
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

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

// Default Props
Header.defaultProps = {
    title: "Indecision"
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            "What should I do"
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        props.options.length > 0 ? React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { onClick: props.handleDeleteOptions },
                "Remove all"
            ),
            React.createElement(
                "ol",
                null,
                props.options.map(function (option, index) {
                    return React.createElement(Option, {
                        key: index,
                        handleDeleteOption: props.handleDeleteOption,
                        index: index,
                        optionText: option,
                        handleEditOption: props.handleEditOption
                    });
                })
            )
        ) : React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                " Please Add option to get start! "
            )
        )
    );
};
/*const Option = (props)=>{
    return(
        <div>
            <li>
                {props.optionText}
            </li>
        </div>
    ); 
}*/

var Option = function (_React$Component2) {
    _inherits(Option, _React$Component2);

    function Option(props) {
        _classCallCheck(this, Option);

        var _this2 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

        _this2.handleChangeMode = _this2.handleChangeMode.bind(_this2);
        _this2.handleFormEdit = _this2.handleFormEdit.bind(_this2);
        _this2.state = {
            editMode: false
        };
        return _this2;
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
                            "remove"
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

var AddOption = function (_React$Component3) {
    _inherits(AddOption, _React$Component3);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this3.handleAddOption = _this3.handleAddOption.bind(_this3);
        _this3.state = {
            error: undefined
        };
        return _this3;
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

// // stateless function component
// const User = (props)=>{
//     return (
//        <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//        </div>
//     );
// }

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
