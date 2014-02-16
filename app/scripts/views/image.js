/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'tweenlite',
    'cssplugin'
], function ($, _, Backbone, JST, TweenLite, CSSPlugin) {
    'use strict';

    var ImageView = Backbone.View.extend({
        template: JST['app/scripts/templates/image.ejs'],
        
        initialize  : function(options) {
            this._timer = null;
            this.model.set({x:0,y:0});
        },
        render  : function() {
//            var width = $('body').height();
//            var height= $('body').width();

            var json = this.model.toJSON();
//            json['width'] = '100%';
//            json['height'] = '100%';
            
            var rendered = this.template(json);
            this.$el.html(rendered);
            console.log('render');
            return this;
        },
        burns   : function(focusX, focusY, zoomPercent, duration) {
            var img = this.$el.find('#img')[0];
//            console.log(window.TweenLite);
//            console.log(TweenLite);
            window.TweenLite.to(img, 3, {
                width       : "600px",
                height      : "600px",
//                onUpdate    : function() {
//                    console.log('update');
//                }
            });
//            console.log('tween!');
        }
    });

    return ImageView;
});
