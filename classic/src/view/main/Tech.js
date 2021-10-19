/**
 * This view contains the layout required for the technical test.
 */
Ext.define('MyApp.view.main.Tech', {
    extend: 'Ext.panel.Panel',
    xtype: 'maintech',

    requires: [
        'Ext.layout.container.Fit'
    ],

    xtype: 'layout-fit',

    layout: 'fit',
    width: 500,
    height: 400,
    cls: Ext.baseCSSPrefix + 'shadow',

    bodyPadding: 25,

    items: {
        /*
        title: 'Inner Panel',
        html: '<p>This panel is fit within its container.</p>',
        */
        bodyPadding: 15,
        border: true,
        items: [{
            xtype: 'panel',
            border: true,
            height: 95,
            items: [{
                xtype: 'panel',
                border: true,
                height: 45,
                items: [{
                    xtype: 'panel',
                    border: true,
                    height: 15
                }]
            }]
        }]
    }

});