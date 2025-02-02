function toggle(sec) {
  if (sec == 8 || sec == 9){
    console.log(sec);
    for(var i = 1; i<=10; i++){
      if(i != sec){
        document.getElementById(i.toString()).style.display = "none";
      } else{
        document.getElementById(i.toString()).style.display = "block";
      }
    }
  }
  for(var i = 1; i<=10; i++){
    if(i != sec){
      document.getElementById(i.toString()).style.display = "none";
    }
    else{
      document.getElementById(i.toString()).style.display = "block";
      
      num = i.toString()+"0";
      const headers = document.getElementsByTagName('h2');
      for (let i = 0; i < headers.length; i++) {
        console.log(headers[i].textContent);
        if(!headers[i].classList.contains('noHighlight')){
          headers[i].classList.add("highlight");
          setTimeout(removeHighlight, 1);
        }
      }
    }
  }
}
function removeHighlight(){
  headers[i].classList.remove("highlight");
}
document.getElementById('searchQuery').addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key); // Debugging line
  if (event.key === 'Enter') {
    var input = document.getElementById('mainSearch').value.trim().toLowerCase();
    if (input === '') {
      return;
    } else {
      search(input);
    }
  }
});

function performSearch(){
  var input = document.getElementById('searchQuery').value.trim().toLowerCase();
  if (input == '') {
  } else {
    search(input);
  }
}
