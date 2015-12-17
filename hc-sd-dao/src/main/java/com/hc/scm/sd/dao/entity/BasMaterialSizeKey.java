package com.hc.scm.sd.dao.entity;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-04-14 17:07:26
 * @version 1.0.0
 */
public class BasMaterialSizeKey {
    /**
     * 物料编号
     */
    private String materialNo;

    /**
     * 尺码编号
     */
    private String sizeNo;

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of bas_material_size.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for bas_material_size.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     *
     * @return the value of bas_material_size.size_no
     */
    public String getSizeNo() {
        return sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     * @param sizeNo the value for bas_material_size.size_no
     */
    public void setSizeNo(String sizeNo) {
        this.sizeNo = sizeNo;
    }
}