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
public class BlCoBasSizeModel extends RowColWrapModel {
	
	private static final long serialVersionUID = 1L;
	
    /**
     * 尺码类别编号
     */
    private String sizeTypeNo;


	public String getSizeTypeNo() {
		return sizeTypeNo;
	}

	public void setSizeTypeNo(String sizeTypeNo) {
		this.sizeTypeNo = sizeTypeNo;
	}

}