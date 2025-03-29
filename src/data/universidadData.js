// Archivo: src/data/universidadData.js
// Este archivo contiene los datos de las carreras y materias de la Universidad O&M

const universidadData = {
    nombreUniversidad: "Universidad O&M",
    carreras: [
      {
        id: 1,
        nombre: "Ingeniería en Sistemas",
        descripcion: "Formación en desarrollo de software, redes y gestión de sistemas informáticos.",
        duracion: "4 años",
        totalCreditos: 180,
        materias: [
          // Semestre 1
          {
            id: 101,
            nombre: "Introducción a la Programación",
            codigo: "SIS-101",
            creditos: 4,
            semestre: 1,
            prerrequisitos: []
          },
          {
            id: 102,
            nombre: "Matemática para Ingeniería",
            codigo: "MAT-101",
            creditos: 4,
            semestre: 1,
            prerrequisitos: []
          },
          {
            id: 103,
            nombre: "Fundamentos de Computación",
            codigo: "SIS-102",
            creditos: 3,
            semestre: 1,
            prerrequisitos: []
          },
          {
            id: 104,
            nombre: "Comunicación Técnica",
            codigo: "COM-101",
            creditos: 2,
            semestre: 1,
            prerrequisitos: []
          },
          {
            id: 105,
            nombre: "Inglés Técnico I",
            codigo: "IDI-101",
            creditos: 3,
            semestre: 1,
            prerrequisitos: []
          },
          
          // Semestre 2
          {
            id: 106,
            nombre: "Algoritmos y Estructuras de Datos",
            codigo: "SIS-201",
            creditos: 4,
            semestre: 2,
            prerrequisitos: ["SIS-101"]
          },
          {
            id: 107,
            nombre: "Álgebra Lineal",
            codigo: "MAT-201",
            creditos: 3,
            semestre: 2,
            prerrequisitos: ["MAT-101"]
          },
          {
            id: 108,
            nombre: "Arquitectura de Computadoras",
            codigo: "SIS-202",
            creditos: 3,
            semestre: 2,
            prerrequisitos: ["SIS-102"]
          },
          {
            id: 109,
            nombre: "Física para Ingeniería",
            codigo: "FIS-201",
            creditos: 4,
            semestre: 2,
            prerrequisitos: ["MAT-101"]
          },
          {
            id: 110,
            nombre: "Inglés Técnico II",
            codigo: "IDI-201",
            creditos: 3,
            semestre: 2,
            prerrequisitos: ["IDI-101"]
          },
          
          // Semestre 3
          {
            id: 111,
            nombre: "Programación Orientada a Objetos",
            codigo: "SIS-301",
            creditos: 4,
            semestre: 3,
            prerrequisitos: ["SIS-201"]
          },
          {
            id: 112,
            nombre: "Bases de Datos",
            codigo: "SIS-302",
            creditos: 4,
            semestre: 3,
            prerrequisitos: ["SIS-201"]
          },
          {
            id: 113,
            nombre: "Sistemas Operativos",
            codigo: "SIS-303",
            creditos: 3,
            semestre: 3,
            prerrequisitos: ["SIS-202"]
          },
          {
            id: 114,
            nombre: "Estadística para Ingeniería",
            codigo: "MAT-301",
            creditos: 3,
            semestre: 3,
            prerrequisitos: ["MAT-201"]
          },
          {
            id: 115,
            nombre: "Desarrollo Web",
            codigo: "SIS-304",
            creditos: 4,
            semestre: 3,
            prerrequisitos: ["SIS-201"]
          }
        ]
      },
      {
        id: 2,
        nombre: "Ingeniería Industrial",
        descripcion: "Optimización de procesos, gestión de calidad y eficiencia en sistemas industriales.",
        duracion: "4 años",
        totalCreditos: 185,
        materias: [
          // Semestre 1
          {
            id: 201,
            nombre: "Introducción a la Ingeniería Industrial",
            codigo: "IND-101",
            creditos: 3,
            semestre: 1,
            prerrequisitos: []
          },
          {
            id: 202,
            nombre: "Cálculo Diferencial",
            codigo: "MAT-102",
            creditos: 4,
            semestre: 1,
            prerrequisitos: []
          },
          {
            id: 203,
            nombre: "Dibujo Técnico",
            codigo: "IND-102",
            creditos: 3,
            semestre: 1,
            prerrequisitos: []
          },
          {
            id: 204,
            nombre: "Química General",
            codigo: "QUI-101",
            creditos: 4,
            semestre: 1,
            prerrequisitos: []
          },
          {
            id: 205,
            nombre: "Comunicación Efectiva",
            codigo: "COM-102",
            creditos: 2,
            semestre: 1,
            prerrequisitos: []
          },
          
          // Semestre 2
          {
            id: 206,
            nombre: "Cálculo Integral",
            codigo: "MAT-202",
            creditos: 4,
            semestre: 2,
            prerrequisitos: ["MAT-102"]
          },
          {
            id: 207,
            nombre: "Física Mecánica",
            codigo: "FIS-102",
            creditos: 4,
            semestre: 2,
            prerrequisitos: ["MAT-102"]
          },
          {
            id: 208,
            nombre: "Materiales de Ingeniería",
            codigo: "IND-201",
            creditos: 3,
            semestre: 2,
            prerrequisitos: ["QUI-101"]
          },
          {
            id: 209,
            nombre: "Estadística Industrial",
            codigo: "IND-202",
            creditos: 3,
            semestre: 2,
            prerrequisitos: ["MAT-102"]
          },
          {
            id: 210,
            nombre: "Economía para Ingenieros",
            codigo: "ECO-201",
            creditos: 3,
            semestre: 2,
            prerrequisitos: []
          },
          
          // Semestre 3
          {
            id: 211,
            nombre: "Procesos de Manufactura",
            codigo: "IND-301",
            creditos: 4,
            semestre: 3,
            prerrequisitos: ["IND-201"]
          },
          {
            id: 212,
            nombre: "Investigación de Operaciones",
            codigo: "IND-302",
            creditos: 4,
            semestre: 3,
            prerrequisitos: ["MAT-202", "IND-202"]
          },
          {
            id: 213,
            nombre: "Termodinámica",
            codigo: "IND-303",
            creditos: 3,
            semestre: 3,
            prerrequisitos: ["FIS-102"]
          },
          {
            id: 214,
            nombre: "Seguridad Industrial",
            codigo: "IND-304",
            creditos: 3,
            semestre: 3,
            prerrequisitos: ["IND-201"]
          },
          {
            id: 215,
            nombre: "Contabilidad para Ingenieros",
            codigo: "CON-301",
            creditos: 3,
            semestre: 3,
            prerrequisitos: ["ECO-201"]
          }
        ]
      },
      {
        id: 3,
        nombre: "Arquitectura",
        descripcion: "Diseño de espacios, construcción sostenible y planificación urbana.",
        duracion: "5 años",
        totalCreditos: 210,
        materias: [
          // Semestre 1
          {
            id: 301,
            nombre: "Diseño Arquitectónico I",
            codigo: "ARQ-101",
            creditos: 4,
            semestre: 1,
            prerrequisitos: []
          },
          {
            id: 302,
            nombre: "Dibujo Arquitectónico",
            codigo: "ARQ-102",
            creditos: 3,
            semestre: 1,
            prerrequisitos: []
          },
          {
            id: 303,
            nombre: "Historia de la Arquitectura I",
            codigo: "ARQ-103",
            creditos: 3,
            semestre: 1,
            prerrequisitos: []
          },
          {
            id: 304,
            nombre: "Matemáticas para Arquitectura",
            codigo: "MAT-103",
            creditos: 3,
            semestre: 1,
            prerrequisitos: []
          },
          {
            id: 305,
            nombre: "Introducción a la Construcción",
            codigo: "ARQ-104",
            creditos: 3,
            semestre: 1,
            prerrequisitos: []
          },
          
          // Semestre 2
          {
            id: 306,
            nombre: "Diseño Arquitectónico II",
            codigo: "ARQ-201",
            creditos: 4,
            semestre: 2,
            prerrequisitos: ["ARQ-101"]
          },
          {
            id: 307,
            nombre: "Historia de la Arquitectura II",
            codigo: "ARQ-202",
            creditos: 3,
            semestre: 2,
            prerrequisitos: ["ARQ-103"]
          },
          {
            id: 308,
            nombre: "Materiales de Construcción",
            codigo: "ARQ-203",
            creditos: 3,
            semestre: 2,
            prerrequisitos: ["ARQ-104"]
          },
          {
            id: 309,
            nombre: "Estructuras I",
            codigo: "ARQ-204",
            creditos: 4,
            semestre: 2,
            prerrequisitos: ["MAT-103"]
          },
          {
            id: 310,
            nombre: "Tecnología Digital para Arquitectura",
            codigo: "ARQ-205",
            creditos: 3,
            semestre: 2,
            prerrequisitos: ["ARQ-102"]
          },
          
          // Semestre 3
          {
            id: 311,
            nombre: "Diseño Arquitectónico III",
            codigo: "ARQ-301",
            creditos: 4,
            semestre: 3,
            prerrequisitos: ["ARQ-201"]
          },
          {
            id: 312,
            nombre: "Construcción I",
            codigo: "ARQ-302",
            creditos: 4,
            semestre: 3,
            prerrequisitos: ["ARQ-203"]
          },
          {
            id: 313,
            nombre: "Estructuras II",
            codigo: "ARQ-303",
            creditos: 4,
            semestre: 3,
            prerrequisitos: ["ARQ-204"]
          },
          {
            id: 314,
            nombre: "Historia de la Arquitectura III",
            codigo: "ARQ-304",
            creditos: 3,
            semestre: 3,
            prerrequisitos: ["ARQ-202"]
          },
          {
            id: 315,
            nombre: "Diseño Urbano",
            codigo: "ARQ-305",
            creditos: 3,
            semestre: 3,
            prerrequisitos: ["ARQ-201"]
          }
        ]
      },
      {
        id: 4,
        nombre: "Contabilidad",
        descripcion: "Formación en área contable, financiera y fiscal para empresas y organizaciones.",
        duracion: "4 años",
        totalCreditos: 170,
        materias: [
          // Semestre 1
          {
            id: 401,
            nombre: "Contabilidad Básica",
            codigo: "CON-101",
            creditos: 4,
            semestre: 1,
            prerrequisitos: []
          },
          {
            id: 402,
            nombre: "Matemática Financiera",
            codigo: "MAT-104",
            creditos: 3,
            semestre: 1,
            prerrequisitos: []
          },
          {
            id: 403,
            nombre: "Introducción a la Economía",
            codigo: "ECO-101",
            creditos: 3,
            semestre: 1,
            prerrequisitos: []
          },
          {
            id: 404,
            nombre: "Derecho Empresarial",
            codigo: "DER-101",
            creditos: 3,
            semestre: 1,
            prerrequisitos: []
          },
          {
            id: 405,
            nombre: "Comunicación Empresarial",
            codigo: "COM-103",
            creditos: 2,
            semestre: 1,
            prerrequisitos: []
          },
          
          // Semestre 2
          {
            id: 406,
            nombre: "Contabilidad Intermedia",
            codigo: "CON-201",
            creditos: 4,
            semestre: 2,
            prerrequisitos: ["CON-101"]
          },
          {
            id: 407,
            nombre: "Microeconomía",
            codigo: "ECO-201",
            creditos: 3,
            semestre: 2,
            prerrequisitos: ["ECO-101"]
          },
          {
            id: 408,
            nombre: "Estadística para Negocios",
            codigo: "EST-201",
            creditos: 3,
            semestre: 2,
            prerrequisitos: ["MAT-104"]
          },
          {
            id: 409,
            nombre: "Sistemas de Información Contable",
            codigo: "CON-202",
            creditos: 3,
            semestre: 2,
            prerrequisitos: ["CON-101"]
          },
          {
            id: 410,
            nombre: "Derecho Fiscal",
            codigo: "DER-201",
            creditos: 3,
            semestre: 2,
            prerrequisitos: ["DER-101"]
          },
          
          // Semestre 3
          {
            id: 411,
            nombre: "Contabilidad Avanzada",
            codigo: "CON-301",
            creditos: 4,
            semestre: 3,
            prerrequisitos: ["CON-201"]
          },
          {
            id: 412,
            nombre: "Impuestos I",
            codigo: "CON-302",
            creditos: 4,
            semestre: 3,
            prerrequisitos: ["CON-201", "DER-201"]
          },
          {
            id: 413,
            nombre: "Finanzas Corporativas",
            codigo: "FIN-301",
            creditos: 3,
            semestre: 3,
            prerrequisitos: ["CON-201", "ECO-201"]
          },
          {
            id: 414,
            nombre: "Auditoría I",
            codigo: "CON-303",
            creditos: 4,
            semestre: 3,
            prerrequisitos: ["CON-201"]
          },
          {
            id: 415,
            nombre: "Contabilidad de Costos",
            codigo: "CON-304",
            creditos: 3,
            semestre: 3,
            prerrequisitos: ["CON-201"]
          }
        ]
      }
    ]
  };
  
  export default universidadData;