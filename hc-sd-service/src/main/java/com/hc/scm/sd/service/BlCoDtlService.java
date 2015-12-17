package com.hc.scm.sd.service;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.utils.SimplePage;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-04-09 10:19:36
 * @version 1.0.0
 */
public interface BlCoDtlService extends BaseCrudService {
	public Map<String, String> selectByMaterial_no(String MaterialNo) throws ServiceException;
	public List<Map<String,Object>> selectBlCoList(SimplePage page,String orderByField,String orderBy,Map<String,Object> params)
	throws ServiceException;
}