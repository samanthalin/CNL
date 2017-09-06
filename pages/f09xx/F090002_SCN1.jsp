<%@page language="java" pageEncoding="utf-8" contentType="text/html;charset=utf-8" %>
<%@include file="/commons/Taglibs.jsp" %>
<%@include file="/commons/Variables.jsp" %>

<title>組織單位查詢</title>

<head>
	<script type="text/javascript">
		$(document).ready(function(){
			// 共用變數區-------------------------------------------------------
			
			// 頁面初始化區 -----------------------------------------------------
			$('#orgTreeUl').tree({
				url:'${contextPath}/F090002_SCN1.action?doQryOrgTree',
				animate: true,
				onDblClick: function(node) {
		    		$('#orgTreeUl').tree('toggle', node.target);
			    },
			    onClick: function(node) {
			    	$('#orgDtlDiv').show();
			    	
					$('#deptNo').val(node.id);
					$('#deptNm').val(node.text);
					$('#branchCode').val(node.branchCode);
					$('#branchCodeA').val(node.branchCodeA);
					$('#branchAddr').val(node.branchAddr);
					$('#branchTel').val(node.branchTel);
					$('#branchFax').val(node.branchFax);
			    },
				onContextMenu: function(e, node) {
                    e.preventDefault();
                    $(this).tree('select', node.target);
                    $('#treeMenu').menu('show',{
                        left: e.pageX,
                        top: e.pageY
                    });
                }
			});			
			
			// 事件註冊區 ---------------------------------------------------------
			$('#expandBt').click(function() {
				$('#orgTreeUl').tree('expandAll');
			});
			
			$('#collapseBt').click(function() {
				$('#orgTreeUl').tree('collapseAll');
			});
		});
		

	</script>
	
	<style type="text/css">
		.tree-title {
		  	font-size: 1.2em;
		}
		
		#orgTreeUl {
			margin-top: 5px;
		}
	</style>
</head>


<body>
	<sdyn:form id="form" action="/F090002_SCN1.action" role="form" method="post">
		<!-- -------------------------------------- 隱藏區 -------------------------------------- -->
		<input type="hidden" id="msg" name="msg" value="${actionBean.msg}" />
		<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />								<%-- 固定要加這一行，防止csr攻擊 --%>
		
		<!-- -------------------------------------- 查詢區 -------------------------------------- -->
		<stripes:errors />
	
	
		<!-- -------------------------------------- 顯示區 -------------------------------------- -->
		<div class="panel panel-default">
			<div class="panel-heading"><b>組織單位查詢</b></div>	
			
			<div class="row">
				<div class="col-md-6 form-group">
					<ul id="orgTreeUl"></ul>
				</div>
	
				<div id="orgDtlDiv" class="col-md-6 form-group" style="display: none;">
					<div class="row">
						<div class="col-md-12 form-group">
							<label for="deptNo">組織代碼</label> 
							<sdyn:text id="deptNo" name="deptNo" class="form-control" readonly="readonly" />
						</div>
					</div>
					
					<div class="row">
						<div class="col-md-12 form-group">
							<label for="deptNm">組織名稱</label> 
							<sdyn:text id="deptNm" name="deptNm" class="form-control" readonly="readonly" />
						</div>
					</div>

					<div class="row">
						<div class="col-md-12 form-group">
							<label for="branchCode">經攬區號</label> 
							<sdyn:text id="branchCode" name="branchCode" class="form-control" readonly="readonly" />
						</div>
					</div>
					
					<div class="row">
						<div class="col-md-12 form-group">
							<label for="branchCodeA">經攬區號(Amarta)</label> 
							<sdyn:text id="branchCodeA" name="branchCodeA" class="form-control" readonly="readonly" />
						</div>
					</div>					
					
					<div class="row">
						<div class="col-md-12 form-group">
							<label for="branchAddr">經攬區地址</label> 
							<sdyn:text id="branchAddr" name="branchAddr" class="form-control" readonly="readonly" />
						</div>
					</div>
					
					<div class="row">
						<div class="col-md-12 form-group">
							<label for="branchTel">經攬區電話</label> 
							<sdyn:text id="branchTel" name="branchTel" class="form-control" readonly="readonly" />
						</div>
					</div>
					
					<div class="row">
						<div class="col-md-12 form-group">
							<label for="branchFax">經攬區傳真</label> 
							<sdyn:text id="branchFax" name="branchFax" class="form-control" readonly="readonly" />
						</div>
					</div>					
					
				</div>
			</div>				
		</div>			
		
		
	    <div id="treeMenu" class="easyui-menu" style="width:120px;">
	        <div id="expandBt">全部展開</div>
	        <div id="collapseBt">全部收合</div>        
	    </div>
	    
	</sdyn:form>
</body>

