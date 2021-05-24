function addArticle(){

    let article = document.createElement('div');
    article.classList.add('blog-card');

    document.body.appendChild(article);

    //@ts-ignore
    let txt = document.getElementById('txt').value;

    let header = document.createElement('h4');
    header.innerHTML = txt;

    article.append(header);

    let description = document.createElement('p');
    description.innerHTML = 'Tak to ma działac?';

    article.append(description);

}