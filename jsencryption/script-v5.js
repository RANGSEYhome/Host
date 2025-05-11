/* <script type="text/javascript"> */
/* This tool was modified by Rangsey P. HENG */
/* For more please visit: https://rangseyhome.blogspot.com */

/*
Note: This encryption tool needs Message Box and Gibberish-AES. Please attach scripts below.
<script src="https://cdn.jsdelivr.net/gh/RANGSEYhome/Host/messagebox/script-4.min.js">/<script>
<script src="https://cdn.jsdelivr.net/gh/RANGSEYhome/Host/gibberish-aes/gibberish-aes-1.0.0.min.js">/<script>
*/
	
/*
	JavaScript Encryption and Decryption 2.0
	http://www.vincentcheung.ca/jsencryption/
  
  The backend is Gibberish AES by Mark Percival (http://github.com/markpercival/gibberish-aes/tree/master)
  http://github.com/mdp/gibberish-aes (Project moved)
*/

var decryptElementId;
var overlayElt = null;
var winElt = null;
var passElt = null;
var promptElt = null;
var togglePass = null;

function decryptText(a, b, c) {
    decryptElementId = a;
    if (b == null) {
        b = "Enter the decryption key:";
    }
    if (c != null && c) {
        var d = prompt(b, "");
        decrypt(d);
    } else {
        vcPrompt(b, decrypt);
    }
}

function resetPasswordVisibility() {
    if (passElt && togglePass) {
        passElt.type = "password";
        togglePass.textContent = "👁";
    }
}

function reset_focus_input() {
    passElt.value = "";
    resetPasswordVisibility();
    passElt.focus();
    passElt.select();
}

function set_modal_overlay_visibility(d) {
    overlayElt.style.display = d;
    winElt.style.display = d;
}

function decrypt(a) {
    if (a != "" && a != null) {
        if (decryptElementId.constructor != Array) {
            decryptElementId = [decryptElementId];
        }
        var b = false;
        for (var i = 0; i < decryptElementId.length; i++) {
            var c = document.getElementById(decryptElementId[i]);
            var d = c.title;
            try {
                var e = GibberishAES.dec(d, a);
                b = true;
                c.innerHTML = e;
                c.title = "";
                set_modal_overlay_visibility("none");
            } catch (err) {}
        }
        if (!b) {
            show_r_message_alert(error + 'Invalid decryption key! <br>Please enter the right decryption key.', t2s);
            reset_focus_input();
        }
    } else {
        show_r_message_alert(warning + 'No decryption key! <br>Please try again with the right decryption key.', t2s);
        reset_focus_input();
    }
}

function vcPrompt(a) {
    if (winElt == null || passElt == null || promptElt == null) {
        vcCreateDialog(a);
    }
    promptElt.innerHTML = a != null ? a : "Enter password:";
    set_modal_overlay_visibility("block");
    reset_focus_input();
}

function vcCreateDialog() {
    overlayElt = document.createElement("div");
    overlayElt.setAttribute("id", "vcOverlay");
    var s = overlayElt.style;
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
    var a = document.getElementsByTagName("body").item(0);
    a.insertBefore(overlayElt, a.firstChild);
    
    winElt = document.createElement("div");
    winElt.setAttribute("id", "vcWin");
    s = winElt.style;
    s.position = "fixed";
    s.top = "50%";
    s.left = "50%";
    s.transform = "translate(-50%, -50%)";
    s.width = "400px";
    s.zIndex = 255;
    s.border = "1px solid black";
    s.backgroundColor = "#fbfcfd";
    s.textAlign = "left";
    s.margin = 0;
    s.padding = 0;
    a.insertBefore(winElt, a.firstChild);
    
    var b = document.createElement("div");
    b.setAttribute("id", "vcInWin");
    s = b.style;
    s.border = "5px solid #808080";
    s.padding = "15px";
    s.margin = 0;
    winElt.appendChild(b);
    
    promptElt = document.createElement("p");
    promptElt.setAttribute("id", "vcPrompt");
    s = promptElt.style;
    s.padding = 0;
    s.margin = 0;
    s.fontFamily = "Arial, sans-serif";
    s.fontSize = "14px";
    s.textAlign = "left";
    s.color = "black";
    b.appendChild(promptElt);
    
    // Create container for password input and toggle button
    var passContainer = document.createElement("div");
    passContainer.style.position = "relative";
    passContainer.style.width = "345px";
    passContainer.style.margin = "5px 0 10px 0";
    b.appendChild(passContainer);
    
    passElt = document.createElement("input");
    passElt.setAttribute("id", "vcPass");
    passElt.type = "password";
    passElt.onkeydown = function(c) {
        if (c == null) {
            c = window.event;
        }
        if ((c.keyCode == 10) || (c.keyCode == 13)) {
            vcClick(1);
        }
        if (c.keyCode == 27) {
            vcClick(0);
        }
    };
    s = passElt.style;
    s.position = "relative";
    s.width = "100%";
    s.padding = "5px";
    s.margin = 0;
    s.fontFamily = "monospace";
    s.fontSize = "14px";
    s.textAlign = "left";
    s.color = "black";
    s.border = "2px solid #808080";
    s.backgroundColor = "white";
    passContainer.appendChild(passElt);
    
    // Add show/hide password toggle button
    togglePass = document.createElement("button");
    togglePass.textContent = "👁";
    togglePass.type = "button";
    togglePass.title = "Show/Hide Password";
    togglePass.style.position = "absolute";
    togglePass.style.right = "-10px";
    togglePass.style.top = "50%";
    togglePass.style.transform = "translateY(-50%)";
    togglePass.style.background = "none";
    togglePass.style.border = "none";
    togglePass.style.cursor = "pointer";
    togglePass.style.padding = "0 5px";
    togglePass.style.fontSize = "14px";
    togglePass.onclick = function() {
        if (passElt.type === "password") {
            passElt.type = "text";
            togglePass.textContent = "👁";
        } else {
            passElt.type = "password";
            togglePass.textContent = "👁";
        }
    };
    passContainer.appendChild(togglePass);

    var c = document.createElement("div");
    c.style.textAlign = "right";
    c.style.fontFamily = "Arial, sans-serif";
    c.style.fontSize = "14px";
    b.appendChild(c);
    
    var d = document.createElement("input");
    d.type = "button";
    d.value = "OK";
    d.style.cursor = "pointer";
    d.onclick = function() {
        vcClick(1);
    };
    d.style.margin = "0 0 0 0.5em";
    d.style.padding = "5px";
    d.style.color = "black";
    c.appendChild(d);
    
    d = document.createElement("input");
    d.type = "button";
    d.value = "Cancel";
    d.style.cursor = "pointer";
    d.onclick = function() {
        vcClick(0);
    };
    d.style.margin = "0 0 0 0.5em";
    d.style.padding = "5px";
    d.style.color = "black";
    c.appendChild(d);
}

function vcClick(a) {
    if (a == 1) {
        decrypt(passElt.value);
    } else {
        set_modal_overlay_visibility("none");
    }
    resetPasswordVisibility();
    reset_focus_input();
}
/* </script> */
