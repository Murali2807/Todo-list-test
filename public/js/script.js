const submitbtn = document.querySelector("#sub");
const todoList = document.querySelector("#todo-list");
const deleteBtn = document.querySelector("#del-btn");
const editBtn = document.querySelector("#edit-btn");

submitbtn.addEventListener("click", e => {
  e.preventDefault();
  let newHeading = document.getElementById("new-heading").value;
  let newMessage = document.getElementById("new-message").value;
  let newTodo = "";
  newTodo += `<li class='list-group-item d-flex justify-content-between align-items-start'>
  <div class='ms-2 me-auto mb-2 d-flex'>
  <div class="ms-0 mt-2 me-4">
    <span class="input-group-text" id="basic-addon1"> <input class="form-check-input del-check" type="checkbox" value="" id="del-check"></span>
</div>
  <div>
    <div class='fw-bold fs-4'> ${newHeading}</div>
    <div class='mt-2'>${newMessage}</div>
    </div>
    
  </div>
  </li>`;
  // console.log(newTodo);
  if (newHeading !== "" && newMessage !== "") {
    todoList.insertAdjacentHTML("afterend", newTodo);
    document.getElementById("new-heading").value = "";
    document.getElementById("new-message").value = "";
  } else {
    alert("Enter the required field ... ");
  }
});

deleteBtn.addEventListener("click", e => {
  e.preventDefault();
  let deleteCheck;
  let deleteChecked = document.querySelectorAll(".del-check");

  for (var i = 0; i < deleteChecked.length; i++) {
    deleteCheck = deleteChecked[i];
    if (deleteCheck.checked) {
      deleteCheck.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(
        deleteCheck.parentNode.parentNode.parentNode.parentNode
      );
    }
  }
});
