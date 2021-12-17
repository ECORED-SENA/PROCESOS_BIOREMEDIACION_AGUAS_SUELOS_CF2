export default {
  global: {
    componenteFormativo: 'Aplicación de procesos de biorremediación',
    descripcionCurso:
      'El conocimiento de las sustancias contaminantes, de los elementos del ambiente que se pueden ver afectados por dichas sustancias y de las alternativas de solución existentes es la combinación perfecta para lograr realizar un buen diagnóstico del problema a resolver y realizar una buena identificación de la alternativa de solución óptima que permita que los procesos de biorremediación sean exitosos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal2.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Factores ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Factores abióticos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Factores bióticos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Identificación de problemáticas ambientales',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Residuos peligrosos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Generalidades de residuos peligrosos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Pruebas para determinación de peligrosidad de residuos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tratamiento y disposición final de residuos peligrosos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Procesos de biorremediación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Atenuación natural',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Bioestimulación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Bioaumentación',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Otros procesos de biorremediación',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Fitorremediación',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Micorremediación y ficorremediación',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Humedales artificiales',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Definición de alternativa de biorremediación para un suelo o agua contaminada',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Arrieta, M., Valencia, Y. y Echeverri, O. (2012). Aplicación de la biomineralización en suelos de la ciudad de Medellín para mitigar procesos erosivos. Universidad Nacional de Colombia.',
    },
    {
      referencia:
        'Covarrubias, S., García, J. y Peña, J. (2015). El papel de los microorganismos en la biorremediación de suelos contaminados con metales pesados. Acta Universitaria, 25(3), p. 40-45. ',
      link: 'https://www.redalyc.org/articulo.oa?id=41648311004',
    },
    {
      referencia: 'Emgrisa. (2017). Técnica de remediación: Alto Vacío. ',
      link:
        'https://www.emgrisa.es/publicaciones/tecnica-de-remediacion-alto-vacio/',
    },
    {
      referencia:
        'Fabelo, J. (2017). Propuesta de metodología para la recuperación de suelos contaminados. Centro Azúcar, 44(1), p. 53-60. ',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S2223-48612017000100006&lng=es&tlng=es',
    },
    {
      referencia:
        'Instituto Nacional de Ecología y Cambio Climático [INECC]. (2007). Tecnologías de remediación biológicas (Biorremediación).',
      link: 'http://www2.inecc.gob.mx/publicaciones2/libros/372/tecnolog.html',
    },
    {
      referencia:
        'Mejía, G. (2015). Aproximación teórica a la biosorción de metales pesados por medio de microorganismos. CES Medicina Veterinaria y Zootecnia, 1(1), 77–99. ',
      link: 'https://revistas.ces.edu.co/index.php/mvz/article/view/210',
    },
    {
      referencia: 'Miguel, C. (2012). Los humedales artificiales. iagua. ',
      link:
        'https://www.iagua.es/blogs/carolina-miguel/los-humedales-artificiales-componentes-y-tipos',
    },
    {
      referencia:
        'Muskus, A., Santoyo, C. y Plata, L. (2013). Evaluación de las técnicas de atenuación natural, bioventing, bioaumentación y bioaumentación- bioventing, para la biodegradación de diésel en un suelo arenoso, en experimentos en columna. Universidad Nacional de Colombia.',
    },
    {
      referencia:
        'Pino, N., Carvajal, S., Gallo, A. y Peñuela, G. (2012). Comparación entre bioestimulación y bioaumentación para la recuperación de suelos contaminados con diésel. Producción + Limpia, 7(1), p. 101-108. ',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S1909-04552012000100010&lng=en&tlng=es',
    },
    {
      referencia:
        'Ramírez, O. (2015). Identificación de problemáticas ambientales en Colombia a partir de la percepción social de estudiantes universitarios localizados en diferentes zonas del país. Revista internacional de contaminación ambiental, 31(3), p. 293-310. ',
      link:
        'http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0188-49992015000300009&lng=es&tlng=es',
    },
    {
      referencia:
        'Sánchez, J. y Rodríguez, J. (2003). Biorremediación. Fundamentos y aspectos microbiológicos. Revista Industria y Minería, 351, p. 12-16. ',
      link:
        'https://studylib.es/doc/4823291/biorremediaci%C3%B3n.fundamentos-y-aspectos-microbiol%C3%B3gicos',
    },
    {
      referencia:
        'Singleton, I. (1994). “Microbial metabolism of xenobiotics: fundamental and applied research”. Journal of Chemical Technology and Biotechnology, 59(1), p. 9-23.',
    },
  ],
  glosario: [
    {
      termino: 'Bioensayo de toxicidad',
      significado:
        'Prueba que permite determinar la magnitud y la naturaleza del efecto que producirá una sustancia contaminante sobre los organismos expuestos a ella bajo ciertas condiciones. ',
    },
    {
      termino: '<em>Bioslurping</em>',
      significado:
        'También es conocida como extracción por alto vacío (<em>high vacuum extraction</em>), extracción multifase (MPE) o <em>Dual Phase Extraction</em> (DPE); es una técnica de remediación <em>in situ</em> de cuerpos de agua afectados por contaminantes ligeros, que permite la extracción simultánea de líquido y vapor o gas. Se recomienda el uso de esta técnica en puntos en los que el agua subterránea tenga una profundidad menor a 10 metros. ',
    },
    {
      termino: '<em>Biosparging</em>',
      significado:
        'Tecnología de remediación <em>in situ</em> que consiste en la biodegradación de componentes orgánicos en la zona saturada mediante la inyección de aire y nutrientes, lo que mejora la eficiencia metabólica de los microorganismos de la zona; se utiliza para remediar problemas de derrames de hidrocarburos. Tiene similitud con las técnicas de burbujeo de aire, con la diferencia que esta técnica no solo volatiliza las sustancias, sino que las degrada.',
    },
    {
      termino: '<em>Bioventing</em>',
      significado:
        'Método de utilización de aireación forzada en el suelo para combatir problemas de contaminación, estimulando la biodegradación aeróbica y acelerando la evaporación de los contaminantes. Su eficiencia se puede ver afectada por factores como la presencia de estratos arcillosos, la baja permeabilidad del suelo, alta compactación y bajo contenido de agua.',
    },
    {
      termino: 'Cometabolismo',
      significado:
        'Proceso utilizado en el metabolismo de compuestos xenobióticos, en el que los microorganismos crecen en un sustrato específico y oxidan un segundo sustrato que no puede ser asimilado como fuente de carbono o de energía para ellos, pero que puede ser empleado por otro microorganismo de la comunidad como fuente de energía (Singleton, 1994). Este proceso se basa en el uso de varias rutas metabólicas a nivel celular.',
    },
    {
      termino: 'Ficorremediación',
      significado:
        'Utilización de microalgas y cianobacterias para biotransformar y/o bioacumular sustancias contaminantes de aguas residuales, suelos y aire.',
    },
    {
      termino: 'Fitorremediación',
      significado:
        'Conjunto de técnicas utilizadas para remediar contaminación a partir del metabolismo de organismos vegetales y su rizósfera; utiliza la capacidad de las plantas para capturar, diluir, degradar, mineralizar, volatilizar o inmovilizar contaminantes. Esta tecnología mejora su eficiencia gracias a la ingeniería genética, que le ha permitido mejorar la capacidad metabólica de las plantas.',
    },
    {
      termino: 'Humedales artificiales',
      significado:
        'Sistema de tratamiento para aguas residuales de origen antrópico poco profundas, en el que se siembran plantas acuáticas que reproducen procesos naturales que permiten tratar aguas residuales; requieren poca energía para operar y se fundamentan en las interacciones entre el agua, plantas, microorganismos, suelo y aire, con el propósito de mejorar la calidad del agua residual a tratar.',
    },
    {
      termino: '<em>Landfarming</em>',
      significado:
        'También llamada biolabranza, es una técnica de remediación de suelos que disminuye la contaminación por hidrocarburos. Se fundamenta en el arado o la remoción de los suelos contaminados, con la posterior estimulación de la actividad microbiana aeróbica, adición de nutrientes y humedad necesaria.',
    },
    {
      termino: 'Micorremediación',
      significado:
        'Uso de hongos para combatir problemas de contaminación, basado en las ventajas que estos presentan, tales como su capacidad de adaptarse a diferentes hábitats, o la capacidad de penetración del suelo que tienen sus hifas y la producción de enzimas extracelulares que degradan los contaminantes.',
    },
    {
      termino: 'Plantas hiperacumuladoras',
      significado:
        'Plantas que tienen la capacidad de absorber sustancias contaminantes desde el suelo y los acumulan en formas menos tóxicas en sus partes aéreas, en tasas superiores a las normales. El uso de plantas hiperacumuladoras es la base de la fitoextracción. ',
    },
    {
      termino: 'Relave o lodo minero',
      significado:
        'Es el residuo compuesto por una mezcla de mineral molido, agua y otros compuestos resultantes de la extracción de minerales sulfurados. Este residuo se considera tóxico y también se le llama cola.',
    },
    {
      termino: 'Zona saturada de suelos',
      significado:
        'Es el área bajo el nivel freático, en la que todos los espacios porosos quedan llenos de agua con presiones iguales o mayores a la presión atmosférica (EPA).',
    },
    {
      termino: 'Zona vadosa',
      significado:
        'Zona comprendida entre el nivel del terreno y el nivel freático; su contenido de humedad es menor a la saturación y la presión es menor a la presión atmosférica (EPA).',
    },
  ],
  complementario: [
    {
      texto:
        'TEBAEV VIDEOS EDUCATIVOS. (2021). Factores Ambientales [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0xRvu04-u4Q',
    },
    {
      texto:
        'Ramírez, O. (2015). Identificación de problemáticas ambientales en Colombia a partir de la percepción social de estudiantes universitarios localizados en diferentes zonas del país. Revista Internacional de Contaminación Ambiental, 31(3), p. 293-310. ',
      tipo: 'Artículo PDF',
      descarga:
        '/downloads/Identificacion_problematicas_ambientales_Colombia.pdf',
    },
    {
      texto:
        'VERLEK Ingeniería. (2018). Manejo de residuos peligrosos, plan de gestión de residuos peligrosos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7E_GpUvQTWw',
    },
    {
      texto:
        'Facultad de Ciencias Sede Bogotá UN. (2021). #CienciaCápsula: Micorremediación [Video]. YouTube.',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=baqPzT7r5fs',
    },
    {
      texto:
        'Fabelo, J. (2017). Propuesta de metodología para la recuperación de suelos contaminados. Revista Centro Azúcar, 44(1), p. 53-60.',
      tipo: 'Artículo PDF',
      link:
        '/downloads/Propuesta_metodologia_para_recuperacion_suelos_contaminados.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Giovanny Adolfo Lugo Barrera',
        cargo: 'Experto temático',
        centro: 'Centro de Diseño Tecnológico Industrial <br>Regional Valle',
      },
      {
        nombre: 'Luz Aída Quintero Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial <br>Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja <br>Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
    ],
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
