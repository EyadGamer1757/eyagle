function search() {
    const query = document.getElementById('searchInput').value;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(searchUrl, '_blank');
}
