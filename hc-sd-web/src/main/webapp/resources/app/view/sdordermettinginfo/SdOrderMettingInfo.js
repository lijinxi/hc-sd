/**
 * Description: 订单类型规则配置表(订单会款号信息表)(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-25 08:51:21
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.sdordermettinginfo.SdOrderMettingInfo', {
    extend: 'Hc_Common.view.BaseSimplePage',
    alias: 'widget.sdordermettinginfo',
    requires: ['Hc_sd.model.SdOrderMettingInfo', 'Hc_sd.view.sdordermettinginfo.SdOrderMettingInfoController', 'Hc_sd.view.sdordermettinginfo.SdOrderMettingInfoModel'],
    controller: 'sdordermettinginfo',
    viewModel: {
        type: 'sdordermettinginfo'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            //查询面板开始
            searchItems: [{
                fieldLabel: '品牌',
                name: 'brandNo',
                xtype: 'extcombox',
                displayvalue: Hc.mdmPath + 'bas_brand/listAll.json',
                displaymember: 'brandCname',
                valuemember: 'brandNo'
            },
            {
                fieldLabel: '年季',
                name: 'seasonNo',
                xtype: 'extcombox',
                displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=season_no',
                displaymember: 'itemName',
                valuemember: 'itemCode'
            },
            {
                fieldLabel: '鞋类',
                name: 'categoryNo',
                xtype: 'extcombox',
                displayvalue: Hc.mdmPath + 'bas_category/listAll.json',
                displaymember: 'categoryName',
                valuemember: 'categoryNo'
            },
            {
                xtype: 'textfield',
                fieldLabel: '款号',
                name: 'styleNo'
            },
            {
                xtype: 'datefield',
                fieldLabel: '创建时间',
                name: 'createFromTime',
                vtype: 'compareTo',
                compareTo: 'createToTime',
                compareType: '<=',
                compareError: '开始日期不能大于结束日期,请重新选择' 
            },
            {
                xtype: 'datefield',
                fieldLabel: '   至     ',
                name: 'createToTime',
                vtype: 'compareTo',
                compareTo: 'createFromTime',
                compareType: '>=',
                compareError: '结束日期不能小于开始日期,请重新选择' 
            }],
            //查询面板结束
            gridModel: 'Hc_sd.model.SdOrderMettingInfo',
            gridColumns: [{
                dataIndex: 'lineId',
                text: '行id',
                hidden: true
            },
            {
                dataIndex: 'brandNo',
                text: '品牌',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_brand/listAll.json',
                displaymember: 'brandCname',
                valuemember: 'brandNo'
            },
            {
                dataIndex: 'seasonNo',
                text: '年季',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=season_no',
                displaymember: 'itemName',
                valuemember: 'itemCode'
            },

            {
                dataIndex: 'styleNo',
                text: '款号',
                editor: {
                    allowBlank: false,
                    xtype: 'searchhelpfield',
                    gridColumns: [{
                        dataIndex: 'modelNo',
                        text: '形体编号',
                        flex: 0.5
                    },
                    {
                        dataIndex: 'styleNo',
                        text: '款号',
                        flex: 0.5
                    }],
                    searchItems: [{
                        name: 'modelNo',
                        fieldLabel: '形体编号'
                    },
                    {
                        name: 'styleNo',
                        fieldLabel: '款号'
                    }],
                    url: Hc.mdmPath + 'bas_style/list.json',
                }
            },
            {
                dataIndex: 'categoryNo',
                text: '鞋类',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_category/listAll.json',
                displaymember: 'categoryName',
                valuemember: 'categoryNo'
            },
            {
                dataIndex: 'startDate',
                text: '订货会起始日期',
                xtype: 'blgriddate',
                editor: {
                    allowBlank: true
                }
            },
            {
                dataIndex: 'endDate',
                text: '订货会结束日期',
                xtype: 'blgriddate',
                editor: {
                    allowBlank: true,

                }
            },
            {
                dataIndex: 'reorderStartDate',
                text: '补单开始日期',
                xtype: 'blgriddate',
                editor: {
                    allowBlank: true
                }
            },
            {
                dataIndex: 'orderNo',
                text: '排列序号',
                editor: {
                    xtype: 'numberfield',
                    maxLength: 11,
                    enforceMaxLength: true
                }
            },
            {
                dataIndex: 'enableFlag',
                text: '启用状态',
                xtype: "bllookupedit",
                editor: {
                    allowBlank: false
                },
                displayvalue: "0=禁用:1=启用"
            }],
            gridPrimaryKey: 'lineId',
            gridUnionKey: '',

            gridLoadUrl: Hc.sdsPath + 'sd_order_metting_info/list.json',
            gridSaveUrl: Hc.sdsPath + 'sd_order_metting_info/batchOperate.json',
            gridExportUrl: Hc.sdsPath + 'sd_order_metting_info/do_export.json',
            gridImportUrl: '',

            searchColumn: 4,
            gridEditModel: 'cell',
            gridCanDrag: false,
            gridCanEdit: true,
            gridCanAdd: true,
            gridCanDelete: true,
            // "SINGLE" / "SIMPLE"/"MULTI" / "checkboxmodel"
            gridSelModel: 'MULTI'
        });

        me.callParent();
    }
});