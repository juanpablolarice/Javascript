let carlos = "Ausente";
let juan = "Ausente";
let pedro = "Ausente";
let martina = "Ausente";
let julieta = "Ausente";
let paula = "Ausente";
let presentes = 0;

let alumno = prompt(
    "Ingrese los alumnos presentes: \n 1- Carlos (" + carlos + ") \n 2- Juan (" + juan + ") \n 3- Pedro (" + pedro + ") \n 4- Martina (" + martina + ") \n 5- Julieta (" + julieta + ") \n 6- Paula (" + paula + ") \n 0- Para finalizar \n");
while(alumno != 0){
    switch (alumno) {
        case '1':
            carlos = asistencia(carlos);
            break;
        case '2':
            juan = asistencia(juan);            
            break;
        case '3':
            pedro = asistencia(pedro);            
            break;
        case '4':
            martina = asistencia(martina);
            break;
        case '5':
            julieta = asistencia(julieta);
            break;
        case '6':
            paula = asistencia(paula);
            break;
        default:
            alert("No corresponde a ningun alumno.");
    }

    alumno = prompt(
        "Ingrese los alumnos presentes: \n 1- Carlos (" + carlos + ") \n 2- Juan (" + juan + ") \n 3- Pedro (" + pedro + ") \n 4- Martina (" + martina + ") \n 5- Julieta (" + julieta + ") \n 6- Paula (" + paula + ") \n 0- Para finalizar \n");
}

alert("Alumnos presentes: " + presentes);

function asistencia(alumno){
    if(alumno=="Presente"){
        alert('Ese alumno ya tiene presente');
    }else{    
        presentes++;
    }
    return "Presente";
}