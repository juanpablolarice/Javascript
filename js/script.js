class Alumno {
    constructor (id, nombre, apellido, documento) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
    }
}

class Asistencia {
    constructor (id_alumno, id_aula, asistencia, fecha) {
        this.id_alumno = id_alumno;
        this.id_aula = id_aula;
        this.asistencia = asistencia;
        this.fecha = fecha;
    }
}
    
const bodyAlumnos = document.getElementById("bodyAlumnos");
const selAulas = document.getElementById("selAulas");
const diaAsistencia = document.getElementById("diaAsistencia");
const btnCargar = document.getElementById("btnCargar");
const modalAlumno = new bootstrap.Modal(document.getElementById('modalAlumno'));
let btnPresentes = document.querySelectorAll(".btnPresente");
let asistencias = JSON.parse(localStorage.getItem('asistencias')) || [];


// LOCAL STORAGE
localStorage.setItem('asistencias', JSON.stringify(asistencias));

fetch('cursos.json')
    .then(res => res.json())
    .then(data => data.forEach((curso) => {
        selAulas.innerHTML += `<option value="${curso.id}">${curso.curso}</option>`
    }));

diaAsistencia.addEventListener("change", function() {
    var fecha = this.value;
});

const cargarAlumnos = async () => {
    const resp = await fetch(("https://dummyjson.com/users"));
    const alumnos = await resp.json();
    const bodyAlumnos = document.getElementById("bodyAlumnos");

    bodyAlumnos.innerHTML = "";    
    // JSON LOCAL - Se carga archivo de referencia entre aulas y alumnos
    fetch("aulaAlumnos.json")
        .then(res => res.json())
        .then(referencia => {
            // Se filtran los alumnos pertenecientes al aula seleccionada
            let alumnosFiltrado = referencia.filter(alumno => alumno.id_aula === parseInt(selAulas.value));    
            
            alumnosFiltrado.forEach((alumnoAula) => {
                let asistenciaAlumno = asistencias.filter(asistencia => asistencia.id_alumno === parseInt(alumnoAula.id_alumno));
                let asistenciaFecha = asistenciaAlumno.find(asistencia => asistencia.id_alumno === alumnoAula.id_alumno && asistencia.id_aula === parseInt(selAulas.value) && asistencia.fecha === diaAsistencia.value);
                const user = alumnos.users.filter(user => user.id === alumnoAula.id_alumno);
                
                bodyAlumnos.innerHTML += `<tr>
                <th scope="row">${user[0].id}</th>
                <td>${user[0].firstName}</td>
                <td>${user[0].lastName}</td>                
                <td class="text-center" id="id_asistencia${user[0].id}">${asistenciaFecha?.asistencia || "-"}</td>
                <td class="text-center">
                <a href="#" class="btnPresente px-2" title="Presente" data-alumnoid="${user[0].id}"><i class="bi bi-check-circle-fill text-success"></i></a>
                <a href="#" class="btnAusente px-2" title="Ausente" data-alumnoid="${user[0].id}"><i class="bi bi-x-circle-fill text-danger"></i></a>
                <a href="#" class="btnAlumno px-2" title="Ver alumno" data-alumnoid="${user[0].id}"><i class="bi bi-search text-info"></i></a>
                </td>
                </tr>`;
            });
        });

    cargarBtn('.btnPresente').then((elm) => {
        btnPresentes = document.querySelectorAll(".btnPresente");    
        // AGREGO EVENTOS A LOS BOTONES DE PRESENTE
        btnPresentes.forEach((item) => {                
            item.addEventListener('click', (e)=>{
                e.preventDefault();
                let alumno = guardarAsistencia(item.getAttribute('data-alumnoid'), "Presente");
            });
        });
    });

    cargarBtn('.btnAusente').then((elm) => {
        btnAusentes = document.querySelectorAll(".btnAusente");    
        // AGREGO EVENTOS A LOS BOTONES DE AUSENTE
        btnAusentes.forEach((item) => {
            item.addEventListener('click', (e)=>{
                e.preventDefault();
                let alumno = guardarAsistencia(item.getAttribute('data-alumnoid'), "Ausente");
            });
        });
    });

    cargarBtn('.btnAlumno').then((elm) => {        
        btnAlumnos = document.querySelectorAll(".btnAlumno");    
        // AGREGO EVENTOS A LOS BOTONES DE LA FICHA DEL ALUMNO
        btnAlumnos.forEach((item) => {
            item.addEventListener('click', (e)=>{
                e.preventDefault();
                
                const nombre = document.querySelector("#nombreAlumno");
                const imagen = document.querySelector("#imagenAlumno");
                const fechaNac = document.querySelector("#fechaNacAlumno");
                const email = document.querySelector("#emailAlumno");
                const telefono = document.querySelector("#telefonoAlumno");

                fetch(`https://dummyjson.com/users/${item.getAttribute('data-alumnoid')}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        nombre.innerHTML = `${data.firstName} ${data.lastName}`;
                        imagen.innerHTML = `<img src="${data.image}" class="img-fluid">`;
                        fechaNac.innerHTML = `${data.birthDate}`;
                        email.innerHTML = `${data.email}`;
                        telefono.innerHTML = `${data.phone}`;
                    });
                modalAlumno.show();
            });
        });
    });
}

// Esta función es para poder cargar los eventos dentro de cargarAlumnos()
function cargarBtn(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}


// EVENTO - Botón cargar, busca los alumnos del curso y fecha seleccionado.
btnCargar.addEventListener('click', (e)=>{
    e.preventDefault();

    if(selAulas.value == "" || diaAsistencia.value == ""){
        Toastify({
            text: "Debe seleccionar el aula y la fecha",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
              background: "#ffc107",
              color: "#000"
            },
            onClick: function(){} 
          }).showToast();
    }else{
        cargarAlumnos();        
    }
});

function guardarAsistencia(id, texto){
    fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then(data => {
            let asistenciaTexto = document.getElementById('id_asistencia' + id);

            asistenciaTexto.innerHTML = texto;
            asistencias = JSON.parse(localStorage.getItem('asistencias')) || [];
            asistenciaAlumno = asistencias.filter(asistencia => asistencia.id_alumno === parseInt(id) && asistencia.id_aula === parseInt(selAulas.value) && asistencia.fecha === diaAsistencia.value);
            if(asistenciaAlumno.length > 0){
                asistenciaAlumno.forEach((item) => {
                    item.asistencia = texto;
                    // ACTUALIZO EL LOCALSTORAGE
                    localStorage.setItem('asistencias', JSON.stringify(asistencias));
                });
            }else{
                asistencias.push(new Asistencia(parseInt(id), parseInt(selAulas.value), texto, diaAsistencia.value));
                localStorage.setItem('asistencias', JSON.stringify(asistencias));
            }
        });    
}