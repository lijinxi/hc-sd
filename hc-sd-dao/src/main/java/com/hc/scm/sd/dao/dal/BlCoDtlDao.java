package com.hc.scm.sd.dao.dal;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.common.utils.SimplePage;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-04-09 10:19:36
 * @version 1.0.0
 */
public interface BlCoDtlDao extends BaseCrudDao {
	public Map<String,String> selectByMaterial_no(String MaterialNo)throws DaoException;
	public List<Map<String, Object>> selectBlCoList(SimplePage page,String orderByField,String orderBy,Map<String,Object> params)throws DaoException;
}