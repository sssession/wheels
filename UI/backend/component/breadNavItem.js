define([
    'react'
], function (React) {
    return React.createClass({
        getDefaultProps: function () {
            return {
                active: false,
                icon: null
            };
        },
        render: function () {
            var iconElement;

            if (this.props.icon) {
                iconElement = <i className={"fa fa-" + this.props.icon}></i>;
            }
            return (
                <li className={this.props.active ? 'active' : ''}>
                    <a href="#">
                    {iconElement} {this.props.children}</a>
                </li>
            );
        }
    });
});