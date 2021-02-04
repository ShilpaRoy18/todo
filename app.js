var input = document.querySelector('.todo_input');
var MainTodoContainer = document.getElementById('todo')
var addingButton = document.querySelector('.add-item');

addingButton.addEventListener('click', function(e){
    
    
      e.preventDefault();
    
    if(input.value.trim()){

       var ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');
       
        var todoList = document.createElement('div');
        todoList.classList.add('todo-list');
       

          var liTag = document.createElement('li');
          liTag.innerHTML = input.value;
          liTag.classList.add('todo-item');

          var buttonDiv =  document.createElement('div');
          buttonDiv.classList.add('button');

          var editButton = document.createElement('button');
          editButton.classList.add('editbtn');
          editButton.innerHTML ='<i class="fas fa-edit"></i>';
          editButton.classList.add('editBtn');
             editButton.onclick = function(){
            editWorking(liTag);
        }
           var deleteButton = document.createElement('button');
          deleteButton.classList.add('deletebtn');
         deleteButton.innerHTML =' <i class="fa fa-trash"></i>';
          
        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(deleteButton); 
     
         MainTodoContainer.appendChild(ulTag);

          input.value='';
          
          todoList.addEventListener('click', function(e){
              var items = e.target;

              if(items.classList[0] === 'deletebtn'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                 var todo3 = todo2.parentElement;
                todo2.classList.add('fall');
                todo2.addEventListener('transitionend', function(){
                    var todo3 = todo2.parentElement;
                    todo3.remove();
                });
              }
            });
            
       
    }
    else if(input.value === ''){
        alert('please add your work')
    }
});
function editWorking(e){
        var editValue = prompt('edit the selected item', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}

