/**
 * Description: 价格策略单主表
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-04-13 14:28:55
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.blproductadvprice.BlProductAdvprice', {
    extend: 'Hc_Common.view.BaseBillListPage',
    alias: 'widget.blproductadvprice',
    requires: ['Hc_sd.model.BlProductAdvprice', 'Hc_sd.view.blproductadvprice.BlProductAdvpriceController', 'Hc_sd.view.blproductadvprice.BlProductAdvpriceModel'],
    controller: 'blproductadvprice',
    viewModel: {
        type: 'blproductadvprice'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            searchItems: [{
                xtype: 'datefield',
                fieldLabel: '生效日期',
                name: 'effectiveStartDate',
                vtype: 'compareTo',
                //数据验证方式，compareTo
                compareTo: 'effectiveEndDate',
                // 被比较的输入框控件name
                compareType: '<=',
                // 比较方式，有>=,<=,>,<,= 默认为等于
                compareError: '开始日期不能大于结束日期' //比较不通过时，返回提示信息
            },
            {
                xtype: 'datefield',
                fieldLabel: '至',
                name: 'effectiveEndDate',
                vtype: 'compareTo',
                //数据验证方式，compareTo
                compareTo: 'effectiveStartDate',
                // 被比较的输入框控件name
                compareType: '>=',
                // 比较方式，有>=,<=,>,<,= 默认为等于
                compareError: '结束日期不能小于开始日期' //比较不通过时，返回提示信息
            },
            {
                fieldLabel: '品牌',
                name: 'brandNo',
                xtype: 'extcombox',
                displayvalue: Hc.mdmPath + 'bas_brand/listAll.json',
                displaymember: 'brandCname',
                valuemember: 'brandNo'
            },
            {
                fieldLabel: '客户',
                name: 'customerNo',
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
                url: Hc.mdmPath + 'bas_customer/list.json' //后端的服务URL
            },
            {
                fieldLabel: '价格类型',
                name: 'priceType',
                xtype: 'extcombox',
                displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=price_type',
                displaymember: 'itemName',
                valuemember: 'itemCode'
            },
            {
                fieldLabel: '币别',
                name: 'currencyNo',
                xtype: 'extcombox',
                displayvalue: Hc.mdmPath + 'bas_currency/listAll.json',
                displaymember: 'currencyName',
                valuemember: 'currencyNo'
            }],
            gridColumns: [
            {
                dataIndex: 'brandCname',
                text: '品牌 ',
                width: 120
            },
            {
                dataIndex: 'customerName',
                text: '客户 ',
                width: 120
            },
            {
                dataIndex: 'divisionName',
                text: '事业部 ',
                width: 120
            },
            {
                dataIndex: 'priceTypeName',
                text: '价格类型',
                width: 120
            },
            {
                dataIndex: 'currencyName',
                text: '币别',
                width: 120
            },
            {
                dataIndex: 'effectiveDate',
                text: '生效日期',
                xtype: 'blgriddate'
            }],
            gridModel: 'Hc_sd.model.BlProductAdvprice',
            gridLoadUrl: Hc.sdsPath + 'bl_product_advprice/listvo.json?selectVoName=SelectListByVoBlProductAdvprice&mapperClassType=BlProductAdvpriceMapper',
            //后端的服务URL'
            dtlName: 'blproductadvpricedtl',
            showModel: 'selftab',
            //控制单据状态数据字典取值
            billStatusKey:'co_bill_status'
        });
        me.callParent();
    }
});