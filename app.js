const addForm = document.querySelector(".add");
const list = document.querySelector(".todos")
const search = document.querySelector(".search input")


// push new data in Todo list
const generateTodo = todo =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
 
    list.innerHTML += html;
}


// remove from todo list
list.addEventListener("click", e=>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
})


// gei info from Form
addForm.addEventListener("submit", e=>{
    
    e.preventDefault();

    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTodo(todo);
        addForm.reset(); 
    }

})

// search area

const filterTodo = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add("filtered"));
    
    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove("filtered"));

    


}

// typeing area
search.addEventListener("keyup", ()=> {
    const term = search.value.trim().toLowerCase();
    filterTodo(term);
})


