// Start at `let articles`

class Article {
  constructor(element) { //DOM way 
    // assign this.element to the passed in article element
    this.element = element;
    this.expand = this.element.querySelector('.expand');
    // this.expand.style.color = '';
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.element.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = 'expand';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.element.addEventListener('click', () => {
      this.expandArticle();
  });
}

  //method
  expandArticle() {
    console.log(event.currentTarget.parentNode);
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    this.element.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Article(article));

