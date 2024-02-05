const inputName = document.getElementById("input");
const addNote = document.getElementById("add_note");
const listNotes = document.getElementById("list");
const btnAgree = document.getElementById("agree");
const btnCancel = document.getElementById("cancel");

function getNoteTemplate(title) {
  return `<li class="note">
            <p>${title}</p>
            <div class="icons">
              <div id="agree">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <title />
                  <g data-name="Layer 25" id="svg_agree">
                    <path
                      d="M28.41,7.82a3,3,0,0,0-4.24,0L13,19a1,1,0,0,1-1.41,0L8.47,15.86A3,3,0,1,0,4.22,20.1l6,6h0a3,3,0,0,0,4.24,0l14-14a3,3,0,0,0,0-4.24ZM27,10.65l-14,14a1,1,0,0,1-1.41,0l-6-6a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0l3.13,3.13a3,3,0,0,0,4.24,0L25.58,9.24a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.41Z"
                    />
                  </g>
                </svg>
              </div>
              <div id="cancel">
                <svg
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

const notes = ["Take a shower", "read the book"];

function render(array) {
  for (let element of array) {
    listNotes.insertAdjacentHTML("beforeend", getNoteTemplate(element));
  }
}
render(notes);

addNote.onclick = function () {
  if (inputName.value.length === 0) {
    return;
  }
  listNotes.insertAdjacentHTML("afterbegin", getNoteTemplate(inputName.value));
  inputName.value = "";
};

btnAgree.onclick = function () {};
