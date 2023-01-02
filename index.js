const formData = document.getElementById("form");

const taskData = document.getElementById("taskName");
const hrsData = document.getElementById("taskHrs");
const button = document.getElementById("button");
const entryList = document.getElementById("entryList");

let taskDataValue = "";
let hrsDataValue = "";

let entryListArray = [];

const handleOnSubmit = () => {
  taskData.addEventListener("change", () => {
    taskDataValue = taskData.value;
  });
  hrsData.addEventListener("change", () => {
    hrsDataValue = hrsData.value;
  });
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const data = {
      taskDataValue,
      hrsDataValue,
    };
    entryListArray.push(data);
    display(entryListArray);
  });
};

handleOnSubmit();

// making a static display

const display = (eachTaskArray) => {
  let str = "";
  eachTaskArray.map((item, i) => {
    str += `<tr>
        <th scope="row">${i + 1}</th>
        <td>${item.taskDataValue}</td>
        <td>${item.hrsDataValue}</td>
        <td>
          <i class="fa-solid fa-arrow-down-long fs-3"></i>
          <i class="fa-solid fa-trash fs-3"></i>
        </td>
      </tr>`;
  });
  document.getElementById("entryList").innerHTML = str;
};
