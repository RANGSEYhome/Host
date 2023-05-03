/* This is a comment in jsvascript */
// This is a comment to prevent execution of code is suitable for code testing


/* <script> */


/* Disable page title */
const pageTitle = document.querySelectorAll('.page .post-header .post-title');
for (let i = 0; i < pageTitle.length; i++) {
  pageTitle[i].style.display = 'none';
}

/* Hide lebel count and delete label prefix */
// Hide count value
const spansPostValue = document.querySelectorAll('.post-label span.label-count-value');
for (let i = 0; i < spansPostValue.length; i++) {
  spansPostValue[i].style.display = 'none';
}
// Hide arrow
const spansPostArrow = document.querySelectorAll('.post-label span.label-count-arrow');
for (let i = 0; i < spansPostArrow.length; i++) {
  spansPostArrow[i].style.display = 'none';
}
// Fix label margin
const aPostLabel = document.querySelectorAll('a.post-label');
for (let i = 0; i < aPostLabel.length; i++) {
  aPostLabel[i].style.margin= '12px -5px 0 0';
}
/* Delete label prefix */
const spansLabelName = document.querySelectorAll('.bg.label-name');
spansLabelName.forEach(span => {
  const text = span.textContent.split(':')[1];
  if (text) {
    const trimmedText = text.trim();
    span.textContent = trimmedText;
  }
});

/* Fix copy pre text */
// Change text (click to copy)
window.addEventListener('load', function() {
	var elements = document.querySelectorAll('.pre-header a');
	for (var i = 0; i < elements.length; i++) {
		var elementsPre = document.getElementsByClassName("code-box");
		var id = elementsPre[i].id;
		elements[i].setAttribute("onclick", "copyPreToClipboard('" + id + "')");
		elements[i].innerHTML = "Copy All Code / Texts";
	}
});
// Fix copy pre text on phone, hide error message
function copyPreToClipboard(id) {
	const copyText = document.getElementById(id).textContent;
	const textArea = document.createElement('textarea');
	textArea.textContent = copyText;
	document.body.append(textArea);
	textArea.select();
	document.execCommand('copy');
	textArea.remove();
	const elements = document.querySelectorAll('.copy-all-message.abs.error');
	elements.forEach(function(element) {
		element.style.display = 'none';
	});
}


/* </script> */
