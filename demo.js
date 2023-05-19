function savetoLocalstorage(event){
  event.preventDefault();

  const Name=event.target.name.value;
  const Email=event.target.email.value;

  var obj = {
         Name,
         Email 
  }

  localStorage.setItem("userinfo", JSON.stringify(obj)); 
  axios.post("https://crudcrud.com/api/78d098b91264456d8a2083fb91c780f6/appointmentData",obj)
  .then((response) =>{
    console.log(response);
  })
  .catch((err) => console.log(err))


  showUserOnscreen(obj);
}

window.addEventListener("DOMContentLoaded",()=>{
  axios.get("https://crudcrud.com/api/78d098b91264456d8a2083fb91c780f6/appointmentData")
  .then((response)=>{
    console.log(response);
    for(var i=0;i<response.data.length;i++){
      showUserOnscreen(response.data[i]);
    }
  })
  .catch((err) =>{
    console.log(err);
  })
})




function showUserOnscreen(obj){
    const parentElement = document.getElementById('users');
    const childElement = document.createElement('li');

    childElement.textContent = obj.Name+'-'+obj.Email;

    const deleteButton = document.createElement('input');
    deleteButton.type="button";
    deleteButton.value = "delete";

    deleteButton.onclick=()=>{
      axios.delete("https://crudcrud.com/api/78d098b91264456d8a2083fb91c780f6/appointmentData/6401a136a997a303e8774e68")
      .then((response)=>{
        console.log(response)
        .catch((err) =>{
            console.log(err);
        })
      })

    }
    parentElement.appendChild(childElement);   
    childElement.appendChild(deleteButton);                                                                  
}
