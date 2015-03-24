Ext.define('POLLS.model.Poll', {
    extend: 'Ext.data.Model',
    fields: ['id',
             'question',
             'pub_date',
             ],
    proxy: {
        type: 'rest',
        url: '/polls/polls',
        timeout: 300000,
        reader: {
            type: 'json',
            root: 'polls',
            successProperty: 'success'
        }
    }
});
