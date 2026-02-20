/*const message=document.getElementById("message");
const btn=document.getElementById("btn");

console.log("message element:", message);
console.log("btn element:", btn);

btn.addEventListener("click",()=>{
    message.textContent="Hello!You clicked the button!";

});

styleBtn.addEventListener("click",()=>{
    message.style.color="red";
    message.style.backgroundColor="black";
    message.style.padding="16px";
    message.style.border="2px solid red";
    message.style.fontFamily="Arial, sans-serif";
    message.style.fontSize="32px";
});

const message = document.getElementById("message");
const btn = document.getElementById("btn");
const styleBtn=document.getElementById("styleBtn");
const toggleBtn=document.getElementById("toggleBtn");
s
toggleBtn.addEventListener("click",()->{
    if(message.style.display==="none"){
        message.style.display="block";
    }else{
        message.style.display="none"
    }

        const title=document.getElementById("title")
        const changeBtn=document.getElementById("changeBtn");
        changeBtn.addEventListener("click", () => {
           title.textContent="Changed Name!"
        });

        const text=document.getElementById("text");
        const styleBtn=document.getElementById("styleBtn");

        styleBtn.addEventListener("click",() =>{
            text.style.color="red"
            text.style.fontSize="32px"
            });

            const text=document.getElementById("text");
            const btn=document.getElementById("btn")

            btn.addEventListener("click",()=>{
                text.classList.toggle("hidden")
            });

            const text=document.getElementById("text");
            const sizeBtn=document.getElementById("sizeBtn");

            sizeBtn.addEventListener("click",() =>{
                text.classList.toggle("big");
            });

            const themeBtn = document.getElementById("themeBtn");

            themeBtn.addEventListener("click",() => {
                document.body.classList.toggle("dark");
            });
             
            const statusText = document.getElementById("statusText");
            const toggleStatus = document.getElementById("toggleStatus");

            toggleStatus.addEventListener("click", () => {
            const isOn = statusText.classList.toggle("on");
            statusText.classList.toggle("off");

            statusText.textContent = isOn ? "Status: ON" : "Status: OFF";
    });


    const warning = document.getElementById("warning");
    const toggleWarning = document.getElementById("toggleWarning");

    toggleWarning.addEventListener("click", () => {
      warning.classList.toggle("show");
    });

    const nameInput=document.getElementById("name");
    const btn=document.getElementById("btn");
    const result=document.getElementById("result");

    btn.addEventListener("click",()=>{
        result.textContent=nameInput.value;
    });

    const username=document.getElementById("username");
    const greetBtn=document.getElementById("greetBtn");
    const message=document.getElementById("message");

    greetBtn.addEventListener("click",()=>{
        message.textContent="Hello,"+username.value+"!"
    });

    const input=document.getElementById("text");
    const btn=document.getElementById("btn");
    const output=document.getElementById("output");

    btn.addEventListener("click",()=>{
        output.textContent=input.value;
        input.value="";
    });

    const liveInput=document.getElementById("liveInput");
    const preview =document.getElementById("preview");

    liveInput.addEventListener("input",()=>{
        preview.textContent=liveInput.value;
    });

    const text=document.getElementById("text");
    const count=document.getElementById("count");

    text.addEventListener("input",()=>{
        count.textContent=text.value.length;
    });


const input=document.getElementById("input");
const btn=document.getElementById("btn");

input.addEventListener("input",()=>{
    if(input.value===""){
        btn.disabled=true;
    }else{
        btn.disabled=false;
    }
});

const numInput=document.getElementById("numInput");
const btn=document.getElementById("btn");
const result=document.getElementById("result");

btn.addEventListener("click",()=>{
    result.textContent=Number(numInput.value)*0.5;
});

const form=document.getElementById("myForm");
const nameInput=document.getElementById("name");
const result=document.getElementById("result")

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    result.textContentt=nameInput.value;
});

const form=document.getElementById("form");
const nameInput=document.getElementById("name");
const message=document.getElementById("message");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    if (nameInput.value===""){
        message.textContent="Name is required";
    }else{
        message.texyContent="Form Submitted"
    }
});

const form=document.getElementById("form");
const nameInput=document.getElementById("name");
const ageInput=document.getElementById("age");
const result =document.getElementById("result");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    result.textContent=
    "Name:"+nameInput.value+",Age:"+ageInput.value;
});

const form = document.getElementById("form");
const input = document.getElementById("input");
const result = document.getElementById("result");

// submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = "Submit: " + input.value;
});

// click
btn.addEventListener("click", () => {
  console.log("Button clicked");
});

const male = document.getElementById("male");
const female = document.getElementById("female");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  if (male.checked) {
    result.textContent = male.value;
  } else if (female.checked) {
    result.textContent = female.value;
  }
});

const agree = document.getElementById("agree");
const result = document.getElementById("result");

agree.addEventListener("change", () => {
  result.textContent = agree.checked;
});

const city = document.getElementById("city");
const result = document.getElementById("result");

city.addEventListener("change", () => {
  result.textContent = city.value;
});

const agree = document.getElementById("agree");
const result = document.getElementById("result");

agree.addEventListener("change", () => {
  if (agree.checked) {
    result.textContent = "Thank you for agreeing";
  } else {
    result.textContent = "";
  }
});

const city = document.getElementById("city");
const result = document.getElementById("result");

city.addEventListener("change", () => {
  if (city.value === "") {
    result.textContent = "Please select a city";
  } else {
    result.textContent = city.value;
  }
});

const male = document.getElementById("male");
const female = document.getElementById("female");
const result = document.getElementById("result");
male.addEventListener("change", () => {
  if (male.checked) {
    result.textContent = male.value;
  }
});

female.addEventListener("change", () => {
  if (female.checked) {
    result.textContent = female.value;
  }
});

const nextBtn = document.querySelector('#nextBtn');
const message = document.querySelector('#message');

nextBtn.addEventListener('click', () => {
    const selectedRadio = document.querySelector('input[name="choice"]:checked');

    if (selectedRadio) {
        message.textContent = `Result: ${selectedRadio.value}`;
        message.style.color = 'green';
    } else {
        message.textContent = 'Error: Please select an option!';
        message.style.color = 'red';
    }
});

const item = document.querySelection(".item");
item.textContent="Changed";

 
const box=document.querySelector("#box");
const btn=document.querySelector("#btn");

btn.addEventListener("click",()=>{
  box.classList.remove("highlight");
});

*/

