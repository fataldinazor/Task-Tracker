"use strict";

import "./style.css";
import createHome from "./home.js";
import { createPrj, deletePrjElement, submitPrj} from "./createPrj.js";

createHome();

const prjList=document.querySelector('.prjList');
const prjCreate=document.querySelector('.prjCreate');

//for creating new Projects
prjCreate.addEventListener("click", createPrj);
document.addEventListener("submit", (event) => {
  if (event.target.classList.contains("getPrjForm")) {
    submitPrj(event);
  }
});
prjList.addEventListener('click',function(event){
  deletePrjElement(event);
})

export {prjList, prjCreate};
