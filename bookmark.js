(function() {
  var script;
  var x = document.location;
/*   if(!window.jQuery) { */

    script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js";
    document.body.appendChild(script);

/*  } */
    
  (function check_if_loaded() {
    if(!window.jQuery) {

      setTimeout(check_if_loaded, 0);

    } else {

    	var mybrowser=navigator.userAgent;
        if(mybrowser.indexOf('MSIE')>0){ //Firefox, Chrome
            popup('http://www.liblike.com/bookmark/frontend/add/?link='+escape(x),'',550,265);
        }
        else{
	      (function($) {
	
	        var
	          $dark_bg = $('<div id="LibOpened"></div>').css({'z-index': '1000', 'background-color': '#ffffff', 'opacity': '0', 'position': 'absolute', 'width': '100%', 'height': '100%'}),
	          $iframe = $('<iframe></iframe>').css({'width': '100%', 'height': '100%', 'border': 1, 'overflow': 'hidden'}).prop({'src': 'http://www.liblike.com/bookmark/frontend/add/?link='+escape(x), 'width': '100%', 'height': '100%'}),
	          $close = $('<div></div>').css({'position': 'absolute', 'top': 0, 'right': 0, 'padding': '5px 25px', 'cursor': 'pointer', 'color': '#FFF', 'font-size': '8pt', 'font-family': 'verdana'}).html('Close');
	          $modal = $('<div id="modal"></div>').css({'z-index': '1010', 'background-color': '', 'opacity': '0', 'position': 'fixed', 'top': '50%', 'left': '50%', 'margin-left': '-275px', 'margin-top': '-125px', 'width': '550px', 'height': '265px', 'box-shadow': '0px 0px 5px #000', 'overflow': 'auto', 'border': '5px solid rgba(0,0,0,0.2)'}).append($close, $iframe);
	
	        $('body').css({'padding': 0, 'margin': 0}).prepend($dark_bg, $modal);
	
	        $dark_bg.animate({'opacity':0.5}, 400);
	
	        $modal.animate({'opacity':1}, 400);
	
	        $close.on('click', function() {
	          $dark_bg.animate({'opacity': 0}, 400, function(){ $dark_bg.remove(); });
	          $modal.animate({'opacity': 0}, 400, function(){ $modal.remove(); });
	        });
	
	      }(window.jQuery));
        }
    }

  }());
  
  function popup(url,name,windowWidth,windowHeight){
	    myleft=(screen.width)?(screen.width-windowWidth)/2:100;
	    mytop=(screen.height)?(screen.height-windowHeight)/2:100;
	    properties = "width="+windowWidth+",height="+windowHeight;
	    properties +=",scrollbars=no,status=no,toolbar=no,menubar=no,location=no, top="+mytop+",left="+myleft;     
	    window.open(url,name,properties);
	}

}());
