onload=function(){
	var c=document.getElementById('canvas');
	c.width=window.innerWidth;
	c.height=window.innerHeight-3;
	var gl=c.getContext('webgl')||c.getContext('experimental-webgl');
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
}