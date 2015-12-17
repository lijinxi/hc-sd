package com.hc.scm.sd.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.dal.BaseSqlDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.utils.CommonUtil;
import com.hc.scm.common.utils.SimplePage;
import com.hc.scm.common.utils.SpringComponent;
import com.hc.scm.sd.dao.dal.BlCoDao;
import com.hc.scm.sd.dao.entity.BlCo;
import com.hc.scm.sd.service.BlCoService;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-27 14:58:13
 * @version 1.0.0
 */
@Service("blCoService")
class BlCoServiceImpl extends BaseCrudServiceImpl implements BlCoService {
    @Resource
    private BlCoDao blCoDao;

    @Override
    public BaseCrudDao init() {
        return blCoDao;
    }
   
    @Override
	public <ModelType>  void audit(List<ModelType> auditModelList ,SystemUser systemUser){
    	
    	if(auditModelList != null && auditModelList.size() > 0){
    		for(Object obj :auditModelList){
				CommonUtil.setFieldValue(obj, "billStatus", BlCo.class, "20");
    			CommonUtil.setFieldValue(obj, "auditor", BlCo.class, systemUser.getUserName());
    			CommonUtil.setFieldValue(obj, "auditTime", BlCo.class, new Date());
    			blCoDao.modifyById(obj);
    		}
    	}
	}
    
    @SuppressWarnings("unchecked")
	@Override
	public List<Object> findVoByPage(SimplePage page, String orderByField,
			String orderBy,Map<String,Object> params) throws ServiceException {
		try {
			BaseSqlDao<Object> baseSqlDao=(BaseSqlDao<Object>) SpringComponent.getBean("baseSqlDao");
			List<Object> list= baseSqlDao.getListVoByPage(page, orderByField, orderBy, params);
			return list;
		}
		catch (ServiceException e) {
			throw e;
		}
	}
    
    

}