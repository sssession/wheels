define([
    'react'
], function (React) {
    return React.createClass({
        render: function () {
            return (
                <nav>
                    <ul>
                    {this.props.children}
                    </ul>
                </nav>
            );
        }
    })
})
;