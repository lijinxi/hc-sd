package com.hc.scm.sd.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.sd.dao.dal.SdStyleBoxDao;
import com.hc.scm.sd.service.SdStyleBoxService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-20 10:32:37
 * @version 1.0.0
 */
@Service("sdStyleBoxService")
class SdStyleBoxServiceImpl extends BaseCrudServiceImpl implements SdStyleBoxService {
    @Resource
    private SdStyleBoxDao sdStyleBoxDao;

    @Override
    public BaseCrudDao init() {
        return sdStyleBoxDao;
    }
}