/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/image'
], function ($, _, Backbone, JST, ImageView) {
    'use strict';

    var FeedView = Backbone.View.extend({
        template: JST['app/scripts/templates/feed.ejs'],
        initialize  : function(options) {
            this.listenTo(this.collection, 'sync', this.onFeedSync);
        },
        render      : function() {
            var rendered = this.template();
            this.$el.html(rendered);
            return this;
        },
        onFeedSync    : function(event) {
            console.log('feed update');
            var imageView = new ImageView({model:this.collection.at(0)});
            imageView.render();
            this.$el.html( imageView.$el );
            
            imageView.burns();            
        }
    });

    return FeedView;
});
