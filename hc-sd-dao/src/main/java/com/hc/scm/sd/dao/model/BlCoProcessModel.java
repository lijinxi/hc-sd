package com.hc.scm.sd.dao.model;

import java.io.Serializable;

import com.hc.scm.common.model.BaseModel;
import com.hc.scm.sd.dao.entity.BlCoProcess;

public class BlCoProcessModel extends BlCoProcess{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	
	/*
	 * 示例：
	 * 调用基类的generatorSimpleMapperXML在控制台生成Vo查询的mapper的xml 
	 */
//	public static void main(String[] args) {
//		//System.out.println(generatorSimpleMapperXML(new BlProductPriceDtlModel(),null));
//		//自定义的vo查询
//		System.out.println(generatorSimpleMapperXML(new BlCoProcessModel(),"SelectListByVoBlCoProcess"));
//	}
	
	private String brandCname;
	public String getBrandCname() {
		return brandCname;
	}
	public void setBrandCname(String brandCname) {
		this.brandCname = brandCname;
	}
	public String getDivisionName() {
		return divisionName;
	}
	public void setDivisionName(String divisionName) {
		this.divisionName = divisionName;
	}
	public String getMaterialName() {
		return materialName;
	}
	public void setMaterialName(String materialName) {
		this.materialName = materialName;
	}
	private String divisionName;
	private String materialName;
	private String customerName;
	
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

}
