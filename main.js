const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],

    /*aprobarCurso: function() {

    }*/

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
};

//Hacer que Natalia apruebe otro curso

//natalia.cursosAprobados.push("Curso de Responsive Design");


function Student (name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    /*this.aprobarCurso = function(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    };*/
};

Student.prototype.aprobarCurso = function(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
};

const Juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introduccion a la Produccion de VideoJuegos",
        "Curso de Creacion de Personajes",
    ],
);

//Prototipos con la sintaxis de clases

class Student2 {
    constructor({
        name,
        age, 
        email,
        cursosAprobados = [], 
    }) {
            this.name = name;
            this.age = age;
            this.email = email;
            this.cursosAprobados = cursosAprobados;

        /*this.aprobarCurso = function(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    };*/
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    };
};

const jimena = new Student2({
    name: "Jimena",
    age:  35,
    cursosAprobados: [
        "Curso de Analisis de Negocio para Ciencia de Datos",
        "Curso de Pricipios de Visualizacion de Datos para BI",

     ],
     email: "jimena@gmail.com.es",
});