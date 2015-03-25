Ext.define('POLLS.view.choices.Edit' ,{
    extend: 'Ext.window.Window',
    alias: 'widget.choiceedit',

    title: 'Edit Choice',
    layout: 'fit',
    autoShow: true,
    plain: true,

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            items: [{
                xtype : 'textfield',
                name: 'choice',
                fieldLabel: 'choice',
                allowBlank: false,

            },{
                xtype : 'textfield',
                name: 'votes',
                fieldLabel: 'Votes',
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
