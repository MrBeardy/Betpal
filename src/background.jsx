
import Page from './classes/Page.jsx'

// let p = new Page( $.parseHTML( $("body").html() ) );
// let html = document.documentElement.outerHTML;

let html = "<body><h1>Hello World</h1>"

console.log(
  new Page(html).dom.querySelectorAll("h1")[0].innerHTML
)
