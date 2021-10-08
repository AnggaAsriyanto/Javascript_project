const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notesValue'));

if(notes) {
    notes.forEach(note => addNewNote(note));
}

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
    const notes = document.createElement('div');
    notes.classList.add('notes');

    notes.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
    `

    document.body.appendChild(notes);

    const editBtn = notes.querySelector('.edit');
    const deleteBtn = notes.querySelector('.delete');
    const main = notes.querySelector('.main');
    const textArea = notes.querySelector('textarea');

    textArea.value = text;
    main.innerHTML = marked(text);

    deleteBtn.addEventListener('click', () => {
        notes.remove();

        updateLS();
    });

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);

        updateLS();
    })

}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');

    notesValue = [];

    notesText.forEach(note => notesValue.push(note.value));

    localStorage.setItem('notesValue', JSON.stringify(notesValue));
}