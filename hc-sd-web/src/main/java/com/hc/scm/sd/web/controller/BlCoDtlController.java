package com.hc.scm.sd.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.common.exception.ValidException;
import com.hc.scm.common.utils.CommonUtil;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.sd.dao.entity.BlCoDtl;
import com.hc.scm.sd.dao.model.BlCoDtlModel;
import com.hc.scm.sd.service.BlCoDtlService;
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
 * @author:     panzh
 * @date:  2015-04-09 10:19:36
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bl_co_dtl")
public class BlCoDtlController extends BaseCrudController<BlCoDtl> {
    @Resource
    private BlCoDtlService blCoDtlService;

    @Override
    public BaseCrudService init() {
        return blCoDtlService;
    }
    
    /**
     * 分页获取VO对象list
     * @param req
     * @param model
     * @param selectVoName xxxxMapper.xml调用对应的select方法；；传值必须包含关键字“SelectListByVo”
     * 		如：selectVoName=mySelectListByVoTest则调用<select id="mySelectListByVoTest" resultMap="ModelMap" parameterType="map">
     * 		不传该参数则默认调用<select id="baseSelectListByVo" resultMap="ModelMap" parameterType="map">
     * @return
     */
	@RequestMapping("/listvo.json")
    @ResponseBody
    public Map<String,Object> listVoByPage(HttpServletRequest req, Model model) throws Exception {
        Map<String, Object> resultMap =new HashMap<String, Object>();
        ResultModel resultModel =new ResultModel();
        //int pageNum = StringUtils.isEmpty(req.getParameter("pageNum")) ? 1 : Integer.parseInt(req.getParameter("pageNum"));
        //int pageSize = StringUtils.isEmpty(req.getParameter("pageSize")) ? 10 : Integer.parseInt(req.getParameter("pageSize"));
        String sortColumn = StringUtils.isEmpty(req.getParameter("sort")) ? "" : String.valueOf(req.getParameter("sort"));
        String sortOrder = StringUtils.isEmpty(req.getParameter("order")) ? "" : String.valueOf(req.getParameter("order"));
        String mapperClassType =getModelMapperName(req);
        String selectVoName =req.getParameter("selectVoName");
        if(StringUtils.isEmpty(mapperClassType)){
			throw new ValidException("参数错误。[mapperClassType]");
		}
        else if(StringUtils.isNotEmpty(selectVoName)&&!selectVoName.contains("SelectListByVo")){
 			throw new ValidException("参数selectVoName传值必须包含关键字[SelectListByVo]");
 		}
        Map<String, Object> params = builderParams(req, model);
        params.put("mapperClassType", mapperClassType);
        
        //转换格式"A1,B1,B3"为"'A1','B1','B3'"
        if(params.get("materialNo")!=null){
        	params.put("materialNo","'"+params.get("materialNo").toString().replaceAll(",", "','")+"'");
 		}
        if(params.get("sizeTypeNo")!=null){
        	params.put("sizeTypeNo","'"+params.get("sizeTypeNo").toString().replaceAll(",", "','")+"'");
 		}
        
        if(StringUtils.isNotEmpty(selectVoName)&& "SelectListByVoBlCoMaterial".equals(selectVoName)){
        	//通过物料号查询尺码
        	List<Object> li = blCoDtlService.findVoByPage(null, null, null, params);
        	resultMap.put("usedlist",li); 
        	
        	//sizeTypeNo的尺码横排 表头 
        	resultMap.put("headlist",getBasSizeModelHeadList(params.get("materialNo")));
        }
        else if(StringUtils.isNotEmpty(selectVoName)&& "SelectListByVoBlCoBasSizeModel".equals(selectVoName)){
        	resultMap.put("headlist",getBasSizeModelHeadList(params.get("materialNo")));
        }
        else{
            List<Object> list = this.blCoDtlService.findVoByPage(null, CommonUtil.convertJaveBeanStrToUnderLine(sortColumn), sortOrder, params);
            resultMap.put("list",list);
	        
	        //通过物料号查询表头尺码
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("mapperClassType", "BlCoDtlMapper");
			map.put("selectVoName", "SelectListByVoBlCoMaterial");
			map.put("sizeTypeNo", getMaterialNoSizeTypeNos(list,"sizeTypeNo"));
			List<Object> li = blCoDtlService.findVoByPage(null, null, null, map);
        	resultMap.put("usedlist",li);
        	
        	//sizeTypeNo的尺码横排 表头 
        	Object materialNo=getMaterialNoSizeTypeNos(list,"materialNo");
        	resultMap.put("headlist",getBasSizeModelHeadList(materialNo));
        }
       
		resultMap.put("result", resultModel);
        return resultMap;
    }
	
	/**
	 * sizeTypeNo的尺码横排 表头
	 * @return
	 */
	private List<Object> getBasSizeModelHeadList(Object materialNo){
		List<Object> headlist=new ArrayList<>();
		if(materialNo!=null){
			Map<String, Object> params = new HashMap<String,Object>();
			params.put("mapperClassType", "BlCoDtlMapper");
			params.put("materialNo", materialNo);
			params.put("selectVoName", "SelectListByVoBlCoBasSizeModel");
			headlist = blCoDtlService.findVoByPage(null, null, null, params);
		}
    	return headlist;
	}
    
    /**
     * 加载物料对应的materialNo 或者 sizeTypeNo
     * 返回格式：'A1','B3','B5'...
     * @param list
     * @param params
     * @param type materialNo 或者 sizeTypeNo
     * @return 
     */
    @SuppressWarnings("rawtypes")
	private String getMaterialNoSizeTypeNos(List<Object> list,String type){
    	String ret="";
    	Map<String, Object> map = new HashMap<String,Object>();
    	int size=list.size();
    	for(int i=0;i<size;i++){
    		BlCoDtlModel tmp=(BlCoDtlModel) list.get(i);
    		if(map.get(tmp.getMaterialNo())==null){
    			map.put(tmp.getMaterialNo(), tmp.getSizeTypeNo());
    		}
    	}
    	Iterator iter = map.entrySet().iterator();
    	
    	if("materialNo".equals(type)){
    		while (iter.hasNext()) {
    			Map.Entry entry = (Map.Entry) iter.next();
    			ret+=",'"+entry.getKey()+"'";
    		}
    	}
    	else{
    		while (iter.hasNext()) {
    			Map.Entry entry = (Map.Entry) iter.next();
    			ret+=",'"+entry.getValue()+"'";
    		}
    	}
    	if(ret.length()>1){
    		return ret.substring(1);
    	}
		return null;
    }
}
