/**
 * History:
 */
(function(global) {
    var session = {
    	/**
    	 * 發送一個Request，保持Server Session不要Timeout
    	 */
    	keepSessionAlive: function() {
			var result = {action:'Y'};
			$.ajax({
				url: 'SessionKeeper.action',
				data: {
				},
				async: true,
				dataType: 'json',
				beforeSend: function(request) {
				},
				success: function(json) {
					if (isNotBlank(json.msg)) { alert(json.msg); }
					
					if (json.action == 'Y') {
						result = json.content;
					}
				},
				error: function (xhr, ajaxOptions, thrownError) {
					//alert(xhr.status);
			        //alert(thrownError);
			        result.action = 'N';
				}
			});
			
			return result;	
    	},
    	
    	/**
    	 * 登出
    	 */
    	signOut: function() {
    		$.cookie("isSessionAlive", 'N');
    		var result = {action:'Y'};
    		
			if ($('#caslogoutForm')) { $('#caslogoutForm').submit(); }
			
			return result;	
    	}
    };
    
    global.session = global.session || session;
}) (this);


var timeoutInterval;
var expiredDateTime;

/**
 * 設定Timeout倒數
 */ 
function setTimeOutInterval() {
	var millisec = 25 * 60 * 1000;																					// 25分鐘
	//var millisec = 10 * 1000;
	
	timeoutInterval = setInterval("logoutAlertMsg()", millisec);

	expiredDateTime = new Date();
	expiredDateTime.setMinutes(expiredDateTime.getMinutes() + 30);													// 30分鐘後逾時
	//expiredDateTime.setMinutes(expiredDateTime.getMinutes() + 1);													// 1分鐘後逾時
}

/**
 * 重新設定倒數計時
 */
function resetTimeOutInterval(event) {
	if ($.cookie("isSessionAlive") != 'Y') {
		event.preventDefault();
		event.stopPropagation();
		doLogout();
	}				
	
	clearInterval(timeoutInterval);
	setTimeOutInterval();
}			

/**
 * 提醒系統即將登出，是否繼續使用
 */
function logoutAlertMsg() {
	clearInterval(timeoutInterval);
	
	if (confirm('系統即將在5分鐘後登出，是否繼續使用?')) {																		// 繼續使用
		var now = new Date();
	
		if ($.cookie("isSessionAlive") != 'Y') {
			doLogout();
			return;
		}

		if (now > expiredDateTime) {
			alert('已逾時，系統將登出!!');
			doLogout();
			return;
		} 
		
		setTimeOutInterval();																						// 重新倒數
		session.keepSessionAlive();																					// 發送一個HTTP Request，保持Server Session不要Timeout					
	} else {																										// 登出
		doLogout();
		return;
	}
}

/**
 * 已逾時，執行登出
 */
function doLogout() {
	if (window.opener == null) {
		session.signOut();
	}
	
	if (window.opener != null) {
		window.opener = null;
		window.close();
	}
}