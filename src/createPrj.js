"use strict";
import "./style.css";
import svg1 from "./assets/trash.svg";
import { createElement } from "./home.js";
import { prjList, prjCreate} from "./index.js";

export function createPrj() {
  // const prjList = document.querySelector(".prjList");
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

  const prjCreate = document.querySelector(".prjCreate");
  prjList.appendChild(prjCreate);
  console.log("form created!");
}

export function submitPrj(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const prjName = formData.get("project_name");
  if (prjName) {
    const newPrj = createElement("div", "newPrj");
    const name = createElement("div", "name", prjName);
    const svgDiv = createElement("div",'trashIcon');
    svgDiv.innerHTML = svg1;
    newPrj.appendChild(name);
    newPrj.appendChild(svgDiv);
    prjList.insertBefore(newPrj, prjCreate);
  }
  e.target.remove();
}

export function deletePrjElement(e){
  if (e.target.classList.contains("trashIcon") || e.target.closest('.trashIcon')) {
        const prjElement = e.target.closest(".newPrj");
        if (prjElement) {
          prjElement.remove();
          console.log("Project Deleted");
        }
      }
}


