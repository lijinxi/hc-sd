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
