// Function to save links to local storage
function saveLinks(links) {
    localStorage.setItem('savedLinks', JSON.stringify(links));
}

// Function to get links from local storage
function getLinks() {
    const savedLinks = localStorage.getItem('savedLinks');
    return savedLinks ? JSON.parse(savedLinks) : [];
}

// Function to display saved links on page load
function displaySavedLinks() {
    const linkContainer = document.getElementById('linkContainer');
    const links = getLinks();

    links.forEach(link => {
        const newLink = document.createElement('a');
        newLink.textContent = link;
        newLink.href = link.startsWith('http://') || link.startsWith('https://') ? link : `http://${link}`;
        newLink.target = '_blank';
        newLink.style.display = 'block';
        newLink.style.margin = '10px 0';
        linkContainer.appendChild(newLink);
    });
}

// Event listener for the create button
document.getElementById('createButton').addEventListener('click', function() {
    const linkContainer = document.getElementById('linkContainer');
    const userInput = document.getElementById('userInput').value;
    const newLink = document.createElement('a');

    newLink.textContent = userInput;
    newLink.href = userInput.startsWith('http://') || userInput.startsWith('https://') ? userInput : `http://${userInput}`;
    newLink.target = '_blank';
    newLink.style.display = 'block';
    newLink.style.margin = '10px 0';
    linkContainer.appendChild(newLink);

    // Save the new link to local storage
    const links = getLinks();
    links.push(userInput);
    saveLinks(links);
});

// Display saved links when the page is loaded
document.addEventListener('DOMContentLoaded', displaySavedLinks);
    
    // Add a line break after the link (optional)
    document.getElementById('linkContainer').appendChild(document.createElement('br'));
}
