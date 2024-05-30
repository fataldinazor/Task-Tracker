"use strict";

import svg1 from "./assets/trash.svg";
import { format, differenceInDays } from "date-fns";
import * as taskModule from "./task.js";
import * as listModule from "./list.js";
import { createElement, createHome } from "./homepage.js";
import { createPrjForm, createTaskForm } from "./forms.js";

const screenController = () => {
  window.addEventListener("load", createHome());
  const addPrjBtn = document.querySelector(".addPrjBtn");
  const prjList = document.querySelector(".prjList");
  const contentInit = document.querySelector(".contentInit");

  //sideBar Functionality
  addPrjBtn.addEventListener("click", createPrjForm);
  // function createPrjForm()

  //handle form submission
  document.addEventListener("submit", (event) => {
    if (event.target.classList.contains("getPrjForm")) submitPrjForm(event);
    else if (event.target.classList.contains("getTaskForm"))
      submitTaskForm(event);
  });

  // handle project list clicks
  prjList.addEventListener("click", function (event) {
    if (
      event.target.classList.contains("trashIcon") ||
      event.target.closest(".trashIcon")
    )
      deletePrj(event);
  });

  //handle main content click events
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
    else if (event.target.parentElement.classList.contains("taskBlock"))
      editTask(event);
  });

  //handle esc key to close dialogs
  document.addEventListener("keydown", function (event) {
    if (event.key === "Esc" || event.key === "Escape") {
      const dialog = document.querySelector("dialog");
      if (contentInit.contains(dialog)) contentInit.removeChild(dialog);
    }
  });

  // sidebar functions
  //form submission for projects
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

  //delete Project
  function deletePrj(e) {
    listModule.deleteList(e.target.parentElement.parentElement.className);
    prjList.textContent = "";
    displayLists();
  }

  // displayLists
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

  // create Task Container
  function createTaskContainer(listId) {
    const element = createElement("div", "taskContainer");
    element.setAttribute("id", `list-${listId}`);
    return element;
  }

  //mainContent
  // get task for a project
  function getTask(e) {
    const listId = e.target.parentElement.id;
    console.log(listId);
    createContent(listId);
  }
  function createContent(listId) {
    contentInit.innerHTML = "";
    const taskContainer = createTaskContainer(listId);
    contentInit.appendChild(taskContainer);
    createAddTaskBtn(listId);
    displayTasks(listId);
  }

  function createAddTaskBtn(listId) {
    const addTaskBtn = createElement("button", "addTaskBtn", "+");
    addTaskBtn.setAttribute("id", listId);
    contentInit.appendChild(addTaskBtn);
  }

  const getPriorColor = (prior) => {
    console.log("hello");
    if (prior === "high") return "FF0000";
    else if (prior === "mid") return "FFFF00";
    else if (prior === "low") return "00FF00";
  };

  const truncateString = (str) => {
    if (str.length > 35) str = `${str.slice(0, 35)}...`;
    return str;
  };

  const timeRemaining = (dateDiff) => {
    if (dateDiff < 0) {
      return `The task was due ${dateDiff} days ago`;
    } else if (dateDiff > 0) {
      return `The task is due in ${dateDiff} days`;
    } else if (dateDiff === 0) {
      return `The task is due today`;
    }
  };

  const displayTasks = (listId) => {
    const taskContainer = document.querySelector(`#list-${listId}`);
    taskContainer.textContent = "";
    const list = listModule.getList(listId);
    if (list["tasks"].length === 0) {
      taskContainer.textContent =
        "Click on the Add Button below to start Creating your Tasks";
    } else {
      list["tasks"].forEach((task) => {
        const currDate = new Date();
        const taskDueDate = task.dueDate;
        const diffDate = differenceInDays(taskDueDate, currDate);

        const taskBlock = createElement("div", "taskBlock");
        taskBlock.setAttribute("id", task.id);
        const taskTitle = createElement("div", "dispTaskTitle", task.title);
        const taskDesc = createElement(
          "div",
          "dispTaskDesc",
          truncateString(task.desc)
        );
        const taskDate = createElement(
          "div",
          "dispTaskDate",
          // format(new Date(task.dueDate), "MM-dd-yyyy")
          timeRemaining(diffDate)
        );
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
    }
    // contentInit.appendChild(taskContainer);
  };

  function deleteTask(e) {
    // console.log("Im here");
    const taskId = e.target.parentElement.parentElement.id;
    const listId =
      e.target.parentElement.parentElement.parentElement.id.slice(5);
    taskModule.deleteTask(listId, taskId);
    displayTasks(listId);
  }

  function editTask(event){
    const taskId=event.target.parentElement.id;
    const listId=event.target.parentElement.parentElement.id.slice(5);
    currTask=taskModule.getTask(listId,taskId);
    
  }

  // const setElementAttribute = (element, id, type, name)
  // function createTaskForm(listId)

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

  listModule.createList("Study");
  displayLists();
  listModule.lists.forEach((list) => {
    if (list.name === "Study") {
      const listId = list.id;
      taskModule.createTask(
        listId,
        "Exam",
        "Study for the exam scheduled next week",
        "06-05-2024",
        "high"
      );
      displayTasks(listId);
    }
  });
};
export { screenController };
