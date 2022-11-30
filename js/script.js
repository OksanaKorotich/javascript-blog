
'use strict';
function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  // (done) remove class 'active' from all article links
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  // (done) add class 'active' to the clicked link
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);

  //(done) remove class 'active' from all articles
  const activeArticles = document.querySelectorAll('article.post');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  // (done) get 'href' attribute from the clicked link
  const articleSelector = clickedElement.getAttribute ('href');
  console.log('articleSelector', clickedElement.getAttribute ('href'));

  // (done) find the correct article using the selector (value of 'href' attribute)
  const targetArticle = document.querySelector(articleSelector);
  console.log('targetArticle:', targetArticle);

  //add class 'active' to the correct article
  targetArticle.classList.add('active');
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){

  //remove contents of titleList
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  //for each articles
  const allArticles = document.querySelectorAll(optArticleSelector);
  let html = '';
  for(let article of allArticles){
    //get the article id
    const articleId = article.getAttribute('id');
    //find the title element
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    //get the title from the title element
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    //create HTML of the link
    html = html + linkHTML;
  }
  //insert link into titleList
  titleList.innerHTML = html;

}
generateTitleLinks();

function generateTags(){
  /* find all articles */
  const allArticles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for(let article of allArticles){
    /* find tags wrapper */
    const tagList = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute ('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      /* generate HTML of the link */
      const htmlTag = '<li><a href="#tag-' + tag + '"><' + tag + '</a></li>';
      /* add generated code to html variable */
      html = html + htmlTag;
    }
    /* END LOOP: for each tag */
    /* insert HTML of all the links into the tags wrapper */
    tagList.innerHTML = html;
    /* END LOOP: for every article: */
    console.log(tagList.innerHTML);
  }

}
generateTags();

const links = document.querySelectorAll('.titles a');
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
