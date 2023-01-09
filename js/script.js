// class Alumno {
//     constructor (id, nombre, apellido, documento) {
//         this.id = id;
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.documento = documento;
//     }
// }

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

// const hoy = new Date();
//     aux = hoy.getFullYear() + "-" + (hoy.getMonth() + 1 ) + "-" + hoy.getDate();
//     console.log("Aux: " + aux);
let asistencias = JSON.parse(window.localStorage.getItem('asistencias')) || [];
    // asistencias = [{ "id_alumno": 1, "id_aula": 1, "fecha": "2023-01-09", "asistencia": "Ausente"}];
//     { "id_alumno": 1, "id_aula": 1, "fecha": aux, "asistencia": "Ausente"},
//     { "id_alumno": 3, "id_aula": 1, "fecha": aux, "asistencia": "Ausente"},
//     { "id_alumno": 5, "id_aula": 1, "fecha": aux, "asistencia": "Ausente"}
// ];

class Asistencia {
    constructor (id_alumno, id_aula, asistencia, fecha) {
        // this.id = id;
        this.id_alumno = id_alumno;
        this.id_aula = id_aula;
        this.asistencia = asistencia;
        this.fecha = fecha;
    }
}

// alumnos.forEach((alumno) => {
//     asistencias.push(new Asistencia(alumno.id, "Ausente", new Date().toLocaleDateString()));
// });
// console.table(asistencias);

function alumnosDB (alumnoDB, storage){
    const alumno = {
        'id': alumnoDB.id,
        'nombre': alumnoDB.nombre,
        'apellido': alumnoDB.apellido,
        'documento': alumnoDB.Documento
    }

    storage.setItem('alumnos', JSON.stringify(alumno));
}

function recuperarAlumnos(storage){
    let alumnosStorage = JSON.parse(storage.getItem('alumnos'));
    return alumnosStorage;
}

const bodyAlumnos = document.getElementById("bodyAlumnos");
const selAulas = document.getElementById("selAulas");
const diaAsistencia = document.getElementById("diaAsistencia");
const btnCargar = document.getElementById("btnCargar");

    // diaAsistencia.value =  new Date().toLocaleDateString();

aulas.forEach((aula) => {
    selAulas.innerHTML += `<option value="${aula.id}">${aula.anio}° ${aula.division} - ${aula.turno}</option>`
});


// let html = "";
// alumnos.forEach((alumno) => {
//      bodyAlumnos.innerHTML += `<tr>
//         <th scope="row">${alumno.id}</th>
//         <td>${alumno.nombre}</td>
//         <td>${alumno.apellido}</td>
//         <td>${alumno.documento}</td>
//         <td>-</td>
//         <td><a href="#" class="btnPresente px-2" title="Presente" data-alumnoid="${alumno.id}"><i class="bi bi-check-circle-fill text-success"></i></a><a href="" class="btnAusente px-2" title="Ausente"><i class="bi bi-x-circle-fill text-danger"></i></a></td>
//     </tr>`;
// });

let btnPresentes = document.querySelectorAll(".btnPresente");
// console.log(btnPresente);
function buscarAlumno(id){
    let alumnos = JSON.parse(window.localStorage.getItem('alumnos'));
    return alumnos.find(alumno => alumno.id === parseInt(id));
}
// buscarAlumno(4);
window.localStorage.setItem('alumnos', JSON.stringify(alumnos));
window.localStorage.setItem('aulas', JSON.stringify(aulas));
window.localStorage.setItem('asistencias', JSON.stringify(asistencias));
window.localStorage.setItem('aulaAlumnos', JSON.stringify(aulaAlumnos));

// selAulas.addEventListener('change', ()=>{
//     bodyAlumnos.innerHTML = "";
//     let aulaAlumno = JSON.parse(window.localStorage.getItem('aulaAlumnos'));
//     let alumnosFiltrado = aulaAlumno.filter(alumno => alumno.id_aula === parseInt(selAulas.value));
//     alumnosFiltrado.forEach((alum) => {
//         console.log(alum);
//         let alumno = buscarAlumno(alum.id_alumno);
//         console.log(alumno);
//         // TRAER LOS ALUMNOS CON EL ID
//          bodyAlumnos.innerHTML += `<tr>
//             <th scope="row">${alumno.id}</th>
//             <td>${alumno.nombre}</td>
//             <td>${alumno.apellido}</td>
//             <td>${alumno.documento}</td>
//             <td>-</td>
//             <td><a href="#" class="btnPresente px-2" title="Presente" data-alumnoid="${alumno.id}"><i class="bi bi-check-circle-fill text-success"></i></a><a href="" class="btnAusente px-2" title="Ausente"><i class="bi bi-x-circle-fill text-danger"></i></a></td>
//         </tr>`;
//     });
// });
//
// diaAsistencia.addEventListener('change', ()=>{
//     limpiar(bodyAlumnos);
//     // bodyAlumnos.innerHTML = '';
//     let asistencias = JSON.parse(window.localStorage.getItem('asistencias'));
//     console.log(asistencias);
//     asistencias.forEach((item) => {
//         let alumno = buscarAlumno(item.id_alumno);
//         console.log(alumno[0].nombre);
//         bodyAlumnos.innerHTML += `<tr>
//            <th scope="row">${alumno[0].id}</th>
//            <td>${alumno[0].nombre}</td>
//            <td>${alumno[0].apellido}</td>
//            <td>${alumno[0].documento}</td>
//            <td>${item.asistencia}</td>
//            <td><a href="#" class="btnPresente px-2" title="Presente" data-alumnoid="${alumno[0].id}"><i class="bi bi-check-circle-fill text-success"></i></a><a href="" class="btnAusente px-2" title="Ausente"><i class="bi bi-x-circle-fill text-danger"></i></a></td>
//        </tr>`;
//     });
// });

diaAsistencia.addEventListener("change", function() {
    var fecha = this.value;
    // var dateEntered = new Date(fecha);
    console.log(fecha); //e.g. 2015-11-13
    // console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)
});

btnCargar.addEventListener('click', (e)=>{
    e.preventDefault();
    let x = new Date(diaAsistencia.value);
    console.log(diaAsistencia.value);
    // console.log(x.toLocaleDateString());
    console.log("Input valor: " + x.getFullYear() + "-" + (x.getMonth() + 1 ) + "-" + x.getDate());
    bodyAlumnos.innerHTML = "";    
    let aulaAlumno = JSON.parse(window.localStorage.getItem('aulaAlumnos'));
    let alumnosFiltrado = aulaAlumno.filter(alumno => alumno.id_aula === parseInt(selAulas.value));    
    alumnosFiltrado.forEach((alum) => {
        // console.log(alum.id_alumno);
        let alumno = buscarAlumno(alum.id_alumno);
        let asistenciaAlumno = asistencias.filter(asistencia => asistencia.id_alumno === parseInt(alum.id_alumno));
        // console.log(asistenciaAlumno);
        // console.log(new Date().toLocaleDateString());
        // if(asistenciaAlumno.fecha == new Date().toLocaleDateString()){
        //     console.log(asistenciaAlumno);
        // }else{
        let x = new Date(diaAsistencia.value);
        // console.log("diaAsistencia: " + x);
        let asistenciaFecha = asistenciaAlumno.find(asistencia => asistencia.id_alumno === alumno.id && asistencia.id_aula === parseInt(selAulas.value) && asistencia.fecha === diaAsistencia.value);
        // console.log(asistenciaFecha);
        // }
        // console.log(alumno);
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
            // const btnPresentes = document.querySelectorAll(".btnPresente");
            let alumno = buscarAlumno(item.getAttribute('data-alumnoid'));
            // console.table(alumno);
            let asistenciaTexto = document.getElementById('id_asistencia' + item.getAttribute('data-alumnoid'));
            asistenciaTexto.innerHTML = 'Presente';
            asistencias = JSON.parse(window.localStorage.getItem('asistencias')) || [];
            asistenciaAlumno = asistencias.filter(asistencia => asistencia.id_alumno === parseInt(item.getAttribute('data-alumnoid')) && asistencia.id_aula === parseInt(selAulas.value) && asistencia.fecha === diaAsistencia.value);
            console.log("Dia asistencia: " + diaAsistencia.value);
            console.table(asistenciaAlumno.length);
            if(asistenciaAlumno.length > 0){
                console.log("IF");
                asistenciaAlumno.forEach((item) => {
                    console.table(item);
                    item.asistencia = "Presente";
                    // ACTUALIZO EL LOCALSTORAGE
                    window.localStorage.setItem('asistencias', JSON.stringify(asistencias));
                });
            }else{
                console.log("ELSE");
                asistencias.push(new Asistencia(parseInt(item.getAttribute('data-alumnoid')), parseInt(selAulas.value), "Presente", diaAsistencia.value));
                window.localStorage.setItem('asistencias', JSON.stringify(asistencias));
            }
            // console.log(asistenciaAlumno || "Vacio");
        });
    });

    btnAusentes = document.querySelectorAll(".btnAusente");    
    // AGREGO EVENTOS A LOS BOTONES DE AUSENTE
    btnAusentes.forEach((item) => {
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            
            let alumno = buscarAlumno(item.getAttribute('data-alumnoid'));
            // console.table(alumno);
            let asistenciaTexto = document.getElementById('id_asistencia' + item.getAttribute('data-alumnoid'));
            asistenciaTexto.innerHTML = 'Ausente';
            asistencias = JSON.parse(window.localStorage.getItem('asistencias')) || [];
            asistenciaAlumno = asistencias.filter(asistencia => asistencia.id_alumno === parseInt(item.getAttribute('data-alumnoid')) && asistencia.id_aula === parseInt(selAulas.value) && asistencia.fecha === diaAsistencia.value);
            console.log("Dia asistencia: " + diaAsistencia.value);
            console.table(asistenciaAlumno.length);
            if(asistenciaAlumno.length > 0){
                console.log("IF");
                asistenciaAlumno.forEach((item) => {
                    console.table(item);
                    item.asistencia = "Aussente";
                    // ACTUALIZO EL LOCALSTORAGE
                    window.localStorage.setItem('asistencias', JSON.stringify(asistencias));
                });
            }else{
                console.log("ELSE");
                asistencias.push(new Asistencia(parseInt(item.getAttribute('data-alumnoid')), parseInt(selAulas.value), "Ausente", diaAsistencia.value));
                window.localStorage.setItem('asistencias', JSON.stringify(asistencias));
            }
        });
    });
});



function limpiar(element){
    element.innerHTML = "";
}
// bodyAlumnos.innerHTML = html;
//
// const alumnos = [];
// alumnos.push(new Alumno(1, "Carlos", "Gomez", 30123123));
// alumnos.push(new Alumno(2, "Juan", "Perez", 30234234));
// alumnos.push(new Alumno(3, "Pedro", "Paéz", 30345345));
// alumnos.push(new Alumno(4, "Martina", "Rodriguez", 30456456));
// alumnos.push(new Alumno(5, "Julieta", "Martinez", 30567567));
// alumnos.push(new Alumno(6, "Paula", "Ortiz", 30678678));
// console.table(alumnos);
//
// const asistencias = [];
// alumnos.forEach((alumno) => {
//     asistencias.push(new Asistencia(alumno.id, "Ausente", new Date().toLocaleDateString()));
// });
// console.table(asistencias);

// let presentes = 0;
// let alumno = prompt(menu());
//
// while(alumno != 0){
//     asistencia(alumno, asistencias);
//     alumno = prompt(menu());
// }
//
// alert("Alumnos presentes: " + presentes);
// console.table(asistencias);
//
// function menu(){
//     let mainPrompt = `Ingrese el número de alumno para confirmar su asistencia del día ${ new Date().toLocaleDateString()}\n\n0 - PARA FINALIZAR\n`;
//     alumnos.forEach((item) => {
//         let alumnoAsistencia = asistencias.find((asistencia) => asistencia.id_alumno == item.id && asistencia.fecha == new Date().toLocaleDateString());
//         mainPrompt += `${item.id} - ${item.nombre} - ${alumnoAsistencia.asistencia}\n`;
//     });
//
//     return mainPrompt;
// }
//
// function asistencia(alumno, asistencias){
//     const buscarIndex = asistencias.findIndex((asistencia) => asistencia.id_alumno == alumno && asistencia.fecha == new Date().toLocaleDateString());
//
//     if(buscarIndex >= 0){
//         if(asistencias[buscarIndex].asistencia == "Ausente"){
//             asistencias[buscarIndex].asistencia = "Presente";
//             presentes++;
//         }
//     }else{
//         alert('El número ingresado no corresponde a ningún alumno');
//     }
// }
