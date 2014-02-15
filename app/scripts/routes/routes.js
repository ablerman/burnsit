/*global define*/

define([
    'jquery',
    'backbone',
    'views/app'
], function ($, Backbone, AppView) {
    'use strict';

    var RoutesRouter = Backbone.Router.extend({
        routes: {
            ''          : 'home',
            'view/:name'      : 'view'
        },
        
        home            : function(param) {
            var view = new AppView();
            view.render();
            console.log('home');
        },
        
        view        : function(param) {
            console.log(param);
        }

    });

    return RoutesRouter;
});
