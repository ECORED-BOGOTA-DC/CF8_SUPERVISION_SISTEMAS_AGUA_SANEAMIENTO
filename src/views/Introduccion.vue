<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/intro1.svg" data-aos="fade-right")
      .col-lg-1
      .col-lg-7(style="place-self:center;")
        .p-4.cont_arrow1(style="background-color:#E8E8E8;border-radius:7px;position:relative")
          p.mb-0(data-aos="fade-up") Estimado aprendiz, bienvenido a este componente formativo denominado “#[strong Calidad del agua potable]”, por medio del cual podrá conocer el agua como un recurso vital para la supervivencia de los seres vivos en el planeta; aunque se clasifica como un recurso renovable, la demanda diaria del mismo ha generado cambios en los ciclos hidrológicos naturales, los cuales junto a efectos como el calentamiento global, la contaminación hídrica, la deforestación, entre otros impactos ambientales generan una presión en el ecosistema que se traduce en una disminución de la oferta hídrica del planeta y la creciente posibilidad de que diferentes zonas queden con un acceso reducido al recurso o en casos más severos, pierdan totalmente la disponibilidad del mismo.
    

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_arrow1:before
  content: ''
  position: absolute
  width: 0
  height: 0
  top: 12%
  left: -99px
  border-top: 100px solid transparent
  border-bottom: 100px solid transparent
  border-right: 100px solid #E8E8E8
</style>
