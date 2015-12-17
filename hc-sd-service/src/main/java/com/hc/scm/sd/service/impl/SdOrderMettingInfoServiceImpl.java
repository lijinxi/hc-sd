package com.hc.scm.sd.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.sd.dao.dal.SdOrderMettingInfoDao;
import com.hc.scm.sd.service.SdOrderMettingInfoService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-25 08:51:21
 * @version 1.0.0
 */
@Service("sdOrderMettingInfoService")
class SdOrderMettingInfoServiceImpl extends BaseCrudServiceImpl implements SdOrderMettingInfoService {
    @Resource
    private SdOrderMettingInfoDao sdOrderMettingInfoDao;

    @Override
    public BaseCrudDao init() {
        return sdOrderMettingInfoDao;
    }
}