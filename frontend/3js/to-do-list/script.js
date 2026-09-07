let todoList=[{
        item:'milk', 
        dueDate:'2026-07-14'
        } , 
        {
        item:'tea', 
        dueDate: '2026-07-14'
        }     
   ];
DisplayItem()


function addTask(){
    let inputElement=document.querySelector('#input-task');
    let todoItem=inputElement.value;


     let inputDateElement=document.querySelector('#todo-date');
     let todoDate=inputDateElement.value;

    todoList.push({item: todoItem,dueDate:todoDate});
    inputElement.value ='';
    inputDateElement.value='';
   DisplayItem();
}

function DisplayItem(){
    let Displayele = document.querySelector('#Todo-Container');
    let newHtml='';

    for (let i = 0; i < todoList.length; i++) {

        let{item,dueDate}=todoList[i];
        newHtml+=`<div>
            <span>${item}</span>
            <span>${dueDate}</span>
            <button onclick="todoList.splice(${i},1); DisplayItem()">Delete</button>


        </div>`;
        
       
    }
     Displayele.innerHTML = newHtml;
}