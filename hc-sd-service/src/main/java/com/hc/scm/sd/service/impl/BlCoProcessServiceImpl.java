package com.hc.scm.sd.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.sd.dao.dal.BlCoProcessDao;
import com.hc.scm.sd.service.BlCoProcessService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-04-16 17:32:02
 * @version 1.0.0
 */
@Service("blCoProcessService")
class BlCoProcessServiceImpl extends BaseCrudServiceImpl implements BlCoProcessService {
    @Resource
    private BlCoProcessDao blCoProcessDao;

    @Override
    public BaseCrudDao init() {
        return blCoProcessDao;
    }
}