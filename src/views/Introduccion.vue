<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    p.mb-4(data-aos="fade-up") Estimado estudiante, le damos la bienvenida a la segunda unidad del curso de matemáticas, la cual transformará su percepción del álgebra, mostrándola no como un conjunto de fórmulas complicadas, sino como un lenguaje poderoso para interpretar y resolver problemas del mundo real.
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        p.mb-4 El álgebra va más allá de ser solo símbolos en un cuaderno; es una herramienta matemática que nos ayuda a traducir situaciones cotidianas, en ecuaciones comprensibles. En esta unidad, emprenderemos un viaje fascinante donde convertiremos problemas verbales en expresiones algebraicas, revelando su verdadero potencial.
        p.mb-0 Al finalizar esta unidad, será capaz de resolver ecuaciones algebraicas sencillas y utilizar variables, para modelar situaciones prácticas en problemas cotidianos, además, de desarrollar un pensamiento lógico para modelar matemáticamente, diferentes escenarios.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/intro/1.png', alt='')
  
    .bg-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/intro/2.png', alt='')
        .col-lg
          .p-4
            p.mb-0 Imagine poder calcular, con precisión, cuánto tiempo le llevará ahorrar para un viaje, o determinar la velocidad de un vehículo con información parcial; también podrá comparar planes financieros de manera precisa, e incluso predecir gastos e inversiones, utilizando herramientas algebraicas simples. 

    p.mb-4(data-aos="fade-up") Cada problema que resuelva será un paso más hacia la comprensión de cómo las matemáticas explican y predicen, comportamientos en nuestro entorno.
    p.mb-4.fw-bold(data-aos="fade-up") Para comprender mejor la temática, la unidad se encuentra dividida en tres módulos fundamentales:

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.mb-cus
        .custom-image-card.h-100.br-15
          .custom-image-card__text.p-4
            .row.align-items-center.justify-content-center.d-none.d-lg-block
              .col-lg-auto
                img(src='@/assets/curso/intro/3.svg', style='max-width: 90px').mx-auto
            p.mb-0.text-center Variables y expresiones algebraicas.

      .col-sm-12.col-lg-4.mb-cus
        .custom-image-card.h-100.br-15
          .custom-image-card__text.p-4
            .row.align-items-center.justify-content-center.d-none.d-lg-block
              .col-lg-auto
                img(src='@/assets/curso/intro/4.svg', style='max-width: 90px').mx-auto
            p.mb-0.text-center Resolución de ecuaciones lineales.


      .col-sm-12.col-lg-4.mb-cus
        .custom-image-card.h-100.br-15
          .custom-image-card__text.p-4
            .row.align-items-center.justify-content-center.d-none.d-lg-block
              .col-lg-auto
                img(src='@/assets/curso/intro/5.svg', style='max-width: 90px').mx-auto
            p.mb-0.text-center Aplicaciones prácticas en movimiento y finanzas.
    
    p.mb-4(data-aos="fade-up") Para aprovechar al máximo el contenido teórico y práctico de esta unidad, le sugerimos:
    ul.lista-ul--color.mb-4(data-aos="fade-up")
      li.d-flex
        i.fas.fa-circle.icon-list
        p.mb-0 Mantener una actitud curiosa y abierta.
      li.d-flex
        i.fas.fa-circle.icon-list
        p.mb-0 Practicar de manera constante.
      li.d-flex
        i.fas.fa-circle.icon-list
        p.mb-0 No temer a cometer errores.
      li.d-flex
        i.fas.fa-circle.icon-list
        p.mb-0 Relacionar cada concepto, con situaciones de su vida cotidiana.
      li.d-flex
        i.fas.fa-circle.icon-list
        p.mb-0 Desarrollar todos los ejercicios propuestos.
      li.d-flex
        i.fas.fa-circle.icon-list
        p.mb-0 Participar activamente en los encuentros virtuales programados. 
    p.mb-4(data-aos="fade-up") Para finalizar, recuerde repasar los conceptos de: operaciones matemáticas elementales, manejo de números enteros y decimales y, por último, conceptos fundamentales de multiplicación y división.
    p.mb-0(data-aos="fade-up") El álgebra no es un desafío, es su nueva herramienta, para entender y transformar la realidad.








</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
