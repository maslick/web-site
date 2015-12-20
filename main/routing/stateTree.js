define([
    './layout', 'text!./layout.html', './apiDetails/states',
], function (layoutController, layoutTemplate, apiDetailsStates) {

    return {
        id: 'layout',
        url: '',
        title: 'DCDB-tool',
        longTitle: 'Hello world!',
        abstract: true,
        visible: false,
        template: layoutTemplate,
        controller: layoutController,
        children: [
            //apiDetailsStates
        ]
    };
});