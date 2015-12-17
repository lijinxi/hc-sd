package com.hc.scm.sd.dao.model;

import com.hc.scm.sd.dao.entity.SdProductPrice;

public class SdProductPriceModel extends SdProductPrice {
	
	private String materialName;
	private String genderType;
	private String brandName;
	private String categoryNo;
	private String currencyName;
	
	
	
	
	public String getMaterialName() {
		return materialName;
	}
	
	public void setMaterialName(String materialName) {
		this.materialName = materialName;
	}
	
	public String getGenderType() {
		return genderType;
	}
	
	public void setGenderType(String genderType) {
		this.genderType = genderType;
	}
	
	public String getBrandName() {
		return brandName;
	}
	
	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}
	
	public String getCategoryNo() {
		return categoryNo;
	}
	
	public void setCategoryNo(String categoryNo) {
		this.categoryNo = categoryNo;
	}
	
	public String getUnitNo() {
		return currencyName;
	}
	public void setUnitNo(String currencyName) {
		this.currencyName = currencyName;
	}

}
