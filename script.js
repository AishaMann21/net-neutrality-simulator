document.querySelector('button').addEventListener('click', function () {
window.alert('Save Net Neutrality!');
});

document.querySelector('button').addEventListener('click', function () {
  var button= document.querySelector('button')
  button.style.background="rgb(232,232,232)"
});


document.querySelector('button').addEventListener('click', function () {
var allH=document.querySelectorAll('h1');
allH[1].textContent="Loading..."
allH[2].textContent="Loading..."
allH[3].textContent="Loading..."
allH[4].textContent="Loading..."
});


document.querySelector('button').addEventListener('click', function () {
  var allImg=document.querySelectorAll('img')
  allImg[1].src="https://www.infragistics.com/samples/WebImages/WPF/Controls/xamBusyIndicator/spinnerbar.gif"
  allImg[2].src="https://www.infragistics.com/samples/WebImages/WPF/Controls/xamBusyIndicator/spinnerbar.gif"

});

document.querySelector('button').addEventListener('click', function () {
var allP=document.querySelectorAll('p')
allP[0].style.background="white";
allP[1].style.background="white";
});



document.querySelector('button').addEventListener('click', function () {
var allLinks=document.querySelectorAll('a')
allLinks[0].href="javascript:void(0)"
allLinks[1].href="javascript:void(0)"
allLinks[2].href="javascript:void(0)"
});
