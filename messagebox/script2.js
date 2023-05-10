/*<script>*/
/* Message box developed by Rangsey P. HENG */
/* For more please visit: https://rangseyhome.blogspot.com */
/*
To show message box, place function with required parrameters.
- First parrametter: You can specify message header and message description
  - Message header: info, notice, success, warning, error (can be omited)
  - Message description: put your message in quotation mark (for entering new line, use <br>)
  - Combination of heaher and message: put one of message header above without quotation mark, then put plus sign, and put message in quotation mark
- Second parrametter: You can specify duration to hide the message box
  - Duration: start from 1 second to 10 seconds, and 20 seconds and 30 seconds
  - Value to put: t1s = 1 second (you can also put your prefer duration in milisecond with quotation mark, for example '1000' for 1 second)

show_wpcp_message(smessage, timeout);

Example:
- No heading
show_wpcp_message('This is message', t3s);
- With header
show_wpcp_message(info + 'This is message', t3s);
- With header and message with muliple lines
show_wpcp_message(info + 'This is message.<br>This is another line of message.', t3s);

Note: This message box need Font Awesome. Please attach link to Font Awesome.
<script src="https://use.fontawesome.com/releases/v5.10.0/css/v4-shims.css"></script>
*/
 
var divProtWebCont = document.createElement('div');
divProtWebCont.id = 'r-message-box';
document.body.appendChild(divProtWebCont);

var rMessageBox = document.getElementById('r-message-box');
function setMessageBoxStyles(){
  rMessageBox.style.direction = 'ltr';
  rMessageBox.style.textAlign = 'center';
  rMessageBox.style.fontSize = '12px';
  rMessageBox.style.transition = 'opacity 900ms ease 0s';
  rMessageBox.style.zIndex = '9999';
  rMessageBox.style.borderRadius = '10px';
  rMessageBox.style.color = '#555';
  rMessageBox.style.fontFamily = 'inherit';
  rMessageBox.style.fontSize = '14px';
  rMessageBox.style.margin = '10px';
  rMessageBox.style.padding = '10px 36px';
  rMessageBox.style.position = 'fixed';
  rMessageBox.style.width = '255px';
  rMessageBox.style.top = '50%';
  rMessageBox.style.left = '50%';
  rMessageBox.style.transform = 'translate(-50%, -50%)';
  rMessageBox.style.boxShadow = '0px 0px 34px 2px rgba(242, 191, 191, 1)';
}
function setMessageBoxType(backgroundColor, borderColor){
  rMessageBox.style.backgroundColor = backgroundColor;
  rMessageBox.style.borderColor = borderColor;
  rMessageBox.style.borderWidth = '3px';
  rMessageBox.style.borderStyle = 'solid';
}
function setMessageBoxVisibility(opacity, visibility){
  rMessageBox.style.opacity = opacity;
  rMessageBox.style.visibility = visibility;
}

//Message heading type
var info = '<h3 style="font-weight: bold; margin: 0 0 9px 0;"><i class="fa-solid fa-circle-info" style="color:#404040;"></i> INFO</h3>';
var notice = '<h3 style="font-weight: bold; margin: 0 0 9px 0;"><i class="fa-solid fa-circle-exclamation" style="color:#8ed9f6;"></i> NOTICE</h3>';
var success = '<h3 style="font-weight: bold; margin: 0 0 9px 0;"><i class="fa-solid fa-circle-check" style="color:#a6ca8a;"></i> SUCCESS</h3>';
var warning = '<h3 style="font-weight: bold; margin: 0 0 9px 0;"><i class="fa-solid fa-circle-exclamation" style="color:#f5aca6;"></i> WARNING</h3>';
var error = '<h3 style="font-weight: bold; margin: 0 0 9px 0;"><i class="fa-sharp fa-solid fa-circle-xmark" style="color:#f5aca6;"></i> ERROR</h3>';

//Show and hide message
var timeout, timeout_result;
var t1s = '1000', t2s = '2000', t3s = '3000', t4s = '4000', t5s = '5000', t6s = '6000', t7s ='1000', t8s = '8000', t9s = '9000', t10s = '10000', t20s = '20000', t30s = '30000';
function show_wpcp_message(smessage, timeout) {
	var smessage_text = smessage;
	document.getElementById("r-message-box").innerHTML = smessage_text;
	if (smessage !== "") {
		if (smessage.includes(error)) {
			setMessageBoxStyles();
			setMessageBoxType('#ffecec', '#f5aca6');
			setMessageBoxVisibility('1', 'visible');
		} else if (smessage.includes(warning)) {
			setMessageBoxStyles();
			setMessageBoxType('#ffecec', '#f5aca6');
			setMessageBoxVisibility('1', 'visible');
		} else if (smessage.includes(success)) {
			setMessageBoxStyles();
			setMessageBoxType('#e9ffd9', '#a6ca8a');
			setMessageBoxVisibility('1', 'visible');
		} else if (smessage.includes(notice)) {
			setMessageBoxStyles();
			setMessageBoxType('#e3f7fc', '#8ed9f6');
			setMessageBoxVisibility('1', 'visible');
		} else {
			setMessageBoxStyles();
			setMessageBoxType('#FFFFFF', '#404040');
			setMessageBoxVisibility('1', 'visible');
		}
		clearTimeout(timeout_result);
		timeout_result = setTimeout(hide_message, timeout);
	}
}
function hide_message() {
	setMessageBoxStyles();
	setMessageBoxVisibility('0', 'hidden');
}
/* </script> */
