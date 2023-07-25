<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis de muestras de agua potable
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 De acuerdo con la resolución 2115 de 2007, por medio de la cual los Ministerios de la #[strong Protección Social y de Ambiente, Vivienda y Desarrollo Territorial] señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano, se establece que el agua para este fin debe cumplir con #[span(style="color:#3076B6;") requisitos] de calidad #[span(style="color:#3076B6;") físico química] y #[span(style="color:#3076B6;") microbiológica] durante todo el tiempo en el cual se estableció que el sistema de abastecimiento sería utilizado.
    
    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/2.svg" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-7(style="place-self:center;")
        p(data-aos="fade-up") La responsabilidad de realizar los controles recae en el prestador del servicio de acueducto bien sea departamental, municipal o distrital, la forma de ejercer estas responsabilidades se hace en los lugares y puntos de muestreo señalados en la Resolución 811 de 2008, por medio de la cual los Ministerios de Ambiente, Vivienda  y Desarrollo Territorial y de la Protección Social, definen los lineamientos donde definirán en su área de influencia los lugares y puntos de muestreo para el control y la vigilancia de la calidad del agua para consumo humano en la red de distribución. 
        p.mt-4(data-aos="fade-up") Así mismo y con el ánimo de establecer protecciones adicionales a la calidad del agua, además de los análisis de laboratorio que realice, la persona prestadora debe #[span(style="color:#3076B6;") implementar sistemas] de autocontrol, de conformidad con lo establecido en el Decreto 1575 de 2007 o la norma que lo modifique, reemplace o complemente.
    
    Separador.mt-5

    .titulo-srgundo
      h2#t_2_1 2.1 Estudios de tratabilidad
    
    .cont_gradiente3
      .row
        .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/3.png" data-aos="fade-right" alt="Imagen decorativa")
        .col-lg-8(style="place-self:center;")
          p(data-aos="fade-up") Teniendo en cuenta el Reglamento técnico de Agua y Saneamiento (RAS, 2010) del Ministerio de Vivienda, Ciudad y Territorio de Colombia (MVCT) en su  título C define los #[span(style="color:#3076B6;") estudios de tratabilidad] como una serie de #[span(style="color:#3076B6;") ensayos de laboratorio] o en planta piloto, realizados por lo menos a dos tipos de aguas crudas, uno representativo de aguas en condiciones de verano y otro de condiciones de invierno, bien sea en laboratorio, usando equipos para prueba de jarras con modificaciones para asegurar la calidad de los datos a obtener, o bien sea realizados en planta piloto. 
          p.mt-4(data-aos="fade-up") Con los estudios o ensayos de tratabilidad se obtienen los parámetros reales con los cuales se debe diseñar, optimizar, evaluar y operar una planta de tratamiento (p. 67). Dentro de los parámetros básicos a determinar en estos estudios de tratabilidad se encuentran (RAS, 2000, pp. 67, 68). Veamos algunos de ellos:
    
    SlyderF.mt-5(columnas="col-lg-4 col-xl-3")
      figure(style="position:relative;")
        img(src="@/assets/curso/tema2/4.png" alt="Imagen decorativa")
        .p-3.w-100(style="background-color:#E47700;position:absolute;bottom:0;border-radius:0px 0px 10px 10px;")
          h5.mb-0.text-center.text-white Turbiedad.
      figure(style="position:relative;")
        img(src="@/assets/curso/tema2/5.png" alt="Imagen decorativa")
        .p-3.w-100(style="background-color:#E47700;position:absolute;bottom:0;border-radius:0px 0px 10px 10px;")
          h5.mb-0.text-center.text-white Color.
      figure(style="position:relative;")
        img(src="@/assets/curso/tema2/6.png" alt="Imagen decorativa")
        .p-3.w-100(style="background-color:#E47700;position:absolute;bottom:0;border-radius:0px 0px 10px 10px;")
          h5.mb-0.text-center.text-white pH.
      figure(style="position:relative;")
        img(src="@/assets/curso/tema2/7.png" alt="Imagen decorativa")
        .p-3.w-100(style="background-color:#E47700;position:absolute;bottom:0;border-radius:0px 0px 10px 10px;")
          h5.mb-0.text-center.text-white Alcalinidad.
      figure(style="position:relative;")
        img(src="@/assets/curso/tema2/8.png" alt="Imagen decorativa")
        .p-3.w-100(style="background-color:#E47700;position:absolute;bottom:0;border-radius:0px 0px 10px 10px;")
          h5.mb-0.text-center.text-white Temperatura.
      figure(style="position:relative;")
        img(src="@/assets/curso/tema2/9.png" alt="Imagen decorativa")
        .p-3.w-100(style="background-color:#E47700;position:absolute;bottom:0;border-radius:0px 0px 10px 10px;")
          h5.mb-0.text-center.text-white Conductividad.
      figure(style="position:relative;")
        img(src="@/assets/curso/tema2/10.png" alt="Imagen decorativa")
        .p-3.w-100(style="background-color:#E47700;position:absolute;bottom:0;border-radius:0px 0px 10px 10px;")
          h5.mb-0.text-center.text-white Hierro.
      figure(style="position:relative;")
        img(src="@/assets/curso/tema2/11.png" alt="Imagen decorativa")
        .p-3.w-100(style="background-color:#E47700;position:absolute;bottom:0;border-radius:0px 0px 10px 10px;")
          h5.mb-0.text-center.text-white Cloruro.
      figure(style="position:relative;")
        img(src="@/assets/curso/tema2/12.png" alt="Imagen decorativa")
        .p-3.w-100(style="background-color:#E47700;position:absolute;bottom:0;border-radius:0px 0px 10px 10px;")
          h5.mb-0.text-center.text-white Sulfato.
      figure(style="position:relative;")
        img(src="@/assets/curso/tema2/13.png" alt="Imagen decorativa")
        .p-3.w-100(style="background-color:#E47700;position:absolute;bottom:0;border-radius:0px 0px 10px 10px;")
          h5.mb-0.text-center.text-white Nitrato.
      figure(style="position:relative;")
        img(src="@/assets/curso/tema2/14.png" alt="Imagen decorativa")
        .p-3.w-100(style="background-color:#E47700;position:absolute;bottom:0;border-radius:0px 0px 10px 10px;")
          h5.mb-0.text-center.text-white Dureza.
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p.mb-0(data-aos="fade-up") Estos parámetros pueden brindar la información para la caracterización del agua muestreada, determinar procesos unitarios dentro de la tratabilidad o potabilización, como es en el caso de #[span(style="color:#3076B6;")  identificar la dosis adecuada] de coagulante, floculante, cloro, entre otros. A su vez para definir tiempos óptimos de funcionamiento, de retención, efectividad del proceso, remoción esperada, entre otros.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/15.png" data-aos="fade-left" alt="Imagen decorativa")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_3 2.2 Ensayos de laboratorio
    
    figure.mb-md-0.mb-4
      img(src="@/assets/curso/tema2/16.png" data-aos="zoom-in-up" alt="Imagen decorativa")
    .col-lg-10.m-auto
      .p-4.cont_gradiente_gris
        p.mb-0(data-aos="fade-up") Antes de definir el diseño de una planta de tratamiento de agua potable (PTAP) se deben realizar ensayos de laboratorio para conocer las características, físico químicas y microbiológicas del agua, esto brindará la información necesaria que permite definir si el tipo de tratamiento que el agua requiere es convencional o no convencional. También se hace fundamental conocer algunas definiciones según reglamentación de la Norma Técnica Colombiana #[strong NTC].
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:300px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Ensayo de jarras
    
    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/17.svg" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-7(style="place-self:center;")
        p(data-aos="fade-up") También llamado test de jarras es un proceso reglamentado bajo la NTC 3903 de 2010, su objetivo básico es la determinación de los #[span(style="color:#3076B6;") coagulantes y auxiliares] (metálicos o prepolimerizados) sus dosis óptimas, secuencia de adición de estos para una turbiedad, un color, un pH, una temperatura, una alcalinidad y una dureza.
        p.mt-4(data-aos="fade-up") En el test de jarras se simulan procesos de coagulación y floculación, como determinantes importantes del acondicionamiento de partículas para la separación de sólidos suspendidos y disueltos en el agua mediante los procesos de #[span(style="color:#3076B6;") sedimentación y filtración].
    
    .col-lg-8.m-auto.mt-5
      .cajon.color-acento-botones.p-4(style="background-color:#98D8D7;")
        p.mb-0(data-aos="fade-up") La remoción de la turbiedad y el color en los sedimentadores y en los filtros es una consecuencia de los procesos anteriores realizados en forma óptima (MVCT, 2000, p.70) de calcio (Ca(OH)2) (OPS/ Cepis. 2002. p. 527) y soda cáustica (NaOH).
    
    .col-lg-10.m-auto.mt-5
      .row.p-4(style="background: rgb(70,164,224);background: linear-gradient(180deg, rgba(70,164,224,1) 0%, rgba(34,98,156,1) 100%);border-radius:10px;")
        .col-lg-1.col-md-3.mb-4.mb-md-0.text-center(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg" data-aos="fade-right" alt="Imagen decorativa")
        .col-lg-9.col-md-6.mb-4.mb-md-0(style="place-self:center;")
          h4.text-white(data-aos="fade-up") Práctica de test de jarras
          p.text-white.mb-0(data-aos="fade-up") Para conocer más, le invitamos a consultar el documento.
        .col-lg-2.col-md-3.text-center(style="place-self:center;")
          a.boton.color-primario(href="https://drive.google.com/file/d/1I5Hgn4tqEJIdrnymZOCHQ_LXRVhHtwLx/view?usp=sharing" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-download
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:300px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Ensayo de acidez del agua
    
    .row.mt-5.p-lg-5.p-4(style="background-color:#E3F4FF;")
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/18.svg" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-7(style="place-self:center;")
        p(data-aos="fade-up") La determinación de acidez en el agua permite conocer el contenido de sustancias ácidas expresadas como CaCO3, este valor es de gran importancia en el tratamiento y depuración de las aguas ya que muestra el comportamiento que tendrá frente de la subida del pH con bases fuertes. Normalmente un agua con un valor de acidez alto presentará una mayor oposición a las subidas de pH y la probable presencia de diferentes sustancias contaminantes, de allí la importancia de su determinación.
      p.mb-0.mt-4(data-aos="fade-up") Se invita a consultar el siguiente ejemplo de práctica de laboratorio para determinar la acidez en el agua:
    
    .col-lg-10.m-auto.mt-5
      .row.p-4(style="background: rgb(70,164,224);background: linear-gradient(180deg, rgba(70,164,224,1) 0%, rgba(34,98,156,1) 100%);border-radius:10px;")
        .col-lg-1.col-md-3.mb-4.mb-md-0.text-center(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg" data-aos="fade-right" alt="Imagen decorativa")
        .col-lg-9.col-md-6.mb-4.mb-md-0(style="place-self:center;")
          h4.text-white(data-aos="fade-up") Práctica de laboratorio determinación de acidez en agua
          p.text-white.mb-0(data-aos="fade-up") Para conocer más, le invitamos a consultar el documento.
        .col-lg-2.col-md-3.text-center(style="place-self:center;")
          a.boton.color-primario(href="https://drive.google.com/file/d/1DzRGCVijX7t9U5YRbN-W8ZK5a-odk3ud/view?usp=sharing" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-download
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:300px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Ensayo de alcalinidad
    
    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        p.mb-0(data-aos="fade-up") La alcalinidad es la capacidad para #[span(style="color:#3076B6;")  neutralizar ácidos], en las aguas crudas, se da principalmente por presencia de carbonatos. Sin embargo, es importante su determinación, debido a que también puede deberse a la presencia de #[span(style="color:#3076B6;") silicatos] o #[span(style="color:#3076B6;")  bases débiles disueltas]. Dentro del proceso de tratamiento y potabilización de aguas, la alcalinidad influencia directamente en los procesos de #[span(style="color:#3076B6;") coagulación], ya que puede inhibir la formación de flocs y de ablandamiento debido a la interacción con las sales de calcio y de magnesio.
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/19.png" data-aos="fade-left" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-up") Se invita a consultar el ejemplo de práctica de laboratorio para determinar la alcalinidad en el agua:

    .col-lg-10.m-auto.mt-5
      .row.p-4(style="background: rgb(70,164,224);background: linear-gradient(180deg, rgba(70,164,224,1) 0%, rgba(34,98,156,1) 100%);border-radius:10px;")
        .col-lg-1.col-md-3.mb-4.mb-md-0.text-center(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg" data-aos="fade-right" alt="Imagen decorativa")
        .col-lg-9.col-md-6.mb-4.mb-md-0(style="place-self:center;")
          h4.text-white(data-aos="fade-up") Práctica de determinación de alcalinidad en agua
          p.text-white.mb-0(data-aos="fade-up") Para conocer más, le invitamos a consultar el documento.
        .col-lg-2.col-md-3.text-center(style="place-self:center;")
          a.boton.color-primario(href="https://drive.google.com/file/d/1TX8ok6lWMvfJZghNq4gHsEBz3rzUqpRL/view?usp=sharing" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-download

    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:300px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Ensayo de cloro residual

    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/20.png" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-7(style="place-self:center;")
        p.mb-0(data-aos="fade-up")  Debido a que el #[span(style="color:#3076B6;") cloro] es ampliamente utilizado en los procesos de desinfección gracias a su alta eficiencia y bajo costo, se hace necesario la determinación de #[span(style="color:#3076B6;") cloro residual]. En las aguas crudas el cloro residual se forma cuando hay presencia de #[strong amoniaco o sustancias orgánicas]. En el agua potable se hace necesario determinar el cloro residual ya que el consumidor presenta un fuerte rechazo al sabor que genera en altas concentraciones.
    
    p.mt-5(data-aos="fade-up") Se invita a consultar este ejemplo de práctica de laboratorio para determinar el cloro residual en el agua:

    .col-lg-10.m-auto.mt-5
      .row.p-4(style="background: rgb(70,164,224);background: linear-gradient(180deg, rgba(70,164,224,1) 0%, rgba(34,98,156,1) 100%);border-radius:10px;")
        .col-lg-1.col-md-3.mb-4.mb-md-0.text-center(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg" data-aos="fade-right" alt="Imagen decorativa")
        .col-lg-9.col-md-6.mb-4.mb-md-0(style="place-self:center;")
          h4.text-white(data-aos="fade-up") Práctica determinación de cloro residual en agua
          p.text-white.mb-0(data-aos="fade-up") Para conocer más, le invitamos a consultar el documento.
        .col-lg-2.col-md-3.text-center(style="place-self:center;")
          a.boton.color-primario(href="https://drive.google.com/file/d/1pv4VfB9QqSAoFihzX82hoWOGrNOBIPzD/view?usp=sharing" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-download
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Determinación de cloruros en agua
    
    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        p.mb-0(data-aos="fade-up") Es importante determinar la concentración de cloruros en el agua porque estos afectan la calidad del suelo, por ejemplo, si el agua que se está tratando tiene una alta concentración de cloruros y se utiliza en el riego agrícola, los productos vegetales no van a crecer. También es importante la concentración de cloruros si se va a utilizar el agua en el lavado de estructuras metálicas ya que promoverá la corrosión y por ende disminuirá la vida útil de dicha estructura.
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/21.png" data-aos="fade-left" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-up") Se invita a consultar este ejemplo de práctica de laboratorio para la determinación de cloro residual en el agua:

    .col-lg-10.m-auto.mt-5
      .row.p-4(style="background: rgb(70,164,224);background: linear-gradient(180deg, rgba(70,164,224,1) 0%, rgba(34,98,156,1) 100%);border-radius:10px;")
        .col-lg-1.col-md-3.mb-4.mb-md-0.text-center(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg" data-aos="fade-right" alt="Imagen decorativa")
        .col-lg-9.col-md-6.mb-4.mb-md-0(style="place-self:center;")
          h4.text-white(data-aos="fade-up") Práctica determinación de cloruros en agua
          p.text-white.mb-0(data-aos="fade-up") Para conocer más, le invitamos a consultar el documento.
        .col-lg-2.col-md-3.text-center(style="place-self:center;")
          a.boton.color-primario(href="https://drive.google.com/file/d/1gxhL3TUcuqalruAZ0__yrt2YPPHLxd-k/view?usp=sharing" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-download
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Determinación de conductividad

    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/22.svg" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-7(style="place-self:center;")
        p.mb-0(data-aos="fade-up")  La #[strong conductividad] es la capacidad del agua de conducir corriente eléctrica, sin embargo, el agua totalmente pura no es conductora de la electricidad.  Cuando el agua es #[span(style="color:#3076B6;") conductora significa que tiene iones] presentes que permiten el #[span(style="color:#3076B6;") flujo eléctrico], estos iones provienen de sales disueltas y materia inorgánica (#[span(style="color:#3076B6;") alcalinos, carbonatos, cloruros y sulfuro]) por lo que realizar este análisis nos permite tener una medición indirecta de las concentraciones de iones presentes en el agua.
    
    p.mt-5(data-aos="fade-up") Se invita a consultar este ejemplo de práctica de laboratorio:

    .col-lg-10.m-auto.mt-5
      .row.p-4(style="background: rgb(70,164,224);background: linear-gradient(180deg, rgba(70,164,224,1) 0%, rgba(34,98,156,1) 100%);border-radius:10px;")
        .col-lg-1.col-md-3.mb-4.mb-md-0.text-center(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg" data-aos="fade-right" alt="Imagen decorativa")
        .col-lg-9.col-md-6.mb-4.mb-md-0(style="place-self:center;")
          h4.text-white(data-aos="fade-up") Práctica determinación de conductividad en agua
          p.text-white.mb-0(data-aos="fade-up") Para conocer más, le invitamos a consultar el documento.
        .col-lg-2.col-md-3.text-center(style="place-self:center;")
          a.boton.color-primario(href="https://drive.google.com/file/d/15Yo3-sMmrMtpRNmnkuOHe7yzrHcuAUFo/view?usp=sharing" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-download
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Determinación de dureza
    
    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        p.mb-0(data-aos="fade-up") La dureza del agua es la suma de las #[span(style="color:#3076B6;") concentraciones de calcio y magnesio] expresadas como CaCO3.  Es fundamental la medición ya que estás sales al cristalizar ocasionan obstrucción en las tuberías lo que lleva a pérdidas de presión en el sistema y mayor consumo energético.
        p.mt-4(data-aos="fade-up") En particular se han realizado diferentes estudios donde se establece que el #[span(style="color:#3076B6;") agua con dureza] genera problemas cardiacos en sus consumidores, de allí que es importante realizar las etapas de ablandamiento al final del proceso de potabilización.  
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/23.svg" data-aos="fade-left" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-up") Se invita a consultar un ejemplo de práctica de laboratorio determinando la dureza del agua:

    .col-lg-10.m-auto.mt-5
      .row.p-4(style="background: rgb(70,164,224);background: linear-gradient(180deg, rgba(70,164,224,1) 0%, rgba(34,98,156,1) 100%);border-radius:10px;")
        .col-lg-1.col-md-3.mb-4.mb-md-0.text-center(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg" data-aos="fade-right" alt="Imagen decorativa")
        .col-lg-9.col-md-6.mb-4.mb-md-0(style="place-self:center;")
          h4.text-white(data-aos="fade-up") Práctica determinación de dureza total en agua
          p.text-white.mb-0(data-aos="fade-up") Para conocer más, le invitamos a consultar el documento.
        .col-lg-2.col-md-3.text-center(style="place-self:center;")
          a.boton.color-primario(href="https://drive.google.com/file/d/1cNwKtiQYNbx3PQ6VegsjA2Az8EvR1wXb/view?usp=sharing" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-download
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:550px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Determinación de Demanda Química de Oxígeno (DQO)

    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/24.png" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-7(style="place-self:center;")
        p.mb-0(data-aos="fade-up") La demanda química de oxígeno es una #[span(style="color:#3076B6;") medición indirecta] de la cantidad de materia que es susceptible a ser #[span(style="color:#3076B6;") oxidada] por medios químicos. A partir de este resultado se puede establecer una relación de qué tan #[span(style="color:#3076B6;") contaminada] se encuentra un agua y si se realiza la medición al agua potable se puede evidenciar si los sistemas de tratamiento están funcionando adecuadamente o no.
    
    p.mt-5(Data-aos="fade-up") Se invita a consultar este ejemplo de práctica de laboratorio:

    .col-lg-10.m-auto.mt-5
      .row.p-4(style="background: rgb(70,164,224);background: linear-gradient(180deg, rgba(70,164,224,1) 0%, rgba(34,98,156,1) 100%);border-radius:10px;")
        .col-lg-1.col-md-3.mb-4.mb-md-0.text-center(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg" data-aos="fade-right" alt="Imagen decorativa")
        .col-lg-9.col-md-6.mb-4.mb-md-0(style="place-self:center;")
          h4.text-white(data-aos="fade-up") Práctica determinación de demanda química de oxigeno
          p.text-white.mb-0(data-aos="fade-up") Para conocer más, le invitamos a consultar el documento.
        .col-lg-2.col-md-3.text-center(style="place-self:center;")
          a.boton.color-primario(href="https://drive.google.com/file/d/1GGJeOlK8BBNt89C2bG8oB4yAl0dPc3mp/view?usp=sharing" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-download
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_3 2.3 Ensayos microbiológicos
    
    .p-4.p-lg-5.cont_2_1(style="background-color:#E3F4FF;")
      .row.pb-5
        .col-lg-1
        .col-lg-8
          p(data-aos="fade-up") El aspecto #[span(style="color:#3076B6;") microbiológico en agua potable] es muy importante porque es aquel que busca que las características del agua no causen ningún riesgo significativo a la #[span(style="color:#3076B6;") salud humana] cuando es consumida de manera directa, en alimentos o actividades de higiene personal. 
          p.mt-4(data-aos="fade-up") El agua potable es uno de los factores clave para garantizar la salud pública, es por ello que, por ejemplo, el agua que no cumple con las características de calidad microbiológica puede causar enfermedades como: #[span(style="color:#3076B6;") el cólera, diarrea, disentería, hepatitis A, fiebre tifoidea y polio.]
          .cajon.color-acento-botones.p-4.mt-5(style="background-color:#98D8D7;")
            p.mb-0(data-aos="fade-up") Debido al vínculo existente entre agua potable y salud pública, el acceso al agua potable fue reconocida en el 2010 como #[strong derecho humano] por la Asamblea General de las Naciones Unidas. Es decir, todas las personas tienen derecho al acceso, suficiente, continuo, seguro del agua para el uso personal y doméstico.
          p.mt-5(data-aos="fade-up") Los indicadores microbiológicos del agua potable son:
          ul.lista-ul--separador.mt-5
            li(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#4DB1F0;")
              | Coliformes totales (Bacterias).
            li(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#4DB1F0;")
              | Escherichia coli (Bacteria Gram negativa).
            li(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#4DB1F0;")
              | Mesófilos (Bacterias y Hongos).
            li(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#4DB1F0;")
              | Giardia (Protozoo).
            li(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#4DB1F0;")
              | Cryptosporidium (Protozoos).
        .col-lg-3

    .col-lg-8.m-auto.mt-5
      .cajon.color-acento-botones.p-4.mt-5(style="background-color:#98D8D7;")
        p.mb-0(data-aos="fade-up") De acuerdo con el decreto 2115 de 2007 las características microbiológicas del agua para consumo humano deben enmarcarse en los valores máximos aceptables desde el punto de vista microbiológico, definidos en #[span(style="color:#3076B6;") Unidad Formadora de Colonia] (UFC) o 1 microorganismo en 100 cm3  o 1 mL de muestra.
    
    p.mt-5(data-aos="fade-up") Una UFC hace referencia a una célula microbiana presente en una muestra que es capaz de multiplicarse para formar una colonia. Una Colonia es una agrupación visible de bacterias que pertenecen a la misma especie y que son hijas de la misma célula madre. A continuación, se presenta algunos ensayos aplicables:

    TabsB.color-acento-botones.mt-5
      .py-4.py-md-5(titulo="Detección de coliformes" :icono="require('@/assets/curso/tema2/26.svg')")
        .row
          .col-lg-6.mb-4.mb-lg-0
            p La técnica de filtración por membrana es un método estandarizado para detectar coliformes que consiste en hacer pasar 100 mL de la muestra de agua potable por una membrana filtrante estéril de 0.45 mm y 47 a 55 mm de diámetro, que retiene las bacterias en la superficie del filtro, luego ese filtro se pone sobre una superficie de un agar selectivo, el cual después de un tiempo arrojará colonias de diferentes colores y características específicas.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/29.png' alt="Imagen decorativa")
      .py-4.py-md-5(titulo="Sustrato definido" :icono="require('@/assets/curso/tema2/27.svg')")
        .row
          .col-lg-6.mb-4.mb-lg-0
            p Prueba que contiene sustratos hidrolizables para la #[span(style="color:#3076B6;") detección de las enzimas ß D galactosidasa] de los coliformes y de las #[span(style="color:#3076B6;") enzimas ß D galactosidasa y ß glucoronidasa de la E. Coli]. El nutriente indicador permite que los microorganismos objeto de la prueba, una vez incubados en un medio reactivo, produzcan color o fluorescencia, indicando y confirmando la presencia del microorganismo objeto de investigación.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/30.png' alt="Imagen decorativa")
      .py-4.py-md-5(titulo="Pruebas de presencia" :icono="require('@/assets/curso/tema2/28.svg')")
        .row
          .col-lg-6.mb-4.mb-lg-0
            p Esta clase de ensayos microbiológicos es otro de los métodos permitidos por la legislación microbiana para la determinación de coliformes y E. coli. Es un método cualitativo que mediante la #[span(style="color:#3076B6;") presencia de turbidez] o cambios en la apariencia del medio se identifica el crecimiento o no de un microorganismo.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/21.png' alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-up") Para consultar un ejemplo de Detección de coliformes y E. coli por filtración por membrana, se invita a ver el siguiente documento:

    .col-lg-10.m-auto.mt-5
      .row.p-4(style="background: rgb(70,164,224);background: linear-gradient(180deg, rgba(70,164,224,1) 0%, rgba(34,98,156,1) 100%);border-radius:10px;")
        .col-lg-1.col-md-3.mb-4.mb-md-0.text-center(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg" data-aos="fade-right" alt="Imagen decorativa")
        .col-lg-9.col-md-6.mb-4.mb-md-0(style="place-self:center;")
          h4.text-white(data-aos="fade-up") Práctica de laboratorio determinación de mesofilos, coliformes, y e.coli
          p.text-white.mb-0(data-aos="fade-up") Para conocer más, le invitamos a consultar el documento.
        .col-lg-2.col-md-3.text-center(style="place-self:center;")
          a.boton.color-primario(href="https://drive.google.com/file/d/1_R1RWUJSFuP9LzSv_pNOtiGtIddAsP-I/view?usp=sharing" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-download
    
    .col-lg-8.m-auto.mt-5
      .cajon.color-acento-botones.p-4.mt-5(style="background-color:#98D8D7;")
        p.mb-0(data-aos="fade-up") Mediante la resolución 01303 de 2008 se adoptó el método para análisis microbiológico de aguas denominado: “Método Presencia – Ausencia (P – A) utilizando el medio Colitag para la determinación simultánea de Coliformes totales y Echerichia coli (E. coli) en aguas para consumo humano de acuerdo con los valores establecidos en la Resolución 2115 de 2007.
    
    p.mt-5(data-aos="fade-up") Para ampliar la información en la preparación de medios de cultivo para análisis microbiológico, se invita a consultar la siguiente práctica:

    .col-lg-10.m-auto.mt-5
      .row.p-4(style="background: rgb(70,164,224);background: linear-gradient(180deg, rgba(70,164,224,1) 0%, rgba(34,98,156,1) 100%);border-radius:10px;")
        .col-lg-1.col-md-3.mb-4.mb-md-0.text-center(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/9.svg" data-aos="fade-right" alt="Imagen decorativa")
        .col-lg-9.col-md-6.mb-4.mb-md-0(style="place-self:center;")
          h4.text-white(data-aos="fade-up") Práctica preparación de medios de cultivo
          p.text-white.mb-0(data-aos="fade-up") Para conocer más, le invitamos a consultar el documento.
        .col-lg-2.col-md-3.text-center(style="place-self:center;")
          a.boton.color-primario(href="https://drive.google.com/file/d/1AD0g_QCEZGabPIL7AN37lkdSnAj0UazQ/view?usp=sharing" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-download
    
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
 


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    mostrarIndicador2: true,
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
.cont_gradiente_gris
  position: relative
  margin-top: -90px
  background: rgb(222,222,222)
  background: linear-gradient(180deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 50%, rgba(222,222,222,1) 100%)
  border-radius: 10px
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: solid 1px #12263F
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  position: absolute
  content: ''
  width: 100%
  height: 100%
  top: 2rem
  left: 0
  background: url(../assets/curso/tema2/25.svg)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.tabs-b__tab
  border: none
  border-right: 2px #AFAFAF solid
  background-color: #FAFAFA
.tabs-b.color-acento-botones .tabs-b__tab--active
  border-right: 0
  background-color: #fff
</style>
