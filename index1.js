const taskName = document.getElementById("taskName");
const taskHrs = document.getElementById("taskHrs");
const buutton = document.getElementById("button");
const taskData = "";
const hrsData = "";

const getFormData = () => {
  taskName.addEventListener("change", () => {
    taskData = taskName.value;
  });
  taskHrs.addEventListener("change", () => {
    hrsData = taskHrs.value;
  });
  buutton.addEventListener("click", () => {
    const data = {
      taskData,
      taskHrs,
    };
    console.log(data);
  });
};
