let count=0;
document.getElementById('input-btn').addEventListener('click',function(){
    count++
    const inputValue=document.getElementById("input-value").value;
    // console.log(inputValue)
    const contentContainer =document.getElementById("content-container")
const content=document.createElement('tr')
content.innerHTML=`
<th scope="row">${count}</th>
 <td>${inputValue}</td>
 <td>
 <button class="btn btn-danger delete-btn">Delete</button>
 <button class="btn btn btn-primary">Edit</button>
 </td>`;
contentContainer.appendChild(content)
document.getElementById("input-value").value=""
const deleteBtns=document.getElementsByClassName("delete-btn")
for(let deleteBtn of deleteBtns){
deleteBtn.addEventListener('click',function(event){
    event.target.parentNode.parentNode.style.display='none';

})
}

})

