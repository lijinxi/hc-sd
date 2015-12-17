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