<template lang="pug">
.btns
  img(src='@/assets/curso/info-fondo.svg', alt='Texto que describa la imagen')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.p-2(v-if="index === hover") 
      h5.mb-1 {{boton.titulo}}
      p(v-html="boton.texto")
      h5.mb-1 {{boton.titulo2}}
      p.mb-0(v-html="boton.texto2")



</template>

<script>
export default {
  name: 'BotonesB',
  data: () => ({
    indicador: true,
    hover: null,
    size: '6%',
    botones: [
      {
        img: require('@/assets/curso/info-01.svg'),
        img_h: require('@/assets/curso/info-01-b.svg'),
        pos_x: '1.5%',
        pos_y: '4%',
        titulo: 'Decreto 2811 de 1974.',
        texto: 'Código de recursos naturales renovables y de protección.',
      },
      {
        img: require('@/assets/curso/info-02.svg'),
        img_h: require('@/assets/curso/info-02-b.svg'),
        pos_x: '8.7%',
        pos_y: '49%',
        titulo: 'Ley 09 de 1979.',
        texto: 'Por la cual se dictan medidas sanitarias.',
      },
      {
        img: require('@/assets/curso/info-03.svg'),
        img_h: require('@/assets/curso/info-03-b.svg'),
        pos_x: '15.5%',
        pos_y: '4%',
        titulo: 'Convenio de Basilea.',
        texto:
          'Sobre el control de movimientos fronterizos de desechos peligrosos.',
      },
      {
        img: require('@/assets/curso/info-04.svg'),
        img_h: require('@/assets/curso/info-04-b.svg'),
        pos_x: '22.7%',
        pos_y: '49%',
        titulo: 'Constitución política de Colombia',
        texto: '',
      },
      {
        img: require('@/assets/curso/info-05.svg'),
        img_h: require('@/assets/curso/info-05-b.svg'),
        pos_x: '29.5%',
        pos_y: '4%',
        titulo: 'Ley 99 de 1993.',
        texto: 'Se crea el Ministerio de Medio Ambiente.',
      },
      {
        img: require('@/assets/curso/info-06.svg'),
        img_h: require('@/assets/curso/info-06-b.svg'),
        pos_x: '36.5%',
        pos_y: '49%',
        titulo: 'Ley 253 de 1996.',
        texto: 'Por la cual se aprueba el Convenio Basilea',
      },
      {
        img: require('@/assets/curso/info-07.svg'),
        img_h: require('@/assets/curso/info-07-b.svg'),
        pos_x: '43.5%',
        pos_y: '4%',
        titulo: 'Convenio de Rotterdam.',
        texto:
          'Sobre la aplicación del consentimiento fundamentado previo a ciertos plaguicidas y productos químicos peligrosos.',
      },
      {
        img: require('@/assets/curso/info-08.svg'),
        img_h: require('@/assets/curso/info-08-b.svg'),
        pos_x: '50.5%',
        pos_y: '49%',
        titulo: 'Decreto 1609 de 2002.',
        texto:
          'Reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas.',
      },
      {
        img: require('@/assets/curso/info-09.svg'),
        img_h: require('@/assets/curso/info-09-b.svg'),
        pos_x: '57.5%',
        pos_y: '4%',
        titulo: 'Decreto 4741 de 2005.',
        texto:
          'Reglamenta parcialmente la prevención y el manejo de los RESPEL generados en el marco de la gestión integral.',
        titulo2:
          'Política Ambiental para la Gestión integral de RESPEL 2006-2018',
      },
      {
        img: require('@/assets/curso/info-10.svg'),
        img_h: require('@/assets/curso/info-10-b.svg'),
        pos_x: '64.5%',
        pos_y: '49%',
        titulo: 'Ley 1259 de 2007.',
        texto: 'Se aprueba el convenio de Rotterdam.',
        titulo2: 'Resolución 1362 de 2007.',
        texto2:
          'Establece requisitos y procedimientos para el registro de generadores RESPEL.',
      },
      {
        img: require('@/assets/curso/info-11.svg'),
        img_h: require('@/assets/curso/info-11-b.svg'),
        pos_x: '71.5%',
        pos_y: '4%',
        titulo: 'Ley 1196 de 2008.',
        texto: 'Se aprueba el Convenio de Estocolmo.',
        titulo2: 'Ley 1252 de 2008.',
        texto2:
          'Se dictan normas prohibitivas en materia ambiental, referentes a los RESPEL.',
      },
      {
        img: require('@/assets/curso/info-12.svg'),
        img_h: require('@/assets/curso/info-12-b.svg'),
        pos_x: '78.5%',
        pos_y: '49%',
        titulo: 'Ley 1672 de 2013.',
        texto:
          'Se adopta una política pública de gestión integral de residuos de aparatos eléctricos y electrónicos (RAEE).',
      },
      {
        img: require('@/assets/curso/info-13.svg'),
        img_h: require('@/assets/curso/info-13-b.svg'),
        pos_x: '85.4%',
        pos_y: '4%',
        titulo: 'Decreto 1076 de 2015.',
        texto:
          'Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible.',
      },
      {
        img: require('@/assets/curso/info-14.svg'),
        img_h: require('@/assets/curso/info-14-b.svg'),
        pos_x: '92.5%',
        pos_y: '49%',
        titulo:
          'Política ambiental para la gestión integral de aparatos eléctricos y electrónicos 2017-2032',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.btns
  position: relative
  &__item
    position: absolute
    background-size: cover
    border-radius: 50%
    cursor: pointer
    transition: background-image 0.2s ease-in-out
    box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.15)
  &__text
    position: absolute
    bottom: 100%
    left: 50%
    background-color: #FFF
    border: 2px solid #22AFD6
    width: 200px
    font-weight: bold
    text-align: center
    z-index: 999
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3)
    transform: translate(-50%)
</style>
