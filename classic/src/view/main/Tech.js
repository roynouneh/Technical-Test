/**
 * This view contains the layout required for the technical test.
 */
Ext.define('MyApp.view.main.Tech', {
    extend: 'Ext.panel.Panel',
    xtype: 'maintech',

    requires: [
        'Ext.layout.container.Fit'
    ],

//    xtype: 'layout-fit',

    layout: 'anchor',
    width: 800,
    height: 500,
    cls: Ext.baseCSSPrefix + 'shadow',
    bodyPadding: 4,

    items: {
        border: false,
        cls: ['all-panels', 'panel-cyan'],
        anchor: '100% 100%',
        layout: 'anchor',
        items: [
        {
            xtype: 'panel',
            border: false,
            margin: 4,
            cls: ['all-panels', 'panel-darkblue'],
            layout: 'anchor',
            anchor: '100% 15%',
        },
        {
            xtype: 'panel',
            border: false,
            margin: 4,
            cls: ['all-panels', 'panel-orange'],
            layout: 'column',
            anchor: '100% 86%',
            items: [
            {
                xtype: 'panel',
                border: false,
                margin: 4,
                cls: ['all-panels', 'panel-pink', 'col-height'],
                columnWidth: 0.11,
                height: 388,
            },
            {
                xtype: 'panel',
                border: false,
                margin: 4,
                cls: ['all-panels', 'panel-darkgrey', 'col-height'],
                columnWidth: .89,
                layout: 'anchor',
                items:{
                    //invisible anchor
                    xtype: 'panel',
                    border: false,
                    margin: 0,
                    layout: 'column',
                    anchor: '100% 100%',
                    width: 661,
                    height: 378,
                    items:[{
                        xtype: 'panel',
                        border: false,
                        margin: 4,
                        cls: ['all-panels', 'panel-blue', 'col-height'],
                        columnWidth: 0.11,
                    },
                    {
                        xtype: 'panel',
                        border: false,
                        margin: 4,
                        cls: ['all-panels', 'panel-green', 'col-height'],
                        layout: 'column',
                        columnWidth: .89,
                        items:[{

                        }]
                    }]
                }
            }]
        }]
    }

});