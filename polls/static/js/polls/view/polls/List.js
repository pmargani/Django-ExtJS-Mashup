Ext.define('POLLS.view.polls.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.polllist',

    title: 'All Polls',
    store: 'Choices',
    //store: 'Polls',
    initComponent: function() {
    /*
        this.store = {
            fields: ['name', 'email'],
            data  : [
                {name: 'Ed',    email: 'ed@sencha.com'},
                {name: 'Tommy', email: 'tommy@sencha.com'}
            ]
        };

        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];
        */

        // for choices
        this.columns = [
            {header: 'choice', dataIndex: 'choice', flex: 1},
            {header: 'votes', dataIndex: 'votes', flex: 1},
        ];

        // for polls
        /*
        this.columns = [
            {header: 'question', dataIndex: 'question', flex: 1}
        ] 
        */

        this.callParent(arguments);
    }
});
