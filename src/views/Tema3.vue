<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero.text-white
        span 3
      h1 Procesos de biorremediación

    p(data-aos="fade") Para la EPA, una tecnología de tratamiento es una operación unitaria o una serie de ellas, que pueden transformar la estructura de una sustancia contaminante, sea por vía física, química o biológica; en este último caso, se llama biorremediación. 

    p.mb-4(data-aos="fade") Cualquier tipo de remediación opera en función de 
      strong.destacado tres principios fundamentales
      | , que son:

    .row.mb-4
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento-contenido.py-5
          .tarjeta-numerada__numero.text-white
            .h2 1
          img.px-2.mb-3(src='@/assets/curso/tema3-tarj1.svg', alt='Imagen decorativa')
          p.px-3.text-center.mb-0 Destrucción o alteración del contaminante.
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento-contenido.py-5
          .tarjeta-numerada__numero.text-white
            .h2 2
          img.px-2.mb-3(src='@/assets/curso/tema3-tarj2.svg', alt='Imagen decorativa')
          p.px-3.text-center.mb-0 Extracción o separación del contaminante (según propiedades físicas, tales como la volatilización, solubilidad, carga eléctrica).
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento-contenido.py-5
          .tarjeta-numerada__numero.text-white
            .h2 3
          img.px-2.mb-3(src='@/assets/curso/tema3-tarj3.svg', alt='Imagen decorativa')
          p.px-3.text-center.mb-0 Inmovilización o estabilización del contaminante.
    
    
    p.mb-4(data-aos="fade") También es importante conocer que las 
      strong.destacado alternativas de remediación 
      | pueden clasificarse, según el lugar de aplicación, en:

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.bg-azul2.text-center.text-white.p-5
        .row.justify-content-center.text-center.mb-4
          .col-5
            figure
              img.px-md-2(src='@/assets/curso/tema3-ico1.svg', alt='Técnicas in situ')
        h2 Técnicas <em>in situ</em>
        p Son aplicaciones que se llevan a cabo en el mismo lugar que se encuentra afectado por el problema de contaminación. Su objetivo es crear un ambiente favorable, que estimule el crecimiento y la actividad microbiana a partir de los contaminantes. Para el logro de este objetivo, normalmente, se debe suministrar oxígeno (bioventeo), nutrientes (bioestimulación), microorganismos (bioaumentación) y/o humedad, además del control de temperatura y pH (EPA, 2001, citado por el Instituto Nacional de Ecología y Cambio Climático de México, 2007).
      .col-md.tarjeta.bg-azul.text-center.text-white.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img.px-md-2(src='@/assets/curso/tema3-ico2.svg', alt='Ex situ')
        h2 
          italic Ex situ
        p Técnicas en las que se realizan procesos para remover el componente contaminado antes de ser tratado, esta remoción y tratamiento pueden darse sobre el mismo lugar (<em>on site</em>) o en sitios diferentes (<em>off site</em>).

    p.mb-4(data-aos="fade") La gama de procesos de biorremediación está basada en la aplicación de tecnologías que permiten la degradación de sustancias contaminantes basadas en procesos de óxido-reducción, acomplejamiento, quelación, intercambio iónico y adsorción, mediadas por algunos organismos capaces de metabolizar esas sustancias contaminantes bajo ciertas condiciones de pH, temperatura, potencial redox, entre otras.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 
              strong.destacado Se puede definir la biorremediación como: 
              | el uso de microorganismos para la degradación de contaminantes, lo que permite la restauración de ambientes impactados debido a la biodiversidad y la adaptabilidad de los microorganismos en degradar o transformar diferentes tipos de contaminantes, tanto orgánicos como inorgánicos.
              br 
              br
            h5.text-right.px-md-5 (Muskus et al., 2013)
            i.fas.fa-quote-right

    Separador


    // 3.1
    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 3.1  Atenuación natural

    p.mb-4(data-aos="fade") La EPA la define como la técnica <em>in situ</em> que aprovecha métodos naturales, como la degradación biológica, volatilización, dilución y adsorción, para impedir que los contaminantes se propaguen más allá de los sitios afectados o aumenten su concentración en cuerpos de agua o en el suelo. 

     .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .cajon.color-acento-botones.p-4.p-md-5.py-md-4
          p.mb-0 También es conocida como 
            strong.destacado3 bioatenuación o biocorrección. 
            | Si se realiza de forma monitoreada, se habla de Atenuación Natural Monitorizada. Este proceso es eficiente si la zona afectada tiene un impacto bajo; es decir, si no representa un riesgo para la salud humana o del ecosistema. También se ha demostrado eficiencia para tratar problemáticas ambientales causadas por derrames de petróleo o sus derivados. 
 
    p.mb-4(data-aos="fade") En la siguiente tabla, se resume el principio de funcionamiento de los métodos de Atenuación Natural conocidos.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-12
        .titulo-sexto.color-acento-botones.mb-4
          h5 Tabla 5. 
          span Métodos de biorremediación por Atenuación Natural
        .tabla-b
          table
            thead.tabla-b__header.bg-azul
              tr.bg-azul
                th.th1 
                  h4.mb-0 Tipo de método
                th.th2 
                  h4.mb-0 Descripción
                th.th3 
                  h4.mb-0 Nombre
                th.th4
                  h4.mb-0 Principio de funcionamiento  
            tbody 
              tr
                td.td1(rowspan="2") 
                  strong Destructivos
                td.td3.text-left(rowspan="2") 
                  strong Destruyen el contaminante mediante la reducción de su masa.
                td.text-center Biodegradación
                td.sin Los microorganismos degradan las sustancias contaminantes a formas menos tóxicas.
              tr
                td.text-center Transformación química
                td.sin Las enzimas exocelulares de microorganismos y plantas degradan las sustancias contaminantes a formas menos tóxicas.
              tr
                td.td2(rowspan="3") 
                  strong No destructivos
                td.td4.text-left(rowspan="3") Reducen la concentración del contaminante hasta niveles que no son tóxicos para animales o plantas.
                td.text-center Dispersión
                td.sin(rowspan="2") Reducen la concentración del contaminante.
              tr
                td.text-center Dilución
              tr
                td.text-center Adsorción  
                td.sin(rowspan="2") Ligan los contaminantes a las partículas del suelo.

    Separador


    // 3.2
    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 3.2  Bioestimulación

    p.mb-4(data-aos="fade") Este proceso consiste en la introducción de nutrientes y oxígeno en la zona contaminada, para estimular el desarrollo de los microorganismos nativos y poder incrementar la eficiencia del proceso de biorremediación, ya que, al mejorar las condiciones de operación de los microorganismos, se aumenta considerablemente la rata de biodegradación de los contaminantes orgánicos y se logra la inmovilización de los inorgánicos. (Muskus et al., 2013). A continuación, unos aspectos para destacar:  

    .row.align-items-center.bg-azul.text-white(data-aos="fade-down")
      .col-md-3.p-4
        p Por lo general, es suficiente con añadir aceptores de electrones, cómo el oxígeno,  pero en otros casos, se requiere el aporte de cometabolitos y nutrientes, y realizar ajustes a propiedades como el pH, la humedad, entre otros.
      .col-md-6.p-0
        figure.p-0
          img(src="@/assets/curso/tema3-2-img.svg", alt="Bioestimulación")
      .col-md-3.p-4
        p Estudios piloto a escala han mostrado el éxito de este proceso para tratar problemas de contaminación por hidrocarburos, plaguicidas y residuos de municiones; sin embargo, no es recomendable su utilización en suelos arcillosos, ya que altera los procesos de intercambio gaseoso (Instituto Nacional de Ecología y Cambio Climático, s. f.). 
      .col-md-12.text-center.bg-morado.p-3
        h5.mb-0 El incremento de nutrientes contribuye a mejorar las condiciones de operación de los microorganismos autóctonos del suelo.

    Separador
    

    // 3.3
    #t_3_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 3.3  Bioaumentación

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Proceso de biorremediación <em>in situ</em>, que consiste en la adición de más especies de microorganismos para colaborar con los procesos de biodegradación de sustancias contaminantes en el suelo o el agua. La unión de estos sistemas de múltiples microorganismos conforma lo que se conoce como consorcio microbiano y representa un acercamiento a los modelos naturales
              br 
            h5.text-right.px-md-5 (Ledin, 2005, citado por Muskus et al., 2013).
            i.fas.fa-quote-right

    p.mb-4(data-aos="fade") Conociendo esto, es importante mostrar la siguiente comparación entre los procesos de bioestimulación y bioaumentación:

    ImagenInfografica.mb-4(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema3-3-infog.svg', alt='Comparación entre los procesos de bioestimulación y bioaumentación')

      .tarjeta.bg-verde.p-3(x="21%" y="35%" numero="")
        p.text-center.mb-0 Este proceso se suele utilizar cuando la población microbiana autóctona no es suficiente para atender el problema de contaminación presentado y se hace necesario la inoculación de otros microorganismos para mejorar la eficiencia del proceso.

      .tarjeta.bg-verde.p-3(x="17%" y="90%" numero="")
        p.text-center.mb-0 Esto ocurre principalmente con plaguicidas y residuos de metales pesados. Es una tecnología que puede durar varios meses o años, y su utilización no implica mucho capital ni costos de operación (Pino et al., 2012).

    .row
      .col-md-6.col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        .bloque-texto-b.color-secundario
          .bloque-texto-b__texto
            h5.mb-0 “Los microorganismos añadidos deben sobrevivir a los depredadores y competir con éxito con la población autóctona antes de ocupar los nichos potenciales”
      .col-md-6(data-aos="fade-left")
        .bloque-texto-b.color-secundario
          .bloque-texto-b__texto
            h5.mb-0 Según esta limitación de la bioaumentación, que destacan Sánchez y Rodríguez (2005), se recomienda que la mejor opción es el uso de consorcios microbianos.

    Separador
    

    // 3.4
    #t_3_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 3.4  Otros procesos de biorremediación 

    p.mb-4(data-aos="fade") Existen otros tipos de mecanismos mediante los cuales los organismos, especialmente microorganismos, logran llevar a cabo procesos de descontaminación de suelos y aguas, utilizando otros principios diferentes al aumento de los nutrientes o a la inoculación de más microorganismos especializados en un sustrato específico. Como ejemplo, se puede ver:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-azul" data-aos="fade-down")
      .row.justify-content-center(titulo="1. Biolabranza")
        .col-md-6.mb-4.mb-md-0
          p El suelo contaminado se trata <em>in situ</em> mediante procesos de arado que favorecen la aireación, como el composteo, proceso mediante el cual el material contaminado es mezclado con otros  materiales, como residuos fibrosos, aserrín o estiércol, y es degradado a subproductos menos tóxicos.
        .col-md-5
          figure
            img(src='@/assets/curso/tema3-4-acord1.jpg', alt='Biolabranza')

      .row.justify-content-center(titulo="2. Biolixiviación")
        .col-md-6.mb-4.mb-md-0
          p Acidificación de un medio contaminado, al intercambiar protones por metales.
        .col-md-5
          figure
            img.mb-2(src='@/assets/curso/tema3-4-acord2.jpg', alt='Biolixiviación')      
          h4.bg-azul4.text-center.py-1 Microorganismos   

      .row.justify-content-center(titulo="3. Biovolatilización")
        .col-md-6.mb-4.mb-md-0
          p Transformación de  metales  pesados y  metaloides  a fase gaseosa.
        .col-md-5
          figure
            img.mb-2(src='@/assets/curso/tema3-4-acord3.jpg', alt='Biovolatilización')      
          h4.bg-azul4.text-center.py-1 Volatilización 

      .row.justify-content-center(titulo="4. Bioacumulación")
        .col-md-11
          p La capacidad de absorción de sustancias contaminantes y su posterior acumulación en organelas internas de las células de los seres vivos, es lo que se conoce como bioacumulación. 
          p.mb-4 Esta característica representa una de las principales vías para la biorremediación de componentes contaminados, ya que permite la captura y movilidad de los contaminantes hacia los tejidos y órganos del organismo acumulador y su posible entrada en la cadena trófica y posterior paso a otros seres vivos. Algunos de estos organismos son hiperacumuladores.
        .col-md-8  
          figure
            img.mb-2(src='@/assets/curso/tema3-4-acord4.svg', alt='Biovolatilización') 
          h4.bg-azul4.text-center.py-1 Mecanismos de captación, movilidad y acumulación de sustancias contaminantes en una planta 

      .row.justify-content-center(titulo="5. Biomineralización")
        .col-md-11
          p Es el procedimiento por el  cual algunos  seres  vivos  son capaces de contribuir a la  precipitación  de minerales, independientemente de la forma en que estos se mineralicen (cristalina  o  amorfa). 
          p.mb-4 Se  produce a  través  de  reacciones  químicas  entre  iones  específicos, como  resultado  de  la  actividad  metabólica de  un  organismo  bacteriano  bajo  ciertas  condiciones ambientales (Arrieta et al., 2012). La biomineralización se puede dar por dos procesos:
        .col-md-4.mb-lg-0.mb-4
          h4.bg-azul.text-center.text-white.py-1.mb-0 Mineralización biológicamente inducida
          p.color-secundario1.p-3 En la cual, los  minerales  sufren  precipitación  adventicia, es decir,  son producto de reacciones  de  iones  externos  con  metabolitos  presentes en  la  pared  celular de los organismos involucrados.
        .col-md-4
          h4.color-acento-botones1.text-center.text-white.py-1.mb-0 Mineralización biológicamente  inducida
          p.color-secundario1.p-3 En la que se  regula la precipitación de  los  minerales, dependiendo del organismo y la función  que deben cumplir, por ejemplo, los caparazones.

      .row.justify-content-center(titulo="6. Biosorción")
        .col-md-11
          p.mb-4 Es la utilización de biomasa, con el fin de inmovilizar iones metálicos de una fase líquida o sólida. Se conoce desde la década del  70 y se utiliza para adsorber metales pesados en la membrana y pared celular de algunas bacterias y hongos, llegando en algunos casos a ingresar a la célula, donde es almacenado en vacuolas. 
        .row.align-items-center.justify-content-center
          .col-md-4.mb-lg-0.mb-4.bg-azul.p-4.h-100
            h5.h-100.text-center.text-white.py-1.mb-0 Mejía (2006) define la biosorción como el proceso que involucra una fase sólida, llamada biosorbente (membranas o paredes celulares) y una fase líquida (solvente), en la cual se encuentran las sustancias contaminantes que serán biosorbidas.
          .col-md-2.p-0 
            img(src="@/assets/curso/tema3-4-acord6.svg", alt="Flecha")
          .col-md-4.color-acento-botones1.p-4.h-100
            h5.h-100.text-center.text-white.py-1.mb-0 Este proceso se da debido a  las interacciones entre los grupos funcionales presentes en las superficies celulares de los microorganismos y las sustancias a ser removidas, aunque para mejorar la eficiencia de dichas interacciones, se debe garantizar un pH adecuado.
      
      .row.justify-content-center(titulo="7. Bioprecipitación")
        .col-md-6.mb-4.mb-md-0
          p Consiste en la inmovilización de los metales por las  bacterias, con  la  capacidad  de  reducir su biodisponibilidad; también se conoce como reducción  biológica, y permite que los metales pasen de formas  oxidadas a formas reducidas, que luego van a precipitar en una solución  acuosa.  
          p Dentro de los microorganismos que realizan este proceso, se destacan las  bacterias  sulfato  reductoras  (BSR),  muy usadas  para tratar  suelos  y  aguas  contaminados  con metales pesados (Covarrubias et al., 2015).
          .row.justify-content-center
            .col-auto
              a.boton.bg-azul.indicador__container(@click="modal1 = true")
                span Ver más
                i.fas.fa-chevron-right
                .indicador--click(v-if="mostrarIndicador")
        .col-md-5
          figure
            img.mb-2(src='@/assets/curso/tema3-4-acord7.jpg', alt='Bacterias reductoras de sulfato')      
          h4.bg-azul4.text-center.py-1.mb-2 Bacterias reductoras de sulfato
          figcaption Nota. Tomado de https://es.wikipedia.org/wiki/Bacteria_reductora_de_sulfato#/media Archivo:Desulfovibrio_desulfuricans.jpg
      
      .row.justify-content-center(titulo="8. <em>Bioventing</em> o bioventeo")
        .col-md-11
          p En este proceso de biorremediación <em>in situ</em>, se inyecta aire al componente contaminado, para estimular la biodegradación natural de sustancias biodegradables bajo condiciones aerobias. El aire por inyección forzada es suministrado por medio de pozos de extracción, con flujo a baja velocidad, para que solo se utilice la cantidad de oxígeno requerida por la actividad de los microorganismos degradadores (Van Deuren et al., 1997, citados por el INECC, 2007), y el contaminante es extraído por medio de una bomba de vacío. Es muy utilizado para tratar compuestos orgánicos no volátiles presentes en suelos o aguas profundos. 
          p.mb-4 Esta es una tecnología de bajo costo respecto al uso de equipos, pero el costo de operación es variable en función de condiciones como la permeabilidad del suelo, la cantidad de pozos a utilizar  y la velocidad a la que se va a realizar el bombeo. Funciona a mediano y largo plazo, llegando a tomar hasta dos años y su eficiencia disminuye en suelos saturados o con baja permeabilidad.
        .col-md-8  
          figure
            img.mb-2(src='@/assets/curso/tema3-4-acord8.svg', alt='Técnica de bioventing') 
          h4.bg-azul4.text-center.py-1 Técnica de <em>bioventing</em>

      .row.justify-content-center(titulo="9. <em>Bioslurping</em> ")
        .col-md-6.mb-4.mb-md-0
          p Es la aplicación de alto vacío a la zona objeto de estudio, mediante tuberías con diámetros muy pequeños instaladas en pozos de extracción, con la finalidad de extraer el contaminante en fase líquida y algunos vapores del componente ambiental a recuperar. En el caso de suelos, se extraen de la zona no saturada (zona vadosa).
          p Todo el material que logra extraerse de la zona contaminada se somete en la superficie a tratamiento mediante procesos físicos, químicos o una combinación de ambos. Es muy común su uso en zonas poco profundas o en terrenos con baja permeabilidad.
        .col-md-5
          figure
            img.mb-2(src='@/assets/curso/tema3-4-acord9.svg', alt='Técnica de bioslurping')      
          h4.bg-azul4.text-center.py-1 Técnica de <em>bioslurping</em> 

      .row.justify-content-center(titulo="10. <em>Biosparging</em>")
        .col-md-11
          p.mb-4 Consiste en la inyección de gas o aire presurizado en una zona contaminada, bajo condiciones específicas de pH y conductividad hidráulica, con el fin de estimular la actividad biológica aeróbica en la zona saturada y promover la biodegradación del contaminante y poder minimizar la volatilización de los compuestos orgánicos volátiles y semivolátiles.
        .col-md-11  
          figure
            img.mb-2(src='@/assets/curso/tema3-4-acord10.svg', alt='Técnica de Biosparging') 
          h4.bg-azul4.text-center.py-1 Técnica de <em>Biosparging</em>

    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-12.mb-4.mb-md-0
          p Algunos de los mecanismos celulares mediante los cuales se pueden llevar a cabo los procesos de captura y adhesión de sustancias contaminantes por parte de los microorganismos que realizan biosorción o bioprecipitación son:
          figure
            img.mb-2(src='@/assets/curso/tema3-4-acord7-modal.svg', alt='Mecanismos celulares de adsorción de sustancias')      
          h4.bg-azul4.text-center.py-1.mb-2 Mecanismos celulares de adsorción de sustancias


    Separador
    

    // 3.5
    #t_3_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 3.5  Fitorremediación 

    p(data-aos="fade") Es la utilización de organismos vegetales para capturar, traslocar, inmovilizar, acumular y/o degradar sustancias contaminantes (de naturaleza orgánica e inorgánica) desde el suelo, agua o sedimentos, y su aplicación puede ser mediante procesos <em>in situ</em> o <em>ex situ</em>. 

    p.mb-4(data-aos="fade") Partiendo de lo anterior, los siguientes son tipos de fitorremediación:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/1bvEn-ENlg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador
    

    // 3.6
    #t_3_6.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 3.6  Micorremediación y ficorremediación

    p.mb-4(data-aos="fade") Además del uso de bacterias y de plantas, la biorremediación ha recurrido también al uso de otros organismos en procesos de descontaminación de zonas afectadas, tal es el caso del uso de hongos (micorremediación) y algas (ficorremediación).

    SlyderE.bg-azul3.text-white.p-4.p-md-5.mb-4(data-aos="fade-down")
      .row
        .col-md-4.mb-4.mb-md-0
          h4 La micorremediación
          p Aprovecha la capacidad de varias especies de hongos para estimular la actividad enzimática y microbiana o para utilizar su micelio en la reducción de sustancias tóxicas <em>in situ</em>. Se aprovecha también la capacidad de desarrollarse en diferentes tipos de hábitats y su alto poder de penetración del suelo por sus hifas. Estudios realizados recientemente demuestran que los hongos que descomponen madera sirven para descomponer compuestos aromáticos y clorados. 
          p Existen también hongos hiperacumuladores (absorben y acumulan metales pesados en su cuerpo fructífero). Si se desea aplicar micorremediación <em>ex situ</em>, se debe estudiar en detalle el hábitat, para que el transplante sea exitoso.    
        .col-md-8
          figure
            img.mb-2(src='@/assets/curso/tema3-6-slide1.jpg', alt='Hongos Ostra')
          h4.text-center.bg-morado.py-2 Hongos Ostra
      .row
        .col-md-4.mb-4.mb-md-0
          h4 La ficorremediación
          p Es el uso de algas para remediar o biodegradar sustancias contaminantes de las aguas residuales y del aire, que pueden incluso tener valor agregado, como la formación de biofertilizantes (biomasa microalgal enriquecida con productos tomados de las zonas contaminadas).
        .col-md-8
          figure
            img(src='@/assets/curso/tema3-6-slide2.jpg', alt='Descontaminación de aguas con microalgas')
          figcaption.oscuro.mb-2 Nota. Tomado de https://www.google.com/url?q=https://blogs.elespectador.com/actualidad/el-rio/asi-se-usan-las-microalgas-descontaminar-cienagas-colombi&sa=D&source=docs&ust=1639522573077000&usg=AOvVaw2480pXGBxMbRJMAAxSgLrk  
          h4.text-center.bg-morado.py-2 Descontaminación de aguas con microalgas

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-morado.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-md-4
              img.px-md-2(src="@/assets/curso/tema3-6-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.texto-blanco
                  h4.mb-2 La micorremediación
                  p.text-small Para ampliar este tema de <b>la micorremediación</b>, observe el video relacionado de la Facultad de Ciencias de la Universidad Nacional de Colombia, que se encuentra en el material complementario o a través del siguiente enlace 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=baqPzT7r5fs" target="_blank")
                    span Enlace
                    i.fas.fa-link

    Separador
    

    // 3.7
    #t_3_7.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 3.7  Humedales artificiales

    p.mb-4(data-aos="fade") Son sistemas antrópicos con la intención de reproducir, bajo condiciones controladas, los procesos de naturaleza física, química y biológica que ocurren en los humedales naturales para la reducción de contaminantes. Se componen de:

    .tarjeta--container.row.mb-4(data-aos="fade-down")
      .col-md.tarjeta.bg-azul2.text-center.text-white.p-5
        .row.justify-content-center.text-center.mb-4
          .col-8
            figure
              img.px-md-2(src='@/assets/curso/tema3-7-ico1.svg', alt='Sustrato')
        h2 Sustrato
        p Material que funciona como soporte para las plantas y donde se forma el <em>biofilm</em> (biopelícula) encargado de los procesos de degradación de las sustancias contaminantes presentes en el agua.
      .col-md.tarjeta.bg-azul.text-center.text-white.p-5
        .row.justify-content-center.mb-4
          .col-8
            figure
              img.px-md-2(src='@/assets/curso/tema3-7-ico2.svg', alt='Plantas')
        h2 Plantas
        p Vegetación emergente encargada de la oxigenación del sustrato.
      .col-md.tarjeta.bg-azul2.text-center.text-white.p-5
        .row.justify-content-center.mb-4
          .col-8
            figure
              img.px-md-2(src='@/assets/curso/tema3-7-ico3.svg', alt='Afluente')
        h2 Afluente
        p Agua a ser tratada; esta circula a través del sustrato y las plantas.
      .col-md.tarjeta.bg-azul.text-center.text-white.p-5
        .row.justify-content-center.mb-4
          .col-8
            figure
              img.px-md-2(src='@/assets/curso/tema3-7-ico4.svg', alt='Microorganismos')
        h2 Microorganismos
        p Organismos encargados de los procesos de degradación de contaminantes.   

    p.mb-4(data-aos="fade") Según la forma de circulación del agua en el sistema, los humedales se pueden clasificar en:

    TabsC.color-primario(data-aos="fade-down")
      .py-3.py-md-4(titulo="Humedales de flujo superficial ")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            h4 Humedales de flujo superficial 
            p.mb-4 La circulación del agua se da por encima del sustrato, presentando condiciones aeróbicas. El agua a tratar fluye por la superficie del sustrato, circulando alrededor de la vegetación y con exposición directa a la atmósfera. Son cuerpos de agua de poca profundidad, menos de 0,4 m, pero de mucha superficie.        
            .titulo-sexto.color-acento-botones.mb-3
              h5 Figura 6. 
              span Estructura de un humedal artificial de flujo superficial
            figure
              img.mb-2(src='@/assets/curso/tema3-7-fig6.svg', alt='Estructura de un humedal artificial de flujo superficial')
              figcaption Nota. Adaptada de Introducción a los Humedales Artificiales como tratamiento de las aguas residuales (Salas, 2018). https://www.iagua.es/blogs/juan-jose-salas/introduccion-humedales-artificiales-como-tratamiento-aguas-residuales
      .py-3.py-md-4(titulo="Humedales de flujo subsuperficial")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            h4 Humedales de flujo subsuperficial
            p.mb-4 El flujo de agua pasa a través del sustrato, ya sea de forma horizontal o vertical. El agua fluye de manera subterránea, a través de un medio poroso que permite el contacto con raíces y rizomas de la vegetación utilizada. Su profundidad puede estar por el orden de 0,6 - 1,0 m. Tienen menor superficie que los de flujo superficial y se suelen emplear como tratamiento secundario para aguas residuales domésticas. 
            .titulo-sexto.color-acento-botones.mb-3
              h5 Figura 7. 
              span Sección longitudinal de un humedal de flujo subsuperficial vertical
            figure
              img.mb-2(src='@/assets/curso/tema3-7-fig7.svg', alt='Sección longitudinal de un humedal de flujo subsuperficial vertical')
              figcaption Nota. Adaptada de Introducción a los Humedales Artificiales como tratamiento de las aguas residuales (Salas, 2018). https://www.iagua.es/blogs/juan-jose-salas/introduccion-humedales-artificiales-como-tratamiento-aguas-residuales


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
