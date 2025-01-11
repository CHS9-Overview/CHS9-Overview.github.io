function toggle(sec) {
  for(var i = 1; i<=10; i++){
    if(i != sec){
      document.getElementById(i.toString()).style.display = "none";
    }
    else{
      document.getElementById(i.toString()).style.display = "block";
      
      num = i.toString()+"0";
      const headers = document.getElementsByTagName('h2');
      for (let i = 0; i < headers.length; i++) {
        if(headers[i].textContent != 'More Options' || headers[i].textContent != 'What&#39; Happening?')
        headers[i].classList.add("highlight");
      }
    }
  }
}