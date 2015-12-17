/**
 * Description: 成品价格维护单(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-11 17:47:37
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.blproductprice.BlProductPrice', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.blproductprice',
	requires: [
	           'Hc_sd.model.BlProductPrice',
	           'Hc_sd.view.blproductprice.BlProductPriceController',
	           'Hc_sd.view.blproductprice.BlProductPriceModel'
	           ],
	           controller: 'blproductprice',
	           viewModel: {
	        	   type: 'blproductprice'
	           },
	           initComponent: function () {
	        	   var me= this;
	        	   Ext.apply(me, {
	        		   searchItems: [
	        		               /*  {    
	        		                	 fieldLabel : '单据状态',
	        		                	 name : 'billStatus',
	        		                	 xtype:'extcombox',
	        		                	 displayvalue:Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=co_bill_status',
	        		                	 displaymember:'itemName',
	        		                	 valuemember:'itemCode'
	        		                 },

	        		                 {xtype: 'textfield',name: 'billNo',fieldLabel: '单据编号',
	        		                	 regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
	        		                	 regexText:'请输入字母或数字',
	        		                	 maxLength:20,
	        		                	 enforceMaxLength:true	
	        		                 },
	        		                 {xtype: 'textfield',name: 'creator', fieldLabel: '创建人'},
	        		                 {xtype: 'textfield',name: 'auditor', fieldLabel: '审核人'},
	        		                 {  xtype: 'datefield',
	        		                	 fieldLabel: '创建日期',
	        		                	 name: 'cFromTime',
	        		                	 vtype:'compareTo',     //数据验证方式，compareTo
	        		                	 compareTo:'cToTime', // 被比较的输入框控件name
	        		                	 compareType:'<=',      // 比较方式，有>=,<=,>,<,= 默认为等于
	        		                	 compareError:'创建日期不能大于结束日期,请重新选择' //比较不通过时，返回提示信息
	        		                 },{
	        		                	 xtype: 'datefield',
	        		                	 fieldLabel: '   至     ',
	        		                	 name: 'cToTime',
	        		                	 vtype:'compareTo',     //数据验证方式，compareTo
	        		                	 compareTo:'cFromTime', // 被比较的输入框控件name
	        		                	 compareType:'>=',      // 比较方式，有>=,<=,>,<,= 默认为等于
	        		                	 compareError:'小于创建日期,请重新选择' //比较不通过时，返回提示信息
	        		                 } ,
	        		                 {  xtype: 'datefield',
	        		                	 fieldLabel: '审核日期',
	        		                	 name: 'sFromTime',
	        		                	 vtype:'compareTo',     //数据验证方式，compareTo
	        		                	 compareTo:'sToTime', // 被比较的输入框控件name
	        		                	 compareType:'<=',      // 比较方式，有>=,<=,>,<,= 默认为等于
	        		                	 compareError:'审核日期不能大于结束日期,请重新选择' //比较不通过时，返回提示信息
	        		                 },{
	        		                	 xtype: 'datefield',
	        		                	 fieldLabel: '   至     ',
	        		                	 name: 'sToTime',
	        		                	 vtype:'compareTo',     //数据验证方式，compareTo
	        		                	 compareTo:'sFromTime', // 被比较的输入框控件name
	        		                	 compareType:'>=',      // 比较方式，有>=,<=,>,<,= 默认为等于
	        		                	 compareError:'小于审核日期,请重新选择' //比较不通过时，返回提示信息
	        		                 } ,*/
	        		                 {  xtype: 'datefield',
	        		                	 fieldLabel: '生效日期',
	        		                	 name: 'xFromTime',
	        		                	 vtype:'compareTo',     //数据验证方式，compareTo
	        		                	 compareTo:'xToTime', // 被比较的输入框控件name
	        		                	 compareType:'<=',      // 比较方式，有>=,<=,>,<,= 默认为等于
	        		                	 compareError:'下单日期不能大于结束日期,请重新选择' //比较不通过时，返回提示信息
	        		                 },{
	        		                	 xtype: 'datefield',
	        		                	 fieldLabel: '   至     ',
	        		                	 name: 'xToTime',
	        		                	 vtype:'compareTo',     //数据验证方式，compareTo
	        		                	 compareTo:'xFromTime', // 被比较的输入框控件name
	        		                	 compareType:'>=',      // 比较方式，有>=,<=,>,<,= 默认为等于
	        		                	 compareError:'小于下单日期,请重新选择' //比较不通过时，返回提示信息
	        		                 } ,

	        		                 {
	        		                	 fieldLabel : '品牌',
	        		                	 name : 'brandNo',
	        		                	 xtype:'extcombox',
	        		                	 displayvalue:Hc.mdmPath+'bas_brand/list.json',
	        		                	 displaymember:'brandCname',
	        		                	 valuemember:'brandNo'
	        		                 },
	        		                 {
	        		                	 fieldLabel : '币别',
	        		                	 name : 'currencyNo',
	        		                	 xtype:'extcombox',
	        		                	 displayvalue:Hc.mdmPath+'bas_currency/list.json',
	        		                	 displaymember:'currencyName',
	        		                	 valuemember:'currencyNo'
	        		                 },
	        		                 ],
	        		                 gridHasModifier:true,
	        		                 gridHasAuditor:true,
	        		                 gridColumns: [
	        		                              {dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false},hidden:true},
	        		                              /*{
													dataIndex: 'billStatus', 
													text: '状态', xtype:'bllookupedit', 
													bind:{value:'{billRow.billStatus}'},
												    displayvalue:Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=co_bill_status',
								         	        displaymember:'itemName',
								         	        valuemember:'itemCode'
												     },
												  {dataIndex: 'billNo', text: '单据编号'},*/
	        		                               {dataIndex: 'billTypeNo', text: '单据类型',hidden:true},
	        		                               {
	        		                            	   dataIndex: 'brandCname', text: '品牌'
	        		                               },
	        		                               {dataIndex: 'divisionNo', text: '事业部编号(前端不显示)', editor: {allowBlank: false},hidden:true},
	        		                               {
	        		                            	   dataIndex: 'currencyNo', text: '币别',
	        		                            	   xtype:'bllookupedit',
	        		                            	   displayvalue:Hc.mdmPath+'bas_currency/list.json',
	        		                            	   displaymember:'currencyName',
	        		                            	   valuemember:'currencyNo'	
	        		                               },
	        		                               {dataIndex: 'effectiveDate', text: '生效日期', width:140},
	        		                               /*{dataIndex: 'remarks', text: '备注'},
													{dataIndex: 'creator', text: '创建人'},
													{dataIndex: 'createTime', text: '创建时间', width:140},
													{dataIndex: 'modifier', text: '修改人',hidden:true},
													{dataIndex: 'modifyTime', text: '修改时间', width:140,hidden:true},
													{dataIndex: 'auditor', text: '审核人'},
													{dataIndex: 'auditTime', text: '审核时间', width:140},*/
	        		                               ],
	        		                               gridModel: 'Hc_sd.model.BlProductPrice',
	        		                               gridLoadUrl: Hc.sdsPath + 'bl_product_price/list.json',
	        		                               dtlName:'blproductpricedtl',
	        		                               showModel:'selftab'
									        	   });
									        	   me.callParent();
									           }
								});

