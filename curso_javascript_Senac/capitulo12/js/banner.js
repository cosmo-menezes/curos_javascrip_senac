// Javascript para banner rotativo
var img = new Array('1','2','3');
var indice = 0;
setInterval("trocaBanner()", 3000);
function trocaBanner(i) {
	if (i == 0 || i == 1 || i == 2) {
		indice = i;
	} else {
		if (indice == img.length - 1) {
			indice = 0;
		} else {
			indice++;
		}
	}
	document.getElementById("banner_img_1").setAttribute("class", "");
	document.getElementById("banner_img_2").setAttribute("class", "");
	document.getElementById("banner_img_3").setAttribute("class", "");
	document.getElementById("banner_img_" + img[indice]).setAttribute("class", "ativo");
	document.getElementById("banner_img").innerHTML = "<img src='img/foto"+ img[indice] +".jpg' alt='Banner' title='Banner'>";
}