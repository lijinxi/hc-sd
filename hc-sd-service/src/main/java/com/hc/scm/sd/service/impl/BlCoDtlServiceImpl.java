package com.hc.scm.sd.service.impl;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.utils.SimplePage;
import com.hc.scm.sd.dao.dal.BlCoDtlDao;
import com.hc.scm.sd.service.BlCoDtlService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-04-09 10:19:36
 * @version 1.0.0
 */
@Service("blCoDtlService")
class BlCoDtlServiceImpl extends BaseCrudServiceImpl implements BlCoDtlService {
    @Resource
    private BlCoDtlDao blCoDtlDao;

    @Override
    public BaseCrudDao init() {
        return blCoDtlDao;
    }
    
    @Override
	public Map<String, String> selectByMaterial_no(String MaterialNo) throws ServiceException {
		// TODO Auto-generated method stub
		try{
			return blCoDtlDao.selectByMaterial_no(MaterialNo);
		}catch(ServiceException e){
			throw e;
		}
		
	}

	@Override
	public List<Map<String, Object>> selectBlCoList(SimplePage page,
			String orderByField, String orderBy, Map<String, Object> params) {
		// TODO Auto-generated method stub
		try{
			return blCoDtlDao.selectBlCoList(page, orderByField, orderBy, params);
		}catch(ServiceException e){
			throw e;
		}
	}
    
}