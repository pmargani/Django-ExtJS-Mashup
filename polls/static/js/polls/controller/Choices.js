console.log('loading Choices controler');
Ext.require(['Ext.window.MessageBox']);

Ext.define('POLLS.controller.Choices', {
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
        'choices.List',
        'choices.ListWindow',
        'choices.Edit',
        'polls.Edit'
    ],
    init: function() {
        console.log('Initialized Choices! This happens before the Application launch function is called');
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
            'choicelist toolbar button[action=create]' : {
                click: this.createChoice
            },
            'choicelist toolbar button[action=edit]' : {
                click: this.editChoice
            },
            'choicelist toolbar button[action=delete]' : {
                click: this.deleteChoice
            },
            'choiceedit button[action=save]' : {
                click: this.updateChoice
            },
            'polledit button[action=choices]' : {
                click: this.listChoices
            },

        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    },

    setPollChoicesWindow: function(win) {
        this.pollChoicesWindow = win;
    },

    listChoices: function(button) {
        console.log('listChoices');
        var win      = button.up('window'),
            form     = win.down('form'),
            poll   = form.getRecord();
        console.log(poll);

        var values   = form.getValues();
        console.log(values);
        var pid = poll.get('id');
        //this.pollChoicesWindow.down('choiceslist').setPollId(pid);
        this.pollChoicesWindow.show();

    },

    deleteChoice: function(button) {
        console.log('deleteChoice');
        var grid = button.up('grid');
        var selectedRecs = grid.getSelectionModel().getSelection();
        if (selectedRecs.length >= 1) {
            var record = selectedRecs[0]; 
            var store = this.getChoicesStore();
            Ext.Msg.show({
              title: "Delete Choice",
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

    editChoice: function(button) {
        console.log('createChoice');
        var grid = button.up('grid');
        var selectedRecs = grid.getSelectionModel().getSelection();
        if (selectedRecs.length >= 1) {
            var view = Ext.widget('choiceedit');
            var record = selectedRecs[0]; 
            view.down('form').loadRecord(record);   
        }
    },

    createChoice: function(button) {
        console.log('createChoice');
        //var grid = button.up('grid')
        var poll = Ext.create('POLLS.model.Choice');
        var view = Ext.widget('choiceedit');
        view.down('form').loadRecord(poll);
        console.log(poll);
    },

    updateChoice: function(button) {
        console.log('updateChoice');
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
