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
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        tweenlite: '../bower_components/greensock/src/uncompressed/TweenLite',
        cssplugin: '../bower_components/greensock/src/uncompressed/plugins/CSSPlugin',
    }
});

require([
    'backbone',
    'models/app',
    'routes/routes'
], function (Backbone, AppModel, RoutesRouter) {
    'use strict'
    var model = new AppModel()
    var router = new RoutesRouter({'model':model});
    Backbone.history.start();
//    var model = new AppModel();
//    var view = new AppView({
//        'model'   : model
//    });
//    view.render();
//    $('#app').html(view.$el);
});
