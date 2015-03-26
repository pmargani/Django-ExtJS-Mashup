console.log('loading Polls controler');
Ext.require(['Ext.window.MessageBox']);

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
            'polllist toolbar button[action=edit]' : {
                click: this.editPoll
            },
            'polllist toolbar button[action=delete]' : {
                click: this.deletePoll
            },
            'polledit button[action=save]' : {
                click: this.updatePoll
            },

        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    },

    deletePoll: function(button) {
        console.log('deletePoll');
        var grid = button.up('grid');
        var selectedRecs = grid.getSelectionModel().getSelection();
        if (selectedRecs.length >= 1) {
            var record = selectedRecs[0]; 
            var store = this.getPollsStore();
            Ext.Msg.show({
              title: "Delete Poll",
              msg: "Are you sure you know what the hell you're doing?",
              buttons: Ext.Msg.YESNO,
              icon: Ext.Msg.QUESTION,
              scope: this,
              fn: function(id) {
                if (id == 'yes') {
                    store.remove([record]);
                    store.sync();
                }
              }
            });
        }
    },

    editPoll: function(button) {
        console.log('editPoll');
        var grid = button.up('grid');
        var selectedRecs = grid.getSelectionModel().getSelection();
        if (selectedRecs.length >= 1) {
            var view = Ext.widget('polledit');
            var record = selectedRecs[0]; 
            view.down('form').loadRecord(record);   
        }
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

        // Is this a new poll?
        if (poll.phantom){
            poll.save();
            this.getPollsStore().insert(0, [poll]);
        } else {
            this.getPollsStore().sync();
        }        
        
        win.close();
    },
});
