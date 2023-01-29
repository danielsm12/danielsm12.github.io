

function numeroAlAzar(limite){
        return Math.floor(Math.random() * (limite + 1))

};

function estadoCivilPersona(numero){
        if (numero <= 0) {return "Soltero/a"}
        else if (numero == 1) {return "Viudo/a"}
        else if (numero == 2) {return "Divorciado/a"}
        else {return "Casado/a"};
};

function nacionalidadEspanol(nacionality){
        if (nacionality == "ES") { return "Española"}
        else if (nacionality == "MX") { return "Mexicana"}
}

function paisEspanol(pais){
        if (pais == "Spain") { return "España"}
        else if (pais == "Mexico") { return "México"}
}

function nombreEscPrimaria(pais){
        if (pais == "Spain") { return "Colegio de Educación Infantil y Primaria (CEIP) José de Echegaray"}
        else if (pais == "Mexico") { return "Escuela Primaria Benito Juárez"}
}

function nombreEscSecundaria(pais){
        if (pais == "Spain") { return "IES Joaquín Turina"}
        else if (pais == "Mexico") { return "Escuela Secundaria N° 46 'José Vasconcelos'"}
}


async function nuevaPersona(){
        let resultado = await fetch("https://randomuser.me/api/?nat=es,mx")
        .then(response => response.json())
        .then(data => data)
        console.log(resultado.results[0].name.title + " "+
                     resultado.results[0].name.first + " "+
                     resultado.results[0].name.last)
                     const nombres = document.getElementById("nombres").innerHTML = resultado.results[0].name.first;
                     const apellidos = document.getElementById("apellidos").innerHTML = resultado.results[0].name.last;
                     const dni = document.getElementById("dni").innerHTML = resultado.results[0].id.name + " " + resultado.results[0].id.value;
                     const direccion = document.getElementById("direccion").innerHTML = resultado.results[0].location.street.name + " " + resultado.results[0].location.street.number + ", " 
                     + resultado.results[0].location.city + ", " + resultado.results[0].location.state + ", " + paisEspanol(resultado.results[0].location.country) ;
                     const edad = document.getElementById("edad").innerHTML = resultado.results[0].dob.age + " años";
                     const fecha_nacimiento = document.getElementById("fecha_nacimiento").innerHTML = resultado.results[0].dob.date.slice(0, 10);
                     const nacionalidad = document.getElementById("nacionalidad").innerHTML = nacionalidadEspanol(resultado.results[0].nat) ;
                     const hijos = document.getElementById("hijos").innerHTML = String(numeroAlAzar(4));
                     const estado_civil = document.getElementById("estado_civil").innerHTML = estadoCivilPersona(numeroAlAzar(3));
                     const foto = document.getElementById("foto_perfil").src = resultado.results[0].picture.large;
                     const celular = document.getElementById("celular").setAttribute("href","tel:" + resultado.results[0].cell);
                     const email = document.getElementById("email").setAttribute("href","mailto:" + resultado.results[0].email);
                     const es_primaria = document.getElementById("primar").innerHTML = nombreEscPrimaria(resultado.results[0].location.country);
                     const es_secundaria = document.getElementById("secund").innerHTML = nombreEscSecundaria(resultado.results[0].location.country);


                     
}

nuevaPersona();

ajustarTabla();

function ajustarTabla(){
        if (screen.width <= 345){
                document.getElementById("tabla_experiencia").style.fontSize = "smaller"
        }
}

function ajustarFuente(){
        if (screen.width > 1000){
                document.getElementById("datos_personales").style.fontSize = "larger"
                document.getElementById("estudios").style.fontSize = "larger"
                document.getElementById("exp_laboral").style.fontSize = "larger"
                document.getElementById("contacto").style.fontSize = "larger"
                document.getElementById("titular1").style.fontSize = "200%"
                document.getElementById("titular2").style.fontSize = "200%"
                document.getElementById("titular3").style.fontSize = "200%"
                document.getElementById("titular4").style.fontSize = "200%"
        }
}

ajustarFuente();

