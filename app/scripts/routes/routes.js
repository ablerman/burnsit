/*global define*/

define([
    'jquery',
    'backbone',
    'views/authorize',
    'views/feed',
    'collections/image'
], function ($, Backbone, AuthorizeView, FeedView, ImageCollection) {
    'use strict';

    var RoutesRouter = Backbone.Router.extend({
        routes: {
            ''                          : 'home',
            'access_token=:token'       : 'feed'
        },
        initialize      : function(options) {   
            this._model = options['model'];
        },
        
        home            : function(param) {
            var view = new AuthorizeView({'model':this._model});
            view.render();
            $('#app').html(view.$el);
        },
        
        feed        : function(token) {
//            var feedModel = new FeedModel({token:token});
            var images = new ImageCollection([], {token:token});
            var view = new FeedView({
                collection  : images
            });
            view.render()
            $('#app').html(view.$el);
            images.fetch({dataType:'jsonp'});
        }
/*        
        authorized  : function(instagram_token) {
            this._model.set('instagram_token', instagram_token);
            var view = new AuthorizedView({model:this._model});
            view.render();
            $('#app').html(view.$el);
        }
*/
    });

    return RoutesRouter;
});
