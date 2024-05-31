"use strict";

import { getListIndex, getList } from "./list.js";

const Task = (listId, title, desc, dueDate, priority) => {
  let id = Date.now().toString();
  let complete = false;
  return {
    id,
    listId,
    title,
    desc,
    dueDate,
    priority,
    complete,
  };
};

const createTask = (listId, title, desc, dueDate, priority) => {
  const list = getList(listId);
  const task = Task(listId, title, desc, dueDate, priority);
  list["tasks"].push(task);
};

const deleteTask = (listId, taskId) => {
  const list = getList(listId);
  const taskIndex = getTaskIndex(listId, taskId);
  list["tasks"].splice(taskIndex, 1);
};

const markComplete = (listId, taskId) => {
  const list = getList(listId);
  const task = getTask(listId, taskId);
  const taskIndex = getTaskIndex(listId, taskId);
  list[completed].unshift(task);
  list.tasks.splice(taskIndex, 1);
};

const getTask = (listId, taskId,) => {
  const list = getList(listId);
  const task = list["tasks"].find((task) => task.id === taskId);
  return task;
};

const updateTask=(listId, taskId, title, desc, dueDate, priority)=>{
  const task=getTask(listId, taskId);
  task.title=title;
  task.desc=desc;
  task.dueDate=dueDate;
  task.priority=priority;
}

const getTaskIndex = (listId, taskId) => {
  const list = getList(listId);
  const taskIndex = list["tasks"].findIndex((task) => task.id === taskId);
  return taskIndex;
};

export { createTask, getTask, getTaskIndex, deleteTask, markComplete,updateTask };
