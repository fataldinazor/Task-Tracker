import './style.css'

export function createPrj(){
    const getPrj=document.createElement('div');
    getPrj.classList.add('getPrj');
    const getPrjForm=document.createElement('div');
    getPrjForm.classList.add('getPrjForm');
    const nameLabel=document.createElement('label');
    nameLabel.textContent='Project Name:'
    const nameInput=document.createElement('input');
    nameInput.setAttribute('id','PrjName');
    nameInput.setAttribute('type','text');
    nameInput.setAttribute('name','project_name');
    const submitBtn=document.createElement('button');
    submitBtn.setAttribute('type','submit');
    submitBtn.textContent='Submit';
    const resetBtn=document.createElement('button');
    resetBtn.setAttribute('type','reset');
    resetBtn.textContent='Reset'
    nameLabel.appendChild(nameInput);
    nameLabel.appendChild(submitBtn);
    nameLabel.appendChild(resetBtn);
    getPrjForm.appendChild(nameLabel);
    getPrj.appendChild(getPrjForm);

    const prjList=document.querySelector('.prjList');
    const prjCreate=document.querySelector('.prjCreate');
    prjList.insertBefore(getPrj,prjCreate);
}