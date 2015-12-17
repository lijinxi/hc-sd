/**
 * Description: 成品价格维护单明细表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-11 17:47:37
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.blproductpricedtl.BlProductPriceDtl', {
	extend: 'Hc_Common.view.BaseBillDetailPage',
	alias: 'widget.blproductpricedtl',
	requires: [
	           'Hc_sd.model.BlProductPriceDtl',
	           'Hc_sd.view.blproductpricedtl.BlProductPriceDtlController',
	           'Hc_sd.view.blproductpricedtl.BlProductPriceDtlModel'
	           ],
	           controller: 'blproductpricedtl',
	           viewModel: {
	        	   type: 'blproductpricedtl'
	           },
	           initComponent: function () {
	        	   var me= this;
	        	   Ext.apply(me, {
	        		   billItems: [
	        		               {name: 'lineId', fieldLabel: 'lineId',xtype: 'textfield', bind:{value:'{billRow.lineId}'},hidden:true},
	        		               {name: 'billTypeNo', bind:{value:'{billRow.billTypeNo}'}, xtype: 'textfield',allowBlank: false, fieldLabel: '单据类型', regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
	        		            	   regexText:'请输入字母或数字',
	        		            	   maxLength:10,
	        		            	   enforceMaxLength:true,
	        		            	   hidden:true
	        		               },
	        		               {
	        		            	   fieldLabel : '品牌编号',
	        		            	   // reference : 'brandNoBi',
	        		            	   allowBlank: false,
	        		            	   name : 'brandNo',
	        		            	   bind:{value:'{billRow.brandNo}'},
	        		            	   xtype: 'searchhelpfield',//数据精灵类
	        		            	   winTitle:'选择品牌', //弹出框标题，默认为"选择器"
	        		            	   gridColumns:[{    //弹出框网格的列
	        		            		   dataIndex:'brandNo',
	        		            		   text:'品牌编号'
	        		            	   },
	        		            	   {
	        		            		   dataIndex:'brandCname',
	        		            		   text:'品牌名称   '
	        		            	   },
	        		            	   {
	        		            		   dataIndex:'divisionNo',
	        		            		   text:'事业部编号'
	        		            	   },
	        		            	   {
	        		            		   dataIndex:'divisionName',
	        		            		   text:'事业部名称'
	        		            	   }
	        		            	   ],
	        		            	   searchItems:[
	        		            	                {name:'brandNo',fieldLabel:'品牌编号'}	,
	        		            	                {name:'brandCname',fieldLabel:'品牌名称'}		
	        		            	                ], //弹出框的查询面板
	        		            	                otherFields:'brandCname,divisionNo,divisionName', 
	        		            	                url:Hc.mdmPath+'bas_brand_relation/listvo.json?selectVoName=SelectListByVoBasBrandRelation&mapperClassType=BasBrandRelationMapper' //后端的服务URL
	        		               },
	        		               {
	        		            	   fieldLabel : '品牌名称',
	        		            	   name : 'brandCname',
	        		            	   xtype:'textfield',
	        		            	   readOnly:true,
	        		            	   editable:false
	        		               },
	        		               {
	        		            	   fieldLabel : '事业部编号',
	        		            	   name : 'divisionNo',
	        		            	   reference:'brandNoBi',
	        		            	   xtype:'textfield',
	        		            	   bind:{value:'{billRow.divisionNo}'},
	        		            	   readOnly:true,
	        		            	   editable:false,
	        		            	   hidden:true
	        		               },
	        		               {
	        		            	   fieldLabel : '事业部名称',
	        		            	   name : 'divisionName',
	        		            	   xtype:'textfield',
	        		            	   readOnly:true,
	        		            	   editable:false

	        		               },
	        		               {name: 'effectiveDate',bind:{value:'{billRow.effectiveDate}'}, xtype: 'datefield', fieldLabel: '生效日期',allowBlank: false},

	        		               {
	        		            	   fieldLabel : '币别',
	        		            	   name : 'currencyNo',
	        		            	   xtype:'extcombox',
	        		            	   bind:{value:'{billRow.currencyNo}'},
	        		            	   displayvalue:Hc.mdmPath+'bas_currency/list.json',
	        		            	   displaymember:'currencyName',
	        		            	   valuemember:'currencyNo',
	        		            	   allowBlank: false
	        		               },
	        		               {name: 'remarks', fieldLabel: '备注',xtype: 'textfield',
	        		            	   colspan : 3,
	        		            	   width:480,
	        		            	   bind:{value:'{billRow.remarks}'},
	        		            	   regex:/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,  //只能输入字母、数字或中文或下划线
	        		            	   regexText:'请输入字母、数字、中文',
	        		            	   maxLength:60,
	        		            	   enforceMaxLength:true,
	        		            	   editor: {allowBlank: true}

	        		               }
	        		               ],
	        		               billLoadUrl: Hc.sdsPath + 'bl_product_price/list.json',
	        		               billSaveUrl: Hc.sdsPath + 'bl_product_price/saveMasterCustomerList.json',
	        		               billAuditUrl:Hc.sdsPath + 'bl_product_price/audit.json',
	        		               billExportUrl:Hc.sdsPath + 'bl_product_price/do_export.json',
	        		               billModel: 'Hc_sd.model.BlProductPrice',
	        		               billSubGrid:['mastergrid'],
	        		               hasStatus2: false,  //控制显示最高状态
	        		               fieldWidth: 240,
	        		               labelWidth: 80,
	        		               editStatus:10,//默认制单状态
	        		               billType : '170501',
	        		               gridHasMark:false,
	        		               gridHasCreator:false,
	        		               gridHasModifier:false,
	        		               gridColumns: [
	        		                             {dataIndex: 'billNo', text: '单据编号',hidden:true},
	        		                             {dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false},hidden:true},
	        		                             //{dataIndex: 'orderNo', text: '序号', editor: {allowBlank: false},hidden:false},
	        		                             {dataIndex: 'divisionNo', text: '事业部',hidden:true},
	        		                             //{dataIndex: 'materialNo', text: '产品编号', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
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
	        		                            								 record.set('genderType', ob.entity.genderType);
	        		                            								 record.set('categoryName', ob.entity.categoryName);
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
	        		                            							 record.set('genderType', ob.entity.genderType);
	        		                            							 record.set('categoryName', ob.entity.categoryName);
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
	        		                             {dataIndex: 'materialName', text: '产品名称'},
	        		                             {dataIndex: 'genderType', text: '男/女',xtype:"bllookupedit",displayvalue:"F=男:M=女",readOnly:true},
	        		                             {dataIndex: 'categoryName', text: '产品类别'},
	        		                             {dataIndex: 'unitNo', text: '计量单位',
	        		                            	 xtype:'bllookupedit',
	        		                            	 displayvalue:Hc.mdmPath+'bas_unit/list.json',
	        		                            	 displaymember:'unitName',
	        		                            	 valuemember:'unitNo',
	        		                            	 readOnly:true
	        		                             },
	        		                             {dataIndex: 'unitPrice', text: '价格', editor: {allowBlank: false}},

	        		                             ],
	        		                             gridPrimaryKey: 'lineId',
	        		                             gridModel: 'Hc_sd.model.BlProductPriceDtl',
	        		                             gridLoadUrl: Hc.sdsPath + 'bl_product_price_dtl/getp_dtl_list.json'
	        	   });

	        	   me.callParent();
	           }
});