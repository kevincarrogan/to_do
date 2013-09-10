require.config({
    baseUrl: '/static/js',
    paths: {
        Backbone: '../libs/js/backbone.min',
        underscore: '../libs/js/underscore.min',
        jquery: '../libs/js/jquery-1.10.2.min',
        chosen: '../libs/js/chosen.jquery.min',
        uniform: '../libs/js/jquery.uniform.min'
    },
    shim: {
        underscore: {
            exports: '_',
        },
        Backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        uniform: {
            deps: ['jquery']
        }
    }
});

require(['app'], function (app) {
    return new app({
        el: $('body')
    });
});