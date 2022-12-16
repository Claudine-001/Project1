let orderButton=document.querySelector("#order")
    orderButton.addEventListener("click", (e)=>{
        document.getElementById("ordering").textContent=""
    })
    
   let orderDetails= document.querySelectorAll("h5")
   console.log(orderDetails)
   orderDetails.forEach(order=>{
    order.addEventListener("click", (e)=>{
        let ordering=document.getElementById("ordering")
        let singleOrder=e.target.cloneNode(true)
        ordering.appendChild(singleOrder)

    })
   })
    
   document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault()
    let formData={
        email: e.target.email.value, 
        phone: e.target.phone.value,
        comment: e.target.comments.value
    }
    fetch ("http://localhost:3000/comments", {
        method:"POST",
        headers:{
            "Content-Type": "application/json", 
            Accept: "application/json"
        },
            body:JSON.stringify(formData)
    })
    .then(response=>response.json())
    .then(data=>{})
   })
   
