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

const barbie = {
    name: "Cindy",
    username: "bi",
    points: 100,
    socialMedia: {
        twiter: "barbieCindy",
        instagram: "barbieCindy",
        facebook: "undefined",
    },
    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    learningPath: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Practico de HTML y CSS",
                "Curso de Responsive Design",
                "Curso de sistema de Diseño",
            ],
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso Introduccion a la Produccion de Videojuegos",
                "Curso de Unreal Engine",
                "Curso de Unity en 3D",
            ],
        },
    ],
};

const manga = {                            //Forma de crear con objetos literales
    name: "Naruto",
    username: "Naru",
    points: 99,
    socialMedia: {
        twiter: "mangaNaru",
        instagram: "mangaNaru",
        facebook: "undefined",
    },
    approvedCourses: [
        "Curso Data Bussines",
        "Curso DataViz",
    ],
    learningPath: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Practico de HTML y CSS",
                "Curso de Responsive Design",
                "Curso de sistema de Diseño",
            ],
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso Data Bussines",
                "Curso DataViz",
                "Curso de Tableu",
            ],
        },
    ],
};


class student {
    constructor({
        name,
        email,
        username,
        twiter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPath = [],
    }) 
    {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twiter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    }
};

//Crear las instancias

const juan = new student({
    name: "JuanDC",
    username: "juandc",
    email: "juan@gmail.com",
    twiter: "fjuandc",
    learningPath: [
        escuelaDesarrolloWeb,
        escuelaVideoJuegos,
    ],
});

const ana = new student({
    name: "Ana",
    username: "ana",
    email: "ana@gmail.com",
    instagram: "tana",
    learningPath: [
        escuelaDesarrolloWeb,
        escuelaData,
    ],
});

class learningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
};

const escuelaDesarrolloWeb = new learningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoJS,
    cursoReact,
    cursoNextJS,
    ],
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      cursoPython,
      CursoMatematicas,
      CursoExcel,
    ],
  });

const escuelaVideoJuegos = new learningPath({
    name: "Escuela de Videojuegos",
    courses: [
        IntroduccionVideojuegos,
        CursoVideojuegos2D,
        CursoVideojuegos3D,
    ],
});