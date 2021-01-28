const todo = document.querySelector("#todo");
const inProgress = document.querySelector("#inprogress");
const done = document.querySelector("#done");
const deleted = document.querySelector("#deleted");

noteArray = [];

const drawList = (listNumber, list) => {
  const listCard = list.querySelector(".list__card");
  listCard.innerHTML = "";

  noteArray.forEach((elem, index) => {
    if (elem.subject === listNumber) {
      listCard.innerHTML += `<div class="list-border"><div class="list__card_notes">
      <div class="note">
        <p>Title: <span class="note-name">${elem.title}</span></p>
      </div>
      <div class="note">
        <p>
          Description:
          <span class="note-name">${elem.description}</span>
        </p>
      </div>
    </div>
    <div class="block-buttons">
      <div class="button-note button-edit" id="buttonEdit"></div>
      <div class="button-note button-next" id="buttonNext"></div>
      <div class="button-note button-remove" id="buttonRemove"></div>
    </div></div>`;
    }
  });
};

const pushNoteArray = (title, description, subject) => {
  noteArray.push({
    title: title,
    description: description,
    subject: subject,
  });
};

addNoteToDo.addEventListener("click" || "keyup", (event) => {
  if (event.code === "Enter" || event.type === "click") {
    event.preventDefault();

    const form = document.querySelector("#formToDo"); // no
    const list = event.target.closest(".list"); // универсально

    const titleToDo = document.querySelector("#titleToDo").value;
    const descriptionToDo = document.querySelector("#descriptionToDo").value;
    const subject = "0";

    pushNoteArray(titleToDo, descriptionToDo, subject);

    drawList(subject, list);

    form.reset();
  }
});
