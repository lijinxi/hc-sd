package com.hc.scm.sd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.sd.dao.dal.BlProductAdvpriceDtlDao;
import com.hc.scm.sd.dao.mapper.BlProductAdvpriceDtlMapper;
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
@Service("blProductAdvpriceDtlDao")
class BlProductAdvpriceDtlDaoImpl extends BaseCrudDaoImpl implements BlProductAdvpriceDtlDao {
    @Resource
    private BlProductAdvpriceDtlMapper blProductAdvpriceDtlMapper;

    @Override
    public BaseCrudMapper init() {
        return blProductAdvpriceDtlMapper;
    }
}