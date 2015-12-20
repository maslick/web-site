define([
    './layout', 'text!./layout.html'
], function(layoutController, layoutTemplate) {

    return {
        id: 'layout',
        url: '',
        longTitle: 'DCDB-tool web page',
        template: layoutTemplate,
        controller: layoutController
    };
});