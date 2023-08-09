function videoPlay(id) {
    const urlSecreta = "https://platzisecreto.com/" + id;
    console.log("Se está reproduciendo desde la url" + urlSecreta);
};

function videoStop(id) {
    const urlSecreta = "https://platzisecreto.com/" + id;
    console.log("Pausamos la url" + urlSecreta);
};

export class PlatziClass{
    constructor({
        name, 
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    };

    reproducir() {
        videoPlay(this.videoID);
    };

    pausar() {
        videoStop(this.videoID);
    };
};

class Course {
    constructor({
        name,
        classes = [],
    }) {
        this._name = name;      // Añadir guion bajo para que no llamen al atributo name desde fuera
        this.classes = classes;
    };

    get name() {
        return this._name;
    };

    /*changename(nuevoNombre){
        this._name = nuevoNombre;
    };*/

    set name(nuevoNombre) {
        if (nuevoNombre === 'Curso Malito de Programación Básica'){
            console.error('Web... no');
          } else {
            this._name = nuevoNombre;
        };
    };
};

class learningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
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

const cursoProBasica = new Course({
    name: "Curso Gratis de Programacion Basica",
});

cursoProBasica.name;            //Decuelve el nombre "Curso Gratis de Programacion Basica"
//cursoProBasica.name = "";
//cursoProBasica.changename();

const cursoJS = new Course({
    name: 'Curso de JS',
});

const cursoReact = new Course({
    name: 'Curso de React',
});

const cursoNextJS = new Course({
    name: 'Curso Next JS',
});

const cursoPython = new Course({
    name: "Curso Python",
});

const cursoMatematicas = new Course({
    name: "Curso Matematicas",
});

const cursoExcel = new Course({
    name: "Curso Excel",
});

const introduccionVideojuegos = new Course({
    name: "Introduccion Videojuegos",
});

const cursoVideojuegos2D = new Course({
    name: "Curso Videojuegos 2D",
});

const cursoVideojuegos3D = new Course({
    name: "Curso Videojuegos 3D",
});

const escuelaDesarrolloWeb = new learningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoJS,
        cursoReact,
        cursoNextJS,
    ],
});

const escuelaData = new learningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoPython,
        cursoMatematicas,
        cursoExcel,
    ],
});

const escuelaVideoJuegos = new learningPath({
    name: "Escuela de Videojuegos",
    courses: [
        introduccionVideojuegos,
        cursoVideojuegos2D,
        cursoVideojuegos3D,
    ],
});

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