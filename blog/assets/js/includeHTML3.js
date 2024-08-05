function includeHTML() {
  var elements = document.querySelectorAll('[w3-include-html]');
  var totalElements = elements.length;

  if (totalElements === 0) {
    return; // No elements with the attribute left to process
  }

  elements.forEach(function(elmnt) {
    var file = elmnt.getAttribute('w3-include-html');
    
    if (file) {
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status === 200) {
            elmnt.innerHTML = this.responseText;
          } else if (this.status === 404) {
            elmnt.innerHTML = "Page not found.";
          }
          // Remove the attribute to avoid re-processing
          elmnt.removeAttribute('w3-include-html');
          
          // Call the function again to handle any new elements
          includeHTML();
        }
      };

      xhttp.open('GET', file, true);
      xhttp.send();
      
      // Exit after initiating the request for the current element
      return;
    }
  });
}
