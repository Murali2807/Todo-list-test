const submitbtn = document.querySelector("#sub");
const todoList = document.querySelector("#todo-list");
const listItem = document.querySelector("#list-item");
const deleteBtn = document.querySelector("#del-btn");
const editBtn = document.querySelector("#edit-btn");

submitbtn.addEventListener("click", e => {
  e.preventDefault();
  let newHeading = document.getElementById("new-heading").value;
  let newMessage = document.getElementById("new-message").value;
  let newTodo = "";
  let nowDate = new Date().toLocaleString("en-US");
  newTodo += `<li class='list-group-item d-flex justify-content-between align-items-start'>
  <div class='ms-2 me-auto mb-2 d-flex'>
  <div class="ms-0 mt-2 me-4">
    <span class="input-group-text" id="basic-addon1"> <input class="form-check-input del-check" type="checkbox" value="" id="del-check"></span>
</div>
  <div>
    <div class='fw-bold fs-4 new-head'> ${newHeading}</div>
    <div class='mt-1 mb-1 new-meg'>${newMessage} </div><span class="date-format">${nowDate}</span>
    </div>
    
  </div>
  </li>`;
  // console.log(newTodo);
  if (newHeading !== "" && newMessage !== "") {
    listItem.insertAdjacentHTML("afterend", newTodo);
    deleteBtn.style.display = "block";
    document.getElementById("new-heading").value = "";
    document.getElementById("new-message").value = "";
  } else {
    alert("Enter the required field ... ");
  }
});
deleteBtn.addEventListener("click", e => {
  e.preventDefault();
  let deleteChecked = document.querySelectorAll(".del-check");

  deleteChecked.forEach(deleteCheck => {
    if (deleteCheck.checked) {
      deleteCheck.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(
        deleteCheck.parentNode.parentNode.parentNode.parentNode
      );
    }
  });
  if (todoList.childElementCount === 1) {
    deleteBtn.style.display = "none";
  }
});
