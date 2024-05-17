function displayInput() {
    var userInput = document.getElementById("userInput").value;
    var p = document.getElementById("search")
    document.getElementById("displayArea").innerText = "You entered: " + userInput;
    p.innerText = ".";
    setTimeout(function() {
        console.log("Delayed message");
    }, 2000); // Delay for 2 seconds
    p.innerHTML="..";
    setTimeout(function() {
        console.log("Delayed message");
    }, 2000); // Delay for 2 seconds
    p.innerHTML="...";
    setTimeout(function() {
        console.log("Delayed message");
    }, 1000); // Delay for 2 seconds
    p.innerHTML="The website opened";
    setTimeout(function() {
        console.log("Delayed message");
    }, 500); // Delay for 2 seconds
    window.location.href = 'https://' + userInput ;
}
function search(){
    var google = document.getElementById("searchInput").value;
    window.location.href = 'https://www.google.com/search?q=' + google ;
}
//        console.log("Start");
//        setTimeout(function() {
//            console.log("Delayed message");
//        }, 2000); // Delay for 2 seconds
//        console.log("End");
//________________________________________________________________________________________________
//setTimeout(function() {
//    console.log("Delayed message");
//}, 2000); // Delay for 2 seconds
//________________________________________________________________________________________________
//https://www.google.com/search?q=
