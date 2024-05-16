"use strict";
import "./style.css";

// container
const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

// header
const header = document.createElement("div");
header.classList.add("header");
container.appendChild(header);

// sidebar
const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");
container.appendChild(sidebar);

// content
const content = document.createElement("div");
content.classList.add("content");
container.appendChild(content);
