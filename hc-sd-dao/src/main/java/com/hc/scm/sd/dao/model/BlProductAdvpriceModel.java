package com.hc.scm.sd.dao.model;


import com.hc.scm.sd.dao.entity.BlProductAdvprice;
/**
 * Description: 价格策略VO查询
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-04-17 14:27:21
 * @version 1.0.0
 */
public class BlProductAdvpriceModel extends BlProductAdvprice {

	/*
	 * 示例：
	 * 调用基类的generatorSimpleMapperXML在控制台生成Vo查询的mapper的xml 
	 */
//	public static void main(String[] args) {
//		//System.out.println(generatorSimpleMapperXML(new BlProductPriceDtlModel(),null));
//		//自定义的vo查询
//		//System.out.println(generatorSimpleMapperXML(new BlProductPriceDtlModel(),"SelectListByVoBlPPriceDtl"));
//	}
	

	private String currencyName;
	private String brandCname;
	private String divisionName;
	private String priceTypeName;
	private String customerName;
	private String coBillStatusName;
	
	
	public String getCurrencyName() {
		return currencyName;
	}
	public void setCurrencyName(String currencyName) {
		this.currencyName = currencyName;
	}
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
	public String getPriceTypeName() {
		return priceTypeName;
	}
	public void setPriceTypeName(String priceTypeName) {
		this.priceTypeName = priceTypeName;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getCoBillStatusName() {
		return coBillStatusName;
	}
	public void setCoBillStatusName(String coBillStatusName) {
		this.coBillStatusName = coBillStatusName;
	}

	

}
