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
                    //height anchor
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
                        height: 370,
                    },
                    {
                        xtype: 'panel',
                        border: false,
                        margin: 4,
                        cls: ['all-panels', 'panel-green', 'col-height'],
                        layout: 'anchor',
                        columnWidth: .89,
                        items:{
                            //height anchor
                            xtype: 'panel',
                            border: false,
                            margin: 0,
                            layout: 'anchor',
                            anchor: '100% 100%',
                            width: 570,
                            height: 360,
                            items:[{
                                xtype: 'panel',
                                border: false,
                                margin: 4,
                                cls: ['all-panels', 'panel-red'],
                                layout: 'anchor',
                                anchor: "100% 15%",
                                items: [{
                                    xtype: 'panel',
                                    border: false,
                                    margin: 4,
                                    padding: 1,
                                    cls: ['all-panels', 'panel-yellow'],
                                    anchor: "100% 50%"
                                },
                                {
                                    xtype: 'panel',
                                    border: false,
                                    margin: 4,
                                    padding: 1,
                                    cls: ['all-panels', 'panel-cyan'],
                                    anchor: "100% 50%"
                                }]
                            },
                            {
                                xtype: 'panel',
                                border: false,
                                margin: 4,
                                cls: ['all-panels', 'panel-purple'],
                                layout: 'column',
                                anchor: "100% 86%",
                                items: [{
                                    xtype: 'panel',
                                    border: false,
                                    margin: 4,
                                    cls: ['all-panels', 'panel-black', 'col-height-less'],
                                    columnWidth: 0.2,
                                },
                                {
                                    xtype: 'panel',
                                    border: false,
                                    margin: 4,
                                    cls: ['all-panels', 'panel-pink', 'col-height-less'],
                                    columnWidth: 0.8,
                                }]
                            }]
                        }
                    }]
                }
            }]
        }]
    }

});