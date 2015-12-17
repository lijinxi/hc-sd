/**
 * Description: 主框架应用程序
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_sd.Application', {
    extend: 'Ext.app.Application',
    name: 'Hc_sd',
    

    appFolder:'resources/app',

    init: function() {
        var me = this;
        me.setDefaultToken('sdordermettinginfo');
        Ext.setGlyphFontFamily('FontAwesome');
       // Ext.QuickTips.init();
    },

    launch: function () {

    }
});

/**
 * Description: 销售订单主表
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-24 11:47:39
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.BlCo', {
    extend: 'Ext.data.Model',
    alias: 'model.blco',
     fields: [
         {name: 'lineId',  type: 'int'},
         {name: 'billNo', text: '单据编号', type: 'string'},
         {name: 'billTypeNo', text: '单据类型', type: 'string'},
         {name: 'refBillNo', text: '相关单据编码', type: 'string'},
         {name: 'refBillTypeNo', text: '相关单据类型', type: 'string'},
         {name: 'contractNo', text: '合同号', type: 'string'},
         {name: 'brandNo', text: '品牌编号', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'orderType', text: '订单类型', type: 'string'},
         {name: 'billStatus', text: '最低状态', type: 'string'},
         {name: 'billStatusMax', text: '最高状态', type: 'string'},
         {name: 'customerNo', text: '客户编号', type: 'string'},
         {name: 'orderDate', text: '下单日期', type: 'date'},
         {name: 'currencyNo', text: '订单币种', type: 'string'},
         {name: 'paymentClauseNo', text: '收款条件编号', type: 'string'},
         {name: 'orderSource', text: '订单来源', type: 'int'},
         {name: 'deliverDate', text: '要求交期', type: 'date'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });
/**
 * Description: 销售订单明细表(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-04-09 10:19:36
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.BlCoDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.blcodtl',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'billNo', text: '单据编号', type: 'string'},
         {name: 'orderNo', text: '单据明细序号(由系统控制产生)', type: 'int'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'sizeNo', text: '尺码编号', type: 'string'},
         {name: 'sizeQty', text: '尺码数量', type: 'int'},
         {name: 'seqNo', text: '序号(订单行号)', type: 'int'},
         {name: 'sizeTypeNo', text: '尺码类别编号', type: 'string'},
         {name: 'status', text: '行状态(取数据字典order_line_status)', type: 'string'},
         {name: 'unitPrice', text: '单价', type: 'number'},
         {name: 'packingQty', text: '装箱对数', type: 'int'},
         {name: 'boxQty', text: '箱数', type: 'int'},
         {name: 'packingType', text: '装箱方式(取数据字典packing_type)', type: 'string'},
         {name: 'deliverDate', text: '交货日期', type: 'date'},
         {name: 'pointNo', text: '收货地点(根据订单类型决定是关联还是直接取值)', type: 'string'},
         {name: 'storeNo', text: '仓库编号', type: 'string'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间', type: 'string'},
         ]
  });
/**
 * Description: 销售订单预处理(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-20 15:41:09
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.BlCoProcess', {
    extend: 'Ext.data.Model',
    alias: 'model.blcoprocess',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'brandNo', text: '品牌编号', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'seqNo', text: '序号', type: 'int'},
         {name: 'billLineStatus', text: '订单预处理状态（取字典process_status）', type: 'string'},
         {name: 'orderDate', text: '下单日期'},
         {name: 'deliverDate', text: '要求交期'},
         {name: 'contractNo', text: '客户订单号', type: 'string'},
         {name: 'orderType', text: '订单类型(取数据字典order_type)', type: 'string'},
         {name: 'orderNo', text: '销售订单号', type: 'string'},
         {name: 'materialNo', text: '产品编码', type: 'string'},
         {name: 'customerNo', text: '客户编号', type: 'string'},
         {name: 'sizeNo', text: '尺码编号', type: 'string'},
         {name: 'sizeQty', text: '尺码数量', type: 'int'},
         {name: 'sizeTypeNo', text: '尺码类别编号(尺码组)', type: 'string'},
         {name: 'unitPrice', text: '单价', type: 'float'},
         {name: 'packingQty', text: '装箱对数', type: 'int'},
         {name: 'boxQty', text: '箱数', type: 'int'},
         {name: 'packingType', text: '装箱方式(取数据字典packing_type)', type: 'string'},
         {name: 'pointNo', text: '收货仓(根据订单类型决定是关联还是直接取值)', type: 'string'},
         {name: 'billCompany', text: '开票公司', type: 'string'},
         {name: 'processResult', text: '预处理结果', type: 'string'},
         {name: 'creator', text: '创建人', type: 'string'},
         {name: 'createTime', text: '创建时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ],
    idProperty: 'appNo',
    identifier: 'negative'
  });
/**
 * Description: 价格策略单主表
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-04-13 14:28:55
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.BlProductAdvprice', {
    extend: 'Ext.data.Model',
    alias: 'model.blproductadvprice',
     fields: [
         {name: 'lineId', text: '行id(主键) ', type: 'int'},
         {name: 'billNo', text: '单据编号 ', type: 'string'},
         {name: 'billTypeNo', text: '单据类型 ', type: 'string'},
         {name: 'currencyNo', text: '币别编号(取bas_currency表） ', type: 'string'},
         {name: 'brandNo', text: '品牌编号 ', type: 'string'},
         {name: 'divisionNo', text: '事业部编号(前端不显示) ', type: 'string'},
         {name: 'priceType', text: '价格类型(取数据字典 price_type,1客户+产品编码) ', type: 'string'},
         {name: 'customerNo', text: '客户（取bas_customer表） ', type: 'string'},
         {name: 'effectiveDate', text: '生效日期', type: 'date'},
         {name: 'billStatus', text: '单据状态(取数据字典 bill_status)', type: 'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
   
  });
/**
 * Description: 价格策略单明细表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-04-13 14:28:55
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.BlProductAdvpriceDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.blproductadvpricedtl',
     fields: [
         {name: 'lineId', text: '行id(主键) ', type: 'int'},
         {name: 'divisionNo', text: '事业部编号(前端不显示) ', type: 'string'},
         {name: 'billNo', text: '单据编号 ', type: 'string'},
         {name: 'orderNo', text: '单据明细序号(由系统控制产生) ', type: 'int'},
         {name: 'materialNo', text: '物料编号 ', type: 'string'},
         {name: 'unitNo', text: '计量单位(取bas_unit表）', type: 'string'},
         {name: 'priceMode', text: '价格方式（取数据字典 price_mode,1单价；2.折扣率；3折扣额）', type: 'string'},
         {name: 'discountRate', text: '折扣率 ', type: 'float',allowNull:true},
         {name: 'discountAmount', text: '折扣额', type: 'float',allowNull:true},
         {name: 'unitPrice', text: '价格', type: 'float',allowNull:true},
         ]
   
  });
/**
 * Description: 成品价格维护单(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-11 17:47:37
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.BlProductPrice', {
    extend: 'Ext.data.Model',
    alias: 'model.blproductprice',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'billNo', text: '单据编号', type: 'string'},
         {name: 'billTypeNo', text: '单据类型', type: 'string',defaultValue:'170501'},
         {name: 'brandNo', text: '品牌编号', type: 'string'},
         {name: 'divisionNo', text: '事业部编号(前端不显示)', type: 'string'},
         {name: 'currencyNo', text: '币别编号', type: 'string'},
         {name: 'effectiveDate', text: '生效日期'},
         {name: 'billStatus', text: '单据状态(取数据字典 bill_status)', type: 'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ],
    idProperty: 'appNo',
    identifier: 'negative'
  });
/**
 * Description: 成品价格维护单明细表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-11 17:47:37
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.BlProductPriceDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.blproductpricedtl',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'billNo', text: '单据编号', type: 'string'},
         {name: 'orderNo', text: '单据明细序号(由系统控制产生)', type: 'int'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'unitNo', text: '计量单位(取bas_unit表）', type: 'string'},
         {name: 'unitPrice', text: '价格', type: 'float'},
         {name: 'divisionNo', text: '事业部', type: 'string'},
         ],
    idProperty: 'appNo',
    identifier: 'negative'
  });
/**
 * Description: 订单类型规则配置表(订单会款号信息表)(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-25 08:51:21
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.SdOrderMettingInfo', {
    extend: 'Ext.data.Model',
    alias: 'model.sdordermettinginfo',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'brandNo', text: '品牌', type: 'string'},
         {name: 'seasonNo', text: '年季', type: 'string'},
         {name: 'styleNo', text: '款号', type: 'string'},
         {name: 'categoryNo', text: '鞋类', type: 'string'},
         {name: 'startDate', text: '订货会起始日期',type:'date'},
         {name: 'endDate', text: '订货会结束日期',type:'date'},
         {name: 'reorderStartDate', text: '补单开始日期',type:'date'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: (app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Hc.
 * @author:     he.xy
 * @date:  2015-4-17 09:51:21
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.SdProductPrice', {
    extend: 'Ext.data.Model',
    alias: 'model.sdproductprice',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'materialNo', text: '产品编码', type: 'string'},
         {name: 'materialName', text: '产品名称', type: 'string'},
         {naem: 'genderType',text:'男/女',type:'string'},
         {name: 'brandName', text: '品牌', type: 'string'},
         {name: 'categoryNo', text: '鞋类', type: 'string'},
         {name: 'unitNo', text: '计量单位',type:'string'},
         {name: 'currencyName', text: '币别',type:'string'},
         {name: 'unitPrice', text: '单价',type:'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '首次生效时间',type:'string'},
         {name: 'modifyTime', text: '最新生效时间'},
         ]
  });
/**
 * Description: 款号与外箱关系表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-03-25 08:45:46
 * @version 1.0.0
 */
Ext.define('Hc_sd.model.SdStyleBox', {
    extend: 'Ext.data.Model',
    alias: 'model.sdstylebox',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'brandDtlNo', text: '子品牌编号(对应M3商标)', type: 'string'},
         {name: 'styleNo', text: '款号代码', type: 'string'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         //{name: 'materialName',text:'物料名称',type:'string'},
         {name: 'skuQty', text: '每箱对数(SKU数)', type: 'int'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
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
/**
 * Description: 销售订单明细表Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-04-09 10:19:36
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.blco.BlCoDtlController', {
	extend: 'Hc_Common.view.BaseBillDetailPageController',
	alias: 'controller.blcodtl'	
});
/**
 * Description: 销售订单明细表Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-04-09 10:19:36
 * @version 1.0.0
 */ 
Ext.define('Hc_sd.view.blco.BlCoDtlModel', {
    extend: 'Hc_Common.view.BaseBillDetailPageModel',
    alias: 'viewmodel.blcodtl'
  });
Ext.define('Hc_sd.view.blco.BlCoList', {
    extend: 'Hc_Common.view.BaseBillListPage',
    alias: 'widget.blcolist',
    
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
/**
 * Description: ��д���ļ�����;
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-24 11:47:39
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.blco.BlCoListController', {
    extend: 'Hc_Common.view.BaseBillListPageController',
    alias: 'controller.blcolist'

});
/**
 * Description: ��д���ļ�����;
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-24 11:47:39
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.blco.BlCoListModel', {
    extend: 'Hc_Common.view.BaseBillListPageModel',
    alias: 'viewmodel.blcolist'
  });
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

/**
 * Description: 销售订单预处理Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-20 15:41:09
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.blcoprocess.BlCoProcessController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.blcoprocess',
    init:function(){
    	var me = this,
        objList = me.getObjList();
        if (!objList) return;
        if (!me.workObject && objList.mastergrid) {
            me.workObject = objList.mastergrid;
        }

	   	//隐藏按钮
	   	objList.btnAdd.hidden=true;
		objList.btnOther1.setVisible(true);
		objList.btnOther1.text='订单预处理';  	
    },
    onBtnOther1: function (btn) {
    	var me = this,
        objList = me.getObjList(),
    	store = me.workObject.store,
    	lineIdSting='',
    	url=Hc.sdsPath + 'bl_co_process/getbl_co_process.json',
    	length=objList.mastergrid.getSelectionModel().selected.length,
    	selected=objList.mastergrid.getSelectionModel().selected;
    	if(length){
    	for(i=0;i<length;i++){
    		lineId=selected.items[i].data.lineId;
    		
    		if(i==(length-1)){
    			lineIdSting+=lineId;
    		}
    		else{
    			lineIdSting+=lineId+',';
    		}
    		
    	}
    	}
    	if(lineIdSting){
            Hc.callServer({
                url: url,
                method: 'POST',
                params: {
                	'lineIdSting':lineIdSting
                },
                success: function(response) {
                    var ob = Ext.decode(response.responseText);
/*                    if (ob.entity != null) {
                        record.set('materialName', ob.entity.materialName);
                        record.set('unitName', ob.entity.unitName);
                        record.set('unitNo', ob.entity.normalUnit);
                    } else {
                        txtobj.setValue(originalValue);
                        record.set('materialNo', originalValue);
                        return;
                    }*/
                }

            });
    	}
    
    },
  });
/**
 * Description: 销售订单预处理Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-20 15:41:09
 * @version 1.0.0
 */ 
Ext.define('Hc_sd.view.blcoprocess.BlCoProcessModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.blcoprocess'
  });
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
/**
 * Description: Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-04-13 14:28:55
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.blproductadvprice.BlProductAdvpriceController', {
    extend: 'Hc_Common.view.BaseBillListPageController',
    alias: 'controller.blproductadvprice'
  });
/**
 * Description: Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-04-13 14:28:55
 * @version 1.0.0
 */ 
Ext.define('Hc_sd.view.blproductadvprice.BlProductAdvpriceModel', {
    extend: 'Hc_Common.view.BaseBillListPageModel',
    alias: 'viewmodel.blproductadvprice'
    
  });
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
/**
 * Description: Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-04-13 14:28:55
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.blproductadvpricedtl.BlProductAdvpriceDtlController', {
	extend: 'Hc_Common.view.BaseBillDetailPageController',
	alias: 'controller.blproductadvpricedtl',
	init:function(){
		var me = this;
		me.callParent(arguments);
	},
onGridBeforeEdit: function (sender, e) {
	var me = this;
	me.callParent(arguments);
	var record = e.record;
	var priceMode = record.get('priceMode');
	if(priceMode&&!Ext.isEmpty(priceMode)) {
		if(priceMode==1){
			me.lookupReference('unitPrice').setEditor(true);
			me.lookupReference('discountRate').setEditor(false);
			me.lookupReference('discountAmount').setEditor(false);
		}
		if(priceMode==2){
			me.lookupReference('unitPrice').setEditor(false);
			me.lookupReference('discountRate').setEditor(true);
			me.lookupReference('discountAmount').setEditor(false);
		}
		if(priceMode==3){
			me.lookupReference('unitPrice').setEditor(false);
			me.lookupReference('discountRate').setEditor(false);
			me.lookupReference('discountAmount').setEditor(true);
		}

	}
    else{
		me.lookupReference('unitPrice').setEditor(false);
		me.lookupReference('discountRate').setEditor(false);
		me.lookupReference('discountAmount').setEditor(false);   
   }
},
onGridAfterEdit:function(editor, e)
{   
	var me = this;
	me.callParent(arguments);
	if(e.field == 'priceMode') {
		var record = e.record;
		var priceMode = record.get('priceMode');
		if(priceMode){
			if(priceMode==1){
				me.lookupReference('unitPrice').setEditor(true);
				me.lookupReference('discountRate').setEditor(false);
				me.lookupReference('discountAmount').setEditor(false);
				record.set('discountRate',0);
				record.set('discountAmount',0);

			}
			if(priceMode==2){
				me.lookupReference('unitPrice').setEditor(false);
				me.lookupReference('discountRate').setEditor(true);
				me.lookupReference('discountAmount').setEditor(false);
				record.set('unitPrice',0);
				record.set('discountAmount',0);

			}
			if(priceMode==3){
				me.lookupReference('unitPrice').setEditor(false);
				me.lookupReference('discountRate').setEditor(false);
				me.lookupReference('discountAmount').setEditor(true);
				record.set('discountRate',0);
				record.set('unitPrice',0);

			}
		}

	}
	me.lookupReference('unitPrice').setEditor(true);
	me.lookupReference('discountRate').setEditor(true);
	me.lookupReference('discountAmount').setEditor(true);
},

//新增数据
initAddData:function(newobj){
    if(this.callParent(arguments)===false) return false;
    newobj.set('divisionNo',this.view.lookupReference('divisionNoBill').getValue());
}
});
/**
 * Description: Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-04-13 14:28:55
 * @version 1.0.0
 */ 
Ext.define('Hc_sd.view.blproductadvpricedtl.BlProductAdvpriceDtlModel', {
    extend: 'Hc_Common.view.BaseBillDetailPageModel',
    alias: 'viewmodel.blproductadvpricedtl'
    
  });
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


/**
 * Description: 成品价格维护单Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-11 17:47:37
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.blproductprice.BlProductPriceController', {
    extend: 'Hc_Common.view.BaseBillListPageController',
    alias: 'controller.blproductprice'
  });
/**
 * Description: 成品价格维护单Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-11 17:47:37
 * @version 1.0.0
 */ 
Ext.define('Hc_sd.view.blproductprice.BlProductPriceModel', {
    extend: 'Hc_Common.view.BaseBillListPageModel',
    alias: 'viewmodel.blproductprice'
  });
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
/**
 * Description: 成品价格维护单明细表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-11 17:47:37
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.blproductpricedtl.BlProductPriceDtlController', {
    extend: 'Hc_Common.view.BaseBillDetailPageController',
    alias: 'controller.blproductpricedtl',
    init:function(){
    	var me = this,objList= me.getObjList();
    	me.callParent(arguments);
    	//me.workObject.on('edit','onGridAfterEdit',me);
    },
       /* onGridAfterEdit:function(editor, obj)
        {   
        	
        	if(obj.field == 'materialNo' && obj.value != obj.originalValue) {
    			var record = obj.record;
    			var url =Hc.mdmPath + 'bas_material/getvo.json?selectVoName=SelectOneModelByVoBasMeteralInfo&mapperClassType=BasMaterialMapper';
    			url+='&materialNo='+obj.value;
    			this.callServer({
    				url:url,    			
    				success:function(response){
    					//try{
    					var ob = Ext.decode(response.responseText);
    					if(ob.entity !=null){
										record.set('materialName', ob.entity.materialName);
										record.set('genderType', ob.entity.genderType);
										record.set('categoryName', ob.entity.categoryName);
										record.set('unitNo', ob.entity.normalUnit);
										
    						}else{
    							
    								record.set('materialNo', obj.originalValue);
    								Ext.Msg.alert("产品编号不存在!!");
    								return;
    							}
    					
    				//}catch(e){}
    				}  		 			
    		
        	});
        	}
        },*/
    	  initAddData: function (newObj) {
    		  if(this.callParent(arguments)===false) return false;
    		var brand = this.view.billPanel.store.data.items[0].data.divisionNo;
    		  var billNum = this.view.billPanel.store.data.items[0].data.billNo;
    		 // this.view.lookupReference('brandNoBi').getValue();
    		 // this.view.lookupReference('billNoBi').getValue();
    		  	newObj.set('divisionNo',brand);
    		  	newObj.set('billNo',billNum);
    		  	newObj.set('materialNo','');
    		  	newObj.set('materialName','');
    		  	newObj.set('genderType','');
    		  	newObj.set('categoryName','');
    		  	newObj.set('unitNo','');
    		  	newObj.set('unitPrice',0);
    		
    	  }
    	
});

/**
 * Description: 成品价格维护单明细表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-11 17:47:37
 * @version 1.0.0
 */ 
Ext.define('Hc_sd.view.blproductpricedtl.BlProductPriceDtlModel', {
    extend: 'Hc_Common.view.BaseBillDetailPageModel',
    alias: 'viewmodel.blproductpricedtl'
  });
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
/**
 * Description: 订单类型规则配置表(订单会款号信息表)Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-25 08:51:21
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.sdordermettinginfo.SdOrderMettingInfoController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.sdordermettinginfo',
    init: function() {
        var me = this,
        objList = me.getObjList();
        me.callParent(arguments);
        me.workObject.on('beforeedit', 'onGridBeforeEdit', me);
    },
    /* 编辑之前 */
    onGridBeforeEdit: function(sender, e) {
        if (this.gridCannotEditKeyField(e) === false) return false;
        if (e.field == 'endDate') {
            var record = e.record;
            var startDate = record.get('startDate');
            if (Ext.isEmpty(startDate)) {
                Ext.Msg.alert('提示', '请先选择订货会起始日期');
                return false;

            }

        }
    },
    //编辑之后
    onGridAfterEdit: function(editor, e) {

        if (e.field == 'startDate') {
            var record = e.record;
            var startDate = record.get('startDate');
            var endDate = record.get('endDate');
            if (!Ext.isEmpty(endDate)) {
                if (startDate > endDate) {
                    record.set('startDate', '');
                    Ext.Msg.alert('提示', '起始日期不能大于结束日期');
                    return false;
                }
            }

        }

        if (e.field == 'endDate') {
            var record = e.record;
            var startDate = record.get('startDate');
            var endDate = record.get('endDate');
            if (endDate < startDate) {
                record.set('endDate', '');
                Ext.Msg.alert('提示', '结束日期不能小于起始日期');
                return false;
            }

        }

        this.checkKeyValue(e);
    }
});
/**
 * Description: 订单类型规则配置表(订单会款号信息表)Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-25 08:51:21
 * @version 1.0.0
 */ 
Ext.define('Hc_sd.view.sdordermettinginfo.SdOrderMettingInfoModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.sdordermettinginfo'
  });
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

/**
 * Description: Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-25 08:51:21
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.sdproductprice.SdProductPriceController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.sdproductprice',
    
  });
/**
 * Description: Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Hc.
 * @author:     he.xy
 * @date:  2015-03-25 08:51:21
 * @version 1.0.0
 */ 
Ext.define('Hc_sd.view.sdproductprice.SdProductPriceModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.sdproductprice'
  });
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

/**
 * Description: 款号与外箱关系表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-03-25 08:45:46
 * @version 1.0.0
 */
Ext.define('Hc_sd.view.sdstylebox.SdStyleBoxController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.sdstylebox',
    init:function(){
    	var me = this,objList= me.getObjList();
    	me.callParent(arguments);
    	me.workObject.on('edit','onGridAfterEdit',me);
    },
    
    onGridAfterEdit:function(editor, obj)
    {
    	if(obj.field == 'materialno') {
			var record = obj.record;
			var materialNo = record.get('materialno');
			var sstore = Ext.create('Hc_Common.store.Base', {
			    fields: ["materialno", "materialname"],
                proxy:{
                    url:Hc.mdmPath+"bas_material/list.json"
                }
			});
			
			sstore.proxy.extraParams["materialno"]=materialNo;
			sstore.reload();
			sstore.reload({
			    scope: this,
			    callback: function(records, operation, success) {
			    	if (records.length>0)
			    	{
			    		obj.record.set('materialname',records[0].data.zoneName);
			    	}
			    	else
			    	{
			    		obj.record.set('materialname',"");
			    	}
			    }
			});
		}
    }
  });
/**
 * Description: 款号与外箱关系表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-03-25 08:45:46
 * @version 1.0.0
 */ 
Ext.define('Hc_sd.view.sdstylebox.SdStyleBoxModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.sdstylebox'
  });
