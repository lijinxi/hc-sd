package com.hc.scm.sd.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.sd.dao.dal.BasMaterialDao;
import com.hc.scm.sd.service.BasMaterialService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-04-14 17:07:25
 * @version 1.0.0
 */
@Service("basMaterialService")
class BasMaterialServiceImpl extends BaseCrudServiceImpl implements BasMaterialService {
    @Resource
    private BasMaterialDao basMaterialDao;

    @Override
    public BaseCrudDao init() {
        return basMaterialDao;
    }
}