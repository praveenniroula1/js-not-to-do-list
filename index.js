const formData = document.getElementById("form");

const taskData = document.getElementById("taskName");
const hrsData = document.getElementById("taskHrs");
const button = document.getElementById("button");
const entryList = document.getElementById("entryList");

let taskDataValue = "";
let hrsDataValue = "";

let entryListArray = [];
let badListArray = [];

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

    if (!taskData.value && !hrsData.value) {
      return alert("fill the form");
    } else {
      entryListArray.push(data);
      display(entryListArray);
      taskData.value = "";
      hrsData.value = "";
      taskDataValue = "";
      hrsDataValue = "";
    }
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
        <td >
         <button class="bg-success"   onclick="handleOnSwitch(${i})"><i class="fa-solid fa-arrow-down-long fs-2 bg-success"></i></button> 
         <button class="bg-danger"  onclick="handleOnDelete(${i})"><i  class="fa-solid fa-trash fs-2 bg-danger"></i></button> 
        </td>
      </tr>`;
  });
  document.getElementById("entryList").innerHTML = str;
};

// handling the delete buttons
const handleOnDelete = (i) => {
  const filteredArray = entryListArray.filter((item, index) => index !== i);
  entryListArray = filteredArray;
  display(entryListArray);
};

// switch the bad list

const handleOnSwitch = (i) => {
  const itemToSwitch = entryListArray.splice(i, 1);
  badListArray.push(itemToSwitch[0]);
  display(entryListArray);
  displayBadList(badListArray);
};

// displaying on bad list
const displayBadList = (badList) => {
  let str = "";
  badList.map((item, i) => {
    str += `<tr>
  <th scope="row">${i + 1}</th>
  <td>${item.taskDataValue}</td>
  <td>${item.hrsDataValue}</td>
  <td>
   <button class="bg-success" onclick="handleOnSwitchBack(${i})"><i class="fa-solid fa-arrow-up fs-2 bg-success"></i></button> 
   <button class="bg-danger" onclick="handleOnDeleteBadList(${i})"><i  class="fa-solid fa-trash fs-2 bg-danger"></i></button> 
  </td>
</tr>`;
  });
  document.getElementById("badList").innerHTML = str;
};

// switch back to entryList
const handleOnSwitchBack = (i) => {
  const itemToSwitch = badListArray.splice(i, 1);
  entryListArray.push(itemToSwitch[0]);
  display(entryListArray);
  displayBadList(badListArray);
};

// deleting from badlist
const handleOnDeleteBadList = (i) => {
  const filteredData = badListArray.filter((item, index) => index !== i);
  badListArray = filteredData;
  displayBadList(badListArray);
};
