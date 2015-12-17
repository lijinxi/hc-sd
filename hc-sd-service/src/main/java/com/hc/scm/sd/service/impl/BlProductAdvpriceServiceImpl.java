package com.hc.scm.sd.service.impl;

import java.util.Date;
import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.utils.CommonUtil;
import com.hc.scm.sd.dao.dal.BlProductAdvpriceDao;
import com.hc.scm.sd.dao.entity.BlProductAdvprice;
import com.hc.scm.sd.service.BlProductAdvpriceService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-04-13 14:28:55
 * @version 1.0.0
 */
@Service("blProductAdvpriceService")
class BlProductAdvpriceServiceImpl extends BaseCrudServiceImpl implements BlProductAdvpriceService {
    @Resource
    private BlProductAdvpriceDao blProductAdvpriceDao;

    @Override
    public BaseCrudDao init() {
        return blProductAdvpriceDao;
    }
    
    @Override
	public <ModelType>  void audit(List<ModelType> auditModelList ,SystemUser systemUser){
    	
    	if(auditModelList != null && auditModelList.size() > 0){
    		for(Object obj :auditModelList){
				CommonUtil.setFieldValue(obj, "billStatus", BlProductAdvprice.class, "20");
    			CommonUtil.setFieldValue(obj, "auditor", BlProductAdvprice.class, systemUser.getUserName());
    			CommonUtil.setFieldValue(obj, "auditTime", BlProductAdvprice.class, new Date());
    			blProductAdvpriceDao.modifyById(obj);
    		}
    	}
	}
}