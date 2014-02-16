/*global define*/

define([
    'underscore',
    'backbone',
    'models/image'
], function (_, Backbone, ImageModel) {
    'use strict';

    var ImageCollection = Backbone.Collection.extend({
        model: ImageModel,
        initialize  : function(models, options) {
            this._token = options.token;
        },
        url : function() {
            var url = 'https://api.instagram.com/v1/users/self/feed/'
            return url + '?access_token=' + this._token;
        },
        parse   : function(response, options) {
            return response.data;
        }
    });

    return ImageCollection;
});
