<%@page language="java" pageEncoding="utf-8" contentType="text/html;charset=utf-8" %>
<%@include file="/commons/Taglibs.jsp" %>
<%@include file="/commons/Variables.jsp" %>

<title>應用系統/角色維護</title>

<head>
	<script type="text/javascript">
		$(document).ready(function(){
			// 共用變數區-------------------------------------------------------
			
			// 頁面初始化區 -----------------------------------------------------
			$('#suspend').val('');
			
			// 事件註冊區 ------------------------------------------------------
			$('input[type=text]').blur(function() {
				$(this).val(trim($(this).val()));
			});			
			
			$('#clrQryBt').click(function() {
				$('#form input[type=text]').val('');
				$('#form select').val('');
			});
			
			$('#doQryBt').click(function() {
				doQrySystem();
			});
			
			$('#addRoleBt').click(function() {
				var roleId = $('#roleId').val();
				var roleNm = $('#roleNm').val();
				
				if (isBlank(roleId)) {
					alert('請輸入角色代碼');
					$('#roleId').focus();
					return;
				}
				
				if (isBlank(roleNm)) {
					alert('請輸入角色名稱');
					$('#roleNm').focus();
					return;
				}
				
				if (!roleId.match("^ROLE_")) {
					alert('角色代碼必須為「ROLE_」起始');
					return;
				}
				
				if (!confirm('確認新增角色?')) { return; }
				
				doAddSysRole(roleId, roleNm);
			});
		});
		
		/**
		 * 查詢應用系統清單
		 */
		function doQrySystem() {
			$.blockUI({ 
				message: '<img src="${contextPath}/images/busy.gif" /> Please Wait...' 
			});
			
			$('#qryResultTb').datagrid({  
			    url:'${contextPath}/F090001_SCN1.action?doQrySystem',
			    width: '100%',
			    title: '應用系統清單',
			    height: 385,
			    pageNumber: 1,
			    pagination: true,
			    rownumbers:true,
			    singleSelect:true,
			    showFooter:false,
			    queryParams: {
			    	systemId: $('#systemId').val(),
			    	systemNm: $('#systemNm').val(),
			    	suspend: $('#suspend').val(),
			    	sort: 'SYSTEM_ID'
				},
				onLoadError:function() {
					$.unblockUI();
				},
				onBeforeLoad:function() {
					$(window).unbind('resize');
		    	},
		    	onLoadSuccess: function(data) {
		    		$.unblockUI();
		    		$(window).bind("resize", function() {
		    			$('#qryResultTb').datagrid("resize");
		    			
		    			if (isNotBlank($('#tmpRoleSystemId').val())) {
		    				$('#qryRolesResultTb').datagrid("resize");
		    			}
		    		});
		    	},			    	
		    	onDblClickRow:function(rowIndex, rowData) {
		        	var row = $('#qryResultTb').datagrid('getSelected');
		        	doOpenNewWindow('U', row.SYSTEM_ID, '${contextPath}/F090001_SCN2.action');						// U:更新系統    		
			    },
			    frozenColumns:[[
					{field:'SYSTEM_ID', title:'應用系統代碼', width:120, sortable:true, halign: 'center', align:'left'}
				]],
				columns:[[
					{field:'SYSTEM_NM', title:'應用系統名稱', width:200, sortable:true, halign: 'center', align:'left'},
					{field:'SUSPEND_NM', title:'是否停用', width:80, sortable:true, halign: 'center', align:'center'},
					{field:'REMARK', title:'系統說明', width:400, sortable:true, halign: 'center', align:'left'},
					{field:'LAST_UPD_NM', title:'異動人員', width:100, sortable:true, halign: 'center', align:'left'},					
					{field:'LAST_UPD_DT', title:'異動時間', width:150, sortable:true, halign: 'center', align:'center'}
				]],
			    toolbar:[{
			    	id:'addBt',
			        text:'新增應用系統',
			        iconCls:'icon-add',
			        handler:function() {
			        	doOpenNewWindow('A', '', '${contextPath}/F090001_SCN2.action');								// A:新增
			        }				
			    }, {
			    	id:'updBt',
			        text:'更新應用系統',
			        iconCls:'icon-edit',
			        handler:function() {
			        	if ($('#qryResultTb').datagrid('getSelections').length < 1) {
							alert('請選擇欲更新的應用系統!');
							return;
						}
			        	
			        	var row = $('#qryResultTb').datagrid('getSelected');
			        	doOpenNewWindow('U', row.SYSTEM_ID, '${contextPath}/F090001_SCN2.action');					// U:更新系統
			        }					
				}, {
			    	id:'removeBt',
			        text:'刪除應用系統',
			        iconCls:'icon-cancel',
			        handler:function() {
			        	if ($('#qryResultTb').datagrid('getSelections').length < 1) {
							alert('請選擇欲刪除的應用系統!');
							return;
						}
			        	
			        	if (!confirm('確認刪除應用系統?')) { return; }
			        	if (!confirm('請再次確認是否刪除?')) { return; }
			        	
			        	var row = $('#qryResultTb').datagrid('getSelected');
			        	doDelSystem(row.SYSTEM_ID);
			        }
				}, {
			    	id:'qryRolesBt',
			        text:'角色維護',
			        iconCls:'icon-more',
			        handler:function() {
			        	if ($('#qryResultTb').datagrid('getSelections').length < 1) {
							alert('請先選擇應用系統!');
							return;
						}
			        	
			        	var row = $('#qryResultTb').datagrid('getSelected');
			        	doQrySysRoles(row.SYSTEM_ID);
			        	$('#tmpRoleSystemId').val(row.SYSTEM_ID);
			        	$('#systemIdNm').val(row.SYSTEM_ID + '/' + row.SYSTEM_NM);
			        	
			        	$('#addRoleDiv').removeClass('hide');
			        }
				}]	
			});			
		}
		
		/**
		 * 刪除應用系統
		 * @param systemId 應用系統代碼
		 */
		function doDelSystem(systemId) {
			$.ajax({
				url: '${contextPath}/F090001_SCN1.action?doDelSystem',
				data: {
					systemId: systemId
				},
				type: 'POST',
				async: false,
				dataType: 'json',
				success: function(json) {
					if (isNotBlank(json.msg)) { alert(json.msg); }
					
					if (json.action == 'Y') {
						alert('資料已刪除');
						reloadTable();
						
						if (isNotBlank($('#tmpRoleSystemId').val())) {
							$('#qryRolesResultTb').datagrid('reload');
						}
					}
				}
			});			
		}
		
		/**
		 * 查詢應用系統角色清單
		 * @param systemId 應用系統代碼
		 */
		function doQrySysRoles(systemId) {
			$.blockUI({ 
				message: '<img src="${contextPath}/images/busy.gif" /> Please Wait...' 
			});
			
			$('#qryRolesResultTb').datagrid({  
			    url:'${contextPath}/F090001_SCN1.action?doQrySysRoles',
			    width: 'auto',
			    title: '角色清單',
			    height: 370,
			    pageNumber: 1,
			    pagination: true,
			    rownumbers:true,
			    singleSelect:true,
			    showFooter:false,
			    queryParams: {
			    	systemId: systemId,
			    	sort: 'SYSTEM_ID, ROLE_ID'
				},
				onLoadError:function() {
					$.unblockUI();
				},
				onBeforeLoad:function() {
					$(window).unbind('resize');
		    	},
		    	onLoadSuccess: function(data) {
		    		$.unblockUI();
		    		$('#qryResultTb').datagrid("resize");
		    		$(window).bind("resize", function() {
		    			$('#qryRolesResultTb').datagrid("resize");
		    			$('#qryResultTb').datagrid("resize");
		    		});

		    		$('body').animate({scrollTop: document.body.scrollHeight}, "fast");
		    	},			    	
		    	onDblClickRow:function(rowIndex, rowData) {
			    },
			    frozenColumns:[[
					{field:'SYSTEM_ID', title:'應用系統代碼', width:120, sortable:true, halign: 'center', align:'left'}
				]],
				columns:[[
					{field:'SYSTEM_NM', title:'應用系統名稱', width:200, sortable:true, halign: 'center', align:'left'},
					{field:'ROLE_ID', title:'角色代碼', width:180, sortable:true, halign: 'center', align:'left'},
					{field:'ROLE_NM', title:'角色名稱', width:280, sortable:true, halign: 'center', align:'left'}
				]],
			    toolbar:[{
			    	id:'removeRoleBt',
			        text:'刪除角色',
			        iconCls:'icon-cancel',
			        handler:function() {
			        	if ($('#qryRolesResultTb').datagrid('getSelections').length < 1) {
							alert('請選擇欲刪除的角色!');
							return;
						}
			        	
			        	if (!confirm('確認刪除應用系統角色?')) { return; }
			        	if (!confirm('請再次確認是否刪除?')) { return; }
			        	
			        	var row = $('#qryRolesResultTb').datagrid('getSelected');
			        	doDelSysRole(row.ROLE_ID);
			        }
				}]	
			});			
		}
		
		/**
		 * 新增應用系統角色
		 */
		function doAddSysRole(roleId, roleNm) {
			$.ajax({
				url: '${contextPath}/F090001_SCN1.action?doAddSysRole',
				data: {
					systemId: $('#tmpRoleSystemId').val(),
					roleId: roleId,
					roleNm: roleNm 
				},
				type: 'POST',
				async: false,
				dataType: 'json',
				success: function(json) {
					if (isNotBlank(json.msg)) { alert(json.msg); }
					
					if (json.action == 'Y') {
						alert('角色已新增');

						$('#roleId').val('');
						$('#roleNm').val('');						
						$('#qryRolesResultTb').datagrid('reload');
					}
				}
			});				
		}
		
		/**
		 * 刪除應用系統角色
		 * @param roleId 角色代碼
		 */
		function doDelSysRole(roleId) {
			$.ajax({
				url: '${contextPath}/F090001_SCN1.action?doDelSysRole',
				data: {
					systemId: $('#tmpRoleSystemId').val(),
					roleId: roleId
				},
				type: 'POST',
				async: false,
				dataType: 'json',
				success: function(json) {
					if (isNotBlank(json.msg)) { alert(json.msg); }
					
					if (json.action == 'Y') {
						alert('角色已刪除');

						$('#qryRolesResultTb').datagrid('reload');
					}
				}
			});				
		}		
		
		/**
		 * 開啟新頁面，執行新增/修改
		 * @param actType A:新增 | U:更新
		 * @param systemId 應用系統代碼 
		 * @param url 功能路徑
		 */
		function doOpenNewWindow(actType, systemId, url) {
			$('#newWindowForm').attr('action', url);
			
			$('#newWindowForm input[name=systemId]').val(systemId);
			$('#newWindowForm input[name=actType]').val(actType);
			
        	var winId = 'newWindow';
        	newWindow = window.open('', winId, 'toolbar=no,resizable=yes,scrollbars=yes,location=no,addressbar=no');
        	
        	$('#newWindowForm').attr('target', winId);
        	$('#newWindowForm').submit();
        	
        	newWindow.focus();
		}		
		
		/**
		 * 重新戴入表格資料
		 */
		function reloadTable() {
			$('#qryResultTb').datagrid('reload');
		}
	</script>
	
	<style type="text/css">
	</style>
</head>


<body>
	<sdyn:form id="form" action="/F090001_SCN1.action" role="form" method="post">
		<!-- -------------------------------------- 隱藏區 -------------------------------------- -->
		<input type="hidden" id="msg" name="msg" value="${actionBean.msg}" />
		<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />								<%-- 固定要加這一行，防止csr攻擊 --%>
		
		<input type="hidden" id="tmpRoleSystemId" name="tmpRoleSystemId" />
		
		<!-- -------------------------------------- 查詢區 -------------------------------------- -->
		<stripes:errors />
		
		
		<div class="panel panel-default">
			<div class="panel-heading"><b>應用系統/角色維護</b></div>
		  	<div class="bootstrap-panel-body">
				<div class="row">
					<div class="col-md-4 form-group">
						<label for="extraWorkDtBegin">應用系統代碼</label>
						<sdyn:text id="systemId" name="systemId" class="form-control" maxlength="6" />
					</div>
					<div class="col-md-4 form-group">
						<label for="extraWorkDtBegin">應用系統名稱</label>
						<sdyn:text id="systemNm" name="systemNm" class="form-control" maxlength="30" />
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
					<div class="col-md-4 form-group">
						<input id="doQryBt" type="button" class="btn btn-success" value="查詢">
						<input id="clrQryBt" type="button" class="btn btn-info" value="清除">
					</div>
				</div>		  	
		  	</div>
		</div>		
	</sdyn:form>

	<stripes:form id="newWindowForm" name="newWindowForm" action="/F090001_SCN2.action" method="post">
		<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />								<%-- 固定要加這一行，防止csr攻擊 --%>
		<stripes:hidden name="systemId" />
		<stripes:hidden name="actType" />
	</stripes:form>
	
	<!-- -------------------------------------- 顯示區 -------------------------------------- -->
	<div id="qryResultDiv">
		<table id="qryResultTb"></table>
	</div>
	<br />
	
	
	<div id="addRoleDiv" class="row hide">
		<div class="col-md-4 form-group">
			<label for="systemIdNm">應用系統代碼/名稱</label>
			<input id="systemIdNm" name="systemIdNm" type="text" class="form-control" readonly="readonly" />
		</div>	
	
		<div class="col-md-2 form-group">
			<label for="roleId">角色代碼</label>
			<input type="text" id="roleId" name="roleId" class="form-control" maxlength="20" placeholder="ROLE_XXXXX" />
		</div>			
	
		<div class="col-md-3 form-group">
			<label for="roleNm">角色名稱</label>
			<input type="text" id="roleNm" name="roleNm" class="form-control" maxlength="20" />
		</div>		
		
		<div class="col-md-3 form-group">
			<div>&nbsp;</div>
			<input id="addRoleBt" name="addRoleBt" type="button" class="btn btn-danger" value="新增角色">
		</div>	
	</div>	
	
	<div id="qryRolesResultDiv">
		<table id="qryRolesResultTb"></table>
	</div>

</body>

