<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>
<style lang="sass">
.banner-interno
  height: 114px
.banner-interno__fondo
  background-image: url(assets/curso/fondo_tema.png) !important
.banner-principal .tarjeta
  background-position: inherit !important
.titulo-principal__numero
  background-color: #3076B6 !important
.curso-main-container > .container
  overflow-x: clip !important
.titulo-segundo:after
  border-left-color: #008B8A !important
.banner-principal p, .banner-principal h1, .banner-principal h2, .banner-principal h3, .banner-principal h4, .banner-principal h5, .banner-principal h6
  color: #12263F !important
.banner-interno__titulo h1, .banner-interno__titulo h2, .banner-interno__titulo h3, .banner-interno__titulo h4, .banner-interno__titulo h5, .banner-interno__titulo h6
  color: #12263F !important
.banner-interno__titulo__icono
  background-color: #12263F !important
.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
  padding-bottom: 0px !important
  padding-right: 0px !important
  text-align: center
.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img img
  max-width: 400px
  display: inline
.banner-principal .tarjeta
  background-position: center !important
.banner-principal-decorativo-1
  top: 12% !important
  right: 60% !important
.banner-principal-decorativo-2
  top: 72% !important
  right: 69% !important
.banner-principal-decorativo-3
  animation: float1 2.8s ease-in-out infinite alternate !important
  position: absolute !important
  top: 23% !important
  right: 6% !important
.banner-principal-decorativo-4
  animation: float1 2.8s ease-in-out infinite alternate !important
  position: absolute !important
  top: 75% !important
  right: 2% !important
@media screen and (max-width: 992px)
  .cont_responsive1
    right: 0 !important
    width: 100% !important
  .cont_responsive2
    left: 0 !important
    width: 100% !important
  .cont_gradiente_gris
    margin-top: 0
@media screen and (max-width: 768px)
  .cont_gradiente_gris
    margin-top: 0 !important
.cont_gradiente1, .cont_gradiente1 *
  position: relative
.cont_gradiente1:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(./assets/curso/gradiente.png)
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.cont_gradiente2
  position: relative
.cont_gradiente2:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(./assets/curso/gradiente.png)
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.cont_gradiente_gris
  position: relative
  margin-top: -90px
  background: rgb(222,222,222)
  background: linear-gradient(180deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 50%, rgba(222,222,222,1) 100%)
  border-radius: 10px
.cont_gradiente3, .cont_gradiente3 *
  position: relative
.cont_gradiente3:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(./assets/curso/tema2/32.png)
  background-repeat: no-repeat
  background-size: cover
  background-position: center
</style>
