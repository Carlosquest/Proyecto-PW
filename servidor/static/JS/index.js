

const clickbutton =document.querySelectorAll('.button')
const tbody= document.querySelector('.tbody')

let carrito= []
clickbutton.forEach(btn =>{
  btn.addEventListener('click', agregarItemCarrito)

})

function agregarItemCarrito(e){
  const button = e.target
  const item = button.closest('.card')
  const itemTitulo = item.querySelector('.card-title').textContent;
  const itemPrecio = item.querySelector('.precio').textContent;
  const itemImagen = item.querySelector('.card-img-top').src;
  
  const newItem = {
    titulo: itemTitulo,
    precio: itemPrecio,
    imagen: itemImagen,
    cantidad: 1
  }

  addItemCarrito(newItem)
}


function addItemCarrito(newItem){
  


  const InputElemnto = tbody.getElementsByClassName('input__elemento')
  for(let i =0; i < carrito.length ; i++){
    if(carrito[i].titulo.trim() === newItem.titulo.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      TotalCarrito()
      return null;
    }
  }
  
  carrito.push(newItem)
  
  renderCarrito()
} 


function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.imagen}  alt="">
              <h6 class="title">${item.titulo}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">ELIMINAR</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)
   
   tr.querySelector('.delete').addEventListener('click', removerItem)
   tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)


  })
  TotalCarrito()
}



function TotalCarrito(){
 
  let Total=0;
  const itemCartTotal=document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const precio= Number(item.precio.replace("$", ''))
    Total= Total + precio * item.cantidad
  })
  itemCartTotal.innerHTML= `Total $${Total}`
  addLocalStorage()
}

function removerItem(e){
  const buttonDelete= e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const titulo = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length; i++){
    if(carrito[i].titulo === titulo){
      carrito.splice(i,1)
    }
  }
  tr.remove()
  TotalCarrito()

}

function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const titulo = tr.querySelector('.title').textContent;
  carrito.forEach(item => {
    if(item.titulo === titulo){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      TotalCarrito()
    }
  })
}

function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}


function Mostrar(){
  
  // Obtén el checkbox y el campo de contraseña
  var checkbox = document.getElementById('showPassword');
  var password = document.getElementById('password');

  checkbox.addEventListener('change', function() {
    // Si el checkbox está marcado, cambia el tipo de campo de contraseña a texto
    if (checkbox.checked) {
      password.type = 'text';
    }
    // Si no está marcado, cambia el tipo de campo de contraseña a contraseña
    else {
      password.type = 'password';
    }
  });

}





