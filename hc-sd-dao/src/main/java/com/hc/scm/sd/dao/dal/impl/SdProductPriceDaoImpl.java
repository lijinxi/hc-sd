package com.hc.scm.sd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.sd.dao.dal.SdProductPriceDao;
import com.hc.scm.sd.dao.mapper.SdProductPriceMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-20 19:30:54
 * @version 1.0.0
 */
@Repository("sdProductPriceDao")
class SdProductPriceDaoImpl extends BaseCrudDaoImpl implements SdProductPriceDao {
    @Resource
    private SdProductPriceMapper sdProductPriceMapper;

    @Override
    public BaseCrudMapper init() {
        return sdProductPriceMapper;
    }
}