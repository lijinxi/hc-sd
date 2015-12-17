Ext.define('Hc_sd.view.blco.BlCoList', {
    extend: 'Hc_Common.view.BaseBillListPage',
    alias: 'widget.blcolist',
    requires: ['Hc_sd.model.BlCo', 'Hc_sd.view.blco.BlCoListController', 'Hc_sd.view.blco.BlCoListModel'],
    controller: 'blcolist',
    viewModel: {
        type: 'blcolist'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            searchItems: [{
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
                xtype: 'textfield',
                name: 'contractNo',
                fieldLabel: '客户订单号'
            },
            {
                fieldLabel: '订单类型',
                name: 'orderType',
                xtype: 'extcombox',
                displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=order_type',
                displaymember: 'itemName',
                valuemember: 'itemCode'
            },
            {
                fieldLabel: '订单来源',
                name: 'orderSource',
                xtype: 'extcombox',
                displayvalue: "0=手工新增:1=预处理"
            },
            {
                xtype: 'datefield',
                fieldLabel: '下单日期',
                name: 'orderDateStrat',
                vtype: 'compareTo',
                compareTo: 'orderDateEnd',
                compareType: '<=',
                compareError: '开始日期不能大于结束日期' //比较不通过时，返回提示信息
            },
            {
                xtype: 'datefield',
                fieldLabel: '至',
                name: 'orderDateEnd',
                vtype: 'compareTo',
                compareTo: 'orderDateStrat',
                compareType: '>=',
                compareError: '结束日期不能小于开始日期' //比较不通过时，返回提示信息
            }],
            gridColumns: [
            {
                dataIndex: 'brandCname',
                text: '品牌'
            },
            {
                dataIndex: 'divisionName',
                text: '事业部'
            },
            {
                dataIndex: 'customerName',
                text: '客户'
            },
            {
                dataIndex: 'contractNo',
                text: '客户订单号'
            },
            {
                dataIndex: 'orderTypeName',
                text: '订单类型'
            },
            {
                dataIndex: 'orderDate',
                text: '下单日期',
                xtype: 'blgriddate'
            },
            {
                dataIndex: 'deliverDate',
                text: '要求交期',
                xtype: 'blgriddate'
            },
            {
                dataIndex: 'orderSource',
                text: '订单来源',
                xtype: 'bllookupedit',
                displayvalue: "0=手工新增:1=预处理"
            },
            {
                dataIndex: 'currencyName',
                text: '币种'
            },
            {
                dataIndex: 'paymentClauseName1',
                text: '收款条件'
            }],
            gridModel: 'Hc_sd.model.BlCo',
            gridLoadUrl: Hc.sdsPath + 'bl_co/listvo.json?selectVoName=SelectListByVoBlCo&mapperClassType=BlCoMapper',
            dtlName: 'blcodtl',
            showModel: 'selftab',
            //控制单据状态数据字典取值
            billStatusKey:'co_bill_status'
        });
        me.callParent();
    }
});