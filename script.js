
"use strict";

var reply_click = function()
{
    alert("Button clicked, id "+this.id+", text"+this.innerHTML);
}

function redirectToPage(page) {
    window.location.href = page;
}
document.getElementById('home').onclick = ()=>{
    redirectToPage('./index.html');
};

document.getElementById('about').onclick = ()=>{
    redirectToPage('./about.html');
};

document.getElementById('contact').onclick = ()=>{
    
    redirectToPage('./contact.html');
};

document.getElementById('forum').onclick = ()=>{
   
    redirectToPage('./forum.html');
};

document.getElementById('news').onclick = ()=>{
    
    redirectToPage('./news.html');
};


