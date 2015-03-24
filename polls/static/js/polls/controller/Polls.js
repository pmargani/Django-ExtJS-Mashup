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
        'polls.List',
        'polls.Edit'
    ],
    init: function() {
        console.log('Initialized Polls! This happens before the Application launch function is called');
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
            'polllist toolbar button[action=create]' : {
                click: this.createPoll
            },
            'polledit button[action=save]' : {
                click: this.updatePoll
            },

        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    },

    createPoll: function(button) {
        console.log('createPoll');
        //var grid = button.up('grid')
        var poll = Ext.create('POLLS.model.Poll');
        var view = Ext.widget('polledit');
        view.down('form').loadRecord(poll);
        console.log(poll);
    },

    updatePoll: function(button) {
        console.log('updatePoll');
        var win      = button.up('window'),
            form     = win.down('form'),
            poll   = form.getRecord();
        console.log(poll);

        var values   = form.getValues();

        // don't do anything if this form is actually invalid
        var f = form.getForm();
        if (!(f.isValid())) {
            return;
        }

        poll.set(values);
        poll.save();
        this.getPollsStore().sync();
        win.close();
    },
});
