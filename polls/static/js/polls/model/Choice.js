Ext.define('POLLS.model.Choice', {
    extend: 'Ext.data.Model',
    fields: ['id',
             'poll',
             'choice',
             'votes',
             ],
    proxy: {
        type: 'ajax',
        url: '/polls/choices',
        reader: {
            type: 'json',
            root: 'choices',
            successProperty: 'success'
        }
    }
});
