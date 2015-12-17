package com.hc.scm.sd.dao.model;

import com.hc.scm.common.model.RowColWrapModel;

/**
 * 订单物料尺码横排
 * Description: 
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wugy
 * Createdate:  2015-4-14下午1:54:15
 */
public class BlCoMaterialModel extends RowColWrapModel {
	
	/*public static void main(String[] args) {
		//System.out.println(generatorSimpleMapperXML(new BlCoMaterialModel(),null));
		//自定义的vo查询
		System.out.println(generatorSimpleMapperXML(new BlCoMaterialModel(),"SelectListByVoBlCoMaterial"));
	}*/
	
	private static final long serialVersionUID = 1L;

    /**
     * 物料编号
     */
    private String materialNo;
    /**
     * 物料编码
     */
    private String materialCode;
    
    /**
     * 物料名称
     */
    private String materialName;

    /**
     * 尺码类别编号
     */
    private String sizeTypeNo;

	public String getMaterialNo() {
		return materialNo;
	}

	public void setMaterialNo(String materialNo) {
		this.materialNo = materialNo;
	}

	public String getMaterialCode() {
		return materialCode;
	}

	public void setMaterialCode(String materialCode) {
		this.materialCode = materialCode;
	}

	public String getMaterialName() {
		return materialName;
	}

	public void setMaterialName(String materialName) {
		this.materialName = materialName;
	}

	public String getSizeTypeNo() {
		return sizeTypeNo;
	}

	public void setSizeTypeNo(String sizeTypeNo) {
		this.sizeTypeNo = sizeTypeNo;
	}

}