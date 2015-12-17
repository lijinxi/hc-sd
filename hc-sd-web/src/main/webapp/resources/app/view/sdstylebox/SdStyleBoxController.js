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