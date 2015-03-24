Ext.define('POLLS.view.polls.Edit' ,{
    extend: 'Ext.window.Window',
    alias: 'widget.polledit',

    title: 'Edit Poll',
    //store: 'Choices',
    //store: 'Polls',
    layout: 'fit',
    autoShow: true,
    plain: true,

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            items: [{
                xtype : 'textfield',
                name: 'question',
                fieldLabel: 'Question',
                allowBlank: false,

            },
            ],
         }],

         this.buttons = [{
               text: 'Save',
               action: 'save',
             }, {
               text: 'Close',
               scope: this, 
               handler: this.close,
             },
             
         ];
         this.callParent(arguments);
    },
});
