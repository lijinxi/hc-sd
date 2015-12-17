package com.hc.scm.sd.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.sd.dao.entity.BasMaterial;
import com.hc.scm.sd.service.BasMaterialService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-04-14 17:07:25
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bas_material")
public class BasMaterialController extends BaseCrudController<BasMaterial> {
    @Resource
    private BasMaterialService basMaterialService;

    @Override
    public BaseCrudService init() {
        return basMaterialService;
    }
}