const taskName = document.getElementById("taskName");
const taskHrs = document.getElementById("taskHrs");
const submit = document.getElementById("submit");
const list = document.getElementById("list");
const inn = document.getElementById("i");

let taskData = [""];
let hrsData = [""];

let toDoList = [];

const handleOnSubmit = () => {
  taskName.addEventListener("change", () => {
    taskData = taskName.value;
  });
  taskHrs.addEventListener("change", () => {
    hrsData = taskHrs.value;
  });
  submit.addEventListener("click", () => {
    const data = {
      taskData,
      hrsData,
    };
    let str = "";
    toDoList.push(data);
    toDoList.map((item, i) => {
      str += `<tr>
     <th id="i" scope="row">${i}</th>
     <td id="list">${item.taskData + " " + item.hrsData}</td>
     <td class="font">
       <button class="button2 bg-success">
         <i class="fa-solid fa-hand-point-right"></i>
       </button>
       <button class="button2 bg-danger">
         <i class="fa-sharp fa-solid fa-trash"></i>
       </button>
     </td>
   </tr>`;
      document.getElementById("tbody").innerHTML = str;
    });
  });
};
handleOnSubmit();
