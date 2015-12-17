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