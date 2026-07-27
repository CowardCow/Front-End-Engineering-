(function(){

    
//this content is contained here because otherwise the consts 
//initialised here would become global
const todos = [];

const todocontainer = document.getElementsByClassName("todo")[0];
const inputtask = document.createElement("input");
inputtask.placeholder="Enter text here";
inputtask.type="text";
const btn = document.createElement("button");
btn.textContent="ADD";
const todolist = document.createElement("div");
 todolist.style.border="2px solid black";
 todolist.style.borderRadius="10px";
 todolist.style.margin="20px 20px";
todocontainer.append(inputtask,btn,todolist);
function rendertask(task){
const todoItem = document.createElement("div");
todoItem.style.border="2px solid blue";
todoItem.style.position="relative";
todoItem.style.borderRadius="8px"
todoItem.style.margin="5px 5px";
todoItem.style.padding="5px";
const p = document.createElement("p");
const deletebtn = document.createElement("button");
const editbtn = document.createElement("button");
const completebtn = document.createElement("button");
let editMenu = 0;
completebtn.textContent="COMPLETE";
editbtn.textContent="EDIT";
deletebtn.textContent="DELETE";
// editbtn.style.position="absolute";
// editbtn.style.right="5px";
editbtn.addEventListener("click",function(){
    if(editMenu!=1){
        editMenu=1;
    const editInput = document.createElement("input");
    editInput.type="text";
    editInput.value=p.textContent;
    const saveBtn = document.createElement("button");
    todoItem.prepend(editInput,saveBtn)
    editInput.focus();
    saveBtn.textContent="SAVE";
    function saveEditedTask(){
        editMenu=0;
        const upadtedTask = editInput.value;
        const index = todos.indexOf(task);
        todos[index] = upadtedTask;
        p.textContent = upadtedTask;
        editInput.remove();
        saveBtn.remove();
    }
    editInput.addEventListener("keydown",function(e){
        if(e.key === "Enter"){
            saveEditedTask();
        }
    })
    saveBtn.addEventListener("click", saveEditedTask)}
})
completebtn.addEventListener("click",function(){
    todoItem.style.backgroundColor="green";
    completebtn.remove();

})
deletebtn.addEventListener("click",function(){
    const index = todos.indexOf(task);
    todos.splice(index,1);
    todoItem.remove();

})
p.textContent=task
todoItem.append(p,deletebtn,editbtn,completebtn);
todolist.prepend(todoItem);
}
function addtodo(){ 
    const task = inputtask.value;
    if(!task){ 
        return;
    }
    todos.unshift(task);
    console.log(todos);
    rendertask(task); 
    inputtask.value=""; //to empty the input after clicking on ADD button
    inputtask.focus();} // you don't need to click on input again before typing after clicking on the button
btn.addEventListener("click",addtodo); //we didnt include () with addtodo because we are only giving the reference of the function
inputtask.addEventListener("keydown",function(e){
    if(e.key==="Enter"){ //it allows the user to add the task by pressing enter
        addtodo();
    };
})
})()