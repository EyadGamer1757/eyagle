function search() {
    const query = document.getElementById('searchInput').value;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(searchUrl, '_blank');
}

function openLink(){
    var input = document.getElementById('userInput').value;
    window.location.href = 'https://' + input;
}
