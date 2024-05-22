"use strict";

import svg1 from "./assets/trash.svg";
import * as taskModule from "./task.js";
import * as listModule from "./list.js";
import { createElement, createHome } from "./homepage.js";

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
  listModule.createList("Study");
  displayLists();

  //mainContent
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("listName")) {
      getTask(event);
    }
  });

  function getTask(e) {
    const listId = e.target.parentElement.id;
    createContent(listId);
    console.log(listId);
  }
  function createContent(listId) {
    contentInit.innerHTML = "";
    createAddTaskBtn(listId);
    displayTasks(listId);
  }
  
  const taskContainer=createElement('div','taskContainer listId',);
  const displayTasks = (listId) => {
    taskContainer.textContent=''
    const list = listModule.getList(listId);
    list["tasks"].forEach((task) => {
      const taskBlock = createElement("div", "taskBlock");
      const taskTitle = createElement("div", "taskTitle", task.title);
      const taskDesc = createElement("div", "taskTitle", task.desc);
      const taskDate = createElement("div", "taskDate", task.dueDate);
      const taskPrior=createElement('div','taskPrior',task.priority);
      
      taskBlock.appendChild(taskTitle);
      taskBlock.appendChild(taskDesc);
      taskBlock.appendChild(taskDate);
      taskBlock.appendChild(taskPrior);

      taskContainer.appendChild(taskBlock);
    });
    contentInit.appendChild(taskContainer)
  };

  function createAddTaskBtn(id) {
    const addTaskBtn = createElement("button", "addTaskBtn", "+");
    addTaskBtn.setAttribute("id", id);
    contentInit.appendChild(addTaskBtn);
  }

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("addTaskBtn")) {
      createTaskForm(event.target.id);
    }
  });

  function createTaskForm(listId) {
    //later-> making too many dialog boxes in the background reduce them
    // if(document.querySelector('dialog')){
    //     return
    // }
    // console.log("Hello");
    const idVal = createElement("input");
    idVal.setAttribute("type", "hidden");
    idVal.setAttribute("value", listId);
    idVal.setAttribute("name", "list_id");
    const getDialog = createElement("dialog");
    const getTaskForm = createElement("form", "getTaskForm");
    const heading = createElement("h2", "", "Task");

    //title
    const titleLabel = createElement("label", "", "Title:");
    titleLabel.setAttribute("for", "taskTitle");
    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "taskTitle");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "task_name");
    titleLabel.appendChild(titleInput);

    //desc
    const descLabel = createElement("label", "", "Description:");
    descLabel.setAttribute("for", "taskDesc");
    const descInput = document.createElement("textarea");
    descInput.setAttribute("rows", "4");
    descInput.setAttribute("cols", "40");
    descInput.setAttribute("id", "taskDesc");
    descInput.setAttribute("type", "text");
    descInput.setAttribute("name", "task_desc");
    descLabel.appendChild(descInput);

    //date
    const dateLabel = createElement("label", "", "Due Date:");
    dateLabel.setAttribute("for", "taskDate");
    const dateInput = document.createElement("input");
    dateInput.setAttribute("id", "taskDueDate");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "task_date");
    dateLabel.appendChild(dateInput);

    const priorLabel = createElement("label", "", "Priority:");
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
    // prjList.textContent = "";
    // displayLists();
    // e.target.remove();
    const dialog = document.querySelector("dialog");
    dialog.close();
    displayTasks(listId);
  };
};

export { screenController };
