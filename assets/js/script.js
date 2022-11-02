const ul = document.querySelector(".todolist");
const addButton = document.querySelector(".add-section");
const input = document.querySelector(".input-context");

addButton.addEventListener("click", () => {

    const li = document.createElement('li');
    li.setAttribute('class', 'input-section');

    const inputText = document.createElement('input');
    inputText.setAttribute('class', 'input-context');
    li.append(inputText);

    li.append(document.querySelector('.dl-btn').cloneNode(true));

    ul.append(li);

});

//   deleting
ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-button") &&
        ul.children.length > 1) {
        e.target.parentElement.parentElement.remove();
    }
});