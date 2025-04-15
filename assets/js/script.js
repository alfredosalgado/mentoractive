document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector('.whatsapp-btn');

  if (btn) {
    btn.addEventListener('click', function (event) {
      event.preventDefault(); // Evita que el navegador siga el enlace `href`
      const phone = '56921816371'; // Número de teléfono
      const message = 'Hola, me interesa obtener más información.';
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    });
  } else {
    console.error("No se encontró el botón de WhatsApp en el DOM.");
  }
});

// Obtén el botón de "Subir"
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Cuando el usuario haga scroll hacia abajo, muestra el botón
window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollToTopBtn.style.display = "flex"; // Muestra el botón
  } else {
    scrollToTopBtn.style.display = "none"; // Oculta el botón
  }
};

// Cuando el usuario haga clic en el botón, realiza el desplazamiento suave
scrollToTopBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Evita la acción predeterminada de ancla

  // Desplazamiento suave hasta la parte superior
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Añade la transición suave
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const titulos = document.querySelectorAll(".titulo-animado");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("titulo-visible"); // Agrega la animación cuando es visible
      } else {
        entry.target.classList.remove("titulo-visible"); // Quita la animación cuando deja de ser visible
      }
    });
  }, { threshold: 0.2 });

  titulos.forEach(titulo => observer.observe(titulo));
});



document.addEventListener("DOMContentLoaded", () => {
  const textos = document.querySelectorAll(".texto-fade");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("texto-visible"); // Activa la animación
      } else {
        entry.target.classList.remove("texto-visible"); // Permite que se repita
      }
    });
  }, { threshold: 0.2 });

  textos.forEach(texto => observer.observe(texto));
});










// Asegurarse de que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  // Datos de los clientes
  const clientData = [
      {
          company: "Moliendas LempAyala Ltda",
          industry: "Industria Molienda",
          city: "Santiago",
          manager: "Gerente General Fabián Lemp"
      },
      {
          company: "Excedd & Madive Spa",
          industry: "Industria Comercializadora de Maquinaria Mineria",
          city: "Llay LLay",
          manager: "Gerente General Fabián Lemp Ayala"
      },
      {
          company: "Zambom Grúas. Ltda",
          industry: "Industria arriendo de maquinas",
          city: "Santiago",
          manager: "Gerente General Marcos Zambon"
      },
      {
          company: "Transportes Poblete Ltda",
          industry: "Industria transporte",
          city: "Santiago",
          manager: "Gerente General Ricardo Poblete"
      },
      {
          company: "Promiserv Ltda",
          industry: "Arriendo de Maquinarias",
          city: "Santiago",
          manager: "Gerente General Francisco Madrid"
      },
      {
          company: "Caribean Pharma",
          industry: "Distribuidora de Insumos de Salud",
          city: "Santiago",
          manager: "Gerente General Jariel Meliz"
      },
      {
          company: "Tu Puedes ONG",
          industry: "Clínica de Rehabilitación",
          city: "Santiago",
          manager: "Dueño Ricardo Reyes"
      },
      {
          company: "LP Minería Ltda",
          industry: "Servicios de mantención Maq. Mineras",
          city: "Iquique",
          manager: "Gerente General Andrés Portilla"
      },
      {
          company: "CIA Minera Fresia Ltda",
          industry: "Extracción minera",
          city: "Coquimbo",
          manager: "Gerente General Carlos Huidobro"
      },
      {
          company: "Restaurant El Pino",
          industry: "Restaurant",
          city: "La Serena",
          manager: "Dueña María Soledad Díaz"
      },
      {
          company: "Jardín Sushi",
          industry: "Restaurant",
          city: "La Serena",
          manager: "Dueña Victoria Hinojosa"
      },
      {
          company: "Serón Ice Ltda",
          industry: "Comercializadora de abarrotes",
          city: "Coquimbo",
          manager: "Gerente General Cesar Lara"
      },
      {
          company: "Serón Maquinarias Ltda",
          industry: "Com. de maquinaria de cocina",
          city: "La Serena",
          manager: "Gerente General Cesar Lara"
      },
      {
          company: "Vasgo Constructora Ltda",
          industry: "Constructora",
          city: "La Serena",
          manager: "Dueño Eugenio Vásquez"
      },
      {
          company: "Manuel Diaz Diaz-MDD",
          industry: "Movimiento de Tierra",
          city: "Coquimbo",
          manager: "Gerente Comercial Andrés Portilla"
      },
      {
          company: "Morlans Catering & Banqueteria",
          industry: "Servicios Gastronómicos",
          city: "La Serena",
          manager: "Dueña Pilar Morlans"
      },
      {
          company: "Bisont Ltda",
          industry: "Telecomunicaciones",
          city: "Coquimbo",
          manager: "Gerente General Evans Pasten Llewellyn"
      },
      {
          company: "Colegio Educa el Porvenir S.A.",
          industry: "Educación",
          city: "Coquimbo",
          manager: "Sostenedora Carolina Alday"
      }
  ];

  // Seleccionar el contenedor
  const clientContainer = document.getElementById('client-container');

  // Verificar que el contenedor existe
  if (clientContainer) {
      // Generar tarjetas de clientes
      clientData.forEach(client => {
          const clientCard = document.createElement('div');
          clientCard.classList.add('client-card');
          clientCard.innerHTML = `
              <h3 class="client-card__company">${client.company}</h3>
              <p class="client-card__industry">${client.industry}</p>
              <p class="client-card__city">${client.city}</p>
              <p class="client-card__manager">${client.manager}</p>
          `;
          clientContainer.appendChild(clientCard);
      });
  } else {
      console.error('El contenedor client-container no se encontró en el DOM.');
  }
});














// Datos de los proveedores
const providerLogos = [
  { name: "Banco de Chile", logoUrl: "assets/img/logos/1.jpg" },
        { name: "BCI", logoUrl: "assets/img/logos/2.png" },
        { name: "BancoEstado", logoUrl: "assets/img/logos/3.jpg" },
        { name: "Itaú", logoUrl: "assets/img/logos/4.png" },
        { name: "Banco Security", logoUrl: "assets/img/logos/5.png" },
        { name: "Scotiabank", logoUrl: "assets/img/logos/6.jpg" },
        { name: "BBVA", logoUrl: "assets/img/logos/7.jpg" },
        { name: "Santander", logoUrl: "assets/img/logos/8.jpg" },
        { name: "Progresso", logoUrl: "assets/img/logos/9.jfif" },
        { name: "Coval Servicios Financieros", logoUrl: "assets/img/logos/10.jpg" },
        { name: "Tanner", logoUrl: "assets/img/logos/11.png" },
        { name: "FT", logoUrl: "assets/img/logos/12.jpg" },
        { name: "Avla", logoUrl: "assets/img/logos/13.jpg" },
        { name: "Factor One", logoUrl: "assets/img/logos/14.png" }
];

// Seleccionar el contenedor
const providerContainer = document.getElementById('provider-container');

// Verificar que el contenedor existe
if (providerContainer) {
  // Generar tarjetas de logotipos
  providerLogos.forEach(provider => {
      const providerCard = document.createElement('div');
      providerCard.classList.add('provider-card');
      providerCard.innerHTML = `
          <img src="${provider.logoUrl}" alt="${provider.name}" class="provider-card__logo">
      `;
      providerContainer.appendChild(providerCard);
  });
} else {
  console.error('El contenedor provider-container no se encontró en el DOM.');
}





// Datos del equipo
const teamWorkMembers = [
  {
      name: "Cristian Herrera A",
      role: "CEO",
      description: "Ingeniero Comercial"
  },
  {
      name: "Roberto Cuellar G",
      role: "Co-CEO",
      description: "Ingeniero Comercial"
  },
  {
      name: "Mauricio Vidal P",
      role: "Ejecutivo de Ventas",
      description: "Comercio Exterior"
  },
  {
      name: "Carlos Contreras R",
      role: "Ejecutivo de Ventas",
      description: "Administración de Empresas"
  },
  {
      name: "Felipe Viveros",
      role: "Asesoría Legal",
      description: "Viveros y Castillo Asociados"
  },
  {
      name: "Nickson Cáceres Valderrama",
      role: "Asesoría Tributaria",
      description: "Contador Auditor"
  }
];

// Seleccionar el contenedor
const teamWorkContainer = document.getElementById('team-work-container');

// Verificar que el contenedor existe
if (teamWorkContainer) {
  // Generar tarjetas
  teamWorkMembers.forEach(teamWorkMember => {
      const teamWorkCard = document.createElement('div');
      teamWorkCard.classList.add('team-work-card');
      teamWorkCard.innerHTML = `
          <h3 class="team-work-card__name">${teamWorkMember.name}</h3>
          <p class="team-work-card__role">${teamWorkMember.role}</p>
          <p class="team-work-card__description">${teamWorkMember.description}</p>
      `;
      teamWorkContainer.appendChild(teamWorkCard);
  });
} else {
  console.error('El contenedor team-work-container no se encontró en el DOM.');
}







function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const isMoney = counter.classList.contains('money');
  let count = 0;
  const increment = target / 100; // Ajusta la velocidad de animación

  const updateCounter = () => {
    count += increment;

    if (count < target) {
      counter.textContent = isMoney ? `+ ${Math.floor(count).toLocaleString('es-CL')}` : Math.floor(count).toLocaleString('es-CL');
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = isMoney ? `+ ${target.toLocaleString('es-CL')}` : target.toLocaleString('es-CL');
    }
  };

  updateCounter();
}

// Observer para detectar cuando los contadores sean visibles
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counterBox = entry.target;
      counterBox.classList.add("visible"); // Aparece suavemente

      const counters = counterBox.querySelectorAll(".counter");
      counters.forEach(counter => {
        counter.textContent = "0"; // Reinicia el conteo cada vez que es visible
        animateCounter(counter);
      });
    }
  });
}, { threshold: 0.5 }); // Se activa cuando al menos el 50% del elemento es visible

// Aplicar el observer a cada contador
document.querySelectorAll('.counter-box').forEach(counterBox => observer.observe(counterBox));




// Función para abrir el modal (debes definirla según tu lógica)
function abrirModal(src) {
  console.log("Abriendo modal con: " + src);
  // Aquí iría tu código para mostrar el modal con la imagen
}

// Generar las miniaturas dinámicamente
const galeria = document.getElementById('galeria');
const totalImagenes = 29; // Número total de imágenes

for (let i = 1; i <= totalImagenes; i++) {
  // Crear el div contenedor
  const div = document.createElement('div');
  div.className = 'miniatura col-6 col-md-4 col-lg-3 d-flex justify-content-center texto-fade card';

  // Crear la imagen
  const img = document.createElement('img');
  img.className = 'rounded';
  img.src = `./assets/img/galeria/${i}.jpeg`;
  img.alt = `Imagen ${i}`;
  img.onclick = () => abrirModal(`./assets/img/galeria/${i}.jpeg`);

  // Añadir la imagen al div
  div.appendChild(img);

  // Añadir el div al contenedor de la galería
  galeria.appendChild(div);
}





document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popupModal");
  const openBtn = document.getElementById("openPopup");
  const closeBtn = document.getElementById("closePopup");
  const closeSpan = document.querySelector(".close-btn");

  // 🚀 Hacer que el pop-up aparezca automáticamente al cargar la página
  setTimeout(() => {
    popup.style.display = "flex";
  }, 2000); // Espera 2 segundos antes de mostrarlo (puedes cambiar el tiempo)

  // Abrir el pop-up con el botón (opcional, sigue funcionando)
  openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  // Cerrar el pop-up con el botón
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Cerrar el pop-up con la "X"
  closeSpan.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Cerrar el pop-up al hacer clic fuera de él
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});



function abrirModal(src) {
  var modal = document.getElementById("modal");
  var imagenGrande = document.getElementById("imagenGrande");
  imagenGrande.src = src;
  modal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de la imagen
window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
      modal.style.display = "none";
  }
}






