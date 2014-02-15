/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var SelectUserView = Backbone.View.extend({
        template: JST['app/scripts/templates/select_user.ejs'],
        
        render  : function() {
            var rendered = this.template({});
            this.$el.html(rendered);
            return this;
        }
    });

    return SelectUserView;
});
