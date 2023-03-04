const alert = document.querySelector(".alert");
const grocery = document.querySelector("#item");
const subBtn = document.querySelector("#btn");
const groceryCont= document.querySelector(".glory-container");
const list = document.querySelector(".glory-list");
const clearBtn = document.querySelector(".clear");
const form = document.querySelector(".glory-form");
const tittle = document.querySelector(".title");


//edit option 
let editElement;
let editFlag= false;
//this is for ediiting option 
let editID= "";


//listners 
subBtn.addEventListener("click", additem);

// functions 

function additem(e)
{
    e.preventDefault();
    //by this we can get the items we enter in inputs 
    // console.log(grocery.value)
    //for storing that value we take varaible 
    const value= grocery.value;
    // console.log(value);

    //for unique id 
    const id = new Date().getTime().toString();

    //now some condition foe empty and non empty 

    if(value && !editFlag)
    {
        alert.textContent="value is edit ";
        alert.classList.add("alert-full");

        setInterval(function(){
            alert.textContent="";
            alert.classList.remove("alert-full");
        },2000)
        //value is edited 
     
        const element = document.createElement("article");

        element.classList.add("glory-items");

        const attr = document.createAttribute("data-id");
        attr.value=id;

        element.setAttributeNode(attr);
        element.innerHTML=` <p class="title">${value}</p>
        </div>
        <div class="glory-btn">
           <button class="edit-btn"> <i class="fa fa-edit"></i></button>
            <button class="del-btn"><i class="fa fa-trash"></i></button>
        </div>`
list.appendChild(element);
element.classList.add("show-glory-items");
    }

    else if (value && editFlag)
    {
        //editing 
        
    }

    else
    {
        alert.textContent="vlue is empty ";
        alert.classList.add("alert-empty");


        //by this in 1 scnd the alert will remove 
        setInterval(function(){
            alert.textContent="";
            alert.classList.remove("alert-empty");
        },2000)
    }
}


