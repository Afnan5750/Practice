function search(){
    let texttosearch = document.getElementById("search").ariaValueMax;
    let paragraph = document.getElementById("paragraph");
    texttosearch = texttosearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    paragraph.innerHTML = paragraph.textContent.replace(pattern,match => '<mark>${match}</mark>')
}