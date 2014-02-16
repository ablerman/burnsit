/*global define*/

define([
    'underscore',
    'backbone',
    'collections/image',
    'models/image'
], function (_, Backbone, ImageCollection, ImageModel) {
    'use strict';

    var FeedModel = Backbone.Model.extend({
        urlRoot : 'https://api.instagram.com/v1/users/self/feed/',   //?access_token=ACCESS-TOKEN
        defaults: {
        },
        url         : function() {
            return this.urlRoot + '?access_token=' + this.get('token');
        },
        initialize  : function(options) {
//            this._accessToken = options['accessToken'];
            this._images = new ImageCollection()
        },
        parse       : function(response, options) {
            var attr = {};
            var data = response['data'];
            var images = [];

            for( var i=0; i<data.length; i++) {
                var datum = data[i];
                var image = new ImageModel(datum, {parse:true});
                images.push(image);
//                
//                console.log(datum);
            }
            this._images.reset(images);            
            return attr;
        }
    });

    return FeedModel;
});
