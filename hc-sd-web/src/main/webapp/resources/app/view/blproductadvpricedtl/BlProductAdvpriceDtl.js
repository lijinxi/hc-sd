/**
 * Description: 价格策略单明细表
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-04-13 14:28:55
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.blproductadvpricedtl.BlProductAdvpriceDtl', {
    extend: 'Hc_Common.view.BaseBillDetailPage',
    alias: 'widget.blproductadvpricedtl',
    requires: [
    //'Hc_sd.model.BlProductAdvprice',
    'Hc_sd.model.BlProductAdvpriceDtl', 'Hc_sd.view.blproductadvpricedtl.BlProductAdvpriceDtlController', 'Hc_sd.view.blproductadvpricedtl.BlProductAdvpriceDtlModel'],
    controller: 'blproductadvpricedtl',
    viewModel: {
        type: 'blproductadvpricedtl'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            billItems: [{
                name: 'lineId',
                fieldLabel: 'lineId',
                xtype: 'textfield',
                bind: {
                    value: '{billRow.lineId}'
                },
                hidden: true
            },
            {
                fieldLabel: '单据状态',
                hidden: true,
                name: 'billStatus',
                bind: {
                    value: '{billRow.billStatus}'
                }
            },
            {
                name: 'billTypeNo',
                fieldLabel: '单据类型',
                xtype: 'textfield',
                bind: {
                    value: '{billRow.billTypeNo}'
                },
                hidden: true
            },
            {
                fieldLabel: '品牌编号',
                name: 'brandNo',
                bind: {
                    value: '{billRow.brandNo}'
                },
                xtype: 'searchhelpfield',
                allowBlank: false,
                //数据精灵类
                winTitle: '选择品牌',
                //弹出框标题，默认为"选择器"
                gridColumns: [{ //弹出框网格的列
                    dataIndex: 'brandNo',
                    text: '品牌编号',
                    flex: 0.5
                },
                {
                    dataIndex: 'brandCname',
                    text: '品牌名称   ',
                    flex: 0.5
                },
                {
                    dataIndex: 'divisionNo',
                    text: '事业部编号',
                    flex: 0.5
                },
                {
                    dataIndex: 'divisionName',
                    text: '事业部名称',
                    flex: 0.5
                }],
                searchItems: [{
                    name: 'brandNo',
                    fieldLabel: '品牌编号'
                },
                {
                    name: 'brandCname',
                    fieldLabel: '品牌名称'
                }],
                //弹出框的查询面板
                otherFields: 'brandCname,divisionNo,divisionName',
                url: Hc.mdmPath + 'bas_brand_relation/listvo.json?selectVoName=SelectListByVoBasBrandRelation&mapperClassType=BasBrandRelationMapper' //后端的服务URL
            },
            {
                fieldLabel: '品牌名称',
                name: 'brandCname',
                xtype: 'textfield',
                readOnly: true,
                editable: false
            },
            {
                fieldLabel: '事业部编号',
                name: 'divisionNo',
                reference: 'divisionNoBill',
                hidden: true,
                xtype: 'textfield',
                bind: {
                    value: '{billRow.divisionNo}'
                },
                readOnly: true,
                editable: false
            },
            {
                fieldLabel: '事业部名称',
                name: 'divisionName',
                xtype: 'textfield',
                readOnly: true,
                editable: false
            },
            {
                fieldLabel: '客户',
                name: 'customerNo',
                allowBlank: false,
                bind: {
                    value: '{billRow.customerNo}'
                },
                xtype: 'searchhelpfield',
                //数据精灵类
                winTitle: '选择客户',
                //弹出框标题，默认为"选择器"
                gridColumns: [{ //弹出框网格的列
                    dataIndex: 'customerNo',
                    text: '客户编号',
                    flex: 0.5
                },
                {
                    dataIndex: 'customerName',
                    text: '客户名称',
                    flex: 0.5
                }],
                searchItems: [{
                    name: 'customerNo',
                    fieldLabel: '客户编号'
                },
                {
                    name: 'customerName',
                    fieldLabel: '客户名称'
                }],
                //弹出框的查询面板
                otherFields: 'customerName',
                url: Hc.mdmPath + 'bas_customer/list.json' //后端的服务URL
            },
            {
                fieldLabel: '客户名称',
                name: 'customerName',
                xtype: 'textfield',
                readOnly: true,
                editable: false
            },
            {
                fieldLabel: '价格类型',
                name: 'priceType',
                xtype: 'extcombox',
                allowBlank: false,
                bind: {
                    value: '{billRow.priceType}'
                },
                displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=price_type',
                displaymember: 'itemName',
                valuemember: 'itemCode'
            },
            {
                fieldLabel: '币别',
                name: 'currencyNo',
                allowBlank: true,
                xtype: 'extcombox',
                bind: {
                    value: '{billRow.currencyNo}'
                },
                displayvalue: Hc.mdmPath + 'bas_currency/listAll.json',
                displaymember: 'currencyName',
                valuemember: 'currencyNo'
            },
            {
                name: 'effectiveDate',
                allowBlank: false,
                bind: {
                    value: '{billRow.effectiveDate}'
                },
                xtype: 'datefield',
                fieldLabel: '生效日期'
            },
            {
                name: 'remarks',
                fieldLabel: '备注',
                xtype: 'textfield',
                colspan: 3,
                bind: {
                    value: '{billRow.remarks}'
                },
                maxLength: 60,
                enforceMaxLength: true
            }],
            billLoadUrl: Hc.sdsPath + 'bl_product_advprice/list.json',
            billSaveUrl: Hc.sdsPath + 'bl_product_advprice/saveMasterCustomerList.json',
            billAuditUrl: Hc.sdsPath + 'bl_product_advprice/audit.json',
            billExportUrl: Hc.sdsPath + 'bl_product_advprice/do_export.json',
            billModel: 'Hc_sd.model.BlProductAdvprice',
            billSubGrid: ['mastergrid'],
            hasStatus2: false,
            //控制显示最高状态
            editStatus: 10,
            billType: '170505',
            gridColumns: [{
                dataIndex: 'divisionNo',
                text: '事业部编号 ',
                editor: {
                    allowBlank: false
                },
                hidden: true
            },
            {
                dataIndex: 'billNo',
                text: '单据编号',
                hidden: true
            },
            {
                dataIndex: 'materialNo',
                text: '产品编号 ',
                editor: {
                    allowBlank: false,
                    xtype: 'searchhelpfield',
                    gridColumns: [{
                        dataIndex: 'materialNo',
                        text: '产品编号',
                        flex: 0.5
                    },
                    {
                        dataIndex: 'materialCode',
                        text: '产品编码',
                        flex: 0.5
                    },
                    {
                        dataIndex: 'barcodeEan',
                        text: '国际条码',
                        flex: 0.5
                    },
                    {
                        dataIndex: 'materialName',
                        text: '产品名称',
                        flex: 0.5
                    },
                    {
                        dataIndex: 'categoryNo',
                        text: '产品类别',
                        flex: 0.5
                    },
                    {
                        dataIndex: 'styleNo',
                        text: '款号',
                        flex: 0.5
                    }],
                    searchItems: [{
                        name: 'materialNo',
                        fieldLabel: '产品编号'
                    },
                    {
                        name: 'materialCode',
                        fieldLabel: '产品编码'
                    },
                    {
                        name: 'barcodeEan',
                        fieldLabel: '国际条码'
                    },
                    {
                        name: 'materialName',
                        fieldLabel: '产品名称'
                    },
                    {
                        name: 'categoryNo',
                        fieldLabel: '产品类别'
                    },
                    {
                        name: 'styleNo',
                        fieldLabel: '款号'
                    }],
                    //弹出框的查询面板
                    url: Hc.mdmPath + 'bas_material/list.json',
                    //实现网格精灵支持手输和选择带出其他列
                    afterCall: function(txtobj, newdata, record, e) {
                        var record = e.record,
                        url = Hc.mdmPath + 'bas_material/getvo.json?selectVoName=SelectOneModelByVoBasMeteralInfo&mapperClassType=BasMaterialMapper',
                        newValue = newdata.materialNo,
                        oldValue = e.value,
                        originalValue = e.originalValue;
                        if (Ext.isEmpty(newValue) && Ext.isEmpty(oldValue)) {
                            return;
                        } else if (Ext.isEmpty(newValue) && Ext.isEmpty(originalValue)) {
                            return;
                        } else if (Ext.isEmpty(newValue) && !Ext.isEmpty(originalValue)) {
                            txtobj.setValue(originalValue);
                            record.set('materialNo', originalValue);
                        } else if (newValue == oldValue && !Ext.isEmpty(originalValue)) {
                            if (newValue == originalValue && oldValue == originalValue) {
                                return;
                            }
                            if (newValue != originalValue) {
                                url += '&materialNo=' + newValue;
                                Hc.callServer({
                                    url: url,
                                    success: function(response) {
                                        var ob = Ext.decode(response.responseText);
                                        if (ob.entity != null) {
                                            record.set('materialName', ob.entity.materialName);
                                            record.set('unitName', ob.entity.unitName);
                                            record.set('unitNo', ob.entity.normalUnit);
                                        } else {
                                            txtobj.setValue(originalValue);
                                            record.set('materialNo', originalValue);
                                            return;
                                        }
                                    }

                                });
                            }
                        } else {
                            url += '&materialNo=' + newValue;
                            Hc.callServer({
                                url: url,
                                success: function(response) {
                                    var ob = Ext.decode(response.responseText);
                                    if (ob.entity != null) {
                                        record.set('materialName', ob.entity.materialName);
                                        record.set('unitName', ob.entity.unitName);
                                        record.set('unitNo', ob.entity.normalUnit);
                                    } else {
                                        txtobj.setValue(originalValue);
                                        record.set('materialNo', originalValue);
                                        return;
                                    }
                                }

                            });

                        }
                    }
                }
            },
            {
                dataIndex: 'materialName',
                text: '产品名称'
            },
            {
                dataIndex: 'unitName',
                text: '计量单位'
            },
            {
                dataIndex: 'priceMode',
                text: '价格方式',
                reference: 'priceMode',
                xtype: 'bllookupedit',
                editor: {
                    allowBlank: false
                },
                displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=price_mode',
                displaymember: 'itemName',
                valuemember: 'itemCode'
            },
            {
                dataIndex: 'discountRate',
                text: '折扣率 ',
                reference: 'discountRate',
                editor: {}
            },
            {
                dataIndex: 'discountAmount',
                text: '折扣额',
                reference: 'discountAmount',
                editor: {}
            },
            {
                dataIndex: 'unitPrice',
                text: '价格',
                reference: 'unitPrice',
                editor: {}
            }],
            //取消创建、修改四列
            gridHasCreator: false,
            gridHasModifier: false,
            gridPrimaryKey: 'lineId',
            gridModel: 'Hc_sd.model.BlProductAdvpriceDtl',
            gridLoadUrl: Hc.sdsPath + 'bl_product_advprice_dtl/list.json',
        });
        me.callParent();
    }
});