//-----Model----///

const todoItems = [];

//----controller----//
// getting elements
const addBtnEl = document.getElementById("addBtn");

const inputEl = document.getElementById("input");

const displayEl = document.getElementById("displayTodoItems");

const inputTimeEl = document.getElementById("inputTime");

//adding event listen
addBtnEl.addEventListener("click", addTodoItem);

function addTodoItem() {
  const itemObj = {};

  const textItem = inputEl.value;
  const textTime = inputTimeEl.value;

  itemObj.desc = textItem;
  itemObj.time = textTime;
  todoItems.push(itemObj);

  renderArr(todoItems);
  inputEl.value = "";
  inputTimeEl.value = "";
}

function deleteItem(strTime) {
  const index = todoItems.findIndex((item) => item.time === strTime);

  const deletedItem = todoItems.splice(index, 1)[0];

  renderArr(todoItems);
}

function createHtml(item) {
  return `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <div  class="d-flex">
                      
                        <div>${item.time}</div>
                        <div class="ml-4" >${item.desc}</div>
                    </div>
                    <div class="justify-content-end">
                       
                        
                        <button 
                            type="button" 
                            class="btn  btn-sm"
                            onclick="deleteItem('${item.time}')"
                            >
                            <i class="fa-solid fa-trash-can" style="color: #e60a0a;"></i>
                        </button>
                    </div>
                </li>`;
}

function renderArr(arr) {
  const todoItemsHTML = arr.map((todoItem) => createHtml(todoItem));

  const joinedTodoItemsHTML = todoItemsHTML.join("");
  displayEl.innerHTML = joinedTodoItemsHTML;
}
