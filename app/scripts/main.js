/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap'
    }
});

require([
    'backbone',
    'views/app',
    'models/app',
    'routes/routes'
], function (Backbone, AppView, RoutesRouter, AppModel) {
    'use strict'
    var router = new RoutesRouter({pushState:true});
    
    Backbone.history.start();
    var model = new AppModel();
    var view = new AppView({
        'model'   : model
    });
    view.render();
    $('#app').html(view.$el);
});
