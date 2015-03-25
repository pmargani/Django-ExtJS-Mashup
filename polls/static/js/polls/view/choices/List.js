Ext.define('POLLS.view.choices.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.choicelist',

    title: 'Choices',
    //store: 'Choices',
    store: 'Choices',
    initComponent: function() {

        this.dockedItems = [{
          xtype: 'toolbar',
          items: [
            Ext.create('Ext.button.Button', {
              text: 'Create',
              action: 'create',
            }),
            Ext.create('Ext.button.Button', {
              text: 'Edit',
              action: 'edit',
            }),
            Ext.create('Ext.button.Button', {
              text: 'Delete',
              action: 'delete',
            }),
          ],
        }];

        // for choices
        this.columns = [
            {header: 'choice', dataIndex: 'choice', flex: 1},
            {header: 'votes', dataIndex: 'votes', flex: 1},
        ];


        this.callParent(arguments);
    }
});
