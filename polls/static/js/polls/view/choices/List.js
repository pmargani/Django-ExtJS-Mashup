Ext.define('POLLS.view.choices.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.choicelist',

    title: 'Choices',
    //store: 'Choices',
    store: 'Choices',
    initComponent: function() {
        var grid = this;
        this.pollCombo = Ext.create('Ext.form.field.ComboBox', {
            name: 'id',
            store: 'Polls',
            queryMode: 'local',
            displayField: 'id',
            valueField: 'id',
            hideLabel: true,
            emptyText: 'Select a poll id ...',
            listeners: {
              select: function(combo, record, index) {
                var id = record[0].get('id');
                grid.setPoll(id);
              }
            },
        });

        this.dockedItems = [{
          xtype: 'toolbar',
          items: [
            this.pollCombo,
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
    },

    setPoll: function(id) {
        var store = this.getStore('Poll');
        store.setProxy({
            type: 'rest',
            url: '/polls/polls/'+ id + '/choices',
            timeout: 6000000,
            reader: {
                type: 'json',
                root: 'choices',
                successProperty: 'success'
            }
        });
        store.load();
        this.pollCombo.setValue(id);

    },

});
