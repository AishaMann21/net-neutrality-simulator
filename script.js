document.querySelector('button').addEventListener('click', function () {
window.alert('Save Net Neutrality!');
  var button= document.querySelector('button')
  button.style.background="rgb(232,232,232)"

  var allH=document.querySelectorAll('h1');
  allH[1].textContent="Loading..."
  allH[2].textContent="Loading..."
  allH[3].textContent="Loading..."
  allH[4].textContent="Loading..."

  var allImg=document.querySelectorAll('img')
  allImg[1].src="https://www.infragistics.com/samples/WebImages/WPF/Controls/xamBusyIndicator/spinnerbar.gif"
  allImg[2].src="https://www.infragistics.com/samples/WebImages/WPF/Controls/xamBusyIndicator/spinnerbar.gif"

  var allP=document.querySelectorAll('p')
  allP[0].style.background="white";
  allP[1].style.background="white";

  var allLinks=document.querySelectorAll('a')
  allLinks[0].href="javascript:void(0)"
  allLinks[1].href="javascript:void(0)"
  allLinks[2].href="javascript:void(0)"

});
document.querySelector('.second').addEventListener('click', function () {
  var email= document.querySelector('#email').value;
  var comment= document.querySelector('#comment').value;
  var name= document.querySelector('#name').value;

  if (name== ''){
  window.alert('Your name is required.');
} else if (email == ''){
    window.alert('Your email is required.');
} else if (comment == ''){
    window.alert('Your comment is required.');
} else if (comment == ''){
    window.alert('Your comment is required.');
} else {
  var nameElement=document.createElement('p');
  var emailElement=document.createElement('p');
  var commentElement=document.createElement('p');
  nameElement.textContent=name
  emailElement.textContent=email
  commentElement.textContent=comment

  var signs = document.querySelector('.signs');
  signs.append(nameElement);
  signs.append(emailElement);
  signs.append(commentElement);

 window.alert('Thank you for doing your part to save Net Neutrality');

  var nameInput = document.querySelector('#name');
  var emailInput = document.querySelector('#email');
  var commentInput = document.querySelector('#comment');
  nameInput.value = ''
  emailInput.value=''
  commentInput.value=''
  var numSignaturesElement=document.querySelector('.numofsigns');
  var  numofsigns=parseInt(numSignaturesElement.textContent);
  numofsigns=numofsigns+1;
  numSignaturesElement.textContent=numofsigns;

 }
});
