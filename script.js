let myLeads = []
let oldLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadFromLocalStorage)
{
    myLeads = leadFromLocalStorage
    render(myLeads)
}

function render(leads)
{
    let listItems = ""
    for (let i = 0 ; i < leads.length ; i++)
  {
    // the following line runs fine only in a live deployment
    listItems += `
    <li>
       <a target ='_blank' href ='${leads[i]}'>
              ${leads[i]}
       </a>
    </li>
    `
  }

     ulEl.innerHTML = listItems
}
inputBtn.addEventListener("click", function()
{
  myLeads.push (inputEl.value)
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  inputEl.value = ""
  render(myLeads)
})

deleteBtn.addEventListener("dblclick", function ()
{
  localStorage.clear()
  myLeads = []
  render(myLeads)
})
