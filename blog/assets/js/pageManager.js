console.log("page manager loaded..")

function content_manage(filename, imgSrc, textTitle, textContent, publishTime, readTime, commentCount){

    let pageManager = document.getElementById("pageManager");


    const itemDiv = document.createElement('div');
    itemDiv.className = 'item mb-5';

    const mediaDiv = document.createElement('div');
    mediaDiv.className = 'media';

    const imgElement = document.createElement('img');
    imgElement.className = 'mr-3 img-fluid post-thumb d-none d-md-flex';
    // imgElement.src = 'assets/images/blog/blog-post-thumb-1.jpg';
    imgElement.src = imgSrc;
    imgElement.alt = 'image';

    const mediaBodyDiv = document.createElement('div');
    mediaBodyDiv.className = 'media-body';

    const h3Element = document.createElement('h3');
    h3Element.className = 'title mb-1';
    const linkH3 = document.createElement('a');
    // linkH3.href = 'pages/07-00-00_05-08-2024.html';
    linkH3.href = filename
    // linkH3.textContent = 'Why Every Developer Should Have A Blog';
    linkH3.textContent = textTitle;
    h3Element.appendChild(linkH3);

    const metaDiv = document.createElement('div');
    metaDiv.className = 'meta mb-1';
    const dateSpan = document.createElement('span');
    dateSpan.className = 'date';
    // dateSpan.textContent = 'Published 2 days ago';
    dateSpan.textContent = publishTime;
    const timeSpan = document.createElement('span');
    timeSpan.className = 'time';
    // timeSpan.textContent = '5 min read';
    timeSpan.textContent = readTime;
    const commentSpan = document.createElement('span');
    commentSpan.className = 'comment';
    const commentLink = document.createElement('a');
    commentLink.href = '#';
    // commentLink.textContent = '8 comments';
    commentLink.textContent = commentCount;
    commentSpan.appendChild(commentLink);
    metaDiv.appendChild(dateSpan);
    metaDiv.appendChild(timeSpan);
    metaDiv.appendChild(commentSpan);

    const introDiv = document.createElement('div');
    introDiv.className = 'intro';
    // introDiv.textContent = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...';
    introDiv.textContent = textContent;

    // Create the 'more-link' element
    const moreLink = document.createElement('a');
    moreLink.className = 'more-link';
    // moreLink.href = 'pages/07-00-00_05-08-2024.html';
    moreLink.href = filename
    moreLink.innerHTML = 'Read more &rarr;';

    mediaBodyDiv.appendChild(h3Element);
    mediaBodyDiv.appendChild(metaDiv);
    mediaBodyDiv.appendChild(introDiv);
    mediaBodyDiv.appendChild(moreLink);
    mediaDiv.appendChild(imgElement);
    mediaDiv.appendChild(mediaBodyDiv);
    itemDiv.appendChild(mediaDiv);

    pageManager.appendChild(itemDiv);
}

filename = fileList[0];
console.log(filename);
imgSrc = "assets/images/blog/blog-post-thumb-1.jpg";
textTitle = "Why Every Developer Should Have A Blog";
textContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...";
publishTime = "Published 123 days ago";
readTime = "1 hour read";
commentCount = "10,872 comments";

content_manage(filename, imgSrc, textTitle, textContent, publishTime, readTime, commentCount)
