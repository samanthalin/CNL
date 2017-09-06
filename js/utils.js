/**
 * 判斷傳入的值是否為空白、null、undifine、NaN
 * @param val
 * @return true/false
 */
function isBlank(val) {
	var trimVal = trim(defaultString(val));
	if (trimVal.length < 1) { return true; }
	return false;
}

/**
 * 判斷傳入的值是否為非空白
 * @param val
 * @return true/false
 */
function isNotBlank(val) {
	return !isBlank(val);
}

/**
 * 若傳入的值為null、undifine、NaN則回傳''
 * @param val
 * @return
 */
function defaultString(val) {
	if (!val) { return ''; }
	return val;
}

/**
 * 若傳入的值為null、undifine、NaN則回傳defaultVal
 * @param val
 * @return
 */
function defaultIfEmpty(val, defaultVal) {
	if (!val) { return defaultVal; }
	return val;
}

/**
 * 是否包含字串
 */
function contains(str, searchStr) {
	if (str == null) { return false; }
	if (searchStr == null) { return false; }
	if (searchStr == undefined) { return false; }
	if (str == undefined) { return false; }
	
	return str.indexOf(searchStr) != -1;
}

/**
 * 濾掉空白字元
 * @param val
 * @return
 */
function trim(val) {
	var result = lTrim(val);
	result = rTrim(result);
	
	return result;
}

/**
 * 濾掉左邊空白字元
 * @param val
 * @return
 */
function lTrim(val) {
	var result = defaultString(val);
	result = result.replace(/(^\s*)/g, '');
	
	return result;
}

/**
 * 濾掉右邊空白字元
 * @param val
 * @return
 */
function rTrim(val) {
	var result = defaultString(val);
	result = result.replace(/(\s*$)/g, '');

	return result;
}

/**
 * 轉大寫
 * @return
 */
function toUpperCase(val) {
	var result = defaultString(val);
	
	return result.toUpperCase();
}

/**
 * 轉小寫
 * @param val
 * @return
 */
function toLowerCase(val) {
	var result = defaultString(val);
	return result.toLowerCase();	
}

/**
 * 移除開頭
 * @param str
 * @param remove
 * @return
 */
function removeStar(str, remove) {
	str = defaultString(str);
	remove = defaultString(remove);
	var result = str.replace(remove, '');
	return result;
}
