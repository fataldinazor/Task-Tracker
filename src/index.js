"use strict";
import "./style.css";
import { createPrj, submitPrj } from "./createPrj.js";

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

// container
const body = document.querySelector("body");
const container = createElement("div", "container");
body.appendChild(container);

// header
const header = createElement("div", "header");
container.appendChild(header);

const webName = createElement("div", "webName", "To-Do List");
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

const prjCreate = createElement("button", "prjCreate", "+");

prjList.appendChild(prjCreate);
sidebar.appendChild(prjTitle);
sidebar.appendChild(prjList);
// content
const content = createElement("div", "content");
container.appendChild(content);
const contentInit = document.createElement(
  "div",
  "contentInit",
  "Add A Project to start Creating your To-Do List"
);
content.appendChild(contentInit);

prjCreate.addEventListener("click", createPrj);
document.addEventListener("submit", (event) => {
  if (event.target.classList.contains("getPrjForm")) {
    submitPrj(event);
  }
});

export default createElement;
export { prjList, prjCreate };
