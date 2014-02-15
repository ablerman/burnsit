/*global define*/

define([
    'underscore',
    'backbone',
    'models/image'
], function (_, Backbone, ImageModel) {
    'use strict';

    var ImageCollection = Backbone.Collection.extend({
        model: ImageModel
    });

    return ImageCollection;
});
