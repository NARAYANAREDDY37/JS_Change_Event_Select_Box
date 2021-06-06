let selectBox = document.querySelector('#language-select');
selectBox.addEventListener('change', function(){
  let selectoption = selectBox.value;
  let languageOption = document.querySelector('#language-option');
  languageOption.innerText = selectoption;
});