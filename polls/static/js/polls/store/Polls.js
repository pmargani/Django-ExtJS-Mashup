Ext.define('POLLS.store.Polls', {
    extend: 'Ext.data.Store',
    model: 'POLLS.model.Poll',
    autoLoad: true,
});
