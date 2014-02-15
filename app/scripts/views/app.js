/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/select_user'
], function ($, _, Backbone, JST, SelectUserView) {
    'use strict';

    var AppView = Backbone.View.extend({
        template    : JST['app/scripts/templates/app.ejs'],
        initialize  : function() {
            this._firstRun = true;
            this._selectUserView = null;
        },
        render      : function() {
            if( this._firstRun ) {
                this._selectUserView = new SelectUserView();
                this._selectUserView.render();
                this.$el.html(this._selectUserView.$el);
            }
//            var rendered = this.template({
//                'first_name'    : 'Sandy',
//                'last_name'     : 'Lerman'
//            });
//            console.log(rendered);
            return this;
        }
    });

    return AppView;
});
