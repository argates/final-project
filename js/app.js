function renderBooks(book_list) {
    var tbody = document.querySelector ("tbody");
    if (tbody == "") {
        tbody.textContent = "";
    }
    for (var idx = 0; idx < book_list.length; idx++){
        var s_book = book_list[idx];
        tbody.appendChild(renderBook(s_book));
    }
}

function renderBook(book) {
   var tr = document.createElement ("tr");
   tr.appendChild(renderBookProp(book.title,false));
   tr.appendChild(renderBookProp(book.authors,false));
   tr.appendChild(renderBookProp(book.average_rating,false));
   tr.appendChild(renderBookProp(book.small_image_url,true));
   return tr;
}

function renderBookProp(content, show_img) {
    var td = document.createElement ("td");
    if (show_img) {
        var img = document.createElement('img');
        img.src = content;
        td.appendChild(img); 
    }    
    else {
    td.textContent = content;
    }
    return td;
}


