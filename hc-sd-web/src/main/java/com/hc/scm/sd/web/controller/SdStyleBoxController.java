package com.hc.scm.sd.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.sd.dao.entity.SdStyleBox;
import com.hc.scm.sd.service.SdStyleBoxService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-20 10:32:37
 * @version 1.0.0
 */
@Controller
@RequestMapping("/sd_style_box")
public class SdStyleBoxController extends BaseCrudController<SdStyleBox> {
    @Resource
    private SdStyleBoxService sdStyleBoxService;

    @Override
    public BaseCrudService init() {
        return sdStyleBoxService;
    }
}