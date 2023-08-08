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

const escuelaDesarrolloWeb = new learningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        'Curso de JS',
        'Curso de React',
        'Curso Next JS',
    ],
});

const escuelaData = new learningPath({
    name: "Escuela de Data Science",
    courses: [
      "Curso Python",
      "Curso Matematicas",
      "Curso Excel",
    ],
});

const escuelaVideoJuegos = new learningPath({
    name: "Escuela de Videojuegos",
    courses: [
        "Introduccion Videojuegos",
        "Curso Videojuegos 2D",
        "Curso Videojuegos 3D",
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