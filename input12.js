// Load links from local storage when the page loads
window.addEventListener('load', function() {
    let storedLinks = JSON.parse(localStorage.getItem('userLinks') || '[]');
    storedLinks.forEach(url => createLinkElement(url));
});

document.getElementById('createButton').addEventListener('click', function() {
    // Prompt the user for input
    let userInput = prompt("Please enter the URL:");
    
    // Check if the user entered something
    if (userInput) {
        // Ensure the URL starts with "https://"
        if (!userInput.startsWith('https://')) {
            userInput = 'https://' + userInput;
        }

        // Store the value in local storage
        let storedLinks = JSON.parse(localStorage.getItem('userLinks') || '[]');
        storedLinks.push(userInput);
        localStorage.setItem('userLinks', JSON.stringify(storedLinks));

        // Create the link element
        createLinkElement(userInput);
    } else {
        alert("No URL entered.");
    }
});

function createLinkElement(url) {
    // Create an 'a' element
    let linkElement = document.createElement('a');
    
    // Set the href and text content of the 'a' element
    linkElement.href = url;
    linkElement.textContent = url;
    
    // Add an event listener to open the link in a new tab
    linkElement.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of navigating to the URL
        window.open(url, '_blank'); // Open the URL in a new tab
    });
    
    // Append the 'a' element to the container
    document.getElementById('linkContainer').appendChild(linkElement);
    
    // Add a line break after the link (optional)
    document.getElementById('linkContainer').appendChild(document.createElement('br'));
}
