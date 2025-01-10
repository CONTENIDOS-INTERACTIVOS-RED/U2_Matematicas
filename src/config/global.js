export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Introducción al álgebra',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      /*{
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },*/
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Álgebra',
      significado:
        'Rama de las matemáticas que utiliza letras, números y símbolos para representar relaciones y resolver problemas.',
    },
    {
      termino: 'Aplicación del álgebra',
      significado:
        'Uso práctico de conceptos algebraicos en situaciones reales, como resolver problemas de movimiento o calcular finanzas personales.',
    },
    {
      termino: 'Coeficiente',
      significado:
        'Número que multiplica una variable en una expresión algebraica. Por ejemplo, en 3x, el coeficiente es 3.',
    },
    {
      termino: 'Constante',
      significado:
        'Valor fijo que no cambia en una expresión o ecuación. Por ejemplo, en x + 5 = 7, el número 5 y el número 7 son constantes.',
    },
    {
      termino: 'Ecuación lineal',
      significado:
        'Expresión matemática en la que la variable aparece con exponente 1 y su gráfica es una línea recta. Ejemplo: 2x + 3 = 7',
    },
    {
      termino: 'Expresión algebraica',
      significado:
        'Combinación de números, variables y operaciones matemáticas, pero sin signo de igualdad. Ejemplo: 3x + 2',
    },
    {
      termino: 'Finanzas',
      significado:
        'Área que estudia la gestión del dinero, en la que el álgebra puede utilizarse para calcular intereses, presupuestos o ahorros.',
    },
    {
      termino: 'Incógnita',
      significado:
        'Variable cuyo valor se desconoce en una ecuación. Representa el elemento que se busca determinar.',
    },
    {
      termino: 'Movimiento',
      significado:
        'Cambio de posición de un objeto respecto al tiempo, donde el álgebra puede aplicarse para resolver problemas relacionados con velocidad, distancia o tiempo.',
    },
    {
      termino: 'Resolución de ecuaciones',
      significado:
        'Proceso de encontrar el valor de la incógnita que satisface una ecuación.',
    },
    {
      termino: 'Variable',
      significado:
        'Letra o símbolo que representa un número desconocido o que puede cambiar en una expresión o ecuación. Ejemplo: x o y',
    },
  ],
  complementario: [],
}
