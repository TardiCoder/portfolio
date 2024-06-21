console.log("It's alive!");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}