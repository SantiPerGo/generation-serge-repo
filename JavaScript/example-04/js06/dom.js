// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Changing title, subtitle and tags
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const addTextById = (id, text) => document.getElementById(id).innerHTML += `, ${text}`;

addTextById("title", "**Santi**");

const addTextWithTagById = (id, text, tag) =>
    document.getElementById(id).innerHTML += `, <${tag}>${text}</${tag}>`;

addTextWithTagById("subtitle", "**2023**", "em");

const getElementsArrayByTag = tag => Array.from(document.getElementsByTagName(tag));
const changeTagsTextWithAnchor = (tag, text, url) =>
    getElementsArrayByTag(tag).map(element =>
        element.innerHTML = `<a href="${url}" target="_blank">${text}</a>`);
        
changeTagsTextWithAnchor("em", "**Serge Repo**", "https://github.com/sergiotrrs/ch26-javascript");

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Universal selector
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const addTextWithTagByQuerySelector =
    (name, text, tag) => document.querySelector(name).innerHTML = `<${tag}>${text}</${tag}>`;

// We can use query selector like css
addTextWithTagByQuerySelector("p em", "**Text changed with query selector!**", "strong");

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Create element, appendchild and clone node
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const addTagByQuerySelector = (tag, query, text) => {
    const nodeElement = document.createElement(tag);
    nodeElement.innerHTML = text;

    const elementRef = document.querySelector(query);
    elementRef.appendChild(nodeElement);

    // If true, clone also the HTML elements descendants
    const elementClone = nodeElement.cloneNode(true);
    elementRef.appendChild(elementClone);
};

const text = `The ch26 likes:
    <ul>
        <li>Food</li>
        <li>Games</li>
        <li>Stories</li>
        <li>Programming languages</li>
        <li>Tasks</li>
    </ul>`;
addTagByQuerySelector("p", "#article-news", text);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Change styles
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const setBorderById = (id, border) => document.getElementById(id).style.border = border;
const setBorderColorById = (id, color) => document.getElementById(id).style.borderColor = color;

setBorderById("title", "thick solid lightskyblue");
setBorderColorById("title", "purple");

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Visualization properties
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// display: none (deletes the element from the DOM)
// visibility: hidden (hides the element)
const resetButton = id => document.getElementById(id).style.display = "inline";
const deleteButton = id => document.getElementById(id).style.display = "none";
const hideButton = id => document.getElementById(id).style.visibility = "hidden";
const showButton = id => document.getElementById(id).style.visibility = "visible";