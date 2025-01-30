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
// document.getElementById('searchQuery').addEventListener('keydown', function(event) {
//   console.log('Key pressed:', event.key); // Debugging line
//   if (event.key === 'Enter') {
//     var input = document.getElementById('mainSearch').value.trim().toLowerCase();
//     if (input === '') {
//       return;
//     } else {
//       search(input);
//     }
//   }
// });

function performSearch(){
  var input = document.getElementById('searchQuery').value.trim().toLowerCase();
  if (input == '') {
  } else {
    search(input);
  }
}

function search(input) {
  
  const sections = document.getElementsByTagName('h2');
  const resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = ''; // Clear previous results

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (section.textContent.toLowerCase().includes(input)) {
      const resultItem = document.createElement('div');
      resultItem.textContent = section.textContent;
      resultItem.classList.add('result-item');
      resultItem.onclick = function() {
        section.scrollIntoView({ behavior: 'smooth' });
        section.style.display = 'block';
        section.classList.add('highlight');
      };
      const innerElements = section.parentElement.children;
      for (let j = 0; j < innerElements.length; j++) {
        const innerElement = innerElements[j].textContent;
        if(innerElement.includes(input)){
          const innerResultItem = document.createElement('div');
          innerResultItem.textContent = innerElement;
          resultItem.appendChild(innerResultItem);
          innerResultItem.classList.add('innerSearchResults')
          innerResultItem.onclick = function() {
            section.scrollIntoView({ behavior: 'smooth' });
            section.style.display = 'block';
            section.classList.add('highlight');
          };
        }
      }
      resultsContainer.appendChild(resultItem);
    }
  }
}
//carosuel
// window.onload = function () {
//     let slides = 
//         document.getElementsByClassName('carousel-item');

//     function addActive(slide) {
//         slide.classList.add('active');
//     }

//     function removeActive(slide) {
//         slide.classList.remove('active');
//     }

//     addActive(slides[0]);
//     setInterval(function () {
//         for (let i = 0; i < slides.length; i++) {
//             if (i + 1 == slides.length) {
//                 addActive(slides[0]);
//                 setTimeout(removeActive, 350, slides[i]);
//                 break;
//             }
//             if (slides[i].classList.contains('active')) {
//                 setTimeout(removeActive, 350, slides[i]);
//                 addActive(slides[i + 1]);
//                 break;
//             }
//         }
//     }, 1500);
// };

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.getElementsByTagName('h2');
  console.log(sections[0].textContent);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log('checking entry:', entry.target.textContent); // Debugging line 
      if (entry.isIntersecting) {
        console.log('entry is intersecting:', entry.target.textContent); // Debugging line  
        entry.target.classList.add('fade-in');
      }
    });
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});