<!-- Reusable JS: in used in Protect Post Content -->
function add_r_modal_overlay(){
		//Add overlay to dissable action oudside modal
		overlayDiv = document.createElement("div");
		overlayDiv.setAttribute("id", "r-modal-overlay");
		var s = overlayDiv.style;
		s.backgroundColor = "black";
		s.MozOpacity = 0.1;
		s.opacity = 0.1;
		s.filter = "alpha(opacity=10)";
		s.position = "fixed";
		s.top = 0;
		s.left = 0;
		s.width = "100%";
		s.height = "100%";
		s.zIndex = 254;
		s.textAlign = "left";
		s.margin = 0;
		s.padding = 0;
		var b = document.getElementsByTagName("body").item(0);
		b.insertBefore(overlayDiv, b.firstChild);
}
function remove_r_modal_overlay (){
		var element = document.getElementById("r-modal-overlay");
		element.remove();
}
function reset_r_focus_input(selector){
		var input = document.querySelector(selector);
		input.focus();
		input.setSelectionRange(input.value.length, input.value.length);
}
