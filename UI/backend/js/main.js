require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery.min',
        react: '../bower_components/react/react.min'
    }
});

require([
    'jquery',
    'react',
    'component/layout'
], function ($, React, layout) {
    var $div = $('<div>');

    React.render(React.createElement(layout), $div[0]);

    $('body').prepend($div.children());
});