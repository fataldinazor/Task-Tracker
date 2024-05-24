"use strict";

import svg1 from "./assets/trash.svg";
import * as taskModule from "./task.js";
import * as listModule from "./list.js";
import { createElement, createHome, contentInit } from "./homepage.js";
// import { Module } from "webpack";

const screenController = () => {
  window.addEventListener("load", createHome());
  const addPrjBtn = document.querySelector(".addPrjBtn");
  const prjList = document.querySelector(".prjList");
  const contentInit = document.querySelector(".contentInit");

  //sideBar Functionality
  addPrjBtn.addEventListener("click", createPrjForm);
  function createPrjForm() {
    if (document.querySelector(".getPrjForm")) {
      return;
    }
    const getPrjForm = createElement("form", "getPrjForm");
    const nameLabel = createElement("label", "", "Project Name:");
    nameLabel.setAttribute("for", "PrjName");
    const nameInput = document.createElement("input");
    nameInput.setAttribute("id", "PrjName");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "project_name");
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Submit";
    const resetBtn = document.createElement("button");
    resetBtn.setAttribute("type", "reset");
    resetBtn.textContent = "Reset";
    nameLabel.appendChild(nameInput);
    getPrjForm.appendChild(nameLabel);
    prjList.appendChild(getPrjForm);

    const btnContainer = createElement("div", "btnContainer");
    btnContainer.appendChild(submitBtn);
    btnContainer.appendChild(resetBtn);
    getPrjForm.appendChild(btnContainer);
    console.log("form created!");
  }

  document.addEventListener("submit", (event) => {
    if (event.target.classList.contains("getPrjForm")) submitPrjForm(event);
    else if (event.target.classList.contains("getTaskForm"))
      submitTaskForm(event);
  });

  prjList.addEventListener("click", function (event) {
    if (
      event.target.classList.contains("trashIcon") ||
      event.target.closest(".trashIcon")
    )
      deletePrj(event);
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("listName")) {
      getTask(event);
    } else if (event.target.classList.contains("addTaskBtn")) {
      createTaskForm(event.target.id);
    } else if (
      // event.target.classList.contains("deleteTaskBtn")
      event.target.closest(".deleteTaskBtn")
    )
      deleteTask(event);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Esc" || event.key === "Escape") {
      const dialog = document.querySelector("dialog");
      if (contentInit.contains(dialog)) contentInit.removeChild(dialog);
    }
  });

  function submitPrjForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const prjName = formData.get("project_name");
    if (prjName) {
      listModule.createList(prjName);
      console.log(listModule.lists);
    }
    prjList.textContent = "";
    displayLists();
    e.target.remove();
  }

  function deletePrj(e) {
    // console.log(e.target.parentElement.parentElement.className);
    listModule.deleteList(e.target.parentElement.parentElement.className);
    prjList.textContent = "";
    displayLists();
  }

  

  function deleteTask(e) {
    // console.log("Im here");
    const taskId=(e.target.parentElement.parentElement.id);
    const listId=(e.target.parentElement.parentElement.parentElement.id.slice(5));
    taskModule.deleteTask(listId,taskId);
    displayTasks();
    
  }

  function displayLists() {
    listModule.lists.forEach((list) => {
      const newPrj = createElement("div", "newPrj");
      newPrj.setAttribute("id", list.id);
      const name = createElement("div", "listName", list.name);
      const svgDiv = createElement("div", "trashIcon");
      svgDiv.innerHTML = svg1;
      newPrj.appendChild(name);
      newPrj.appendChild(svgDiv);
      prjList.appendChild(newPrj);
    });
  }

  function createTaskContainer(listId) {
    const element = createElement("div", "taskContainer");
    element.setAttribute("id", listId);
    return element;
  }

  listModule.createList("Study");
  displayLists();

  //mainContent
  function getTask(e) {
    const listId = e.target.parentElement.id;
    createContent(listId);
    // console.log(listId);
  }
  function createContent(listId) {
    contentInit.innerHTML = "";
    // createTaskContainer(`list-${listId}`)
    const taskContainer=createElement('div','taskContainer');
    taskContainer.setAttribute('id',`list-${listId}`);
    contentInit.appendChild(taskContainer);
    createAddTaskBtn(listId);
    displayTasks(listId);
  }
  function createAddTaskBtn(id) {
    const addTaskBtn = createElement("button", "addTaskBtn", "+");
    addTaskBtn.setAttribute("id",id);
    contentInit.appendChild(addTaskBtn);
  }

  const getPriorColor = (prior) => {
    console.log("hello");
    if (prior === "high") return "FF0000";
    else if (prior === "mid") return "FFFF00";
    else if (prior === "low") return "00FF00";
  };

  const displayTasks = (listId) => {
    const taskContainer=document.querySelector(`#list-${listId}`);
    taskContainer.textContent = "";
    const list = listModule.getList(listId);
    list["tasks"].forEach((task) => {
      const taskBlock = createElement("div", "taskBlock");
      taskBlock.setAttribute("id", task.id);
      const taskTitle = createElement("div", "dispTaskTitle", task.title);
      const taskDesc = createElement("div", "dispTaskDesc", task.desc);
      const taskDate = createElement("div", "dispTaskDate", task.dueDate);
      const taskPrior = createElement("div", "dispTaskPrior");
      const deleteTaskBtn = createElement("div", "deleteTaskBtn");
      deleteTaskBtn.innerHTML = svg1;
      const color = getPriorColor(task.priority);
      taskPrior.style.backgroundColor = `#${color}`;

      taskBlock.appendChild(taskTitle);
      taskBlock.appendChild(taskDesc);
      taskBlock.appendChild(taskDate);
      taskBlock.appendChild(taskPrior);
      taskBlock.appendChild(deleteTaskBtn);

      taskContainer.appendChild(taskBlock);
    });
    contentInit.appendChild(taskContainer);
  };


  const setElementAttribute = (element, id, type, name) => {
    element.setAttribute("id", id);
    element.setAttribute("type", type);
    element.setAttribute("name", name);
  };

  function createTaskForm(listId) {
    const idVal = createElement("input");
    idVal.setAttribute("value", listId);
    setElementAttribute(idVal, "", "hidden", "list_id");
    const getDialog = createElement("dialog");
    const getTaskForm = createElement("form", "getTaskForm");
    const heading = createElement("h2", "", "Task");

    //title
    const titleLabel = createElement("label", "taskTitle", "Title:");
    titleLabel.setAttribute("for", "taskTitle");
    const titleInput = document.createElement("input");
    setElementAttribute(titleInput, "taskTitle", "text", "task_name");
    titleLabel.appendChild(titleInput);

    //desc
    const descLabel = createElement("label", "taskDesc", "Description:");
    descLabel.setAttribute("for", "taskDesc");
    const descInput = document.createElement("textarea");
    descInput.setAttribute("rows", "4");
    descInput.setAttribute("cols", "40");
    setElementAttribute(descInput, "taskDesc", "text", "task_desc");
    descLabel.appendChild(descInput);

    //date
    const dateLabel = createElement("label", "taskDate", "Due Date:");
    dateLabel.setAttribute("for", "taskDate");
    const dateInput = document.createElement("input");
    setElementAttribute(dateInput, "taskDueDate", "date", "task_date");
    dateLabel.appendChild(dateInput);

    const priorLabel = createElement("label", "taskPrior", "Priority:");
    priorLabel.setAttribute("for", "taskPrior");
    const selectTask = createElement(
      "select",
      "",
      "Select Priority of the Task"
    );
    selectTask.setAttribute("name", "task_prior");
    const lowPrior = createElement("option", "", "Low");
    lowPrior.setAttribute("value", "low");
    const midPrior = createElement("option", "", "Medium");
    midPrior.setAttribute("value", "mid");
    const highPrior = createElement("option", "", "High");
    highPrior.setAttribute("value", "high");
    selectTask.appendChild(lowPrior);
    selectTask.appendChild(midPrior);
    selectTask.appendChild(highPrior);
    priorLabel.appendChild(selectTask);
    //buttons
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Submit";
    const resetBtn = document.createElement("button");
    resetBtn.setAttribute("type", "reset");
    resetBtn.textContent = "Reset";

    // arranging the content
    getDialog.appendChild(getTaskForm);
    getTaskForm.appendChild(heading);
    getTaskForm.appendChild(idVal);
    getTaskForm.appendChild(titleLabel);
    getTaskForm.appendChild(descLabel);
    getTaskForm.appendChild(dateLabel);
    getTaskForm.appendChild(priorLabel);
    const btnContainer = createElement("div", "btnContainer");
    btnContainer.appendChild(submitBtn);
    btnContainer.appendChild(resetBtn);
    getTaskForm.appendChild(btnContainer);
    contentInit.appendChild(getDialog);
    getDialog.showModal();
  }

  const submitTaskForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const listId = formData.get("list_id");
    // const list=listModule.getList(listId);
    const taskTitle = formData.get("task_name");
    const taskDesc = formData.get("task_desc");
    const dueDate = formData.get("task_date");
    const taskPrior = formData.get("task_prior");
    if (listId && taskTitle && taskDesc && dueDate && taskPrior) {
      taskModule.createTask(listId, taskTitle, taskDesc, dueDate, taskPrior);
      console.log(listModule.lists);
    }
    const dialog = document.querySelector("dialog");
    dialog.close();
    contentInit.removeChild(dialog);
    displayTasks(listId);
  };
};

export { screenController };
