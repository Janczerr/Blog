function addArticle(){
    //Adding div container
    let article = document.createElement('div');
    article.classList.add('blog-card');
    document.body.appendChild(article);

    //@ts-ignore, Adding the header
    let articleTitle = document.getElementById('articleTitle').value;
    let header = document.createElement('h4');
    header.innerHTML = articleTitle;
    article.append(header);

    //@ts-ignore, Adding the description
    let articleDescription = document.getElementById('articleDescription').value;
    let description = document.createElement('p');
    description.innerHTML = articleDescription;
    article.append(description);

    //Adding the remove button
    let remove = document.createElement('a');
    remove.classList.add('btn-delete');
    remove.innerHTML = "Remove";
    remove.onclick = function removeArticle (){
        document.body.removeChild(article);
    }
    article.append(remove);

}