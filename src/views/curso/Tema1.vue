<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción al álgebra'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    p.mb-4(data-aos="fade-up") Para comenzar, lo invitamos a ver el siguiente video.
    figure.mb-4(data-aos="fade-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2XGjwq6LRqs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    p.mb-4(data-aos="fade-up") Conozcamos sus componentes principales:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-6
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t1/1.svg')
          .tarjeta.color-adicional-2.p-3(x="7%" y="50%" numero="+")
            p.mb-4 Son símbolos (generalmente letras) que representan números desconocidos:
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 x, y, z
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Ejemplos: edad de una persona, distancia recorrida, tiempo transcurrido.
          
          .tarjeta.color-adicional-2.p-3(x="93%" y="50%" numero="+")
            p.mb-4 Expresiones matemáticas que establecen la igualdad entre dos expresiones:
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 2x + 3 = 11
                
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 5y - 2 = 13
    
    p.mb-4(data-aos="fade-up") Ahora, analicemos algunas aplicaciones prácticas con ejemplos concretos:
    .bg-full-width.bg-fondo-2.mb-5(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejemplo 1
              p.mb-4.fw-bold Edad de hermanos.
              p.mb-4 
                strong Problema. 
                | María tiene el doble de edad que Juan. Juan tiene 15 años.
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Variable x: edad de Juan.
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 x = 15
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Edad de María: 2x = 2(15) = 30 años.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/2.png', alt='Imagen de elementos matemáticos')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejemplo 2
              p.mb-4 
                strong Problema. 
                | Un grupo de amigos quiere viajar. El costo total del viaje es de $1.200. Si lo dividen entre 4 personas, ¿cuánto pagará cada uno?
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Variable x: costo por persona.
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 4x = 1200
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 x = 1200 ÷ 4
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 x = 300 (cada persona paga $300).
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/3.png', alt='Imagen de elementos matemáticos')

    p.mb-4.fw-bold(data-aos="fade-up") Los pasos para resolver problemas algebraicos, son:
    .row.justify-content-center.mb-5.bg-7.align-items-center(data-aos="fade-up")
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t1/4.svg', alt='')
      .col-sm-12.col-lg-5
        ol.lista-ol--cuadro.lista-ol--cuadro--separador.mb-0
          li.d-flex
            .lista-ol--cuadro__vineta.bg-cus
              span 1
            .flex-column  
              p.mb-0.fw-bold  Identificar la incógnita
              p.mb-0 Determinar qué información necesitas encontrar.
              p.mb-0 Asignar una variable a esa incógnita.
          
          li.d-flex
            .lista-ol--cuadro__vineta.bg-cus
              span 2
            .flex-column
                p.mb-0.fw-bold Traducir el problema a lenguaje algebraico
                p.mb-0 Convertir las frases del problema, en una ecuación.
                p.mb-0 Usar la variable identificada.
                p.mb-0 Incluir las relaciones matemáticas mencionadas.

          li.d-flex
            .lista-ol--cuadro__vineta.bg-cus
              span 3
            .flex-column
              p.mb-0.fw-bold Resolver la ecuación
              p.mb-0 Aplicar operaciones inversas.
              p.mb-0 Despejar la variable.
              p.mb-0 Verificar la solución.

          li.d-flex
            .lista-ol--cuadro__vineta.bg-cus
              span 4
            .flex-column
              p.mb-0.fw-bold Comprobar el resultado
              p.mb-0 Sustituir el valor encontrado en la ecuación original.
              p.mb-0 Verificar que se cumplan todas las condiciones.

    .titulo-figura.mb-2.d-d-flex(data-aos="fade-up")
      p.mb-0 #[b Tabla 1.] Tipos de álgebra: definiciones sencillas y ejemplo
    .tabla-a.color-primario.mb-5(data-aos="fade-up")
      table
        thead
          tr
            th.w-15 Tipo
            th Definición
            th Características
            th Ejemplos prácticos
            th Aplicación
        tbody
          tr
            td.fw-bold Álgebra elemental
            td Es la forma más básica de álgebra, centrada en la resolución de ecuaciones simples, mediante el uso de variables y operaciones fundamentales.
            td 
              | Utiliza variables para representar números desconocidos.
              br
              | Se ocupa de ecuaciones de primer grado.
              br
              | Se enfoca en operaciones básicas: suma, resta, multiplicación y división.
            td 
              | Resolver:
              br
              | x + 5 = 12
              br
              | Despejar: 3x = 15
              br
              | Determinar el valor de una variable desconocida.
            td 
              | Calcular edades.
              br
              | Resolver problemas de compras.
              br
              | Dividir gastos entre amigos.
          tr
            td.fw-bold Álgebra lineal
            td Se ocupa del estudio de sistemas de ecuaciones lineales y sus representaciones, a través de vectores y matrices.
            td 
              | Trabaja con espacios vectoriales.
              br
              | Utiliza sistemas de ecuaciones con múltiples variables.
              br
              | Analiza transformaciones lineales.
            td 
              | Resolver sistemas de 2 o 3 ecuaciones.
              br
              | Calcular intersecciones de líneas.
              br
              | Analizar redes de transporte.
            td 
              | Diseño de rutas de reparto.
              br
              | Distribución de recursos.
              br
              | Análisis de datos estadísticos.
          tr
            td.fw-bold Álgebra abstracta
            td Estudia estructuras algebraicas generales, como grupos, anillos y campos, más allá de los números convencionales.
            td 
              | Trabaja con estructuras matemáticas abstractas.
              br
              | Analiza propiedades generales de las operaciones.
              br
              | No se limita a números específicos.
            td 
              | Estudio de simetría.
              br
              | Análisis de propiedades de operaciones.
              br
              | Teoría de conjuntos.
            td 
              | Criptografía.
              br
              | Diseño de algoritmos.
              br
              | Desarrollo de sistemas de seguridad.
          tr
            td.fw-bold Álgebra computacional
            td Emplea herramientas computacionales para abordar problemas algebraicos complejos.
            td 
              | Utiliza #[i software] matemático.
              br
              | Resuelve ecuaciones complejas.
              br
              | Realiza cálculos simbólicos y numéricos.
            td 
              | Resolver ecuaciones complejas.
              br
              | Graficar funciones.
              br
              | Realizar cálculos avanzados.
            td 
              | Diseño de videojuegos.
              br
              | Efectos especiales en cine.
              br
              | Modelado científico.

    p.mb-4.fw-bold(data-aos="fade-up") Comparación simplificada creciente:
    ul.lista-ul--color.mb-4(data-aos="fade-up")
      li.d-flex
        i.fas.fa-circle.icon-list
        p.mb-0 Álgebra elemental (básico).
      li.d-flex
        i.fas.fa-circle.icon-list
        p.mb-0 Álgebra lineal (intermedio).
      li.d-flex
        i.fas.fa-circle.icon-list
        p.mb-0 Álgebra abstracta (avanzado).
      li.d-flex
        i.fas.fa-circle.icon-list
        p.mb-0 Álgebra computacional (especializado).

    .p-4.bg-1.mb-5(data-aos="fade-up")
      .row.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/5.svg', style='max-width: 90px').mx-auto
        .col-lg
          p.mb-0 Cada tipo de álgebra ofrece herramientas para entender y resolver problemas matemáticos en distintos niveles de complejidad, desde cálculos básicos hasta estructuras más abstractas. El álgebra se transforma de un simple conjunto de ecuaciones, a un lenguaje sofisticado para interpretar y modelar la realidad.

    .p-4.bg-8.mb-5(data-aos="fade-up")
      .row.align-items-center
        .col-lg
          p.mb-0 El álgebra es mucho más que un conjunto de ecuaciones. Es una herramienta poderosa para comprender y modelar relaciones matemáticas, resolver problemas complejos y desarrollar el pensamiento lógico.

    .bg-full-width.bg-3.mb-5(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 Aplicaciones multidisciplinarias del álgebra
             p.mb-4 El álgebra es una herramienta poderosa que trasciende las matemáticas puras y encuentra aplicaciones en múltiples disciplinas. En el PDF #[b Aplicaciones multidisciplinarias del álgebra], se exploran casos prácticos que muestran cómo los conceptos algebraicos son fundamentales para modelar problemas en áreas como sistemas e informática, contabilidad y finanzas, logística, gestión humana y ciencias de la salud. A través del análisis de ecuaciones, funciones y modelos, se evidencia cómo el álgebra facilita la toma de decisiones, optimiza procesos y proyecta escenarios en contextos reales, aportando soluciones eficaces en diversas profesiones.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/aplicaciones_multidisciplinarias_del_algebra.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Aplicaciones multidisciplinarias del álgebra
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t1/6.png', alt='')



    p.mb-4(data-aos="fade-up") El álgebra se presenta como una herramienta de pensamiento abstracto con aplicaciones prácticas en diversas disciplinas. Su fortaleza radica en la habilidad de convertir lo complejo en representaciones más manejables y predecibles.
    .bg-full-width.bg-3.mb-5(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t1/7.png', alt='')
          .col-lg-7
             h2.mb-4 Ejemplos prácticos de aplicación del álgebra en finanzas, sistemas y contabilidad
             p.mb-4 En el PDF #[b Ejemplos prácticos de aplicación del álgebra], se presentan diversos ejercicios que ilustran cómo las herramientas algebraicas permiten resolver problemas reales en estos ámbitos. Desde el cálculo del punto de equilibrio en ventas hasta la proyección de ventas y el análisis de inventario, cada ejercicio muestra cómo las ecuaciones y modelos algebraicos facilitan la toma de decisiones estratégicas y optimizan los recursos disponibles. Este material es clave para entender la utilidad del álgebra en situaciones financieras, administrativas y operativas del entorno empresarial.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/ejemplos_practicos_finanzas_sistemas_contabilidad.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Ejemplos prácticos de aplicación del álgebra en finanzas, sistemas y contabilidad
    p.mb-4(data-aos="fade-up") Ahora bien, analicemos el siguiente ejemplo práctico de optimización de recursos, en sistemas de información.
    .bg-full-width.bg-3.mb-5(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 Optimización de recursos en sistemas de información
             p.mb-4 En el PDF #[b Optimización de recursos en sistemas de información], se presenta un ejercicio práctico que demuestra cómo las herramientas algebraicas permiten modelar problemas complejos y optimizar la asignación de recursos en proyectos de TI. A través de un modelo matemático que considera restricciones presupuestarias, tiempos y necesidades específicas de personal, se exploran estrategias para maximizar la eficiencia del proyecto. Este material destaca la importancia del uso del álgebra para tomar decisiones estratégicas y gestionar recursos de manera efectiva en entornos empresariales y tecnológicos.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/optimizacion_de_recursos_en_sistemas_de_informacion.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Optimización de recursos en sistemas de información
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t1/8.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://elibro.net/en/ereader/tecnologicadeloriente/74747?page=396' target='_blank' rel='noopener noreferrer') Nietushil, A. (2010). Problemas de álgebra, geometría y trigonometría. Instituto Politécnico Nacional.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://elibro.net/en/ereader/tecnologicadeloriente/36338?page=6' target='_blank' rel='noopener noreferrer') Figueroa, M. (2010). Aritmética y álgebra. Firmas Press.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://espanol.libretexts.org/Matematicas/Algebra/Libro%3A_Algebra_Avanzada/01%3A_Fundamentos_de_%C3%A1lgebra/1.04%3A_Expresiones_algebraicas_y_f%C3%B3rmulas ' target='_blank' rel='noopener noreferrer') LibreTexts Español explica conceptos básicos de expresiones algebraicas, variables, y operaciones, incluyendo su uso práctico y cómo se estructuran en problemas matemáticos. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://es.symbolab.com/solver/algebra-calculator' target='_blank' rel='noopener noreferrer') Solucionador matemático de IA > Calculadora de Álgebra 
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=QJA-9KeOGHk' target='_blank' rel='noopener noreferrer') Profe Marco Ayala (2020). 32. Expresiones algebraicas 
            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')










</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
