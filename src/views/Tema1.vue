<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero.text-white
        span 1
      h1 Factores ambientales

    .row.mb-4
      .col-md-6.mb-4(data-aos="fade-right")  
        .cajon-b.color-acento-botones.p-3.mb-5
          p.mb-0 La vida, tal como se conoce actualmente, requiere de unas condiciones ideales para desarrollarse, ya que estas son las que permiten que los seres vivos cumplan su ciclo de crecer, alimentarse y reproducirse, y hasta ahora, el único planeta conocido donde se presentan estas condiciones es el planeta Tierra, lugar donde interactúan una serie de factores que hacen posible el establecimiento de las formas de vida, los cuales se denominan factores ambientales y se pueden clasificar en factores bióticos y abióticos.
      .col-md-6(data-aos="fade-left")
        img.px-md-2(src="@/assets/curso/tema1-img.png")

    p.mb-4(data-aos="fade") El conjunto de factores bióticos y abióticos y las relaciones que existen entre ellos juegan un importante rol en los ecosistemas y mantienen el equilibrio en el planeta. 

    .row.justify-content-center.mb-5
      .col-md-8
        .row
          .col-md-6.col-lg.mb-4.mb-lg-0(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/tema1-ico1.svg' alt='Factores bióticos')
              .tarjeta.bg-azul2
                .text-white.text-center.p-4
                  h3.mt-4.text-center Factores bióticos
                  p Conjunto de formas de vida que existen en un ecosistema.
          .col-md-6.col-lg.mb-4.mb-lg-0(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/tema1-ico2.svg' alt='Factores abióticos')
              .tarjeta.bg-azul
                .text-white.text-center.p-4
                  h3.mt-4.text-center Factores abióticos
                  p Conjunto de elementos físicos o químicos del ambiente que proporcionan las condiciones donde se establecen y desarrollan los seres vivos; este conjunto de condiciones se denomina biotopo.

    p.mb-4(data-aos="fade") En la siguiente figura, se puede observar un listado de factores bióticos y abióticos dentro de un ecosistema, donde la combinación de los factores abióticos genera un determinado biotopo que permite el establecimiento de unos factores bióticos específicos.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-4
          h5 Figura 1. 
          span Factores bióticos y abióticos del ecosistema
        figure
          img.mb-2(src="@/assets/curso/tema1-fig1.svg", alt="Factores bióticos y abióticos del ecosistema")
        figcaption Nota. Tomada de Currículos Exploratorios en TIC (s. f.). http://aprende.colombiaaprende.edu.co/sites/default/files/naspublic/curriculos_ex/n2g10_cienamb/nivel2/ciencias/unidad1/leccion1.html

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-morado.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-md-4
              img.px-md-2(src="@/assets/curso/tema1-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.texto-blanco
                  h4.mb-2 Factores Ambientales
                  p.text-small Para profundizar un poco más en este concepto, puede observar el video <b>“Factores Ambientales”</b> de Tebaev (Telebachillerato de Veracruz) México, que se encuentra dentro del material complementario o a través del siguiente enlace: 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=0xRvu04-u4Q" target="_blank")
                    span Enlace
                    i.fas.fa-link

    Separador


    // 1.1
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 1.1  Factores abióticos

    p(data-aos="fade") Son los componentes no vivos que hacen parte del ecosistema, son un conjunto de elementos físicos y químicos que condicionan la capacidad de desarrollo de los seres vivos. Estos factores están presentes en diferentes fases y son componentes de la hidrósfera, la atmósfera y la litósfera. 
 
    p.mb-4(data-aos="fade") En la siguiente figura, se observa el conjunto de factores abióticos de un ecosistema (biotopo), donde se pueden destacar la luz solar, el viento, la humedad, la temperatura, los minerales del suelo, la presión atmosférica, la salinidad del agua, etc. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-4
          h5 Figura 2. 
          span Biotopo (factores abióticos del ecosistema)
        figure
          img.mb-2(src="@/assets/curso/tema1-1-fig2.svg", alt="Biotopo (factores abióticos del ecosistema)")
        figcaption Nota. Tomada de Currículos Exploratorios en TIC (s. f.). http://aprende.colombiaaprende.edu.co/sites/default/files/naspublic/curriculos_ex/n2g10_cienamb/nivel2/ciencias/unidad1/leccion1.html

    .row.mb-4
      .col-md-6.col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        p Todos estos factores se relacionan entre sí, generando interacciones que afectan a otros factores, haciendo que, cuando uno cambia, cambie otro y, por consiguiente, alteran el equilibrio del ecosistema. 
      .col-md-6(data-aos="fade-left")
        .bloque-texto-b.color-secundario
          .bloque-texto-b__texto
            h5.mb-0 Los factores abióticos se encuentran afectados por procesos como la contaminación ambiental en todas sus formas y los diferentes problemas de degradación del ambiente.
    
    p.mb-4(data-aos="fade") En la siguiente tabla, se presenta una descripción de algunos de los factores abióticos más relevantes:

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-4
          h5 Tabla 1. 
          span Principales factores abióticos de un ecosistema
        .tabla-b
          table
            thead.tabla-b__header.bg-azul
              tr.bg-azul
                th.th1 
                  h3.mb-0 Tipo
                th.th2 
                  h3.mb-0 Nombre
                th.th3 
                  h3.mb-0 Descripción
            tbody 
              tr
                td.td1(rowspan="7") 
                  strong Físicos
                td.text-center Luz solar
                td.sin El sol, como la principal fuente de energía para la Tierra, tiene mucha incidencia en muchos de los aspectos sobre el planeta, tales como la fotosíntesis y la temperatura.  
              tr
                td.text-center Temperatura
                td.sin Ejerce una gran influencia sobre el establecimiento de las formas de vida, ya que afecta directamente los procesos metabólicos, la velocidad de reacciones bioquímicas, y los procesos de regulación de temperatura corporal de algunos animales.
              tr
                td.text-center Presión atmosférica
                td.sin El Centro Nacional de Metrología de México – CENAM- la define como la presión ejercida por la atmósfera sobre todo objeto que se encuentre bajo su influencia.
              tr
                td.text-center Clima
                td.sin Es el agregado de condiciones atmosféricas de un lugar específico y durante un periodo de tiempo específico (IDEAM).
              tr
                td.text-center Relieve
                td.sin Conjunto de condiciones geográficas de un terreno que determinan la orografía y que varían otros factores con su altitud, como la temperatura y la presión atmosférica.
              tr
                td.text-center Humedad
                td.sin Es el factor que permite la posibilidad de captación de agua del ambiente, por lo cual es esencial para la síntesis de nueva materia orgánica.
              tr
                td.text-center Viento
                td.sin Es el movimiento de masas de aire debido a las corrientes de convección en la atmósfera terrestre. Su magnitud depende de otros parámetros, como la luz solar o la presión atmosférica.       
              tr
                td.td2(rowspan="2") 
                  strong Químicos
                td.text-center pH
                td.sin Propiedad que indica el grado de acidez o basicidad de un cuerpo. Un medio que tenga un nivel muy alto de acidez o de basicidad, resulta nocivo para la mayoría de seres vivos.
              tr
                td.text-center Nutrientes del suelo
                td.sin Son elementos o compuestos vitales para el desarrollo de los seres vivos. Aparecen de las relaciones entre pequeñas partículas de arena, arcilla, minerales, restos de plantas y animales en descomposición, mediadas por el efecto de otros factores como el pH, la temperatura, la humedad, etc.

    Separador


    // 1.2
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 1.2  Factores bióticos

    p.mb-4(data-aos="fade") Se definen como los seres vivos de los ecosistemas. Las interacciones entre estos seres, al igual que sus residuos, pueden llegar a transformar el ambiente. 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-g.bg-azul.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-2-img.jpg')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Existen ecosistemas de gran tamaño, con localización, clima, flora y fauna muy específicos, llamados biomas, dentro de los cuales se pueden nombrar la tundra, la taiga, el bosque templado, el bosque húmedo tropical, los desiertos, la sabana, entre otros.

    p.mb-4(data-aos="fade") Los seres vivos pueden organizarse y clasificarse dependiendo de su función dentro del ecosistema, especialmente aquella relacionada con su posición en la cadena o red trófica, de la siguiente forma:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        TabsA.color-acento-botones
          .tarjeta.bg-pestanas-tema1.text-white.p-4(titulo="Organismos productores")
            h4 Organismos productores
            p También llamados autótrofos, son aquellos que pueden sintetizar su alimento (fuente de energía) a partir de sustratos diferentes a la materia orgánica.
          .tarjeta.bg-pestanas-tema1.text-white.p-4(titulo="Organismos consumidores")
            h4 Organismos consumidores
            p También llamados heterótrofos, requieren alimentarse de otros seres vivos para obtener su energía. Se pueden dividir en:
            ul.lista-ul--color.color-lista
              li 
                i.fas.fa-dot-circle
                p.mb-0 
                  strong.destacado2 Consumidores de primer orden: 
                  | todos aquellos animales cuya alimentación se basa en plantas (herbívoros).
              li 
                i.fas.fa-dot-circle
                p.mb-0 
                  strong.destacado2 Consumidores de segundo orden: 
                  | animales que se alimentan de otros consumidores (depredadores).
              li 
                i.fas.fa-dot-circle
                p.mb-0 
                  strong.destacado2 Consumidores de tercer orden u omnívoros: 
                  | aquellos que pueden obtener su energía tanto de plantas como de otros animales.       
          .tarjeta.bg-pestanas-tema1.text-white.p-4(titulo="Organismos descomponedores o detritófagos")
            h4 Organismos descomponedores o detritófagos
            p Utilizan materia orgánica en descomposición como fuente de energía, son esenciales en los ciclos de la materia y los flujos de energía.

    p.mb-4(data-aos="fade") También se pueden organizar en niveles:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        ImagenInfografica
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1-2-infografia.svg', alt='Bioesfera')

          .tarjeta.bg-azul.p-3.text-white.text-center(x="50%" y="1%" numero="")
            .h5.mb-2 Átomo
            p.mb-0 Parte más pequeña de una sustancia que no se puede descomponer químicamente.

          .tarjeta.bg-azul.p-3.text-white.text-center(x="74%" y="7%" numero="")
            .h5.mb-2 Molécula
            p.mb-0 Agrupación de átomos que constituye la porción más pequeña de una sustancia pura.  

          .tarjeta.bg-azul.p-3.text-white.text-center(x="99%" y="50%" numero="")
            .h5.mb-2 Célula
            p.mb-0 Unidad estructural y funcional más pequeña de la materia viva.   

          .tarjeta.bg-azul.p-3.text-white.text-center(x="93%" y="75%" numero="")
            .h5.mb-2 Tejido
            p.mb-0 Conjunto organizado de células que cumplen una función específica.    

          .tarjeta.bg-azul.p-3.text-white.text-center(x="75%" y="93%" numero="")
            .h5.mb-2 Órgano
            p.mb-0 Conjunto de tejidos que forman una unidad funcional y estructural.  

          .tarjeta.bg-azul.p-3.text-white.text-center(x="50%" y="99%" numero="")
            .h5.mb-2 Sistema de órganos
            p.mb-0 Unión ordenada de órganos que trabajan en funciones similares.  

          .tarjeta.bg-azul.p-3.text-white.text-center(x="25%" y="93%" numero="")
            .h5.mb-2 Organismo
            p.mb-0 Ser capaz de existir por sí mismo, estructurado por varios sistemas.

          .tarjeta.bg-azul.p-3.text-white.text-center(x="7%" y="75%" numero="")
            .h5.mb-2 Población
            p.mb-0 Grupo de individuos de una misma especie que habitan la misma zona.

          .tarjeta.bg-azul.p-3.text-white.text-center(x="1%" y="50%" numero="")
            .h5.mb-2 Comunidad
            p.mb-0 Conjunto de diferentes poblaciones que se desarrollan en un mismo espacio.

          .tarjeta.bg-azul.p-3.text-white.text-center(x="7%" y="25%" numero="")
            .h5.mb-2 Ecosistema
            p.mb-0 Conjunto conformado por diferentes comunidades, el biotopo en el que viven y las diferentes interacciones que establecen.

          .tarjeta.bg-azul.p-3.text-white.text-center(x="25%" y="7%" numero="")
            .h5.mb-2 Bioma
            p.mb-0 Conjunto de ecosistemas característicos de una zona biogeográfica. 

    
    p(data-aos="fade") Además, se reconoce y acepta que la relación entre factores bióticos y abióticos es bidireccional, y que los seres vivos también pueden cambiar las condiciones del biotopo.

    Separador


    // 1.3
    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 1.3  Identificación de problemáticas ambientales

    .row.mb-4
      .col-md-6.mb-4(data-aos="fade-right")  
        .cajon-b.color-acento-botones.px-3
          p Toda alteración negativa, sea natural o antrópica, que sufra un ecosistema, sin importar si es local o global, se considera un problema ambiental y debe ser un asunto de control prioritario para las comunidades y los gobiernos. 
        p.mb-0.px-3 La gran mayoría de problemas ambientales son generados por el hombre y su desmedido uso y explotación de la naturaleza, la sobrepoblación y el desarrollo tecnológico desbordado que prevalece en el actual sistema económico mundial, lo que hace que producir artículos y bienes de consumo sea más importante que la conservación del equilibrio de los recursos que brinda el planeta.
      .col-md-6(data-aos="fade-left")
        img.px-md-2(src="@/assets/curso/tema1-3-img.png")

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0  Los efectos adversos potenciales derivados de la inserción de eventos tecnológicos y de un modelo de desarrollo cada vez más dependiente del consumo y uso de los recursos naturales han generado un panorama de insostenibilidad que pone en peligro la propia base material de la vida humana, dando con ello paso a la denominada sociedad del riesgo. 
              br 
              br
            h5.text-right.px-md-5 (Beck, 1998, citado por Ramírez, 2015)
            i.fas.fa-quote-right
    
    
    p.mb-4(data-aos="fade") Se puede decir que actividades como la producción industrial, el uso de combustibles fósiles como única fuente de energía, el mal manejo de residuos, la deforestación, entre otras, son las principales causas de los problemas ambientales actuales en el mundo. Muchos de los problemas generados a partir de estas actividades tienen consecuencias irreversibles y letales para la vida humana y para los ecosistemas en general.

    .row.justify-content-center.bloque-fondo-tema1-3.p-3.p-md-5.mb-5(data-aos="fade-down")
      .col-md-6
        img(src="@/assets/curso/tema1-3-img2.jpg")
      .col-md-6.text-white.px-md-4
        h4 Problemas ambientales globales más reconocidos:  
        ul.lista-ul--color.color-lista
          li.mb-0 
            i.fas.fa-dot-circle
            | Efecto invernadero (calentamiento global).
          li.mb-0 
            i.fas.fa-dot-circle
            | Destrucción de la capa de ozono.
          li.mb-0 
            i.fas.fa-dot-circle
            | Lluvia ácida.
          li.mb-0 
            i.fas.fa-dot-circle
            | Crisis energética.
          li.mb-0 
            i.fas.fa-dot-circle
            | Erosión y degradación de suelos.
          li.mb-0 
            i.fas.fa-dot-circle
            | Deforestación y desertización.
          li.mb-0 
            i.fas.fa-dot-circle
            | Pérdida de biodiversidad.
          li.mb-0 
            i.fas.fa-dot-circle
            | Contaminación del recurso hídrico.
          li.mb-0 
            i.fas.fa-dot-circle
            | Generación de residuos sólidos y peligrosos.
          li.mb-0 
            i.fas.fa-dot-circle
            | Contaminación acústica.
          li.mb-0 
            i.fas.fa-dot-circle
            | Contaminación atmosférica.
          li.mb-0 
            i.fas.fa-dot-circle
            | Contaminación lumínica.
          li.mb-0 
            i.fas.fa-dot-circle
            | Contaminación electromagnética.                      
          li.mb-0 
            i.fas.fa-dot-circle
            | Eutrofización.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .cajon.color-acento-botones.p-4.p-md-5
          p.mb-0 La biorremediación es una alternativa que permite hacer frente a varios de los problemas ambientales actuales, presentándose como una tecnología de bajo costo y buena eficiencia, aunque su principal aplicación se ha dado en aquellos problemas ambientales localizados en el componente suelo y agua.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-morado.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-md-4
              img.px-md-2(src="@/assets/curso/tema1-3-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.texto-blanco
                  p.text-small Para profundizar un poco más en este tema de los problemas ambientales globales y locales, para el caso de estudio en Colombia, observe el artículo <b>“Identificación de problemáticas ambientales en Colombia a partir de la percepción social de estudiantes universitarios localizados en diferentes zonas del país”</b>, que se encuentra en el material complementario o a través del siguiente enlace: 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0188-49992015000300009&lng=es&tlng=es" target="_blank")
                    span Enlace
                    i.fas.fa-link


  
</template>

<script>
export default {
  name: 'Tema1',
  components: {
    // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    mostrarIndicador: true,
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
