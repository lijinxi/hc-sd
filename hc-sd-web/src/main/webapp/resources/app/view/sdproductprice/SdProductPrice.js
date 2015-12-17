/**
 * Description: 产品价格查询(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Hc.
 * @author:     he.xy
 * @date:  2015-0-17 08:51:21
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.sdproductprice.SdProductPrice', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.sdproductprice',
	requires: [
		'Hc_sd.model.SdProductPrice',
		'Hc_sd.view.sdproductprice.SdProductPriceController',
		'Hc_sd.view.sdproductprice.SdProductPriceModel'
	],
	controller: 'sdproductprice',
	viewModel: {
		type: 'sdproductprice'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			//查询面板开始
			searchItems: [{
				fieldLabel : '产品编码',
				name : 'materialNo',
	   			xtype:'textfield',
				},
			    {
				fieldLabel:'产品名称',
				name:'materialName',
				xtype:'textfield',
			    },{
		 	   		fieldLabel : '品牌',
		 	        name : 'brandNo',
		 	        xtype:'extcombox',
		 	        displayvalue:Hc.mdmPath+'bas_brand/list.json',
		 	        displaymember:'brandCname',
		 	        valuemember:'brandNo'
		        },{
				  fieldLabel : '币别',
				  name : 'currencyNo',
				  xtype:'extcombox',
				  displayvalue:Hc.mdmPath+'bas_currency/list.json',
				  displaymember:'currencyName',
				  valuemember:'currencyNo'
				    },
				
				    {
						xtype: 'datefield',
						fieldLabel: '最新生效时间',
						name: 'modifyFromTime',
						vtype:'compareTo',     //数据验证方式，compareTo
						compareTo:'modifyToTime', // 被比较的输入框控件name
						compareType:'<=',      // 比较方式，有>=,<=,>,<,= 默认为等于
						compareError:'开始日期不能大于结束日期,请重新选择' //比较不通过时，返回提示信息
					},{
						xtype: 'datefield',
						fieldLabel: '   到     ',
						name: 'modifyToTime',
						vtype:'compareTo',     //数据验证方式，compareTo
						compareTo:'modifyFromTime', // 被比较的输入框控件name
						compareType:'>=',      // 比较方式，有>=,<=,>,<,= 默认为等于
						compareError:'结束日期不能小于开始日期,请重新选择' //比较不通过时，返回提示信息
					} ],
		//查询面板结束
		
		gridModel : 'Hc_sd.model.SdProductPrice',
		gridColumns:[
				{dataIndex: 'materialNo', text: '产品编号'},
				{dataIndex: 'materialName', text: '产品名称'},
				{dataIndex: 'genderType', text: '男/女'},
				{dataIndex: 'categoryNo', text: '鞋小类'},
				{dataIndex: 'brandName', text: '品牌'},
				{dataIndex: 'unitNo', text: '计量单位'},
				{dataIndex: 'currencyName', text: '币别'},
				{dataIndex: 'unitPrice', text: '单价'},
				{dataIndex: 'createTime', text: '首次生效时间',width:120},
				{dataIndex: 'modifyTime', text: '最新生效时间',width:120}
			],
			gridPrimaryKey : 'materialNo',
			gridUnionKey : '',

			gridLoadUrl: Hc.sdsPath + 'sd_product_price/listvo.json?selectVoName=SelectListByVoSdProductPrice&mapperClassType=SdProductPriceMapper', //后端的服务URL'
			gridSaveUrl : Hc.sdsPath+'sd_product_price/batchOperate.json',
			gridExportUrl : Hc.sdsPath+'sd_product_price/do_export.json',
			gridImportUrl : '',

			searchColumn : 4,
			gridEditModel : 'cell',
			gridCanDrag : false,
			gridCanEdit : true,
			gridCanAdd : true,
			gridCanDelete : true,
			// "SINGLE" / "SIMPLE"/"MULTI" / "checkboxmodel"
			gridSelModel : 'MULTI'
		});

		me.callParent();
	}
});
