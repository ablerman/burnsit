/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/feed'
], function ($, _, Backbone, JST, FeedModel) {
    'use strict';

    var AuthorizedView = Backbone.View.extend({
        events  : {
            'click #load'   : "loadImages"
        },
        
        template: JST['app/scripts/templates/authorized.ejs'],
        
        initialize  : function(options) {
            this._accessToken = this.model.get('instagram_token');
            this._feed = new FeedModel({accessToken:this._accessToken});
        },
        
        render  : function() {
            var rendered = this.template();
            this.$el.html(rendered);
            return this;
        },
        
        loadImages  : function(event) {
            this._feed.fetch({
                dataType    : 'jsonp',
                success     : function(model, response, options) {
                    console.log('success');
                }
            });
        }
    });

    return AuthorizedView;
});
