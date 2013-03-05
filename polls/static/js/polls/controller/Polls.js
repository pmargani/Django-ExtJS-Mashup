console.log('loading Polls controler');
Ext.define('POLLS.controller.Polls', {
    extend: 'Ext.app.Controller',

    models: [
        'Poll',
        'Choice'
    ],

    stores: [
        'Polls',
        'Choices'
    ],
    views: [
        'polls.List'
    ],
    init: function() {
        console.log('Initialized Polls! This happens before the Application launch function is called');
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    }
});
