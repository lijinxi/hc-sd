/**
 * Description: 销售订单预处理(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-20 15:41:09
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.blcoprocess.BlCoProcess', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.blcoprocess',
	requires: [
		'Hc_sd.model.BlCoProcess',
		'Hc_sd.view.blcoprocess.BlCoProcessController',
		'Hc_sd.view.blcoprocess.BlCoProcessModel'
	],
	controller: 'blcoprocess',
	viewModel: {
		type: 'blcoprocess'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			//查询面板开始
			searchItems: [ {
				fieldLabel : '客户订单号',
				name : 'contractNo',
	   		xtype:'textfield'
	   		
				},
				
				{
					fieldLabel:'预处理状态',
					name:'billLineStatus',
					xtype : 'extcombox',
					displayvalue:Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=process_status',
		      displaymember:'itemName',
		      valuemember:'itemCode'
				},
				{
					fieldLabel:'下单日期',
					xtype: 'datefield',
					name:'orderFormDate'
				},
				{
					fieldLabel:'  至      ',
					xtype: 'datefield',
					name:'orderToDate',
					vtype:'compareTo',     //数据验证方式，compareTo
					compareTo:'orderFormDate', // 被比较的输入框控件name
					compareType:'>=',      // 比较方式，有>=,<=,>,<,= 默认为等于
					compareError:'结束日期不能小于开始日期' //比较不通过时，返回提示信息
				}],
				
		//查询面板结束
		gridModel : 'Hc_sd.model.BlCoProcess',
		gridSelModel:'checkboxmodel',
		gridColumns:[
//				{
//					dataIndex: 'checkId',
//					text: '选择', 
//			    xtype: 'checkcolumn',
//			    defaultType: 'checkboxfield'},
			    
				{dataIndex: 'seqNo', text: '序号'},
				{dataIndex: 'lineId', text: '行id',hidden: true},
				{dataIndex: 'brandNo', text: '品牌编号',hidden: true},
				{dataIndex: 'brandCname', text: '品牌名称'},
				{dataIndex: 'divisionNo', text: '事业部编号',hidden: true},
				{dataIndex: 'divisionName', text: '事业部名称'},
				{dataIndex: 'billLineStatus', text: '订单预处理状态',
					xtype:'bllookupedit',
					displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=process_status',
					displaymember:'itemName',
					valuemember:'itemCode'},
				{dataIndex: 'orderDate', text: '下单日期'},
				{dataIndex: 'deliverDate', text: '要求交期'},
				{dataIndex: 'orderType', text: '订单类型',
					xtype:'bllookupedit',
					displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=order_type',
					displaymember:'itemName',
					valuemember:'itemCode'},
				{dataIndex: 'contractNo', text: '客户订单号'},
				{dataIndex: 'orderNo', text: '销售订单号'},
				{dataIndex: 'materialNo', text: '产品编码'},
				{dataIndex: 'materialName', text: '产品名称'},
				{dataIndex: 'customerNo', text: '客户编号', hidden: true},
				{dataIndex: 'customerName', text: '客户名称'},
				{dataIndex: 'sizeNo', text: '尺码编号' ,hidden: true},
				{dataIndex: 'sizeQty', text: '尺码数量',hidden: true},
				{dataIndex: 'sizeTypeNo', text: '尺码类别编号(尺码组)'},
				{dataIndex: 'unitPrice', text: '单价', hidden: true},
				{dataIndex: 'packingQty', text: '装箱对数'},
				{dataIndex: 'boxQty', text: '箱数'},
				{dataIndex: 'packingType', text: '装箱方式',
					xtype:'bllookupedit',
					displayvalue:Hc.mdmPath+'bas_dict/getbasdictcombo.json?dictCode=packing_type',
					displaymember:'itemName',
					valuemember:'itemCode'},
				{dataIndex: 'pointNo', text: '收货仓'},
				{dataIndex: 'billCompany', text: '开票公司'},
				{dataIndex: 'processResult', text: '预处理结果'}
			],
			gridPrimaryKey : 'lineId',
			gridUnionKey : '',

			gridLoadUrl : Hc.sdsPath+'bl_co_process/listvo.json?selectVoName=SelectListByVoBlCoProcess&mapperClassType=BlCoProcessMapper', 
			gridSaveUrl : Hc.sdsPath+'bl_co_process/batchOperate.json',
			gridExportUrl : Hc.sdsPath+'bl_co_process/do_export.json',
			gridImportUrl : '',

			searchColumn : 4,
			gridEditModel : 'cell',
			gridCanDrag : false,
			gridCanEdit : true,
			gridCanAdd : true,
			gridCanDelete : true
		
		});

		me.callParent();
	}
});
