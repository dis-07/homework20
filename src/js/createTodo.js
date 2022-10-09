export function createTodo (){
    const li = document.createElement('li')
    li.className = 'todo-list';
    li.innerHTML = todoInput.value;
    ul.append(li);

    const DeleteButton = document.createElement('button');
    DeleteButton.innerHTML = 'Delete';
    DeleteButton.className = 'remove-btn';
    li.append(DeleteButton);

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('id', 'accept');
    li.prepend(checkBox);
};