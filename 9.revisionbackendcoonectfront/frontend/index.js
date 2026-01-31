let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let ageInput = document.getElementById("age");
let submit = document.getElementById("submit");


submit.addEventListener("click",async function send(e){
e.preventDefault();

let dataToSend={
    name:nameInput.value,
    email:emailInput.value,




    
    age:ageInput.value
}

    let data=await fetch("http://localhost:8000/",
        {
                method:"POST",
                headers:{
                        "Content-Type": "application/json",
                },
                body:JSON.stringify(dataToSend)
        }
    );
    let newdata=await data.json();
    console.log(newdata.sucess);
})












