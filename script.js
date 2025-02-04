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
        console.log(headers[i].textContent);
        if(headers[i].classList.contains("highlight")){
          headers[i].classList.add("highlight");
          setTimeout(removeHighlight, 1000);
        }
      }
    }
  }
}
function removeHighlight(){
  headers[i].classList.remove("highlight");
}
document.getElementById('body').addEventListener('keydown', function(event) {
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

function search(input) {
  if(document.getElementById('searchResults').textContent != ''){
    document.getElementById('searchResults').innerHTML = '';
    document.getElementById('searchIcon').src = 'search.png';
    return;
  }
  const sections = document.getElementsByClassName('section');
  const resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = ''; // Clear previous results

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    let results = [];
    const innerElements = section.querySelectorAll("*");
    for (let j = 0; j < innerElements.length; j++) {
      const element = innerElements[j];
      if (element.textContent.trim().toLowerCase().includes(input)) {
        const result = document.createElement('div');
        const parent = section.getElementsByTagName('h2')[0];
        if(!results.includes(element.textContent)){
          results.push(element.textContent);
          result.textContent = parent.textContent + ' - ' + element.textContent;
          let br = document.createElement("br");
          resultsContainer.appendChild(br);
          resultsContainer.appendChild(result);
          result.addEventListener('click', function() {
            section.scrollIntoView({ behavior: 'smooth' });
          });
          document.getElementById('searchIcon').src = 'clear.png';
        }
      }
    }
  }
}