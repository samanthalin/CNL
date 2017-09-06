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
			
			
			
			// F03-1        ----------------------------------------------------------------------
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030001_SCN1.html\" menuType=\"01\">照會列印作業<span class=\"caret\"></span></a>");
			document.write("<ul class=\"dropdown-menu\">");
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030001_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">核保照會列印</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030002_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">契撤照會列印</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030003_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">催辦通知單列印</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030004_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">取消通知書列印</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030005_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">AMARTA核保照會列印</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030006_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">AMARTA發單後照會列印</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030007_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">AMARTA催辦列印</a>");
			document.write("</li>");
			document.write("</ul>");
			document.write("</li>");
			// F03-2        ----------------------------------------------------------------------
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030001_SCN1.html\" menuType=\"01\">報表列印作業<span class=\"caret\"></span></a>");
			document.write("<ul class=\"dropdown-menu\">");
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030010_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">未結案件清冊</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030011_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">體檢未送件扣款通知</a>");
			document.write("</li>");
			document.write("</ul>");
			document.write("</li>");
			// F03-3        ----------------------------------------------------------------------
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030001_SCN1.html\" menuType=\"01\">照會列印查詢<span class=\"caret\"></span></a>");
			document.write("<ul class=\"dropdown-menu\">");
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030009_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">照會單查詢</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030012_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">AMARTA照會查詢</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030013_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">照會單筆數查詢</a>");
			document.write("</li>");
			document.write("</ul>");
			document.write("</li>");
			// F03-4        ----------------------------------------------------------------------
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030001_SCN1.html\" menuType=\"01\">電子照會作業<span class=\"caret\"></span></a>");
			document.write("<ul class=\"dropdown-menu\">");
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030008_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">電子照會列印</a>");
			document.write("</li>");
			document.write("</ul>");
			document.write("</li>");
			
			
			// F00        ----------------------------------------------------------------------
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F000005_SCN1.html\" menuType=\"01\">功能權限設定<span class=\"caret\"></span></a>");
			document.write("<ul class=\"dropdown-menu\">");
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F000005_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">系統功能設定</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F000002_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">群組權限設定</a>");
			document.write("</li>");
			document.write("</ul>");
			document.write("</li>");

			// F00        ----------------------------------------------------------------------
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F000001_SCN1.html\" menuType=\"01\">其他<span class=\"caret\"></span></a>");
			document.write("<ul class=\"dropdown-menu\">");
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F000001_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">下載中心</a>");
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