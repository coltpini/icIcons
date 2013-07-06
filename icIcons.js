var IcIcons = function(opts) {
	this.options = {};
	this.options.config = opts.config || {};
};

IcIcons.prototype.inject = function(){
	var conf = this.options.config;
	for(var icon in conf){
		var val = conf[icon];
		if (conf.hasOwnProperty(icon)){
			var t = val,
				elems = document.querySelectorAll('ic' + icon),
				cont = "";
    			if(val.indexOf(';') > -1){
				t = val.split(';');
			}
			var i = 0;
			for(i=0; i<t.length;i++){
				cont += '<span class="icLayer ic' + i + '">' + t[i] + "</span>";
			}
			for(i=0; i<elems.length;i++){
				var elem = elems[i];
				elem.setAttribute("class", "icIcon");
				elem.innerHTML = cont;
			}
		}
	}
};