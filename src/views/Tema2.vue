<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero.text-white
        span 2
      h1 Residuos peligrosos 

    p.mb-4(data-aos="fade") Las diferentes actividades antrópicas de todo tipo (industriales, domésticas, agrícolas, de servicios) generan toda clase de residuos, muchos de los cuales son considerados nocivos para la salud humana y el ambiente debido a sus propiedades, por lo que requieren un manejo diferente al dado a los residuos ordinarios. Siendo así, a través del siguiente video, podrá observar una clara explicación de los residuos peligrosos RESPEL:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/dg9kRNXM17E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-morado.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-md-4
              img.px-md-2(src="@/assets/curso/tema2-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.texto-blanco
                  h4.mb-2 Manejo de residuos peligrosos
                  p.text-small En el video <b>“Manejo de residuos peligrosos”</b>, que se encuentra en el material complementario, se da una visión un poco más amplia de todo lo relacionado con el contexto nacional de residuos peligrosos. También puede acceder a través del siguiente enlace: 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=7E_GpUvQTWw" target="_blank")
                    span Enlace
                    i.fas.fa-link

    Separador


    // 2.1
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 2.1  Generalidades de residuos peligrosos

    p.mb-4(data-aos="fade") Los procesos antrópicos originan una serie de residuos, entre los que aparecen aquellos con características de corrosividad, reactividad, explosividad y toxicidad, que son potencialmente peligrosos para la salud humana y el ambiente.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-g.bg-azul.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2-1-img.jpg')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Estos residuos se conocen como RESPEL, los cuales circulan a través del ambiente y llegan a componentes ambientales como el agua o el suelo, ocasionando problemas severos de contaminación, ya que, por sus características, los RESPEL no son fácilmente biodegradables.

    p.mb-4(data-aos="fade") Las intervenciones a nivel mundial sobre la gestión integral de RESPEL operan bajo el principio de la identificación, clasificación, transporte, tratamiento y disposición final, materializado en legislaciones que establecen los procedimientos idóneos en cada una de estas etapas. Su explicación, a continuación:

    figure.mb-5
      img(src="@/assets/curso/tema2-1-mapa.svg", alt="Valores de toxicidad")


    .subtitulo.mb-4(data-aos="fade-right")
      .h3 Definición y clasificación.

    p.mb-4(data-aos="fade") En Colombia, se adopta la definición dada en el Decreto Único Ambiental (Decreto 1076 de 2015), el cual establece que:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2-1-ico.svg' alt='AvatarTop')
          .tarjeta.bg-azul.text-white
            .p-4
              p.mb-0
                strong.destacado2 RESPEL 
                | es “aquel residuo que, por sus características corrosivas, reactivas, explosivas, tóxicas, inflamables, infecciosas o radiactivas, puede causar riesgo o daño para la salud humana y el ambiente”. De la misma forma, el decreto también establece que se consideran RESPEL los recipientes y embalajes que hayan estado en contacto con ellos. 

    p.mb-4(data-aos="fade") En la siguiente figura, se observa la clasificación de RESPEL según la propiedad o característica que presenten, de ahí que se les conozca como CRETIB (por sus iniciales):

    .row.mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-botones.mb-4
        h5 Figura 3. 
        span Características de peligrosidad de los residuos
      figure.mb-4
        img.px-md-5(src="@/assets/curso/tema2-1-fig3.svg", alt="Características de peligrosidad de los residuos")
      figcaption Nota. Adaptado de Informe Nacional de Residuos o desechos peligrosos en Colombia (IDEAM, 2016).  

    p.mb-4(data-aos="fade") Mientras que en el siguiente gráfico, se muestran las rutas existentes para identificar y clasificar los RESPEL:

    ImagenInfografica.mb-4(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2-1-infografia.svg', alt='Bioesfera')

      .tarjeta.bg-modal2.p-3.text-white(x="27.3%" y="41.5%" numero="")
        p.mb-0 Las Hojas de Seguridad  son documentos que contienen información técnica sobre las sustancias químicas, su uso potencial, la forma como deben almacenarse, las opciones de manejo adecuado, los procedimientos de emergencia y los potenciales impactos adversos a la salud generados por los compuestos químicos presentes en los RESPEL.

      .tarjeta.bg-modal2.p-3.text-white(x="42.5%" y="80.3%" numero="")
        p.mb-0 Se refiere a los análisis de laboratorio que se realizan para determinar los componentes y las características que le dan la peligrosidad a un residuo.

      .tarjeta.bg-modal2.p-3.text-white(x="72.8%" y="41.5%" numero="")
        h4 Listados a nivel mundial
        ul.lista-ul--color.color-lista2
          li 
            i.fas.fa-dot-circle
            | La Unión Europea establece 20 categorías de RESPEL.
          li 
            i.fas.fa-dot-circle
            | La EPA, en Estados Unidos, tiene 4 categorías denominadas con las letras F, K, P, D.
          li 
            i.fas.fa-dot-circle
            | El Convenio de Basilea presenta en 4 anexos las generalidades de RESPEL y los divide en 4 categorías.
          li 
            i.fas.fa-dot-circle
            | El decreto 4741 de 2005, en Colombia, adopta el Anexo I y el Anexo VIII del convenio de Basilea, estableciendo la clasificación de RESPEL por fuente generadora o por características propias del residuo.    
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .cajon.color-acento-botones.p-4.p-md-5
          p.mb-0 Las hojas de seguridad, al igual que las tarjetas de emergencia, contienen información adicional y mucho más completa sobre el material de la que se puede observar en la etiqueta de los envases, por lo que deben ser ubicadas en lugares de fácil acceso y cercanos al lugar de almacenamiento de los RESPEL. De la misma forma, es necesario capacitar a los trabajadores sobre el uso de las mismas.


    .subtitulo.mb-4(data-aos="fade-right")
      .h3 Normatividad y legislación.

    p(data-aos="fade") Los crecientes y reconocidos efectos en el ambiente y en la salud humana causados por la inadecuada gestión de RESPEL han encendido las alarmas a nivel mundial, razón por la cual, muchos países han adoptado o generado una abundante legislación para regular el manejo y disposición de estos.  

    p.mb-4(data-aos="fade") En el caso de Colombia, la legislación ha ido creciendo al mismo tiempo que el conocimiento sobre los efectos causados por este tipo de residuos; aun así, se encuentran muchos vacíos en la parte legal de RESPEL, en lo referente a los valores máximos permisibles de ciertas sustancias, como se puede apreciar a través de su evolución en el tiempo:







    p.mb-4(data-aos="fade") Dentro de los avances importantes en la parte legal de RESPEL en Colombia, se pueden citar la elaboración del Plan de Gestión de RESPEL y el Registro de Generadores de RESPEL:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bg-azul2.text-center.text-white.p-5
        .row.justify-content-center.text-center.mb-4
          .col-5
            figure
              img.px-md-2(src='@/assets/curso/tema2-1-ico1.svg', alt='Plan de gestión de RESPEL')
        h2 Plan de gestión de RESPEL
        p Es obligatorio, aunque no requiere ser presentado ante la autoridad ambiental, y representa la herramienta de planificación de todo generador de residuos peligrosos, ya que, en él, se establecen los mecanismos para conocer y evaluar los tipos y cantidades de RESPEL producidas en sus organizaciones, y de esta forma, determinar las alternativas de prevención y control de estos residuos. 
      .col-md.tarjeta.bg-azul.text-center.text-white.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img.px-md-2(src='@/assets/curso/tema2-1-ico2.svg', alt='Registro de generadores de RESPEL')
        h2 Registro de generadores de RESPEL
        p Se realiza en un aplicativo, en el cual se consolida la información de la cantidad y tipo de RESPEL generados en la organización y la forma como estos se están almacenando y disponiendo. Esto es un requisito para todos aquellos generadores que produzcan más de 10 kilogramos mensuales de RESPEL, obtenidos por la media móvil de los últimos 6 meses, la cual, a su vez, determinará la categoría en la que se encuentra el generador, y esto, a su vez, dicta ciertas medidas en cuanto a tiempo y cantidad de almacenamiento y frecuencia de presentación de informes.

    .row.mb-4
      .col-md-5.col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        p El aplicativo para el Registro de Generadores de RESPEL es manejado por el Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM), quien ha delegado en las corporaciones ambientales regionales o en las autoridades ambientales la función de ejecutar el seguimiento a los generadores reportados.
      .col-md-7.mb-5(data-aos="fade-left")  
        .cajon.color-acento-botones.p-4.py-md-3.px-md-5
          p.mb-0 También es de destacar, en Colombia, la aparición en los últimos años de legislación referente a los residuos posconsumo, particularmente aquellos que representan características de peligrosidad, como  los pertenecientes a los residuos de aparatos eléctricos y electrónicos (RAEE), los aceites usados y medicamentos vencidos. 


    .subtitulo.mb-4(data-aos="fade-right")
      .h3 Rotulación y etiquetado.

    p.mb-4(data-aos="fade") La rotulación de productos peligrosos en Colombia está regida por la norma NTC-ICONTEC 1692 y el Decreto 1609 de 2002. Se rige bajo un sistema de clasificación que presenta nueve grupos, según la característica de peligrosidad que presenten; cada uno de ellos presenta una etiqueta específica, como se puede apreciar:  

    .row.mb-5(data-aos="fade-down")
      .col-md-12
        .titulo-sexto.color-acento-botones.mb-4
          h5 Figura 4. 
          span Etiquetas para sustancias peligrosas en Colombia
        figure.mb-3
          img(src="@/assets/curso/tema2-1-fig4.svg", alt="Etiquetas para sustancias peligrosas en Colombia")
        figcaption Nota. Elaborada a partir de Norma técnica colombiana NTC-ICONTEC 1692. 

    p.mb-4(data-aos="fade") También es válido el uso del rombo de peligrosidad NFPA 704, el cual proporciona una fácil identificación del tipo de riesgo que se genera durante la manipulación y almacenamiento de sustancias peligrosas:

    .row.mb-5(data-aos="fade-down")
      .col-md-12
        .titulo-sexto.color-acento-botones.mb-4
          h5 Figura 5. 
          span Etiquetas para sustancias peligrosas en Colombia
        figure.mb-3
          img(src="@/assets/curso/tema2-1-fig5.svg", alt="Etiquetas para sustancias peligrosas en Colombia")
        figcaption Nota. Adaptada de ¿Qué es el Rombo de Seguridad y Para qué Sirve? (Yañez, s. f.). https://www.lifeder.com/rombo-de-seguridad/

    p.mb-4(data-aos="fade") Estas estrategias de rotulado son de mucha importancia al momento de atender una emergencia o en los procesos de almacenamiento de sustancias peligrosas, ya que indican los riesgos de manipular y almacenar sustancias que no sean compatibles entre sí.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2-1-ico4.svg' alt='AvatarTop')
          .tarjeta.bg-azul.text-white
            .p-4
              p.mb-0 En los últimos años, se ha fortalecido la utilización del número de clasificación ONU, que es un número de cuatro dígitos que da la identidad del compuesto, de acuerdo con una lista publicada por la ONU. Este número se debe colocar en recuadros de color naranja con números negros.

    Separador


    // 2.2
    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 2.2  Pruebas para determinación de peligrosidad de residuos

    .row.mb-4
      .col-md-5.col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        p Se usan cuando no es posible determinar la composición del residuo por los procedimientos de investigación, ya que, en muchas ocasiones, no es posible determinar la composición completa del residuo y se debe identificar con certeza qué sustancias peligrosas están presentes en él. 
      .col-md-7.mb-5(data-aos="fade-left")  
        .cajon.color-acento-botones.p-4.py-md-3.px-md-5
          p.mb-0 La determinación de si un residuo presenta alguna característica que lo cataloga como peligroso es uno de los pasos más importantes para la clasificación de los residuos. 

    p.mb-4(data-aos="fade") De acuerdo con la característica de peligrosidad que se desee monitorear o identificar, se realizan diferentes tipos de pruebas, entre las que se destacan: 

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-9
        .titulo-sexto.color-acento-botones.mb-4
          h5 Tabla 2. 
          span Unidad patrón de magnitudes fundamentales en diferentes sistemas de unidades
        .tabla-b
          table
            thead.tabla-b__header.bg-azul
              tr.bg-azul
                th.th1 
                  h3.mb-0 Tipo de Prueba
                th.th2 
                  h3.mb-0 Características a determinar
            tbody 
              tr
                td.text-center 
                  strong Fisicoquímicas
                td.sin Determinación de corrosividad (medición electrométrica de pH, corrosividad al acero), reactividad (método de cianuro, método de sulfuro), explosividad e inflamabilidad (pruebas de punto de inflamación).
              tr
                td.text-center  
                  strong Toxicológicas
                td.sin Dosis letal media (oral o dérmica) y la concentración letal media inhalatoria.
              tr
                td.text-center  
                  strong Eco-toxicológicas
                td.sin Bioensayos de toxicidad sobre organismos vivos acuáticos (peces, algas, daphnias o pulgas de agua), sobre plantas (bioensayos de germinación) o pruebas de lixiviación (TCLP).
              tr
                td.text-center  
                  strong Microbiológicas
                td.sin Determinación de microorganismos patógenos o infecciosos.

    Separador


    // 2.3
    #t_2_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 2.3  Tratamiento y disposición final de residuos peligrosos

    p.mb-4(data-aos="fade") Como última instancia en la gestión de RESPEL, se tienen los procesos de confinamiento; no obstante, este debe realizarse bajo ciertas condiciones especiales, por lo que se hace necesario hacer una transformación de los residuos para reducir la peligrosidad de estos, al contener, degradar, inmovilizar o aislar materiales peligrosos; esto se llama tratamiento. 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2-3-ico.svg' alt='AvatarTop')
          .tarjeta.bg-azul.text-white
            .p-4
              p.mb-0
                strong.destacado2 Procesos de transformación de residuos.  
                | Los más utilizados son mediante la adición de sustancias químicas para alterar la naturaleza interna del contaminante, eliminando la característica de peligrosidad. 

    p.mb-4(data-aos="fade") Algunos de los procesos más conocidos para el tratamiento de residuos peligrosos son: 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-4
          h5 Tabla 3. 
          span Alternativas de tratamiento de RESPEL
        .tabla-b
          table
            caption Nota. Elaborada a partir de Ministerio de Ambiente (2007).
            thead.tabla-b__header.bg-azul
              tr.bg-azul
                th.th1 
                  h4.mb-0 Tipo de tratamiento
                th.th2 
                  h4.mb-0 Nombre
                th.th3 
                  h4.mb-0 Descripción
            tbody 
              tr
                td.td1(rowspan="8") 
                  strong Físico
                td.text-center Cribado/tamizado
                td.sin Eliminación del material de mayor tamaño.
              tr
                td.text-center Sedimentación
                td.sin Separación de la fase sólida de la fase líquida por gravedad.
              tr
                td.text-center Centrifugación
                td.sin Separación de dos fases homogéneas por fuerza centrífuga.
              tr
                td.text-center Autoclave
                td.sin Esterilización mediante presión y temperatura.
              tr
                td.text-center Filtración
                td.sin Separación de fases sólidas y líquidas en mezclas heterogéneas.
              tr
                td.text-center Adsorción
                td.sin Adhesión de sustancias sobre una superficie controlada.
              tr
                td.text-center Lixiviación
                td.sin Extracción de sustancias solubles.
              tr
                td.text-center Secado
                td.sin Eliminación de agua y otros líquidos.      
              tr
                td.td2(rowspan="6") 
                  strong Químicos
                td.text-center Oxido-reducción
                td.sin Transformación de compuestos por la acción de agentes oxidantes/reductores.
              tr
                td.text-center Neutralización
                td.sin Equilibrio del pH a un valor neutral.
              tr
                td.text-center Precipitación
                td.sin Los componentes peligrosos se separan de la solución.
              tr
                td.text-center Decloración
                td.sin Eliminación de átomos de cloro.
              tr
                td.text-center Hidrólisis
                td.sin Separación de componentes por acción del agua.
              tr
                td.text-center Electrólisis
                td.sin Separación de componentes mediante aplicación de electricidad.
              tr
                td.td3(rowspan="5") 
                  strong Físico-químico
                td.text-center Extracción
                td.sin Utilización de solventes capaces de disolver sustancias presentes en soluciones acuosas.
              tr
                td.text-center Floculación/ coagulación
                td.sin Adición de componentes capaces de agrupar partículas coloidales para su posterior sedimentación.
              tr
                td.text-center Solidificación/ encapsulamiento
                td.sin Generación de un material sólido por medio de la adición de aditivos que alteran la estructura física del contaminante.
              tr
                td.text-center Ozonólisis
                td.sin Utilización de ozono para separar sustancias peligrosas.
              tr
                td.text-center Intercambio iónico
                td.sin Utilización de resinas para separar sustancias con carga.
              tr
                td.td4(rowspan="5") 
                  strong Biológico
                td.text-center Lodos activados
                td.sin Utilización de lodos con microorganismos para biodegradar materia orgánica en fase acuosa.
              tr
                td.text-center Lagunas
                td.sin Eliminación de sustancias orgánicas en cuerpos de agua, sean aeróbicos o anaeróbicos.
              tr
                td.text-center Digestión anaerobia
                td.sin Degradación de contaminantes orgánicos en ausencia de oxígeno.
              tr
                td.text-center Biorremediación
                td.sin Utilización de seres vivos o sus productos, para degradar diferentes tipos de sustancias contaminantes.
              tr
                td.text-center 
                  italic Landfarming
                td.sin Esparcimiento de suelos contaminados sobre superficies impermeabilizadas, para que se realicen los procesos de transformación del contaminante.
              tr
                td.td5(rowspan="4") 
                  strong Térmico
                td.text-center Incineración
                td.sin Destrucción de contaminantes por medio de una combustión completa.
              tr
                td.text-center Pirólisis
                td.sin Destrucción del contaminante en reactor térmico con ausencia total de oxígeno.
              tr
                td.text-center Gasificación
                td.sin Transformación de contaminantes mediante combustiones incompletas.
              tr
                td.text-center Arco de plasma
                td.sin Utilización de gases para volatilizar otras sustancias.

    p.mb-4(data-aos="fade") Una vez realizado el tratamiento, se pueden llevar a disposición final controlada:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10.bg-azul3.p-3.p-md-5
        figure
          img.mb-2(src="@/assets/curso/tema2-3-fig.svg", alt="Relleno de seguridad")
        p.text-white La cual consiste en el confinamiento de los residuos en rellenos o celdas de seguridad, donde no representen riesgo alguno para la salud humana o el equilibrio del ecosistema (obras civiles especialmente diseñadas con doble impermeabilización, taludes impermeabilizados, captación y tratamiento de lixiviados, captación y manejo de gases).
        figcaption.oscuro.text-white Nota.Tomada de https://www.towerandtower.com.pe/wp-content/uploads/2019/12/Estructura-de-un-relleno-de-Seguridad-Tower-and-Tower.jpg

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
