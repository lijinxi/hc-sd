package com.hc.scm.sd.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.utils.SimplePage;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-04-11 16:35:10
 * @version 1.0.0
 */
public interface BlProductPriceDtlService extends BaseCrudService {
	public Map<String, String> selectByMaterial_no(String MaterialNo) throws ServiceException;
	public List<Map<String,Object>> selectBlProductpriceList(SimplePage page,String orderByField,String orderBy,Map<String,Object> params)
	throws ServiceException;
}