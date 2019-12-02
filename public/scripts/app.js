'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.onClearAll = _this.onClearAll.bind(_this);
        _this.onClearOption = _this.onClearOption.bind(_this);
        _this.onPick = _this.onPick.bind(_this);
        _this.onAdd = _this.onAdd.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    // lifecycle methods -->

    // fires when component loads


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (!options) return;
                this.setState(function () {
                    return { options: options };
                });
            } catch (e) {
                // do nothing
            }
        }

        // fires when props or state updates

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length === this.state.options.length) return;
            var json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }

        // <-- lifecycle methods

    }, {
        key: 'onClearAll',
        value: function onClearAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'onClearOption',
        value: function onClearOption(option) {
            this.setState(function (prevState) {
                return { options: prevState.options.filter(function (o) {
                        return o !== option;
                    }) };
            });
        }
    }, {
        key: 'onPick',
        value: function onPick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert('You only option is [' + option + ']');
        }
    }, {
        key: 'onAdd',
        value: function onAdd(option) {

            if (!option) {
                return 'Enter a valid option!';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists!';
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var subtitle = 'Put your life in the hands of a computer!';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    pick: this.onPick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    clearAll: this.onClearAll,
                    clearOption: this.onClearOption
                }),
                React.createElement(AddOption, { add: this.onAdd })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// IndecisionApp.defaultProps = {
//     options: []
// }

// funtional component with default properties belwo


var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

// default props automatically used if not passed into component
Header.defaultProps = {
    title: 'Indecision'

    // functional component
};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.pick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};

// functional component
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.clearAll },
            'Remove All'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started!'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                text: option,
                clear: props.clearOption
            });
        })
    );
};

// functional component
var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.text,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.clear(props.text);
                }
            },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.onAddOption = _this2.onAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'onAddOption',
        value: function onAddOption(e) {

            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.add(option);
            this.setState(function () {
                return { error: error };
            });

            if (!error) e.target.elements.option.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.onAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
