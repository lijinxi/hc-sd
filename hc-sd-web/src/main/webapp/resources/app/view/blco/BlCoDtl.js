/**
 * Description: 销售订单明细表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-04-09 10:19:36
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.blco.BlCoDtl', {
	extend: 'Hc_Common.view.BaseBillDetailPage',
	alias: 'widget.blcodtl',
	requires: ['Hc_sd.model.BlCo', 'Hc_sd.model.BlCoDtl', 'Hc_sd.view.blco.BlCoDtlController', 'Hc_sd.view.blco.BlCoDtlModel'],
	controller: 'blcodtl',
	viewModel: {
		type: 'blcodtl'
	},
	initComponent: function() {
		var me = this,
		paymentStore = Ext.create('Hc_Common.store.Base', {
			fields: ['paymentClauseNo', 'paymentClauseName'],
			autoLoad: true,
			proxy: {
				url: Hc.mdmPath + 'bas_payment_clause/listAll.json'
			}
		});
		paymentStore.proxy.extraParams.paymentClauseType = 2;
		Ext.apply(me, {
			billItems: [
			            //“品牌”带出“事业部”的数据精灵
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
			            	bind: {
			            		value: '{billRow.customerNo}'
			            	},
			            	xtype: 'searchhelpfield',
			            	allowBlank: false,
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
			            	name: 'contractNo',
			            	fieldLabel: '客户订单号',
			            	xtype: 'textfield',
			            	allowBlank: true,
			            	bind: {
			            		value: '{billRow.contractNo}'
			            	},
			            	regex: /^[0-9a-zA-Z]+$/,
			            	//只能输入字母、数字或者字母数字组合
			            	regexText: '请输入字母或数字',
			            	maxLength: 20,
			            	enforceMaxLength: true
			            },
			            {
			            	fieldLabel: '订单类型',
			            	name: 'orderType',
			            	xtype: 'extcombox',
			            	allowBlank: false,
			            	bind: {
			            		value: '{billRow.orderType}'
			            	},
			            	displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=order_type',
			            	displaymember: 'itemName',
			            	valuemember: 'itemCode'
			            },
			            {
			            	fieldLabel: '下单日期',
			            	name: 'orderDate',
			            	xtype: 'datefield',
			            	allowBlank: false,
			            	bind: {
			            		value: '{billRow.orderDate}'
			            	}
			            },

			            {
			            	fieldLabel: '订单币种',
			            	name: 'currencyNo',
			            	xtype: 'extcombox',
			            	allowBlank: true,
			            	bind: {
			            		value: '{billRow.currencyNo}'
			            	},
			            	displayvalue: Hc.mdmPath + 'bas_currency/listAll.json',
			            	displaymember: 'currencyName',
			            	valuemember: 'currencyNo'
			            },
			            {
			            	fieldLabel: '收款条件',
			            	name: 'paymentClauseNo',
			            	xtype: 'extcombox',
			            	allowBlank: true,
			            	bind: {
			            		value: '{billRow.paymentClauseNo}'
			            	},
			            	store: paymentStore,
			            	displaymember: 'paymentClauseName',
			            	valuemember: 'paymentClauseNo'
			            },
			            {
			            	fieldLabel: '订单来源',
			            	name: 'orderSource',
			            	xtype: 'extcombox',
			            	allowBlank: false,
			            	bind: {
			            		value: '{billRow.orderSource}'
			            	},
			            	displayvalue: "0=手工新增:1=预处理"
			            },
			            /*{
			            	name: 'operateDate',
			            	bind: {
			            		value: '{billRow.operateDate}'
			            	},
			            	xtype: 'datefield',
			            	fieldLabel: '业务日期'
			            },*/
			            {
			            	fieldLabel: '要求交期',
			            	name: 'deliverDate',
			            	xtype: 'datefield',
			            	allowBlank: false,
			            	bind: {
			            		value: '{billRow.deliverDate}'
			            	}
			            },
			            {
			            	name: 'remarks',
			            	fieldLabel: '备注',
			            	xtype: 'textfield',
			            	colspan: 3,
			            	allowBlank: true,
			            	bind: {
			            		value: '{billRow.remarks}'
			            	},
			            	regex: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
			            	//只能输入字母、数字或中文或下划线
			            	regexText: '请输入字母、数字、中文',
			            	maxLength: 60,
			            	enforceMaxLength: true
			            }],
			            //billLoadUrl: Hc.sdsPath + 'bl_co/list.json',
			            billLoadUrl: Hc.sdsPath + 'bl_co/listvo.json?selectVoName=SelectListByVoBlCo&mapperClassType=BlCoMapper',
			            billSaveUrl: Hc.sdsPath + 'bl_co/saveSizeHorizontalData.json',
			            //'bl_co/saveMasterCustomerList.json',
			            billAuditUrl: Hc.sdsPath + 'bl_co/audit.json',
			            billExportUrl: Hc.sdsPath + 'bl_co/do_export.json',
			            billModel: 'Hc_sd.model.BlCo',
			            billSubGrid: ['mastergrid'],
			            hasStatus2: false,
			            editStatus: 10,
			            billType: '170105',
			            gridColumns: [

			                          {
			                        	  dataIndex: 'status',
			                        	  text: '行状态',
			                        	  xtype: 'bllookupedit',
			                        	  displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=order_line_status',
			                        	  displaymember: 'itemName',
			                        	  valuemember: 'itemCode'
			                          },
			                          {
			                        	  dataIndex: 'materialNo',
			                        	  text: '产品编号',
			                        	  editor: {
			                        		  xtype: 'textfield',
			                        		  allowBlank: false,
			                        		  //数据精灵类
			                        		  winTitle: '选择产品',
			                        		  //弹出框标题，默认为"选择器"
			                        		  gridColumns: [{ //弹出框网格的列
			                        			  dataIndex: 'materialNo',
			                        			  text: '产品编号',
			                        			  flex: 0.5
			                        		  },
			                        		  {
			                        			  dataIndex: 'materialName',
			                        			  text: '产品名称',
			                        			  flex: 0.5
			                        		  }],
			                        		  searchItems: [{
			                        			  name: 'materialNo',
			                        			  fieldLabel: '产品编号'
			                        		  },
			                        		  {
			                        			  name: 'materialName',
			                        			  fieldLabel: '产品名称'
			                        		  }],
			                        		  //弹出框的查询面板
			                        		  url: Hc.mdmPath + "bas_material/listAll.json" //后端的服务URL
			                        	  }
			                          },
			                          {
			                        	  dataIndex: 'materialName',
			                        	  text: '产品名称'
			                          },
			                          {
			                        	  dataIndex: 'sizeTypeNo',
			                        	  text: '尺码类别'
			                          },

			                          {
			                        	  dataIndex: 'unitPrice',
			                        	  text: '单价',
			                        	  editor: {
			                        		  allowBlank: false
			                        	  }
			                          },
			                          {
			                        	  dataIndex: 'packingQty',
			                        	  text: '装箱对数',
			                        	  editor: {
			                        		  allowBlank: false
			                        	  }
			                          },
			                          {
			                        	  dataIndex: 'boxQty',
			                        	  text: '箱数',
			                        	  editor: {
			                        		  allowBlank: false
			                        	  }
			                          },
			                          {
			                        	  dataIndex: 'packingType',
			                        	  text: '装箱方式',
			                        	  xtype: 'bllookupedit',
			                        	  displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=packing_type',
			                        	  displaymember: 'itemName',
			                        	  valuemember: 'itemCode',
			                        	  editor: {
			                        		  allowBlank: false
			                        	  }
			                          },
			                          {
			                        	  dataIndex: 'deliverDate',
			                        	  text: '要求交期',
			                        	  xtype: 'blgriddate',
			                        	  editor: {
			                        		  allowBlank: false
			                        	  }
			                          },
			                          {
			                        	  dataIndex: 'pointNo',
			                        	  text: '收货地点',
			                        	  editor: true
			                          },
			                          {
			                        	  dataIndex: 'storeNo',
			                        	  text: '仓库编号',
			                        	  xtype: 'bllookupedit',
			                        	  displayvalue: Hc.mdmPath + 'bas_store/listAll.json',
			                        	  displaymember: 'storeName',
			                        	  valuemember: 'storeNo'
			                          }],
			                          //取消创建、修改四列
			                          gridHasCreator:false,
			                          gridHasModifier:false,
			                          gridPrimaryKey: 'lineId',
			                          gridModel: 'Hc_sd.model.BlCoDtl',
			                          gridLoadUrl: Hc.sdsPath + 'bl_co_dtl/listvo.json',
			                          gridMSizeIdx: 5

		});
		me.callParent();
	}
});