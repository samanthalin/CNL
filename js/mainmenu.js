(function(global) {
    var mainMenu = {
		
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
			document.write("<img alt=\"ChinaLife\" src=\"./images/ChinaLife-Logo.png\" />");
			document.write("</a>");
			document.write("</div>");
			document.write("<div class=\"navbar-collapse collapse\">");
			document.write("<ul class=\"nav navbar-nav\">");
			
			// F01        ----------------------------------------------------------------------
			document.write("<li>");
			document.write("<a href=\".\\pages\\f01\\F010001_SCN1.html\" menuType=\"01\">銀行管理系統<span class=\"caret\"></span></a>");
			document.write("<ul class=\"dropdown-menu\">");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f01\\F010001_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">銀行列印型態維護</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f01\\F010002_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">銀行E_mail維護</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f01\\F010003_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">電子照會列印查詢</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f01\\F010004_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">銀行電子郵件設定</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f01\\F010005_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">輔導經攬區號設定</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f01\\F010006_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">銀行組織上傳</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f01\\F010007_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">銀行理專上傳</a>");
			document.write("</li>");
			//document.write("<li>");
			//document.write("<a href=\".\\pages\\f01\\F010008_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">銀行提供業務員名冊更新至電子照會收件人設定檔</a>");
			//document.write("</li>");
			document.write("</ul>");
			document.write("</li>");
			
			// F02        ----------------------------------------------------------------------
			document.write("<li>");
			document.write("<a href=\".\\pages\\f02\\F020001_SCN1.html\" menuType=\"01\">經代管理系統<span class=\"caret\"></span></a>");
			document.write("<ul class=\"dropdown-menu\">");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f02\\F020001_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">電子照會列印查詢</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f02\\F020001_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">經代列印型態維護</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f02\\F020001_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">經代E_mail維護</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f02\\F020001_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">經代電子郵件設定</a>");
			document.write("</li>");
			document.write("</ul>");
			document.write("</li>");
			
			// F03        ----------------------------------------------------------------------
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030001_SCN1.html\" menuType=\"01\">新契約列印作業<span class=\"caret\"></span></a>");
			document.write("<ul class=\"dropdown-menu\">");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030001_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">核保照會列印</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030002_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">契撤照會列印</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030003_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">催辦通知單列印</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030004_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">取消通知書列印</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030005_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">AMARTA核保照會列印</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030006_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">AMARTA發單後照會列印</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030007_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">AMARTA催辦列印</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030008_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">電子照會列印</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("</ul>");
			document.write("</li>");
			
			// F04        ----------------------------------------------------------------------
			document.write("<li>");
			document.write("<a href=\"..\\f03\\F030009_SCN1.html\" menuType=\"01\">新契約維護管理系統<span class=\"caret\"></span></a>");
			document.write("<ul class=\"dropdown-menu\">");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030009_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">照會單查詢</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030010_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">照會單查詢</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030011_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">未結案件清冊</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030012_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">體檢未送件扣款通知</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030013_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">AMARTA照會查詢</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030014_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">照會單格式設定</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030015_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">問卷上稿功能</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f03\\F030015_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">問卷上稿_覆核功能</a>");
			document.write("</li>");
			document.write("</ul>");
			
			// F00        ----------------------------------------------------------------------
			document.write("<li>");
			document.write("<a href=\".\\pages\\f00\\F000001_SCN1.html\" menuType=\"01\">其他<span class=\"caret\"></span></a>");
			document.write("<ul class=\"dropdown-menu\">");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f00\\F000001_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">下載中心</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f00\\F000005_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">系統功能設定</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f00\\F000002_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">群組權限設定</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f00\\F000003_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">職場代碼設定</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f00\\F000004_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">職場群組維護</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f11\\F110001_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">客服中心設定</a>");
			document.write("</li>");
			document.write("<li>");
			document.write("<a href=\".\\pages\\f11\\F110001_SCN1.html\" menuType=\"01\" class=\"pure-menu-link\">平行派工主管設定</a>");
			document.write("</li>");
			document.write("</ul>");
			document.write("</li>");
			
			document.write("</ul>");
			document.write("<ul class=\"nav navbar-nav navbar-right\">");
			document.write("<li><a href=\"####\" id=\"logoutAnchor\"><span class=\"glyphicon glyphicon-user\"></span>登出(User001)</a></li>");
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
    
    global.mainMenu = global.mainMenu || mainMenu;
})(this);