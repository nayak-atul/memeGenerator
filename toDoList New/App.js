const nbutton =document.querySelector("#nbutton")
const main =document.querySelector(".main")
const ntext =document.querySelector("#ntext")
const ndate =document.querySelector("#ndate")


nbutton.addEventListener(
    "click", function(){
        addToDo()
    }
)

const addToDo = (ntext, ndate ) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${ntext} ${ndate}
        <i class="trash fas fa-trash"></i>
    `;
}