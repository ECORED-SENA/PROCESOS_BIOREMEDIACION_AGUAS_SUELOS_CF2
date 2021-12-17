<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero.text-white
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade") La Biorremediación aparece como una disciplina que ofrece una amplia gama de alternativas de solución a las diferentes problemáticas ambientales, especialmente, a aquellas relacionadas con los componentes agua y suelo, o que tienen que ver con contaminantes de difícil degradación o de mucha persistencia en el ambiente. 

    p.mb-4(data-aos="fade") Siendo así, en el siguiente video introductorio del componente, se explica en qué consisten los procesos y técnicas de biorremediación:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/SNiN9ZT9XQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-4(data-aos="fade") Para la elaboración de este componente, se abordaron varios autores conocidos en 
      strong.destacado aplicación de procesos de biorremediación, 
      | de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de 
      strong.destacado procesos de biorremediación para aguas y suelos.    
    

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
