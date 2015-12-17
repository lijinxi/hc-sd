package com.hc.scm.sd.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.sd.dao.dal.SdProductPriceDao;
import com.hc.scm.sd.service.SdProductPriceService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-20 19:30:54
 * @version 1.0.0
 */
@Service("sdProductPriceService")
class SdProductPriceServiceImpl extends BaseCrudServiceImpl implements SdProductPriceService {
    @Resource
    private SdProductPriceDao sdProductPriceDao;

    @Override
    public BaseCrudDao init() {
        return sdProductPriceDao;
    }
}