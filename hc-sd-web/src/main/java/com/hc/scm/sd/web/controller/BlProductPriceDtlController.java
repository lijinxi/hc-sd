package com.hc.scm.sd.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.common.utils.CommonUtil;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.sd.dao.entity.BlProductPriceDtl;
import com.hc.scm.sd.service.BlProductPriceDtlService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

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
 * @author:     tan.bin
 * @date:  2015-04-09 18:19:52
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bl_product_price_dtl")
public class BlProductPriceDtlController extends BaseCrudController<BlProductPriceDtl> {
    @Resource
    private BlProductPriceDtlService blProductPriceDtlService;

    @Override
    public BaseCrudService init() {
    	
        return blProductPriceDtlService;
    }
    
    
    /**
     * 通过请求URI返回Model名称
     *
     * @param req
     * @return
    */
	@RequestMapping("/getprice_dtl.json")
    @ResponseBody
    public Map<String,Object> selectByMaterial_no(HttpServletRequest req, Model model) throws Exception{
		  Map<String, Object> resultMap =new HashMap<String, Object>();
	      ResultModel resultModel =new ResultModel();
	      
	      Map<String,String> map = new HashMap<String,String>();
	      String material_no=  StringUtils.isEmpty(req.getParameter("materialNo")) ? "" : String.valueOf(req.getParameter("materialNo"));//物料编码
	      map =blProductPriceDtlService.selectByMaterial_no(material_no);
	      if(map==null){
	    	  resultModel.setResultCode("-1");
	      }
	      resultMap.put("list", map);
	      resultMap.put("result", resultModel);
	      
    	return resultMap;
    }
	
	 /**
     * 获取对个表的集合对象list
     * @param req
     * @param model
     * @return
     */
	@SuppressWarnings("rawtypes")
	@RequestMapping("/getp_dtl_list.json")
    @ResponseBody
    public Map<String,Object> selectBlProductpriceList(HttpServletRequest req, Model model) throws Exception{
        Map<String, Object> resultMap =new HashMap<String, Object>();
        ResultModel resultModel =new ResultModel();
        int pageNum = StringUtils.isEmpty(req.getParameter("pageNum")) ? 1 : Integer.parseInt(req.getParameter("pageNum"));
        int pageSize = StringUtils.isEmpty(req.getParameter("pageSize")) ? 10 : Integer.parseInt(req.getParameter("pageSize"));
        String sortColumn = StringUtils.isEmpty(req.getParameter("sort")) ? "" : String.valueOf(req.getParameter("sort"));
        String sortOrder = StringUtils.isEmpty(req.getParameter("order")) ? "" : String.valueOf(req.getParameter("order"));
        Map<String, Object> params = builderParams(req, model);
        PageHelper.startPage(pageNum, pageSize);
        List<Map<String,Object>> list =blProductPriceDtlService.selectBlProductpriceList(null, sortColumn, sortOrder, params);
        resultMap.put("totalCount",((Page)list).getTotal());
        resultMap.put("list",list);
		resultMap.put("result", resultModel);
        return resultMap;
    }
}