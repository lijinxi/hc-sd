package com.hc.scm.sd.dao.model;



import com.hc.scm.sd.dao.entity.BlCo;
/**
 * Description: 销售订单VO查询
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-04-22 16:12:21
 * @version 1.0.0
 */
public class BlCoModel extends BlCo {
/*	//extends BaseModel implements Serializable 
	
	 * 示例：
	 * 调用基类的generatorSimpleMapperXML在控制台生成Vo查询的mapper的xml 
	 
	public static void main(String[] args) {

		//System.out.println(generatorSimpleMapperXML(new BlProductPriceDtlModel(),null));
		//自定义的vo查询
		System.out.println(generatorSimpleMapperXML(new BlCoModel(),"SelectListByVoBlCo"));
	}
	*/

	private String brandCname;   //品牌
	private String divisionName;  //事业部
	private String customerName;  //客户
	private String orderTypeName;  //订单类型
	private String currencyName;     //币别
	private String paymentClauseName1;   //收款条件
	
	
	
	public String getPaymentClauseName1() {
		return paymentClauseName1;
	}
	public void setPaymentClauseName1(String paymentClauseName1) {
		this.paymentClauseName1 = paymentClauseName1;
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
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getOrderTypeName() {
		return orderTypeName;
	}
	public void setOrderTypeName(String orderTypeName) {
		this.orderTypeName = orderTypeName;
	}
	public String getCurrencyName() {
		return currencyName;
	}
	public void setCurrencyName(String currencyName) {
		this.currencyName = currencyName;
	}



	

}
