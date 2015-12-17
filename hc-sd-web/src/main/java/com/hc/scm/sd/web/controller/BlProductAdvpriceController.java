package com.hc.scm.sd.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.sd.dao.entity.BlProductAdvprice;
import com.hc.scm.sd.service.BlProductAdvpriceService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     luojw
 * @date:  2015-04-13 14:28:55
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bl_product_advprice")
public class BlProductAdvpriceController extends BaseCrudController<BlProductAdvprice> {
    @Resource
    private BlProductAdvpriceService blProductAdvpriceService;

    @Override
    public BaseCrudService init() {
        return blProductAdvpriceService;
    }
}