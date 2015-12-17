package com.hc.scm.sd.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.sd.dao.dal.BlProductAdvpriceDtlDao;
import com.hc.scm.sd.service.BlProductAdvpriceDtlService;
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
@Service("blProductAdvpriceDtlService")
class BlProductAdvpriceDtlServiceImpl extends BaseCrudServiceImpl implements BlProductAdvpriceDtlService {
    @Resource
    private BlProductAdvpriceDtlDao blProductAdvpriceDtlDao;

    @Override
    public BaseCrudDao init() {
        return blProductAdvpriceDtlDao;
    }
}