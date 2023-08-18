export default {
  global: {
    componenteFormativo: 'Calidad del agua potable',
    descripcionCurso:
      'Teniendo en cuenta que un proceso de potabilización de agua se realiza usualmente para que sea apta para consumo humano, se debe garantizar que los procesos establecidos en la planta de tratamiento de agua potable cumplan con su función, y que los parámetros fisicoquímicos y microbiológicos del agua se encuentren acorde a la normatividad legal vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Monitorear la calidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis de muestras de agua potable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estudios de tratabilidad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ensayos de laboratorio',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Ensayos microbiológicos',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/anexos.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Monitorear la calidad',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2020. Práctica de laboratorio el muestreo de agua potable para análisis microbiológico. Centro de gestión industrial (CGI).',
      tipo: 'Ejemplo práctica de laboratorio',
      descarga:
        'downloads/PRACTICA_MUESTREO_DE_AGUAS_PARA_ANALISIS_MICROBIOLOGICO.pdf',
    },
    {
      tema: 'Análisis de muestras de agua potable',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2017. Instructivo para el ensayo de test de jarras. Centro de gestión industrial (CGI).',
      tipo: 'Ejemplo práctica de laboratorio',
      descarga: 'downloads/PRACTICA_DE_TEST_DE_JARRAS.pdf',
    },
    {
      tema: 'Análisis de muestras de agua potable',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2019. Práctica de laboratorio determinación de acidez en agua. Centro de gestión industrial (CGI).',
      tipo: 'Ejemplo práctica de laboratorio',
      descarga:
        'downloads/PRACTICA_DE_LABORATORIO_DETERMINACION_DE_ACIDEZ_EN_AGUA.pdf',
    },
    {
      tema: 'Análisis de muestras de agua potable',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2019. Práctica de laboratorio determinación de alcalinidad en agua. Centro de gestión industrial (CGI).',
      tipo: 'Ejemplo práctica de laboratorio',
      descarga: 'downloads/PRACTICA_DETERMINACION_DE_ALCALINIDAD_EN_AGUA.pdf',
    },
    {
      tema: 'Análisis de muestras de agua potable',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2019. Práctica de laboratorio determinación de cloruros en agua. Centro de gestión industrial (CGI).',
      tipo: 'Ejemplo práctica de laboratorio',
      descarga: 'downloads/Practica_DETERMINACION_DE_CLORUROS_EN_AGUA.pdf',
    },
    {
      tema: 'Análisis de muestras de agua potable',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2019. Práctica de laboratorio determinación de cloro residual en agua. Centro de gestión industrial (CGI).',
      tipo: 'Ejemplo práctica de laboratorio',
      descarga:
        'downloads/PRACTICA_DETERMINACION_DE_CLORO_RESIDUAL_EN_AGUA.pdf',
    },
    {
      tema: 'Análisis de muestras de agua potable',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2019. Práctica de laboratorio determinación de conductividad en agua. Centro de gestión industrial (CGI).',
      tipo: 'Ejemplo práctica de laboratorio',
      descarga: 'downloads/Practica_DETERMINACION_DE_CONDUCTIVIDAD_EN_AGUA.pdf',
    },
    {
      tema: 'Análisis de muestras de agua potable',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2019. Práctica de laboratorio determinación de dureza en agua. Centro de gestión industrial (CGI).',
      tipo: 'Ejemplo práctica de laboratorio',
      descarga: 'downloads/PRACTICA_DETERMINACION_DE_DUREZA_TOTAL_EN_AGUA.pdf',
    },
    {
      tema: 'Análisis de muestras de agua potable',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2019. Práctica de laboratorio determinación de demanda química de oxígeno. Centro de gestión industrial (CGI).',
      tipo: 'Ejemplo práctica de laboratorio',
      descarga:
        'downloads/PRACTICA_DETERMINACION_DE_DEMANDA_QUIMICA_DE_OXIGENO_(DQO)_EN_AGUA.pdf',
    },
    {
      tema: 'Análisis de muestras de agua potable',
      referencia:
        'Servicio nacional de aprendizaje (SENA). 2020. Determinación de mesófilos, coliformes, y e.coli en agua potable mediante filtración por membrana. centro de gestión industrial (CGI).',
      tipo: 'Ejemplo práctica de laboratorio',
      descarga:
        'downloads/PRACTICA_DE_LABORATORIO_FILTRACION_POR_MEMBRANA_COLIFORMES.pdf',
    },
    {
      tema: 'Análisis de muestras de agua potable',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2020. Práctica de laboratorio preparación de medios de cultivo para análisis microbiológico. Centro de gestión industrial (CGI).',
      tipo: 'Ejemplo práctica de laboratorio',
      descarga: 'downloads/PRACTICA_PREPARACION_DE_MEDIOS_DE_CULTIVO.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ablandamiento',
      significado:
        'remoción de la dureza (calcio y/o magnesio) del agua (Ministerio de Desarrollo Económico.2010. p. 31).',
    },
    {
      termino: 'Alcalinidad',
      significado:
        'capacidad del agua para neutralizar los ácidos. Esta capacidad se origina en el contenido de carbonatos (CO32-), bicarbonatos (HCO3-), hidróxidos (OH-) y ocasionalmente boratos, silicatos y fosfatos. La alcalinidad se expresa en miligramos por litro de equivalente de carbonato de calcio (CaCO3) (Ministerio de Desarrollo Económico.2010. p. 31).',
    },
    {
      termino: 'Análisis físico y químico del agua',
      significado:
        'son aquellos procedimientos de laboratorio que se efectúan a una muestra de agua para evaluar sus características físicas, químicas o ambas (Ministerio de Desarrollo Económico.2010. p. 32).',
    },
    {
      termino: 'Análisis microbiológico del agua',
      significado:
        'son los procedimientos de laboratorio que se efectúan a una muestra de agua para consumo humano para evaluar la presencia o ausencia, tipo y cantidad de microorganismos (Ministerio de Desarrollo Económico.2010. p. 32).',
    },
    {
      termino: 'Calidad del agua',
      significado:
        'es el resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua, con el contenido de las normas que regulan la materia (Ministerio de Desarrollo Económico.2010. p. 32).',
    },
    {
      termino: 'Dosificación',
      significado:
        'acción mediante la cual se suministra una sustancia química al agua (Ministerio de Desarrollo Económico.2010. p. 33).',
    },
    {
      termino: 'Muestra compuesta de agua',
      significado:
        'integración de muestras puntuales tomadas a intervalos programados y por períodos determinados, preparadas a partir de mezclas de volúmenes iguales o proporcionales al flujo durante el periodo de toma de muestras (Ministerio de Desarrollo Económico.2010. p. 34)',
    },
    {
      termino: 'Muestra puntual de agua',
      significado:
        'muestra tomada en un punto o lugar en un momento determinado (Ministerio de Desarrollo Económico.2010. p. 36).',
    },
    {
      termino: 'Prueba de jarras',
      significado:
        'ensayo de laboratorio que simula las condiciones en que se realizan los procesos de oxidación química, coagulación, floculación y sedimentación en la planta (Ministerio de Desarrollo Económico.2010. p. 40).',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto nacional de salud [INS]. (2011). Manual de instrucciones para la toma, preservación, transporte de muestras de agua para consumo humano para análisis de laboratorio. ISBN 978-958-13-0147-8.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Desarrollo Económico. (2010). Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico [RAS]. título C: Sistema de potabilización.',
      link: '',
    },
    {
      referencia:
        'Resolución 2115 de 2007. [Ministerio de Protección Social [MPS] y Ministerio de Ambiente Vivienda y Desarrollo Territorial [MAVDT]. “Por medio del cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano. 22 de junio de 2007.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2017. Instructivo para el ensayo de test de jarras. Centro de gestión industrial (CGI).',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2019. Práctica de laboratorio determinación de acidez en agua. Centro de gestión industrial (CGI).',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2019. Práctica de laboratorio determinación de alcalinidad en agua. Centro de gestión industrial (CGI).',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2019. Práctica de laboratorio determinación de cloro residual en agua. Centro de gestión industrial (CGI).',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2019. Práctica de laboratorio determinación de conductividad en agua. Centro de gestión industrial (CGI).',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2019. Práctica de laboratorio determinación de dureza en agua. Centro de gestión industrial (CGI).',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2019. Práctica de laboratorio determinación de demanda química de oxígeno. Centro de gestión industrial (CGI).',
      link: '',
    },
    {
      referencia:
        'Servicio nacional de aprendizaje (SENA). 2020. Determinación de mesófilos, coliformes,y e.coli en agua potable mediante filtración por membrana. centro de gestión industrial (CGI).',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2020. Práctica de laboratorio preparación de medios de cultivo para análisis microbiológico. Centro de gestión industrial (CGI).',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2020. Práctica de laboratorio el muestreo de agua potable para análisis microbiológico. Centro de gestión industrial (CGI).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gloria Lida Álzate Suarez',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora Ambienta',
          centro: 'Regional Distrito Capital - Centro de gestión industrial',
        },
        {
          nombre: 'Jesús Ricardo Arias Munévar',
          cargo: 'Instructor Ambiental',
          centro: 'Regional Distrito Capital - Centro de gestión industrial',
        },
        {
          nombre: 'Javier Ricardo Luna Pineda',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital- Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisión Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro:
            'Regional Distrito Capital- Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmín Rocío Figueroa Pacheco',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
