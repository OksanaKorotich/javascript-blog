
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
      const htmlTag = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      /* add generated code to html variable */
      html = html + htmlTag;
    }
    console.log(html);
    /* END LOOP: for each tag */
    /* insert HTML of all the links into the tags wrapper */
    tagList.innerHTML = html;
    /* END LOOP: for every article: */
  }
}

addClickListenersToTags();

const links = document.querySelectorAll('.titles a');
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log('Link was clicked!', clickedElement);
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('href', href);
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log ('tag', tag);
  /* find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */

    /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */
  const links = document.querySelectorAll('.post-tags .list');
  /* START LOOP: for each link */
  for(let link of links){
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler);
  }
  /* END LOOP: for each link */
}

addClickListenersToTags();



