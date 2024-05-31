'use strict'

import './style.css';

const createElement = (tag, classNames, textContent) => {
    const element = document.createElement(tag);
    if (classNames) {
      classNames.split(" ").forEach((className) => {
        element.classList.add(className);
      });
    }
    if (textContent) {
      element.textContent = textContent;
    }
    return element;
};

const createHome=()=>{
    const body = document.querySelector("body");
    const container = createElement("div", "container");
    body.appendChild(container);

    // header
    const header = createElement("div", "header");
    container.appendChild(header);

    const webName = createElement("div", "webName", "sample");
    const logBtns = createElement("div", "logBtns");
    const signBtn = createElement("button", "signBtn", "Sign Up");
    const loginBtn = createElement("button", "loginBtn", "Log In");

    header.appendChild(webName);
    logBtns.appendChild(signBtn);
    logBtns.appendChild(loginBtn);
    header.appendChild(logBtns);

    // sidebar
    const sidebar = createElement("div", "sidebar");
    container.appendChild(sidebar);
    const prjTitle = createElement("div", "prjTitle", "Projects");
    const prjList = createElement("div", "prjList");
    const prjCreate = createElement("button", "addPrjBtn", "+");

    sidebar.appendChild(prjTitle);
    sidebar.appendChild(prjList);
    sidebar.appendChild(prjCreate);
    // content
    const content = createElement("div", "content");
    container.appendChild(content);
    const contentInit = createElement(
    "div",
    "contentInit",
    "Add A Project to start Creating your To-Do List"
    );
    content.appendChild(contentInit);
}

export {createElement,createHome};

