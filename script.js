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
function performSearch(){
  var search = document.getElementById("searchQuery").value;
  search = search.toLowerCase();
  if(search == ""){
    alert("Please enter a search term");
  }
  else{
    var docText = document.documentElement.textContent;
    docText = docText.toLowerCase();
    if(docText.includes(search)){
      getSearchResults(search);
    } else{
      alert("No results found");
    }
  }
}
function getSearchResults(search){
  const elements = document.getElementsByTagName('*');
  for (let i = 0; i < elements.length; i++){
    var text = elements[i].textContent;
    text = text.toLowerCase();
    if(text.includes(search)){
      searchResults.push(text);
    }
  }
  var results = document.getElementById("searchResults");
  results.innerHTML = "";
  
}