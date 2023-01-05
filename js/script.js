class Alumno {
    constructor (id, nombre, apellido, documento) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
    }
}

class Asistencia {
    constructor (id_alumno, asistencia, fecha) {
        // this.id = id;
        this.id_alumno = id_alumno;
        this.asistencia = asistencia;
        this.fecha = fecha;
    }
}

const alumnos = [];
alumnos.push(new Alumno(1, "Carlos", "Gomez", 30123123));
alumnos.push(new Alumno(2, "Juan", "Perez", 30234234));
alumnos.push(new Alumno(3, "Pedro", "Paéz", 30345345));
alumnos.push(new Alumno(4, "Martina", "Rodriguez", 30456456));
alumnos.push(new Alumno(5, "Julieta", "Martinez", 30567567));
alumnos.push(new Alumno(6, "Paula", "Ortiz", 30678678));
console.table(alumnos);

const asistencias = [];
alumnos.forEach((alumno) => {
    asistencias.push(new Asistencia(alumno.id, "Ausente", new Date().toLocaleDateString()));
});
console.table(asistencias);

let presentes = 0;
let alumno = prompt(menu());

while(alumno != 0){
    asistencia(alumno, asistencias);
    alumno = prompt(menu());
}

alert("Alumnos presentes: " + presentes);
console.table(asistencias);

function menu(){
    let mainPrompt = `Ingrese el número de alumno para confirmar su asistencia del día ${ new Date().toLocaleDateString()}\n\n0 - PARA FINALIZAR\n`;
    alumnos.forEach((item) => {
        let alumnoAsistencia = asistencias.find((asistencia) => asistencia.id_alumno == item.id && asistencia.fecha == new Date().toLocaleDateString());
        mainPrompt += `${item.id} - ${item.nombre} - ${alumnoAsistencia.asistencia}\n`;
    });

    return mainPrompt;
}

function asistencia(alumno, asistencias){
    const buscarIndex = asistencias.findIndex((asistencia) => asistencia.id_alumno == alumno && asistencia.fecha == new Date().toLocaleDateString());

    if(buscarIndex >= 0){
        if(asistencias[buscarIndex].asistencia == "Ausente"){
            asistencias[buscarIndex].asistencia = "Presente";
            presentes++;
        }
    }else{
        alert('El número ingresado no corresponde a ningún alumno');
    }
}
