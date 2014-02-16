/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AuthorizeView = Backbone.View.extend({
        template: JST['app/scripts/templates/authorize.ejs'],
        
        render  : function() {
            var rendered = this.template();
            this.$el.html(rendered);
            return this;
        }
        
    });

    return AuthorizeView;
});
