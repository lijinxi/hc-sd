package com.hc.scm.sd.dao.dal.impl;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.common.utils.SimplePage;
import com.hc.scm.sd.dao.dal.BlProductPriceDtlDao;
import com.hc.scm.sd.dao.mapper.BlProductPriceDtlMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-04-09 18:19:52
 * @version 1.0.0
 */
@Repository("blProductPriceDtlDao")
class BlProductPriceDtlDaoImpl extends BaseCrudDaoImpl implements BlProductPriceDtlDao {
    @Resource
    private BlProductPriceDtlMapper blProductPriceDtlMapper;

    @Override
    public BaseCrudMapper init() {
        return blProductPriceDtlMapper;
    }

	@Override
	public Map<String, String> selectByMaterial_no(String MaterialNo)
			throws DaoException {
		// TODO Auto-generated method stub
		try{
			return blProductPriceDtlMapper.selectByMaterial_no(MaterialNo);
		}catch(DaoException e){
			throw e;
		}
		
	}

	@Override
	public List<Map<String, Object>> selectBlProductpriceList(SimplePage page,
			String orderByField, String orderBy, Map<String, Object> params)
			throws DaoException {
		// TODO Auto-generated method stub
		try{
			return blProductPriceDtlMapper.selectBlProductpriceList(page, orderByField, orderBy, params);
		}catch(DaoException e){
			throw e;
		}
	}
}