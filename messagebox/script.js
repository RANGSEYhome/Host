/* <script> */

//Add message box to body
var divProtWebCont = document.createElement('div');
divProtWebCont.className = 'msgmsg-box-wpcp warning-wpcp hideme';
divProtWebCont.id = 'wpcp-error-message';
divProtWebCont.innerHTML = "<span>Warning: </span>Content is protected!!!";
document.body.appendChild(divProtWebCont);

//Message text
var image_save_msg = 'You Can Not Save images!';
var no_menu_msg = 'Context Menu disabled!';
var smessage = "Content is protected!!";
var smgViewSource = "You are not allowed to view source code!";

//Show and hide message
var timeout_result;
function show_wpcp_message(smessage) {
	if (smessage !== "") {
		var smessage_text = '<span>Alert: </span>' + smessage;
		document.getElementById("wpcp-error-message").innerHTML = smessage_text;
		document.getElementById("wpcp-error-message").className = "msgmsg-box-wpcp warning-wpcp showme";
		clearTimeout(timeout_result);
		timeout_result = setTimeout(hide_message, 3000);
	}
	if (smessage == smgViewSource) {
		var smessage_text = '<span>Warning: </span>' + smessage;
		document.getElementById("wpcp-error-message").innerHTML = smessage_text;
		document.getElementById("wpcp-error-message").className = "msgmsg-box-wpcp warning-wpcp showme";
		clearTimeout(timeout_result);
		timeout_result = setTimeout(hide_message, 3000);
	}
}
function hide_message() {
	document.getElementById("wpcp-error-message").className = "msgmsg-box-wpcp warning-wpcp hideme";
}

/* </script> */
