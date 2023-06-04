btnSnacks = () => {
       document.getElementById("Snacks_container").style.display = "block"         
}
let total = 0
btnProducts = (food,price) => {       
          document.getElementById("ID_orders").style.display = "block";
          document.getElementById("ID_total").style.display = "block";
          document.getElementById("ID_product").innerHTML += 
          '<div>'+ food + price +'</div>';        
           total = total + price;
          document.getElementById("ID_totalprice").innerHTML = total;          
}
