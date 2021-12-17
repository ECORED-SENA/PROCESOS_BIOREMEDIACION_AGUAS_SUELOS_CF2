<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero.text-white
        span 4
      h1 Definición de alternativa de biorremediación para un suelo o agua contaminada 

    p.mb-4(data-aos="fade") Independientemente del tipo de contaminante o de matriz en la que se encuentre, se puede desarrollar un procedimiento de definición del tratamiento de biorremediación del componente que presente una alta eficiencia y economía:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        LineaTiempoD.color-primario
          p.text-small(numero="1" titulo="Seleccionar la alternativa de biorremediación a aplicar") Consiste en la realización de un diagnóstico inicial general del área o componente donde se encuentra la problemática de contaminación a tratar. Esta es una etapa indispensable, ya que es aquí donde se realiza el análisis de los factores ambientales, así como de los aspectos socioculturales de la zona de influencia del problema. Si el diagnóstico es adecuado, se podrá seleccionar una alternativa de tratamiento más apropiada en función de si es mejor realizarla in situ o ex situ y de la rapidez y del porcentaje de remoción del contaminante.
          
          p.text-small(numero="2" titulo="Caracterización de las sustancias contaminantes a tratar") Se deben conocer de forma detallada sus propiedades físicas, químicas y biológicas, lo cual permitirá la identificación de los organismos, rutas metabólicas y procesos que pueden remediar el problema objeto de estudio. Es la parte más importante del procedimiento, ya que de este paso depende la técnica de biorremediación a utilizar.
          
          p.text-small(numero="3" titulo="La implementación a escala laboratorio de las alternativas de solución más adecuadas para el proceso de biorremediación") Con el fin de evaluar los pro y contra de la aplicación de cada una de estas alternativas y definir cuál o cuáles continúan a la escala piloto, para obtener resultados adecuados y concluyentes: la alternativa propuesta puede realizarse in situ o ex situ, definir implicaciones sociales, ambientales, técnicas y económicas.
          
          p.text-small(numero="4" titulo="Diseño e implementación de la alternativa seleccionada") Existen algunos casos, en los que es posible integrar y usar dos o más alternativas de tratamiento para tratar diferentes tipos de contaminantes al mismo tiempo, esto se conoce como tren de tratamiento.  

    
    p.mb-4(data-aos="fade") El siguiente diagrama de flujo, construido por Fabelo (2017), determina la alternativa de biorremediación a aplicar en suelos contaminados con hidrocarburos:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-4
          h5 Figura 8. 
          span Diagrama de flujo para selección de alternativa de biorremediación a utilizar 
        figure
          img.mb-2(src="@/assets/curso/tema4-fig8.svg", alt="Diagrama de flujo para selección de alternativa de biorremediación a utilizar ")
        figcaption Nota. Adaptado de Fabelo (2017).  

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-morado.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-md-4
              img.px-md-2(src="@/assets/curso/tema4-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.texto-blanco
                  h4.mb-2 Propuesta de metodología para la recuperación de suelos contaminados
                  p.text-small Para profundizar sobre el trabajo de Fabelo y la metodología para la selección de técnicas de biorremediación en suelos, consulte el artículo “Propuesta de metodología para la recuperación de suelos contaminados”, que se encuentra en el material complementario o a través del siguiente enlace 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S2223-48612017000100006&lng=es&tlng=es:" target="_blank")
                    span Enlace
                    i.fas.fa-link


</template>

<script>
export default {
  name: 'Tema4',
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
