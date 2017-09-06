(function(global) {
    var menu = {
		
	writeMenu: function(params) {
			document.write("<div class=\"row\" id=\"navMenuDiv\">");
			document.write("<div class=\"col-12\">");
			document.write("<div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">");
			document.write("<div class=\"navbar-header\">");
			document.write("<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">");
			document.write("<span class=\"sr-only\">Toggle navigation</span>");
			document.write("<span class=\"icon-bar\"></span>");
			document.write("<span class=\"icon-bar\"></span>");
			document.write("<span class=\"icon-bar\"></span>");
			document.write("</button>");
			document.write("<a class=\"pull-left\" href=\"http://www.chinalife.com.tw/wps/portal/chinalife\">");
			document.write("<img alt=\"ChinaLife\" src=\"../../images/ChinaLife-Logo.png\" />");
			document.write("</a>");
			document.write("</div>");
			document.write("<div class=\"navbar-collapse collapse\">");
			document.write("<ul class=\"nav navbar-nav\">");
			
			
			
			// F02        ----------------------------------------------------------------------
			document.write("<li>");
			document.write("<a href=\"..\\f02\\F020001_SCN1.html\" menuType=\"01\">電子照會系統維護<span class=\"caret\"></span></a>");
			document.write("<ul class=\"dropdown-menu\">");
			document.write("<li>");
			document.write("<a href=\"..\\f02\\F020002_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">保經代照會型態維護</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\"..\\f02\\F020003_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">保經代E_mail維護</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\"..\\f02\\F020004_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">電子郵件內容設定</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\"..\\f02\\F020001_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">電子照會記錄查詢</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\"..\\f02\\F020005_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">保經代E_mail上傳</a>");
			document.write("</li>");
			document.write("</ul>");
			document.write("</li>");
			
			
			// F00        ----------------------------------------------------------------------
			document.write("<li>");
			document.write("<a href=\"..\\f02\\F000005_SCN1.html\" menuType=\"01\">功能權限設定<span class=\"caret\"></span></a>");
			document.write("<ul class=\"dropdown-menu\">");
			document.write("<li>");
			document.write("<a href=\"..\\f02\\F000005_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">系統功能設定</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\"..\\f02\\F000002_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">群組權限設定</a>");
			document.write("</li>");
			document.write("</ul>");
			document.write("</li>");

			// F00        ----------------------------------------------------------------------
			document.write("<li>");
			document.write("<a href=\"..\\f02\\F000001_SCN1.html\" menuType=\"01\">其他<span class=\"caret\"></span></a>");
			document.write("<ul class=\"dropdown-menu\">");
			document.write("<li>");
			document.write("<a href=\"..\\f02\\F000001_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">下載中心</a>");
			document.write("</li>");
			document.write("</ul>");
			document.write("</li>");

			
			document.write("</ul>");
			document.write("<ul class=\"nav navbar-nav navbar-right\">");
			document.write("<li><a href=\"..\\..\\sys_menu.html\" id=\"logoutAnchor\"><span class=\"glyphicon glyphicon-user\"></span>登出(User001)</a></li>");
			document.write("</ul>");
			document.write("</div>");
			document.write("</div>");
			document.write("</div>");
    	},
    
    writeFooter: function(params) {
			document.write("<footer>");
			document.write("<nav class=\"navbar navbar-inverse navbar-fixed-bottom\" role=\"navigation\">");
			document.write("<div class=\"navbar-text navbar-right\" id=\"copyrightDiv\">");
			document.write("<p>Copyright © 2017 ChinaLife Inc. All rights reserved</p>");
			document.write("</div>");
			document.write("</nav>");
			document.write("</footer>");	
			}
		};
    
    global.menu = global.menu || menu;
})(this);