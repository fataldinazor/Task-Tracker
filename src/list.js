let lists = [];

const List = (name) => {
  const id = Date.now().toString();
  let tasks = [];
  let completed = [];
  return {
    id,
    name,
    tasks,
    completed,
  };
};

const createList = (name) => {
  let list;
  if (lists.find((list) => list.name === name)) {
    list = List(name + "1");
  } else list = List(name);
  lists.push(list);
};

const deleteList = (listId) => {
  const listIndex = getListIndex(listId);
  lists.splice(listIndex, 1);
};

const getListIndex = (listId) => {
  return lists.findIndex((list) => listId === list.id);
};

const getList = (listId) => {
  return lists.find((list) => list.id === listId);
};


export { lists, createList, getList, deleteList, getListIndex };
