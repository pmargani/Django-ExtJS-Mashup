Ext.Loader.setConfig({enabled:true});

console.log('start');
Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'POLLS',

    appFolder: 'static/js/polls',

    controllers: [
        'Polls'
    ],

    launch: function() {
        console.log('launch');
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'polllist',
                    //title: 'Users',
                    //html : 'List of users will go here'
                }
            ]
        });

        var choices = this.getController('Polls').getChoicesStore();
        console.log('done');
    },
    
});
