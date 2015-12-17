package com.hc.scm.sd.dao.model;


import com.hc.scm.sd.dao.entity.BlProductAdvpriceDtl;
/**
 * Description: 价格策略单--单据双击带出"产品名称"
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-04-20 19:27:21
 * @version 1.0.0
 */
public class BlProductAdvpriceDtlModel extends BlProductAdvpriceDtl{

	private String materialName;
	private String unitName;
	public String getMaterialName() {
		return materialName;
	}
	public void setMaterialName(String materialName) {
		this.materialName = materialName;
	}
	public String getUnitName() {
		return unitName;
	}
	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}
    	
}
