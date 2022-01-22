function answer(){ 
  const xhr = new XMLHttpRequest();
  let number = document.getElementById('number').value;
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      const data = xhr.responseText;
      const input = document.getElementById('input');
      input.insertAdjacentHTML('afterend',`${data}`);
      console.log(data);
    };
  };
  xhr.open('GET', `./getData?number=${number}`);
  xhr.send();
};