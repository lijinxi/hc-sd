package com.hc.scm.sd.service;

import java.util.List;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.model.SystemUser;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-04-13 10:20:27
 * @version 1.0.0
 */
public interface BlProductPriceService extends BaseCrudService {
	public <ModelType> void doAuditProductPrice(List<ModelType> auditModelList, SystemUser systemUser) throws ServiceException ;
}