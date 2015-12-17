package com.hc.scm.sd.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.sd.dao.entity.SdOrderMettingInfo;
import com.hc.scm.sd.service.SdOrderMettingInfoService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     panzh
 * @date:  2015-03-25 08:51:21
 * @version 1.0.0
 */
@Controller
@RequestMapping("/sd_order_metting_info")
public class SdOrderMettingInfoController extends BaseCrudController<SdOrderMettingInfo> {
    @Resource
    private SdOrderMettingInfoService sdOrderMettingInfoService;

    @Override
    public BaseCrudService init() {
        return sdOrderMettingInfoService;
    }
}