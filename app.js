
// Select the Elements
const listGroup = document.querySelector('.list-group');
const list = document.getElementById('list');
const input = document.getElementById('input');
const add = document.querySelector('.fa-plus-circle');
let li = document.createElement('li');
let i = document.createElement('i');
let iele = document.createElement('i');

// Show todays date
const dateElement = document.getElementById('date');
const options = {weekday:"long", month:"short", day:"numeric"};
const today = new Date();
dateElement.innerHTML= today.toLocaleDateString("en-US", options);

// Add to do function

function addToDo (toDo){
   var element;
var div = document.createElement('div');
    element= `
   <li class="item list-group-item mb-2">
    <i id="icon" class="fas fa-check-double" job="complete"></i>
    <p class="text lineThrough"> ${toDo}</p>
    <i id="dele" onclick="removeTask()" class="fas fa-trash-alt" job="done"></i>
    </li> `;
    div.className= "rChild";
    div.innerHTML =element;
    listGroup.appendChild(div);

}


function removeTask() {
    event.currentTarget.parentElement.remove();
  }
 
document.addEventListener('keyup',function(event){
    let error = document.getElementById('err');
let val = input.value;

if(event.keyCode == 13){
   
    if(val){
      
        addToDo(input.value);
        error.innerHTML="";   
    }
    else{
       
        error.innerHTML= "Please do something today";
        error.style.color="red";
        error.style.fontSize= "15px";
        error.style.marginLeft="15%";
    }
   input.value= "";
   
}
else{
    console.log("not working");
}

})
document.querySelector('.fa-plus-circle').addEventListener('click',function(){
    let valu = input.value;
    let error = document.getElementById('err');
    if(valu){
      
        addToDo(input.value);
        error.innerHTML="";  
    }
    else{
       
        error.innerHTML= "Please do something today";
        error.style.color="red";
        error.style.fontSize= "15px";
        error.style.marginLeft="15%";
    }
   input.value= "";
})
const user = document.querySelector('.user');
window.onload= function(){
    var userName = prompt('Please add your name');
user.innerHTML = userName;
}






  

