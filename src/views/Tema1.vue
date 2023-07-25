<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Monitorear la calidad
    
    .row.p-2(style="background-color:#F0FBFF;")
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/1.svg" data-aos="fade-right" alt="Imagen decorativa")
      .col.p-3(style="place-self:center;")
        p.mb-0(data-aos="fade-up") De acuerdo con el Instituto Nacional de Salud (INS) (2011) en su manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio.  Existen 3 tipos de muestras para analizar física, química y microbiológicamente la calidad del agua. Veamos algunas de ellas:
    
    .row.mt-5
      .col-lg.mb-4.mb-mb-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5.mt-5.mb-5
              h5.text-white.text-center Tomada en un momento determinado, específicas para redes de distribución.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}")
              .p-3.text-center.w-100(style="background-color:rgb(0 113 179 / 90%);position:absolute;bottom:0;")
                h3.text-white.mb-0 Muestras simples
      .col-lg.mb-4.mb-mb-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5.mt-5.mb-5
              h5.text-white.text-center Para caracterizar fuentes de aguas naturales o crudas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/3.png')})`}")
              .p-3.text-center.w-100(style="background-color:rgb(0 113 179 / 90%);position:absolute;bottom:0;")
                h3.text-white.mb-0 Muestras compuestas
      .col-lg.mb-4.mb-mb-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5.mt-5.mb-5
              h5.text-white.text-center Aplicables a la caracterización del agua de fuentes superficiales, especialmente en ríos anchos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/4.png')})`}")
              .p-3.text-center.w-100(style="background-color:rgb(0 113 179 / 90%);position:absolute;bottom:0;")
                h3.text-white.mb-0 Muestras integradas
    
    p.mt-5(data-aos="fade-up") Para garantizar la calidad del agua potable y que esta no afecte la salud humana es necesario conocer los estrictos controles que se deben tener en cuenta para hacer un correcto muestreo de este tipo de agua, para conocer los procedimientos se invita a ver el vídeo que se presenta a continuación:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:600px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Toma de muestras en sistemas de distribución de redes
    
    p.mt-5(data-aos="fade-up") De acuerdo con el INS (2011) en su manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio, se realiza la toma de muestras en los sistemas de distribución en redes de agua, este es el procedimiento mínimo que debe ser llevado a cabo:

    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#ED8E1E;")
              span.fw-bold 1
            div Realizar la actividad de muestreo, según cronograma de vigilancia previamente establecido por la autoridad sanitaria.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#ED8E1E;")
              span.fw-bold 2
            div Informar previamente a la persona prestadora la realización de la toma.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#ED8E1E;")
              span.fw-bold 3
            div Arribar al punto de toma según ruta, previo a la hora programada y revisar el tipo, protección, mantenimiento y cuidado del sitio y dispositivo de toma de muestra que realice la persona prestadora.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#ED8E1E;")
              span.fw-bold 4
            div Alistar todo el material de recolección de muestras, que incluye el formato de acta, los elementos de limpieza y desinfección del punto, los envases para recolección, los equipos obligatorios para realizar los análisis en sitio, los materiales para preservación y transporte y elementos de protección personal.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#ED8E1E;")
              span.fw-bold 5
            div Asear el sitio y revisar dispositivo de toma (grifo, válvula de globo, llave, corte rápido) que no haya fugas entre el tambor y el cuello. Limpiar el orificio de salida con una gasa o torunda de algodón con solución de hipoclorito o desinfectante, en los casos en que el material no sea plástico sino metálico, podrá flamear con llama y limpiarse posteriormente con alcohol.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#ED8E1E;")
              span.fw-bold 6
            div Abrir para purgar sistema, dejando fluir el agua mínimo 1 minuto o más, para quitar la estanqueidad del tubo (tener presente perdidas de aguas, sin detrimento de la purga) asegurando que el agua contenida en las tuberías ha sido renovada y la temperatura del agua se ha estabilizado para tomar las muestras definitivas.
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-left" alt="Imagen decorativa")
    
    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/6.svg" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-7(style="place-self:center;")
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#ED8E1E;")
              span.fw-bold 7
            div Tomar la muestra y la contra muestra, contando incluso el tiempo de purga, en un lapso no superior a 10 minutos sin que el agua deje de fluir, siempre y cuando se tome muestra y contra amuestra para todas las características. Si es sólo muestra y para algunas de las características, la toma debe realizarse entre 3 y 5 minutos máximo, para considerar la toma como única en los procesos de vigilancia y control.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#ED8E1E;")
              span.fw-bold 8
            div Tener presente el orden para la toma de las muestras, recolectando las mismas después de haber pasado el tiempo de purga. Inicialmente, alistar el material que incluye formatos, insumos y equipos para (pH, cloro y adicionales como color, conductividad y temperatura), obligatorios de realizar en sitio.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#ED8E1E;")
              span.fw-bold 9
            div Realizar los análisis y registrar los resultados obtenidos del pH, cloro y otras características adicionales. Mientras se hacen las determinaciones de las características obligatorias en sitio; poner recipientes para recolectar volumen de muestra necesario para análisis fisicoquímicos que serán enviados al laboratorio formal, recuerde no dejar cámara de aire y tapar inmediatamente.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#ED8E1E;")
              span.fw-bold 10
            div Recoger seguidamente, volumen de muestra para características microbiológicas, ya sea de microorganismos básicos o microorganismos especiales; evitar contaminar recipiente o dispositivo. Recordar preservante para desactivar el cloro libre presente, adicionado antes al recipiente de toma o agregar en sitio. Dejar siempre en la cámara de aire el recipiente, tapar y refrigerar inmediatamente.
    
    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#ED8E1E;")
              span.fw-bold 11
            div Recolectar finalmente el volumen de muestras para cada uno de los análisis especiales que se requiera, teniendo presente el preservante, volumen necesario, envase especial y refrigeración si se requiere, tapando inmediatamente para transporte.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#ED8E1E;")
              span.fw-bold 12
            div Diligenciar el formato del acta, identifique las muestras, empaque en las neveras plásticas o de icopor con material refrigerante, en lo posible siempre ice pack (evitar bolsas de hielo o hielo seco) Firmar y hacer firmar el acta por parte de la persona prestadora si hubo toma de contra muestra, registrando todos los datos necesarios para reportar al sistema.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#ED8E1E;")
              span.fw-bold 13
            div Dejar el sitio de muestreo igual o mejor de lo que estaba, una vez empacadas las muestras, anotar cualquier otra consideración relevante en la toma de la muestra y que pueda influir o ser tomada como criterio para futuras observaciones o requerimientos entre las partes.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#ED8E1E;")
              span.fw-bold 14
            div Enviar o transportar por el mejor medio disponible y en el menor tiempo posible las muestras al laboratorio, considerando el tiempo estipulado en los cuadros de preservación de muestras y la viabilidad de los tiempos que se requieren desde la toma hasta el análisis de cada una de las características a evaluar.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta(style="background-color:#ED8E1E;")
              span.fw-bold 15
            div Entregar al laboratorio como parte de la cadena de custodia el acta de toma de muestra, las muestras tomadas y terminar proceso con firma de recibido por parte del laboratorio.
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/7.svg" data-aos="fade-left" alt="Imagen decorativa")
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:700px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Toma de muestras en cuerpos de agua usados para consumo humano
    
    p.mt-5(data-aos="fade-up") En algunos casos, como en acueductos rudimentarios o municipales, la fuente principal de abastecimiento de agua son los cuerpos de agua de la zona, para este caso se aconseja realizar las siguientes acciones para la toma de la muestra, de acuerdo con el INS (2011).

    ImagenInfografica.infografica1.color-secundario.mt-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/8.svg' data-aos="zoom-in-up" alt="Imagen decorativa")
      .tarjeta.color-acento-contenido.p-3(x="17%" y="55%" numero="1" style="background-color:#4DB1F0;border-radius:0px;border:2px #fff solid;")
        p.mb-0(style="color:#12263F;") Identificar el punto de muestreo tomándolas en el centro y en la orilla del cuerpo de agua, en puntos de turbulencia.
      .tarjeta.color-acento-contenido.p-3(x="26%" y="20%" numero="2" style="background-color:#4DB1F0;border-radius:0px;border:2px #fff solid;")
        p.mb-0(style="color:#12263F;") Enjuagar los recipientes de submuestra y de muestras con agua del sitio de muestreo (3 o 4 veces).
      .tarjeta.color-acento-contenido.p-3(x="38%" y="32%" numero="3" style="background-color:#4DB1F0;border-radius:0px;border:2px #fff solid;")
        p.mb-0(style="color:#12263F;") Sumergir cada recipiente de submuestra en forma vertical de tal manera que el agua entre libremente en él, hasta que se complete el volumen total del frasco.
      .tarjeta.color-acento-contenido.p-3(x="38%" y="85%" numero="4" style="background-color:#4DB1F0;border-radius:0px;border:2px #fff solid;")
        p.mb-0(style="color:#12263F;") Verter el contenido completo de cada submuestra tomada en el recipiente de muestra (botella color ámbar de 1 litro).
      .tarjeta.color-acento-contenido.p-3(x="54%" y="85%" numero="5" style="background-color:#4DB1F0;border-radius:0px;border:2px #fff solid;")
        p.mb-0(style="color:#12263F;") Tomar la siguiente submuestra repitiendo los pasos 3 y 4.
      .tarjeta.color-acento-contenido.p-3(x="60%" y="22%" numero="6" style="background-color:#4DB1F0;border-radius:0px;border:2px #fff solid;")
        p.mb-0(style="color:#12263F;")  Medir el pH siguiendo el procedimiento indicado para tal fin.
      .tarjeta.color-acento-contenido.p-3(x="32%" y="34%" numero="7" style="background-color:#4DB1F0;border-radius:0px;border:2px #fff solid;")
        p.mb-0(style="color:#12263F;") Tapar el recipiente asegurándose que no haya fugas de agua.
      .tarjeta.color-acento-contenido.p-3(x="58%" y="9%" numero="8" style="background-color:#4DB1F0;border-radius:0px;border:2px #fff solid;")
        p.mb-0(style="color:#12263F;") Consignar la información requerida en la etiqueta y pegarla al recipiente de muestra con cinta adecuada y suficiente.
      .tarjeta.color-acento-contenido.p-3(x="68.1%" y="45%" numero="9" style="background-color:#4DB1F0;border-radius:0px;border:2px #fff solid;")
        p.mb-0(style="color:#12263F;") Almacenar para su envío al laboratorio en refrigeración o por lo menos en lugar fresco fuera del alcance de los rayos solares.
      .tarjeta.color-acento-contenido.p-3(x="79%" y="58%" numero="10" style="background-color:#4DB1F0;border-radius:0px;border:2px #fff solid;")
        p.mb-0(style="color:#12263F;") Enviar las muestras en la nevera de icopor debidamente sellada y en el menor tiempo posible.
    
    p.mt-5(data-aos="fade-up") Para el caso de muestras microbiológicas se invita a consultar el siguiente material de ejemplo de una práctica de laboratorio:

    .col-lg-10.m-auto.mt-5
      .row.p-4(style="background: rgb(70,164,224);background: linear-gradient(180deg, rgba(70,164,224,1) 0%, rgba(34,98,156,1) 100%);border-radius:10px;")
        .col-lg-1.col-md-3.mb-4.mb-md-0.text-center(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg" data-aos="fade-right" alt="Imagen decorativa")
        .col-lg-9.col-md-6.mb-4.mb-md-0(style="place-self:center;")
          h4.text-white(data-aos="fade-up") Práctica muestreo de aguas para análisis microbiológico
          p.text-white.mb-0(data-aos="fade-up") Para conocer más, le invitamos a consultar el documento.
        .col-lg-2.col-md-3.text-center(style="place-self:center;")
          a.boton.color-primario(href="https://drive.google.com/file/d/1bfAXzxYw9by3ZoW7uNoXS14SMETwAVKY/view?usp=sharing" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-download







      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
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

<style lang="sass">
.infografica1 .img-infografica__item__dot:before, .img-infografica__item__dot:after, .img-infografica-b__item__dot:before, .img-infografica-b__item__dot:after
  border-radius: 0 !important
  background-color: #3076B6 !important
.infografica1 .img-infografica__item__dot:before, .img-infografica-b__item__dot:before
  opacity: 1
.infografica1.img-infografica.color-secundario .img-infografica__item__numero, .img-infografica-b.color-secundario .img-infografica__item__numero
  color: #fff !important
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: solid 1px #12263F
</style>
