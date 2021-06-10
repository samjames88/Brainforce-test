
const akk = document.querySelectorAll('.TEXT');
const button = document.getElementsByClassName('button');
const frameTxt = document.getElementsByClassName('frameTxt');



window.onload = function() {
frameTxt[0].style.fontSize = '16px';
button[0].style.backgroundImage = 'url(img/closeBlack.svg)';
}




akk.forEach(function (btn,index) {
	btn.onclick = function (e) {
if (e.currentTarget.classList.contains('hide'))
	{
e.currentTarget.classList.remove('hide');
frameTxt[index].style.fontSize = '16px';
document.getElementsByClassName('frameTxt2')[index].style.fontSize = '16px';
button[index].style.backgroundImage = 'url(img/closeBlack.svg)';
	}
else 
	{
e.currentTarget.classList.add('hide');
frameTxt[index].style.fontSize = '0px';
document.getElementsByClassName('frameTxt2')[index].style.fontSize = '0px';
button[index].style.backgroundImage = 'url(img/openBlack.svg)';
	}
}

btn.onmousedown = function (e) {
if (e.currentTarget.classList.contains('hide'))
button[index].style.backgroundImage = 'url(img/openOrange.svg)';
else
button[index].style.backgroundImage = 'url(img/closeOrange.svg)';
}

btn.onmouseup = function (e) {
if (e.currentTarget.classList.contains('hide'))	
button[index].style.backgroundImage = 'url(img/openBlack.svg)';
else
button[index].style.backgroundImage = 'url(img/closeBlack.svg)';
}

    
})


