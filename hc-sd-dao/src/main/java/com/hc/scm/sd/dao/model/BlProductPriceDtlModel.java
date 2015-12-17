package com.hc.scm.sd.dao.model;

import java.io.Serializable;

import com.hc.scm.common.model.BaseModel;
public class BlProductPriceDtlModel extends BaseModel implements Serializable {
	
	private static final long serialVersionUID = 1L;
	/*
	 * 示例：
	 * 调用基类的generatorSimpleMapperXML在控制台生成Vo查询的mapper的xml 
	 */
//	public static void main(String[] args) {
//		//System.out.println(generatorSimpleMapperXML(new BlProductPriceDtlModel(),null));
//		//自定义的vo查询
//		//System.out.println(generatorSimpleMapperXML(new BlProductPriceDtlModel(),"SelectListByVoBlPPriceDtl"));
//	}
	

	private String lineId;
	public String getLineId() {
		return lineId;
	}
	public void setLineId(String lineId) {
		this.lineId = lineId;
	}
	public String getBillNo() {
		return billNo;
	}
	public void setBillNo(String billNo) {
		this.billNo = billNo;
	}
	private String billNo;
	private String materialNo;
	public String getMaterialNo() {
		return materialNo;
	}
	public void setMaterialNo(String materialNo) {
		this.materialNo = materialNo;
	}
	public String getMaterialName() {
		return materialName;
	}
	public void setMaterialName(String materialName) {
		this.materialName = materialName;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public String getGenderType() {
		return genderType;
	}
	public void setGenderType(String genderType) {
		this.genderType = genderType;
	}
	public String getUnitName() {
		return unitName;
	}
	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}
	public String getDivisionNo() {
		return divisionNo;
	}
	public void setDivisionNo(String divisionNo) {
		this.divisionNo = divisionNo;
	}
	public String getUnitPrice() {
		return unitPrice;
	}
	public void setUnitPrice(String unitPrice) {
		this.unitPrice = unitPrice;
	}
	public int getOrderNo() {
		return orderNo;
	}
	public void setOrderNo(int orderNo) {
		this.orderNo = orderNo;
	}
	private String materialName;
	private String categoryName;
	private String genderType;
	private String unitName;
	private String divisionNo;
	private String unitPrice;
	private int orderNo;
	
}
