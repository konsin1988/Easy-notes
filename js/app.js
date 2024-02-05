const inputName = document.getElementById("input");
const addNote = document.getElementById("add_note");
const listNotes = document.getElementById("list");
const btnAgree = document.getElementById("agree");
const btnCancel = document.getElementById("cancel");

function getNoteTemplate(note, index) {
  return `<li class="note">
            <p class=${note.completed ? "complete" : ""}>${note.title}</p>
            <div class="icons">
              <div id="agree" class=${
                note.completed ? "completed" : "not-completed"
              } data-index="${index}" data-type="complete_data">
                <svg data-index="${index}" data-type="complete_data" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <title />
                  <g data-name="Layer 25" id="svg_agree">
                    <path
                      d="M28.41,7.82a3,3,0,0,0-4.24,0L13,19a1,1,0,0,1-1.41,0L8.47,15.86A3,3,0,1,0,4.22,20.1l6,6h0a3,3,0,0,0,4.24,0l14-14a3,3,0,0,0,0-4.24ZM27,10.65l-14,14a1,1,0,0,1-1.41,0l-6-6a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0l3.13,3.13a3,3,0,0,0,4.24,0L25.58,9.24a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.41Z"
                    />
                  </g>
                </svg>
              </div>
              <div id="cancel" data-index="${index}" data-type="remove_data"  >
                <svg data-index="${index}" data-type="remove_data"
                  viewBox="0 0 36 36"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g id="Layer_1" />
                  <g id="svg_cancel">
                    <path
                      class="st0"
                      d="M6.2,3.5L3.5,6.2c-0.7,0.7-0.7,1.9,0,2.7l9.2,9.2l-9.2,9.2c-0.7,0.7-0.7,1.9,0,2.7l2.6,2.6   c0.7,0.7,1.9,0.7,2.7,0l9.2-9.2l9.2,9.2c0.7,0.7,1.9,0.7,2.7,0l2.6-2.6c0.7-0.7,0.7-1.9,0-2.7L23.3,18l9.2-9.2   c0.7-0.7,0.7-1.9,0-2.7l-2.6-2.6c-0.7-0.7-1.9-0.7-2.7,0L18,12.7L8.8,3.5C8.1,2.8,6.9,2.8,6.2,3.5z"
                      id="close_1_"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </li>`;
}
/* Onclick add*/
addNote.onclick = function () {
  if (inputName.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputName.value,
    complete: false,
  };
  notes.push(newNote);
  render(notes);
  inputName.value = "";
};

// Onclick completed/remove
listNotes.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = Number(event.target.dataset.index);
    const type = event.target.dataset.type;
    if (type === "complete_data") {
      notes[index].completed = !notes[index].completed;
    }
    if (type === "remove_data") {
      notes.splice(index, 1);
    }
    render(notes);
  }
};

const notes = [
  {
    title: `You can add ("Add the note"), check as
               <span class="complete"> complete</span>(Green button) or remove
               (Red cross) the notes`,
    completed: false,
  },
];

function render(array) {
  listNotes.innerHTML = "";
  if (notes.length === 0) {
    listNotes.innerHTML = `
            <p class="done">
              Congratulation!!! All tasks completed! 
            </p>
            `;
  }
  for (let i = 0; i < array.length; i++) {
    listNotes.insertAdjacentHTML("afterbegin", getNoteTemplate(array[i], i));
  }
}
render(notes);
