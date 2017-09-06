<%@page language="java" pageEncoding="utf-8" contentType="text/html;charset=utf-8" %>
<%@include file="/commons/Taglibs.jsp" %>
<%@include file="/commons/Variables.jsp" %>

<title>應用系統維護</title>

<head>
	<script type="text/javascript">
		$(document).ready(function(){
			// 共用變數區-------------------------------------------------------
			var actType = $('#actType').val();
			
			// 頁面初始化區 -----------------------------------------------------
			$("#form").validate({
				rules: {
					systemId: {
				    	required: true,
				    	maxlength: 10,
				    	minlength: 3
					},
					systemNm: {
						required: true
					},
					suspend: {
						required: true
					},
					remark: {
						maxlength: 200
					}
				},
				messages: {
				}
			});
			
			if ('A' != actType) {																					// A:新增
				$('#systemId').attr('disabled', 'disabled');
			}
			
			
			// 事件註冊區 ------------------------------------------------------
			$('#doClrBt').click(function() {
				$('#form input:enabled:not([readonly])[type=text]').val('');
				$('#form textarea').val('');
				$('#form select').val('');
			});
			
			$('input[type=text], textarea').blur(function() {
				$(this).val(trim($(this).val()));
			});

			$('#systemId').blur(function() {
				// $(this).val(toUpperCase($(this).val()));
			});
			
			$('#doMergeBt').click(function() {
				if (!$("#form").valid()) { return false; }
				
				if (!confirm('確認送出?')) { return; }
				
				$.ajax({
					url: '${contextPath}/F090001_SCN2.action?doMergeSystem',
					data: {
						systemId: $('#systemId').val(),
						systemNm: $('#systemNm').val(),
						suspend: $('#suspend').val(),
						remark: $('#remark').val(),
						actType: $('#actType').val()
					},
					type: 'POST',
					async: false,
					dataType: 'json',
					success: function(json) {
						if (isNotBlank(json.msg)) { alert(json.msg); }
						
						if (json.action == 'Y') {
							alert('資料已更新');
							
							if (opener.reloadTable) { opener.reloadTable(); }
							if (window.opener != null) {
								window.opener = null;
								window.close();
							}
						}
					}
				});	
			});
		});
		
	</script>
	
	<style type="text/css">
		#remark {
			height: 120px;
		}
	</style>
</head>


<body>
	<sdyn:form id="form" action="/F090001_SCN2.action" role="form" method="post">
		<!-- -------------------------------------- 隱藏區 -------------------------------------- -->
		<input type="hidden" id="msg" name="msg" value="${actionBean.msg}" />
		<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />								<%-- 固定要加這一行，防止csr攻擊 --%>
		
		<stripes:hidden id="actType" name="actType" />
		
		<!-- -------------------------------------- 查詢區 -------------------------------------- -->
		<stripes:errors />
		
		
		<div class="panel panel-default">
			<div class="panel-heading"><b>新增/更新應用系統</b></div>
		  	<div class="bootstrap-panel-body">
				<div class="row">
					<div class="col-md-4 form-group">
						<label for="extraWorkDtBegin">應用系統代碼</label>
						<sdyn:text id="systemId" name="systemId" class="form-control" maxlength="6" placeholder="新系統請輸入4~6碼英文大寫" />
					</div>
					<div class="col-md-4 form-group">
						<label for="extraWorkDtBegin">應用系統名稱</label>
						<sdyn:text id="systemNm" name="systemNm" class="form-control" maxlength="50" />
					</div>
					<div class="col-md-4 form-group">
						<label for="suspend">是否停用</label> 
						<jsp:include page="/pages/component/SysCdSelect.jsp">
							<jsp:param name="value" value="${actionBean.suspend}" />
							<jsp:param name="selId" value="suspend" />
							<jsp:param name="selName" value="suspend" />
							<jsp:param name="ctId" value="56" />
							<jsp:param name="orderBy" value="ODR_NUM" />
							<jsp:param name="suspend" value="N" />
							<jsp:param name="isRequired" value="N" />
							<jsp:param name="readOnly" value="N" />
							<jsp:param name="className" value="form-control" />
						</jsp:include>						 			
					</div>					
				</div>				
		  	
				<div class="row">
					<div class="col-md-12 form-group">
						<div><label for=remark>系統說明</label></div>
						<sdyn:textarea id="remark" name="remark" class="form-control" />
					</div>			
				</div>			  	
		  	
		  	
				<div class="row">
					<div class="col-md-4 form-group">
						<input id="doMergeBt" type="button" class="btn btn-danger" value="完成">
						<input id="doClrBt" type="button" class="btn btn-info" value="清除">
					</div>
				</div>		  	
		  	</div>
		</div>		
	</sdyn:form>
	
	
	<!-- -------------------------------------- 顯示區 -------------------------------------- -->
	<div id="qryResultDiv">
		<table id="qryResultTb"></table>
	</div>	
	
</body>

