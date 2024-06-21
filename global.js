console.log("Test");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a");
let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);
currentLink?.classList.add("current");
console.log(currentLink);

let pages = [
    {url: "https://tardicoder.github.io/portfolio/", title :"Home"},
    {url: "https://tardicoder.github.io/portfolio/projects/", title: "Projects"},
    {url: "https://tardicoder.github.io/portfolio/contact/", title: "Contact"},
    {url: "https://github.com/TardiCoder/", title: "Github Page"}
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
    
    let url = p.url;
    let title = p.title;
    nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );

}



