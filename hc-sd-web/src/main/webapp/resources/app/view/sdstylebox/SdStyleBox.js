/**
 * Description: 款号与外箱关系表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-03-25 14:52:44
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.sdstylebox.SdStyleBox', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.sdstylebox',
	requires: [
		'Hc_sd.model.SdStyleBox',
		'Hc_sd.view.sdstylebox.SdStyleBoxController',
		'Hc_sd.view.sdstylebox.SdStyleBoxModel'
	],
	controller: 'sdstylebox',
	viewModel: {
		type: 'sdstylebox'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [{
			fieldLabel : '品牌',
			name : 'brandDtlNo',
   			xtype:'extcombox',
			displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
			displaymember:'brandCname',
			valuemember:'brandNo'
				
				},{
				xtype:'textfield',
				fieldLabel : '款号代码',
				name : 'styleNo'
				//displayField:'unitName',
				//valueField:'unitNo'
			},{
				xtype:'textfield',
				fieldLabel : '物料编号',
				name : 'materialNo'
				//displayField:'unitName',
				//valueField:'unitNo'
			}],
			gridModel : 'Hc_sd.model.SdStyleBox',
			gridColumns: [
				{dataIndex: 'brandDtlNo', 
					text: '品牌',
					xtype:'bllookupedit',
					displayvalue:Hc.mdmPath+'bas_brand/listAll.json',
					displaymember:'brandCname',
				    valuemember:'brandNo'
				},
				//{dataIndex: 'styleNo', text: '款号代码', editor: {allowBlank: false,maxLength:20,enforceMaxLength:true}},
				{
                    dataIndex: 'styleNo',
                    text: '款号代码',
                    editor: {
                  		 xtype:'searchhelpfield', //数据精灵类
                   		 winTitle: '选择物料',//弹出框标题，默认为"选择器"
                   		 gridColumns:[{  //弹出框网格的列
                   			 dataIndex:'styleNo',
                   			 text:'款号代码',
                   			 flex:0.5
                   		 },{
                   			 dataIndex:'styleName',
                   			 text:'款号名称',
                   			 flex:0.5
                   		 }],
                   		 searchItems:[{name:'materialNo',fieldLabel:'款号代码'},
                   		              {name:'materialName',fieldLabel:'款号名称'}
                   		 ], //弹出框的查询面板
                   		 url:Hc.mdmPath+"bas_style/listAll.json" //后端的服务URL
                   	 }
                },
				
                {
               	 dataIndex: 'materialNo', 
               	 text: '物料编号',
               	 editor: {
               		 xtype:'searchhelpfield', //数据精灵类
               		 winTitle: '选择物料',//弹出框标题，默认为"选择器"
               		 gridColumns:[{  //弹出框网格的列
               			 dataIndex:'materialNo',
               			 text:'物料编号',
               			 flex:0.5
               		 },{
               			 dataIndex:'materialName',
               			 text:'物料名称',
               			 flex:0.5
               		 }],
               		 searchItems:[{name:'materialNo',fieldLabel:'物料编号'},
               		              {name:'materialName',fieldLabel:'物料名称'}
               		 ], //弹出框的查询面板
               		 url:Hc.mdmPath+"bas_material/listAll.json" //后端的服务URL
               	 },
                },
				{dataIndex: 'materialNo', text: '物料名称',readOnly:true,
					xtype:'bllookupedit',
					displayvalue:Hc.mdmPath+'bas_material/listAll.json',
					displaymember:'materialName',
				    valuemember:'materialNo'
					},
				{dataIndex: 'skuQty', text: '每箱对数', 
					editor: 
				    {allowBlank: false,xtype:'numberfield', maxLength:11,enforceMaxLength:true}
				},
				
				{dataIndex: 'orderNo', text: '排列序号', 
					editor:
				    {allowBlank: true,xtype:'numberfield', maxLength:11,enforceMaxLength:true}
			     },
				
			     {dataIndex: 'enableFlag', 
			    	 text: '启用状态', editor: 
			    	 {allowBlank: false,
			    		 xtype: 'combouseflag',
			    		 maxLength:11,
			    		 enforceMaxLength:true},
			    		 renderer: 'renderUseFlag'
			     },
				
			],
			
			gridPrimaryKey: 'lineId',
			gridUnionKey: '',
			
			gridLoadUrl: Hc.sdsPath + 'sd_style_box/list.json',
			gridSaveUrl: Hc.sdsPath + 'sd_style_box/batchOperate.json',
			gridExportUrl:Hc.sdsPath +'sd_style_box/do_export.json',
			gridImportUrl: '',
			
			
			searchColumn: 4,
			gridEditModel: 'cell',
			gridCanDrag: false,
			gridCanEdit: true,
			gridCanAdd: true,
			gridCanDelete: true,
			gridSelModel: 'MULTI'
		});
		
		me.callParent();
	}
});
