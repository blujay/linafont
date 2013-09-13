/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'lina\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-untitled' : '&#x61;',
			'icon-untitled-2' : '&#x62;',
			'icon-untitled-3' : '&#x63;',
			'icon-untitled-4' : '&#x64;',
			'icon-untitled-5' : '&#x65;',
			'icon-untitled-6' : '&#x66;',
			'icon-untitled-7' : '&#x67;',
			'icon-untitled-8' : '&#x68;',
			'icon-untitled-9' : '&#x69;',
			'icon-untitled-10' : '&#x6a;',
			'icon-untitled-11' : '&#x6b;',
			'icon-untitled-12' : '&#x6c;',
			'icon-untitled-13' : '&#x6d;',
			'icon-untitled-14' : '&#x6e;',
			'icon-untitled-15' : '&#x6f;',
			'icon-untitled-16' : '&#x70;',
			'icon-untitled-17' : '&#x71;',
			'icon-untitled-18' : '&#x72;',
			'icon-untitled-19' : '&#x73;',
			'icon-untitled-20' : '&#x74;',
			'icon-untitled-21' : '&#x75;',
			'icon-untitled-22' : '&#x76;',
			'icon-untitled-23' : '&#x77;',
			'icon-untitled-24' : '&#x78;',
			'icon-untitled-25' : '&#x79;',
			'icon-untitled-26' : '&#x7a;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};