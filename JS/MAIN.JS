const stockProductos = [
    {
      id: 1,
      nombre: "Buzos Canguro Essentials",
      cantidad: 1,
      desc: "Color Beige Tostado, Talles M-XXL",
      precio: 7500,
      img:"img/Buzos/BEIGE TOSTADO ESS.jpeg"
    },
    {
      id: 2,
      nombre: "Buzos Canguro Essentials",
      cantidad: 1,
      desc: "Color Beige, Talles M-XXL",
      precio: 7500,
      img: "img//Buzos/ESS BEIGE.jpeg"
    },
    {
      id: 3,
      nombre: "Buzos Canguro Essentials",
      cantidad: 1,
      desc: "Color Verde, Talles M-XXL",
      precio: 7500,
      img: "img/Buzos/VERDE ESS.jpeg"
    },
    {
      id: 4,
      nombre: "Buzos Canguro  Essentials ",
      cantidad: 1,
      desc: "Color Negro-Talles M-XXL ",
      precio: 7500,
      img: "img/Buzos/ESS NEGRO.jpeg",
    },
    {
      id: 5,
      nombre: "Buzos Canguro Essentials",
      cantidad: 1,
      desc: "Color Verde,Talles M-XXL",
      precio: 7500,
      img: "img/Buzos/ESS VERDE OSC.jpeg",
    },
    {
      id: 6,
      nombre: "Buzos Canguro  Essentials  ",
      cantidad: 1,
      desc: "Color Naranja,Talles M-XXL",
      precio: 7500,
      img: "img/Buzos/NARANJA ESS.jpeg",
    },
    {
      id: 7,
      nombre: "Buzo Canguro OFF WHITE ",
      cantidad: 1,
      desc: "Color NeGRO,Talles M-XXL.",
      precio: 7500,
      img: "img/Buzos/NEGRO OFF WHITE.jpeg",
    },
    {
      id: 8,
      nombre: "Buzo Pure Money",
      cantidad: 1,
      desc: "Buzo Canguro , Talles:M-XXL",
      precio: 7500,
      img: "img/Buzos/PURE MONEY.jpeg",
    },
    {
      id: 9,
      nombre: "Camisetas Polo",
      cantidad: 1,
      desc: "Color Blanco,Bordadas,Talles M-XXl",
      precio: 6000,
      img:"img/Remeras/POLO BLANCO.jpeg"
    },
    {
      id:10 ,
      nombre: "Camisetas Polo",
      cantidad: 1,
      desc: "Color Celeste,Bordadas,Talles M-XXl",
      precio: 6000,
      img: "img/Remeras/POLO.jpeg"
    },
    {
      id:11 ,
      nombre: "Remeras Represent",
      cantidad: 1,
      desc: "Color Beige, Talles M-XXL",
      precio: 6000,
      img: "img/Remeras/REPRESENT BEIGE.jpeg"
    },
    {
      id:12 ,
      nombre: "Remeras Represent",
      cantidad: 1,
      desc: "Color Blanco,Estampadas,Talles M-XXL ",
      precio: 6000,
      img: "img/Remeras/REPRESENT BLANCO.jpeg",
    },
    {
      id:13 ,
      nombre: "Remeras Represent",
      cantidad: 1,
      desc: "Color Negro ,Estampadas,Talles M-XXL ",
      precio: 6000,
      img: "img/Remeras/REPRESENT NEGRO.jpeg",
    },
    {
      id: 14,
      nombre: "Remeras Represent",
      cantidad: 1,
      desc: "Color Verde,Estampadas,Talles M-XXL",
      precio: 6000,
      img: "img/Remeras/REPRESENT VERDE.jpeg",
    },
    
    {
      id: 15,
      nombre: "Remeras Tommy ",
      cantidad: 1,
      desc: "Color Negro,Bordadas , Talles S-XXL",
      precio: 5000,
      img: "img/Remeras/TOMMY NEGRO.jpeg",
      
    },
    {
      id: 16,
      nombre: "Remeras Tommy",
      cantidad: 1,
      desc: "Color Verde,Bordadas , Talles S-XXL",
      precio: 5000,
      img: "img/Remeras/TOMMY.jpeg",
    }
    
  ];
  
  let carrito = [];
  
  
  const contenedor = document.querySelector("#contenedor");
  const carritoContenedor = document.querySelector("#carritoContenedor");
  const vaciarCarrito = document.querySelector("#vaciarCarrito");
  const precioTotal = document.querySelector("#precioTotal");
  const activarFuncion = document.querySelector("#activarFuncion");
  const procesarCompra = document.querySelector("#procesarCompra");
  const totalProceso = document.querySelector("#totalProceso");
  const formulario = document.querySelector('#procesar-pago')
  
  if (activarFuncion) {
    activarFuncion.addEventListener("click", procesarPedido);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    mostrarCarrito();
    document.querySelector("#activarFuncion").click(procesarPedido);
  });
  if(formulario){
    formulario.addEventListener('submit', enviarCompra)
  }
  
  
   if (vaciarCarrito) {
    vaciarCarrito.addEventListener("click", () => {
      carrito.length = [];
       mostrarCarrito();
    });
  }
  
  if (procesarCompra) {
    procesarCompra.addEventListener("click", () => {
      if (carrito.length === 0) {
        Swal.fire({
          title: "¡Tu carrito está vacio!",
          text: "Compra algo para continuar con la compra",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      } else {
        alert("Gracias por su compra")
      }
    });
  }
  
  stockProductos.forEach((prod) => {
    const { id, nombre, precio, desc, img, cantidad } = prod;
    if (contenedor) {
      contenedor.innerHTML += `
      <div class="card mt-4"  style="width: 18rem;">
      <img class="card-img-top mt-4" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>
        <p class="card-text">Descripcion: ${desc}</p>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
      </div>
    </div>
      `;
    }
  });
  
  
 
  const agregarProducto = (id) => {
    const existe = carrito.some(prod => prod.id === id)
  
    if(existe){
      const prod= carrito.map(prod => {
        if(prod.id === id){
          prod.cantidad++
        }
      })
    } else {
      const item = stockProductos.find((prod) => prod.id === id)
      carrito.push(item)
    }
    mostrarCarrito()
  
  };
  



  const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body");
    if (modalBody) {
      modalBody.innerHTML = "";
      carrito.forEach((prod) => {
        const { id, nombre, precio, desc, img, cantidad } = prod;
        console.log(modalBody);
        modalBody.innerHTML += `
        <div class="modal-contenedor">
          <div>
          <img class="img-fluid img-carrito" src="${img}"/>
          </div>
          <div>
          <p>Producto: ${nombre}</p> <br>
        <p>Precio: ${precio}</p>
        <p>Cantidad :${cantidad}</p>
        
        <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>

          </div>
        </div>
        
    
        `;
      });
    }

    if (carrito.length === 0) {
      console.log("Nada");
      modalBody.innerHTML = `
      <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
      `;
    } else {
      console.log("Algo");
    }
    carritoContenedor.textContent = carrito.length;
  
    if (precioTotal) {
      precioTotal.innerText = carrito.reduce(
        (acc, prod) => acc + prod.cantidad * prod.precio,
        0
      );
    }
  
    guardarStorage();
  };

  function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
  function eliminarProducto(id) {
    const juegoId = id;
    carrito = carrito.filter((juego) => juego.id !== juegoId);
    mostrarCarrito();
  }
  function procesarPedido() {
    carrito.forEach((prod) => {
      const listaCompra = document.querySelector("#lista-compra tbody");
      const { id, nombre, precio, img, cantidad } = prod;
      if (listaCompra) {
        const row = document.createElement("tr");
        row.innerHTML += `
                <td>
                <img class="img-fluid img-carrito" src="${img}"/>
                </td>
                <td>${nombre}</td>
              <td>${precio}</td>
              <td>${cantidad}</td>
              <td>${precio * cantidad}</td>
              `;
        listaCompra.appendChild(row);
      }
    });
    totalProceso.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }