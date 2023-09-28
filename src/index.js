// const formItem = document.getElementById("create-task-form")

// function handleTodo(e){
//   e.preventDefault()
//   const item = document.getElementById("new-task-description").value
//   const todoItem = document.getElementById("tasks")//gets the div to hold todo
//   const deleteBtn = document.createElement("button")    
//   deleteBtn.textContent = " X"
//   deleteBtn.addEventListener("click",handleDelete)
//   deleteBtn.style.backgroundColor="red"
//   todoItem.append(item,deleteBtn)
// }
// formItem.addEventListener("submit",handleTodo)

// function handleDelete(e){
//   e.target.parentNode.remove()
// }
const form = document.getElementById("create-task-form")

const input = document.getElementById("new-task-description")
function handleTodo(e){
  e.preventDefault()
  
  const inputItem = document.getElementById("new-task-description").value
  if (inputItem===""){
    alert("Enter To-do Item")
  }
  else{
    const unOrderedList = document.getElementById("tasks")
    const lists = document.createElement('li')
    lists.textContent= `${inputItem}`
  //create a button to contain 'x' for deleting
    const btnDelete = document.createElement('button')  
    btnDelete.textContent = "del"
 //appending inside an element
    unOrderedList.appendChild(lists)
    lists.appendChild(btnDelete)

  
  btnDelete.addEventListener('click',function(e){
    e.target.parentElement.remove()
    
  })  

   }
   input.value="";//ensure that no input remains displayed on the input button


}
  

form.addEventListener("submit",handleTodo)







