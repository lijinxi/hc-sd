package com.hc.scm.sd.web.controller;

import java.util.HashMap;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.sd.dao.entity.BlCoProcess;
import com.hc.scm.sd.service.BlCoProcessService;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-04-16 17:32:02
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bl_co_process")
public class BlCoProcessController extends BaseCrudController<BlCoProcess> {
    @Resource
    private BlCoProcessService blCoProcessService;

    @Override
    public BaseCrudService init() {
        return blCoProcessService;
    }
    
	@RequestMapping("/getbl_co_process.json")
    @ResponseBody
    public Map<String,Object> ExcBlCoProcess(HttpServletRequest req, Model model) throws Exception{
		  Map<String, Object> resultMap =new HashMap<String, Object>();
	      ResultModel resultModel =new ResultModel();
	      String lineID=req.getParameter("lineIdSting");
	      System.out.print("预处理的单据号============="+lineID);
	      Map<String,String> map = new HashMap<String,String>();
	      map.put("flag", "0");
	      resultMap.put("flag", map);
	      resultMap.put("result", resultModel);
	      
    	return resultMap;
    }
}