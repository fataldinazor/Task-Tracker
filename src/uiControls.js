"use strict";

import svg1 from "./assets/trash.svg";
import { format, differenceInDays } from "date-fns";
import * as taskModule from "./task.js";
import * as listModule from "./list.js";
import { createElement, createHome } from "./homepage.js";
import { createPrjForm, createTaskForm, editTaskForm } from "./forms.js";

const screenController = () => {
  window.addEventListener("load", createHome());
  const addPrjBtn = document.querySelector(".addPrjBtn");
  const prjList = document.querySelector(".prjList");
  const contentInit = document.querySelector(".contentInit");

  //sideBar Functionality
  addPrjBtn.addEventListener("click", createPrjForm);

  //handle form submission
  document.addEventListener("submit", (event) => {
    if (event.target.classList.contains("getPrjForm")) submitPrjForm(event);
    else if (event.target.classList.contains("getTaskForm"))
      submitTaskForm(event);
    else if (event.target.classList.contains("editTaskForm"))
      submitEditedTaskForm(event);
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
    } else if (event.target.closest(".deleteTaskBtn")) deleteTask(event);
    else if (
      event.target.parentElement.classList.contains("taskBlock") &&
      !event.target.classList.contains("completeCheck")
    )
      editTask(event);
    else if (event.target.classList.contains("completeCheck")) {
      completedTasks(event);
    }
  });

  function completedTasks(event) {
    const parentElement = event.target.parentElement;
    if (event.target.checked) {
      parentElement.classList.add("disable");
    } else {
      parentElement.classList.remove("disable");
    }
  }

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
      return `The task was due ${Math.abs(dateDiff)} days ago`;
    } else if (dateDiff > 0) {
      return `The task is due in ${dateDiff} days`;
    } else if (dateDiff === 0) {
      return `The task is due today`;
    }
  };

  const displayTasks = (listId) => {
    const taskContainer = document.querySelector(`#list-${listId}`);
    if (!taskContainer) {
      console.warn("Task Container is not yet created");
      return;
    }
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
        const checkBox = createElement("input", "completeCheck");
        checkBox.setAttribute("type", "checkbox");
        const taskDate = createElement(
          "div",
          "dispTaskDate",
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
        taskBlock.appendChild(checkBox);
        taskBlock.appendChild(deleteTaskBtn);

        taskContainer.appendChild(taskBlock);
      });
    }
  };

  function deleteTask(e) {
    const taskId = e.target.parentElement.parentElement.id;
    const listId =
      e.target.parentElement.parentElement.parentElement.id.slice(5);
    taskModule.deleteTask(listId, taskId);
    displayTasks(listId);
  }

  function editTask(event) {
    const taskId = event.target.parentElement.id;
    const listId = event.target.parentElement.parentElement.id.slice(5);
    const currTask = taskModule.getTask(listId, taskId);
    editTaskForm(currTask);
  }

  const submitTaskForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const listId = formData.get("list_id");
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

  const submitEditedTaskForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const taskId = formData.get("task_id");
    const listId = formData.get("list_id");
    const taskTitle = formData.get("task_name");
    const taskDesc = formData.get("task_desc");
    const dueDate = formData.get("task_date");
    const taskPrior = formData.get("task_prior");
    if (listId && taskTitle && taskDesc && dueDate && taskPrior) {
      taskModule.updateTask(
        listId,
        taskId,
        taskTitle,
        taskDesc,
        dueDate,
        taskPrior
      );
      console.log(listModule.lists);
    }
    const dialog = document.querySelector("dialog");
    dialog.close();
    contentInit.removeChild(dialog);
    displayTasks(listId);
  };
  const checkBox = document.querySelector(".completeCheck");

  listModule.createList("Study");
  displayLists();
  listModule.lists.forEach((list) => {
    if (list.name === "Study") {
      const listId = list.id;
      taskModule.createTask(
        listId,
        "Exam",
        "Study for the exam scheduled next week",
        "2024-06-05",
        "high"
      );
      displayTasks(listId);
    }
  });
};
export { screenController };
