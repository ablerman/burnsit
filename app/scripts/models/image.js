/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ImageModel = Backbone.Model.extend({
        defaults: {
        },
        parse   : function(response, options) {
            var attr = {
                caption : response.caption.text,
                url     : response.images.standard_resolution.url,
                height  : response.images.standard_resolution.height,
                width   : response.images.standard_resolution.width,
            }
            return attr;
        }
    });

    return ImageModel;
});
