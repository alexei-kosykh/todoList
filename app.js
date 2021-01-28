const tasker = document.querySelector(".tasker");

const modal = document.querySelector(".modal");
const inputTitle = document.querySelector("#modal-title");
const inputDescription = document.querySelector("#modal-description");
let inputSubject = 0;
let inputList = 0;
// const btnModalClose = document.querySelector("#btnModalClose");
// const btnModalApply = document.querySelector("#btnModalApply");

let noteArray = [];
let storageIndex = 0;

const drawList = (listNumber, list) => {
  const listCard = list.querySelector(".list__card");
  listCard.innerHTML = "";

  noteArray.forEach((elem, index) => {
    debugger;
    if (elem.subject === listNumber) {
      listCard.innerHTML += `<div class="list-border"><div class="list__card_notes">
      <div class="note">
        <p>Title: <span class="note-name">${elem.title}</span></p>
      </div>
      <div class="note">
        <p>
          Description:
          <span class="note-description">${elem.description}</span>
        </p>
      </div>
    </div>
    <div class="block-buttons">
      <div class="button-note button-edit"></div>
      <div class="button-note button-next"></div>
      <div class="button-note button-remove"></div>
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

    const form = document.querySelector("#formToDo");
    const titleToDo = document.querySelector("#titleToDo").value;
    const descriptionToDo = document.querySelector("#descriptionToDo").value;
    const subject = "0";
    const list = event.target.closest(".list");

    pushNoteArray(titleToDo, descriptionToDo, subject);

    drawList(subject, list);

    form.reset();
  }
});
addNoteInProgress.addEventListener("click" || "keyup", (event) => {
  if (event.code === "Enter" || event.type === "click") {
    event.preventDefault();

    const form = document.querySelector("#formInProgress");
    const titleInProgress = document.querySelector("#titleInProgress").value;
    const descriptionInProgress = document.querySelector(
      "#descriptionInProgress"
    ).value;
    const subject = "1";
    const list = event.target.closest(".list");

    pushNoteArray(titleInProgress, descriptionInProgress, subject);

    drawList(subject, list);

    form.reset();
  }
});
addNoteDone.addEventListener("click" || "keyup", (event) => {
  if (event.code === "Enter" || event.type === "click") {
    event.preventDefault();

    const form = document.querySelector("#formDone");
    const titleDone = document.querySelector("#titleDone").value;
    const descriptionDone = document.querySelector("#descriptionDone").value;
    const subject = "2";
    const list = event.target.closest(".list");

    pushNoteArray(titleDone, descriptionDone, subject);

    drawList(subject, list);

    form.reset();
  }
});

const openModal = () => (modal.style.display = "block");

const closeModal = () => {
  modal.style.display = "none";
};

const editNote = (event) => {
  const listCard = event.target.closest(".list-border");
  const list = event.target.closest(".list");
  const title = listCard.querySelector(".note-name").textContent;
  const description = listCard.querySelector(".note-description").textContent;

  inputTitle.value = title;
  inputDescription.value = description;

  storageIndex = noteArray.findIndex(
    (elem) => elem.title === title && elem.description === description
  );
  inputSubject = noteArray[storageIndex].subject;
  inputList = list;

  openModal();
};
const editApply = (event) => {
  event.preventDefault();

  noteArray.splice(storageIndex, 1, {
    title: inputTitle.value,
    description: inputDescription.value,
    subject: inputSubject,
  });

  closeModal();

  drawList(inputSubject, inputList);
};

modal.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.closest("#btnModalApply")) {
    editApply(event);
  } else if (
    !event.target.closest(".modal__wrapper") ||
    event.target.closest("#btnModalClose")
  ) {
    event.preventDefault();
    closeModal();
  }
});

tasker.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.closest(".button-edit")) {
    editNote(event);
  } else if (event.target.closest(".button-next")) {
  } else if (event.target.closest(".button-remove")) {
  }
});
