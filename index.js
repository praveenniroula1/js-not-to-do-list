const formData = document.getElementById("form");

const taskData = document.getElementById("taskName");
const hrsData = document.getElementById("taskHrs");
const button = document.getElementById("button");
const entryList = document.getElementById("entryList");
const ttl = document.getElementById("ttl");

let taskDataValue = "";
let hrsDataValue = "";

let entryListArray = [];
let badListArray = [];

let totalHrs = 24 * 7;
let eachHours = [];
let eachBadHours = [];

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
    // eachHours.push(hrsDataValue);
    if (!taskData.value && !hrsData.value) {
      return alert("fill the form");
    } else {
      entryListArray.push(data);
      display(entryListArray);
      taskData.value = "";
      hrsData.value = "";
      taskDataValue = "";
      hrsDataValue = "";
      gettotalhours();
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
        <td>${item.hrsDataValue + " " + "Hrs."}</td>
        <td >
         <button class="bg-success"   onclick="handleOnSwitch(${i})"><i class="fa-solid fa-arrow-down-long fs-2 bg-success"></i></button> 
         <button class="bg-danger"  onclick="handleOnDelete(${i})"><i  class="fa-solid fa-trash fs-2 bg-danger"></i></button> 
        </td>
      </tr>
      `;
  });

  document.getElementById("entryList").innerHTML = str;
};

// handling the delete buttons
const handleOnDelete = (i) => {
  const filteredArray = entryListArray.filter((item, index) => index !== i);
  entryListArray = filteredArray;
  display(entryListArray);
  gettotalhours();
};

// switch the bad list

const handleOnSwitch = (i) => {
  const itemToSwitch = entryListArray.splice(i, 1);
  badListArray.push(itemToSwitch[0]);
  console.log(eachHours);
  eachBadHours.push(itemToSwitch[0].hrsDataValue);
  display(entryListArray);
  displayBadList(badListArray);
  // badListHrsData(badListArray);
  gettotalhours();
};

// displaying on bad list
const displayBadList = (badList) => {
  let str = "";
  badList.map((item, i) => {
    str += `<tr>
  <th scope="row">${i + 1}</th>
  <td>${item.taskDataValue}</td>
  <td>${item.hrsDataValue + " " + "Hrs."}</td>
  
  <td>
   <button class="bg-success" onclick="handleOnSwitchBack(${i})"><i class="fa-solid fa-arrow-up fs-2 bg-success"></i></button> 
   <button class="bg-danger" onclick="handleOnDeleteBadList(${i})"><i  class="fa-solid fa-trash fs-2 bg-danger"></i></button> 
  </td>
</tr>
`;
  });
  document.getElementById("badList").innerHTML = str;
};

// switch back to entryList
const handleOnSwitchBack = (i) => {
  const itemToSwitch = badListArray.splice(i, 1);
  entryListArray.push(itemToSwitch[0]);
  display(entryListArray);
  displayBadList(badListArray);
  gettotalhours();
};

// deleting from badlist
const handleOnDeleteBadList = (i) => {
  const filteredData = badListArray.filter((item, index) => index !== i);
  badListArray = filteredData;
  displayBadList(badListArray);
  gettotalhours();
};

// calculating the hours
// const entryListHrsData = () => {
//   const calcHrs = eachHours.reduce(
//     (total, num) => parseInt(total) + parseInt(num),
//     0
//   );
//   // document.getElementById("total").innerText = calcHrs;
//   let str2 = "";
//   str2 += `<table class="table container">

//     <tr>
//       <th scope="col">Total time allocated for task: ${calcHrs} Hrs.</th>
//     </tr>

//   </table>`;
//   document.getElementById("entryListHrs1").innerHTML = str2;
//   console.log(calcHrs);
// };

// // bad hours calculating
// const badListHrsData = () => {
//   const calcHrs2 = eachBadHours.reduce(
//     (total, num) => parseInt(total) + parseInt(num)
//   );

//   let str2 = "";
//   str2 += `<table class="table container">

//     <tr>
//       <th scope="col">Total time allocated for task: ${calcHrs2} Hrs.</th>
//     </tr>

//   </table>`;
//   document.getElementById("badListHrsData2").innerHTML = str2;
// };

const gettotalhours = () => {
  const totalentrylist = entryListArray.reduce(
    (acc, item) => parseInt(acc) + parseInt(item.hrsDataValue),
    0
  );
  const totalbadlist = badListArray.reduce(
    (acc, item) => parseInt(acc) + parseInt(item.hrsDataValue),
    0
  );
  const total = totalbadlist + totalentrylist;
  console.log(total);

  // entrylist
  let entryStr = "";
  entryStr += `<table class="table container">

    <tr>
      <th scope="col">Total time allocated for task: ${totalentrylist} Hrs.</th>
    </tr>

  </table>`;
  document.getElementById("entryListData1").innerHTML = entryStr;

  // completed
  let badStr = "";
  badStr += `<table class="table container">

    <tr>
      <th  scope="col">Total time completing for task: ${totalbadlist} Hrs.</th>
    </tr>

  </table>`;
  document.getElementById("badListData1").innerHTML = badStr;

  // total
  let totalStr = "";
  totalStr += `<table class="table container">

    <tr class="ttl1">
      <th class="text" scope="col">Total time : ${total} Hrs.</th>
    </tr>

  </table>`;
  document.getElementById("totalHour").innerHTML = totalStr;

  // document.getElementById("totalhours").innerText = total;
  // document.getElementById("entrylist3").innerText = totalentrylist;
  // document.getElementById("badlist3").innerText = totalbadlist;
  return total;
};
