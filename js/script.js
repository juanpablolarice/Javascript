class Alumno {
    constructor (id, nombre, apellido, documento) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
    }
}

const alumnos = [
    {"id":1,"nombre":"Jean","apellido":"McCandie","documento":54133087},
    {"id":2,"nombre":"Titos","apellido":"Walklate","documento":54915358},
    {"id":3,"nombre":"Misha","apellido":"Raison","documento":54849447},
    {"id":4,"nombre":"Latrina","apellido":"Woodburn","documento":54548481},
    {"id":5,"nombre":"Nicolea","apellido":"Bediss","documento":54862425},
    {"id":6,"nombre":"Brnaby","apellido":"Lechmere","documento":54259921},
    {"id":7,"nombre":"Celesta","apellido":"Millar","documento":54347917},
    {"id":8,"nombre":"Holly-anne","apellido":"Alvarado","documento":54418688},
    {"id":9,"nombre":"Norman","apellido":"Clowley","documento":54979978},
    {"id":10,"nombre":"Goldie","apellido":"Pinnick","documento":54576668},
    {"id":11,"nombre":"Bobbette","apellido":"Lytle","documento":54159115},
    {"id":12,"nombre":"Marylin","apellido":"Sidebottom","documento":54680122},
    {"id":13,"nombre":"Nobie","apellido":"Lefwich","documento":54794441},
    {"id":14,"nombre":"Olly","apellido":"Pedican","documento":54416060},
    {"id":15,"nombre":"Stanton","apellido":"Ibel","documento":54959488},
    {"id":16,"nombre":"Danika","apellido":"Kliemann","documento":54483568},
    {"id":17,"nombre":"Elvira","apellido":"Forrestor","documento":54367232},
    {"id":18,"nombre":"Jonis","apellido":"Kippen","documento":54969100},
    {"id":19,"nombre":"Donny","apellido":"Colly","documento":54720087},
    {"id":20,"nombre":"Quinn","apellido":"Grinyakin","documento":54042157},
    {"id":21,"nombre":"Lilly","apellido":"Glynne","documento":54706688},
    {"id":22,"nombre":"Misti","apellido":"Gookey","documento":54773393},
    {"id":23,"nombre":"Lisetta","apellido":"Bumphrey","documento":54909872},
    {"id":24,"nombre":"Hermann","apellido":"Mattam","documento":54557503},
    {"id":25,"nombre":"Leon","apellido":"McBratney","documento":54297496},
    {"id":26,"nombre":"Haydon","apellido":"Arkwright","documento":54080934},
    {"id":27,"nombre":"Pearce","apellido":"Sywell","documento":54545638},
    {"id":28,"nombre":"Odilia","apellido":"Chesnut","documento":54674283},
    {"id":29,"nombre":"Jilli","apellido":"Bamlett","documento":54757494},
    {"id":30,"nombre":"Hermione","apellido":"Olwen","documento":54562734}
];

const aulas = [
    { "id":1 , "anio": 1, "turno": "Mañana", "division": "A"},
    { "id":2 , "anio": 1, "turno": "Tarde", "division": "B"}
];

const aulaAlumnos = [
    {"id_aula":1,"id_alumno":1},
    {"id_aula":1,"id_alumno":2},
    {"id_aula":1,"id_alumno":3},
    {"id_aula":1,"id_alumno":4},
    {"id_aula":1,"id_alumno":5},
    {"id_aula":1,"id_alumno":6},
    {"id_aula":1,"id_alumno":7},
    {"id_aula":1,"id_alumno":8},
    {"id_aula":1,"id_alumno":9},
    {"id_aula":1,"id_alumno":10},
    {"id_aula":1,"id_alumno":11},
    {"id_aula":1,"id_alumno":12},
    {"id_aula":1,"id_alumno":13},
    {"id_aula":1,"id_alumno":14},
    {"id_aula":1,"id_alumno":15},
    {"id_aula":2,"id_alumno":16},
    {"id_aula":2,"id_alumno":17},
    {"id_aula":2,"id_alumno":18},
    {"id_aula":2,"id_alumno":19},
    {"id_aula":2,"id_alumno":20},
    {"id_aula":2,"id_alumno":21},
    {"id_aula":2,"id_alumno":22},
    {"id_aula":2,"id_alumno":23},
    {"id_aula":2,"id_alumno":24},
    {"id_aula":2,"id_alumno":25},
    {"id_aula":2,"id_alumno":26},
    {"id_aula":2,"id_alumno":27},
    {"id_aula":2,"id_alumno":28},
    {"id_aula":2,"id_alumno":29},
    {"id_aula":2,"id_alumno":30}
];

class Asistencia {
    constructor (id_alumno, id_aula, asistencia, fecha) {
        this.id_alumno = id_alumno;
        this.id_aula = id_aula;
        this.asistencia = asistencia;
        this.fecha = fecha;
    }
}

// function alumnosDB (alumnoDB, storage){
//     const alumno = {
//         'id': alumnoDB.id,
//         'nombre': alumnoDB.nombre,
//         'apellido': alumnoDB.apellido,
//         'documento': alumnoDB.Documento
//     }
    
//     storage.setItem('alumnos', JSON.stringify(alumno));
// }

// function recuperarAlumnos(storage){
    //     let alumnosStorage = JSON.parse(storage.getItem('alumnos'));
    //     return alumnosStorage;
    // }
    
const bodyAlumnos = document.getElementById("bodyAlumnos");
const selAulas = document.getElementById("selAulas");
const diaAsistencia = document.getElementById("diaAsistencia");
const btnCargar = document.getElementById("btnCargar");
let btnPresentes = document.querySelectorAll(".btnPresente");
let asistencias = JSON.parse(window.localStorage.getItem('asistencias')) || [];

window.localStorage.setItem('alumnos', JSON.stringify(alumnos));
window.localStorage.setItem('aulas', JSON.stringify(aulas));
window.localStorage.setItem('asistencias', JSON.stringify(asistencias));
window.localStorage.setItem('aulaAlumnos', JSON.stringify(aulaAlumnos));

aulas.forEach((aula) => {
    selAulas.innerHTML += `<option value="${aula.id}">${aula.anio}° ${aula.division} - ${aula.turno}</option>`
});

diaAsistencia.addEventListener("change", function() {
    var fecha = this.value;
});

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
        bodyAlumnos.innerHTML = "";    
        let aulaAlumno = JSON.parse(window.localStorage.getItem('aulaAlumnos'));
        let alumnosFiltrado = aulaAlumno.filter(alumno => alumno.id_aula === parseInt(selAulas.value));    
        alumnosFiltrado.forEach((alum) => {
            let alumno = buscarAlumno(alum.id_alumno);
            let asistenciaAlumno = asistencias.filter(asistencia => asistencia.id_alumno === parseInt(alum.id_alumno));
        
            let asistenciaFecha = asistenciaAlumno.find(asistencia => asistencia.id_alumno === alumno.id && asistencia.id_aula === parseInt(selAulas.value) && asistencia.fecha === diaAsistencia.value);
            // TRAER LOS ALUMNOS CON EL ID
            bodyAlumnos.innerHTML += `<tr>
                <th scope="row">${alumno.id}</th>
                <td>${alumno.nombre}</td>
                <td>${alumno.apellido}</td>
                <td>${alumno.documento}</td>
                <td class="text-center" id="id_asistencia${alumno.id}">${asistenciaFecha?.asistencia || "-"}</td>
                <td>
                <a href="#" class="btnPresente px-2" title="Presente" data-alumnoid="${alumno.id}"><i class="bi bi-check-circle-fill text-success"></i></a>
                <a href="" class="btnAusente px-2" title="Ausente" data-alumnoid="${alumno.id}"><i class="bi bi-x-circle-fill text-danger"></i></a>
                </td>
                </tr>`;
        });
        
        btnPresentes = document.querySelectorAll(".btnPresente");    
        // AGREGO EVENTOS A LOS BOTONES DE PRESENTE
        btnPresentes.forEach((item) => {
            item.addEventListener('click', (e)=>{
                e.preventDefault();
                let alumno = buscarAlumno(item.getAttribute('data-alumnoid'));
                let asistenciaTexto = document.getElementById('id_asistencia' + item.getAttribute('data-alumnoid'));
                asistenciaTexto.innerHTML = 'Presente';
                asistencias = JSON.parse(window.localStorage.getItem('asistencias')) || [];
                asistenciaAlumno = asistencias.filter(asistencia => asistencia.id_alumno === parseInt(item.getAttribute('data-alumnoid')) && asistencia.id_aula === parseInt(selAulas.value) && asistencia.fecha === diaAsistencia.value);
                if(asistenciaAlumno.length > 0){
                    asistenciaAlumno.forEach((item) => {
                        item.asistencia = "Presente";
                        // ACTUALIZO EL LOCALSTORAGE
                        window.localStorage.setItem('asistencias', JSON.stringify(asistencias));
                    });
                }else{
                    asistencias.push(new Asistencia(parseInt(item.getAttribute('data-alumnoid')), parseInt(selAulas.value), "Presente", diaAsistencia.value));
                    window.localStorage.setItem('asistencias', JSON.stringify(asistencias));
                }
            });
        });

        btnAusentes = document.querySelectorAll(".btnAusente");    
        // AGREGO EVENTOS A LOS BOTONES DE AUSENTE
        btnAusentes.forEach((item) => {
            item.addEventListener('click', (e)=>{
                e.preventDefault();
            
                let alumno = buscarAlumno(item.getAttribute('data-alumnoid'));
                let asistenciaTexto = document.getElementById('id_asistencia' + item.getAttribute('data-alumnoid'));
                asistenciaTexto.innerHTML = 'Ausente';
                asistencias = JSON.parse(window.localStorage.getItem('asistencias')) || [];
                asistenciaAlumno = asistencias.filter(asistencia => asistencia.id_alumno === parseInt(item.getAttribute('data-alumnoid')) && asistencia.id_aula === parseInt(selAulas.value) && asistencia.fecha === diaAsistencia.value);                
                if(asistenciaAlumno.length > 0){
                    asistenciaAlumno.forEach((item) => {
                        item.asistencia = "Aussente";
                        // ACTUALIZO EL LOCALSTORAGE
                        window.localStorage.setItem('asistencias', JSON.stringify(asistencias));
                    });
                }else{
                    asistencias.push(new Asistencia(parseInt(item.getAttribute('data-alumnoid')), parseInt(selAulas.value), "Ausente", diaAsistencia.value));
                    window.localStorage.setItem('asistencias', JSON.stringify(asistencias));
                }
            });
        });
    }
});

function buscarAlumno(id){
    let alumnos = JSON.parse(window.localStorage.getItem('alumnos'));
    return alumnos.find(alumno => alumno.id === parseInt(id));
}