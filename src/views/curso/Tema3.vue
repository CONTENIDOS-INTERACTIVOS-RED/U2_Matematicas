<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Resolución de ecuaciones lineales sencillas'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    p.mb-4(data-aos="fade-up") Comencemos conociendo los fundamentos de ecuaciones lineales.
    p.mb-4(data-aos="fade-up") Una ecuación lineal representa una relación matemática donde la variable aparece únicamente en primer grado. Sus características principales incluyen:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-contenido.large
          div(numero='1' titulo='Estructura general: ax + b = c')
            p.mb-0 • a, b y c son números constantes.
            p.mb-0 • 'a' es el coeficiente de la variable.
            p.mb-0 • 'b' es el término independiente.
            p.mb-0 • 'c' representa el resultado de la ecuación.
          div(numero='2' titulo='Propiedades esenciales')
            p.mb-0 • Grado uno para la variable.
            p.mb-0 • No tienen exponentes mayores a 1.
            p.mb-0 • Las variables no están multiplicadas entre sí.
            p.mb-0 • Relación de igualdad entre expresiones.
            p.mb-0 • Posibilidad de despejar la incógnita mediante operaciones inversas.
            p.mb-0 • Forma una línea recta cuando se representa gráficamente.
         
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/1.png')
    p.mb-4(data-aos="fade-up") Ahora, los tipos de ecuaciones lineales, son:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t3/2.png' alt='')
          .custom-image-card__text.p-4
            h4.mb-2.text-center Ecuaciones de primer grado
            p.mb-0 • Una única variable.
            p.mb-0 • Ejemplo: 3x + 2 = 17
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t3/3.png' alt='')
          .custom-image-card__text.p-4
            h4.mb-2.text-center Ecuaciones con paréntesis
            p.mb-0 • Requieren operaciones previas de distribución.
            p.mb-0 • Ejemplo: 2(x + 3) = 10
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t3/4.png' alt='')
          .custom-image-card__text.p-4
            h4.mb-2.text-center Ecuaciones con fracciones
            p.mb-0 • Demandan multiplicación por denominador común.
            p.mb-0 • Ejemplo: x/3 + 2 = 5


    #t_3_1.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.1] Métodos de resolución
    p.mb-4(data-aos="fade-up") Los principios fundamentales de resolución, son:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-6.mb-lg-0.mb-3
        .custom-image-card-3.h-100.br-15.bg-7
          .custom-image-card__text.p-4
            .row.align-items-center.justify-content-center
              .col-lg-auto.d-none.d-lg-block
                img(src='@/assets/curso/t3/5.svg', style='max-width: 90px').mx-auto
            h4.mb-2.text-center Principio del equilibrio
            p.mb-0 •  Toda operación realizada debe aplicarse simétricamente.
            p.mb-0 • Mantener igualdad entre ambos lados de la ecuación.

      .col-sm-12.col-lg-6.mb-lg-0.mb-3
        .custom-image-card-3.h-100.br-15.bg-7
          .custom-image-card__text.p-4
            .row.align-items-center.justify-content-center
              .col-lg-auto.d-none.d-lg-block
                img(src='@/assets/curso/t3/6.svg', style='max-width: 90px').mx-auto
            h4.mb-2.text-center Operaciones inversas
            p.mb-0 • Suma ↔ Resta.
            p.mb-0 • Multiplicación ↔ División.
            p.mb-0 • Potenciación ↔ Radicación.
    p.mb-4(data-aos="fade-up") Y las siguientes, las estrategias de resolución:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t3/7.svg' alt='')
          .custom-image-card__text.p-4
            h4.mb-2.text-center Método de adición y sustracción
            p.mb-0 • Eliminar términos independientes.
            p.mb-0 • Aislar variable paso a paso.
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t3/8.svg' alt='')
          .custom-image-card__text.p-4
            h4.mb-2.text-center Método de multiplicación
            p.mb-0 • Eliminar fracciones.
            p.mb-0 • Multiplicar ambos lados por denominador común.
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t3/9.svg' alt='')
          .custom-image-card__text.p-4
            h4.mb-2.text-center Método de distribución
            p.mb-0 • Resolver paréntesis.
            p.mb-0 • Aplicar propiedades distributivas.

    #t_3_2.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.2] Aplicaciones prácticas
    p.mb-4(data-aos="fade-up") Situaciones reales de las ecuaciones lineales sencillas:
    .row.justify-content-center.mb-5.bg-8.align-items-center.p-4(data-aos="fade-up")
      .col-sm-12.col-lg-4
        p.mb-3.fw-bold 1. Problemas financieros:
          p.mb-0 • Cálculo de intereses.
          p.mb-0 • Planificación de presupuestos.
          p.mb-5 • Amortización de créditos.
        p.mb-4.fw-bold 2. Problemas de movimiento:
          p.mb-0 • Cálculo de velocidades.
          p.mb-0 • Distancias recorridas.
          p.mb-5 • Tiempo de trayectos.
        p.mb-4.fw-bold 3. Problemas de mezclas:
          p.mb-0 • Concentraciones.
          p.mb-0 • Diluciones.
          p.mb-0 • Combinación de soluciones.
      .col-sm-12.col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/t3/10.svg', alt='')
    p.mb-4(data-aos="fade-up") Analicemos los siguientes ejercicios:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t3/11.png')
      .col-sm-12.col-lg-7
        AcordionA(tipo='b')
          div(titulo='Ejercicio 1')
            p.mb-2.fw-bold Ecuación con paréntesis
            p.mb-2 #[b Problema.] Resolver 3(x + 2) - 5 = 22
            p.mb-2 #[b Solución detallada:]
            ul.mb-0
              li 1. Distribuir 3.
              li 2. Operar paréntesis.
              li 3. Sumar y restar.
              li 4. Despejar x.

          div(titulo='Ejercicio 2')
            p.mb-2.fw-bold Ecuación con fracciones
            p.mb-2 #[b Problema.] Resolver 2x/3 + 4 = 16
            p.mb-2 #[b Solución detallada:]
            ul.mb-0
              li 1. Restar 4 de ambos lados.
              li 2. Multiplicar por 3.
              li 3. Dividir por 2.
              li 4. Encontrar valor de x.

          div(titulo='Ejercicio 3')
            p.mb-2.fw-bold Problema contextualizado
            p.mb-2 #[b Problema.] Un auto viaja a velocidad constante. Si recorre 240 km en 3 horas, ¿cuál es su velocidad?
            p.mb-2 #[b Solución detallada:]
            ul.mb-0
              li 1. Plantear ecuación.
              li 2. Usar fórmula distancia = velocidad × tiempo.
              li 3. Despejar velocidad.
              li 4. Verificar unidades.

    #t_3_3.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.3] Resolución de ecuaciones lineales sencillas
    p.mb-4(data-aos="fade-up") A continuación, se darán ejemplos que permiten conocer la metodología para solucionar ecuaciones lineales sencillas. 
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        .row.justify-content-center.align-items-center.mb-0
          .col-sm-12.col-lg-12
            .bg-color-white.shadow-soft.p-4
              .row.justify-content-around.align-items-center
                .col-md-auto.d-none.d-lg-block
                  img(src="@/assets/template/bg-icono-link-blue.svg", style="width: 60px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-0
                      h3.mb-1 Para resolver los siguientes ejercicios utilice la herramienta online:
                      p.mb-0.mb-cus Solucionador matemático de IA > Calculadora de ecuaciones lineales básicas
                    .col-sm-auto
                      a.boton.color-adicional-1.texto-blanco(href='https://es.symbolab.com/solver/linear-equation-calculator' target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right
    .bg-full-width.bg-fondo-2.mb-5(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejemplo 1 
              p.mb-4.fw-bold Presupuesto mensual
              p.mb-4 #[b Problema.] María gasta $50 en comida y $30 en transporte cada mes. Su presupuesto total es de $400.
              p.mb-0 #[b Ecuación:]
              p.mb-0 •  x: Gastos en comida.
              p.mb-0 •  y: Gastos en transporte.
              p.mb-0 •  50x + 30y = 400.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/12.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Ejemplo 2
              p.mb-4.fw-bold Producción industrial
              p.mb-4 #[b Problema.] Una fábrica produce 10 artículos por hora. El costo de producción es $5 por artículo más un costo fijo de $100.
              p.mb-0 #[b Ecuación:]
              p.mb-0 •  x: Número de artículos.
              p.mb-0 •  y: Costo total.
              p.mb-0 •  y = 5x + 100.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/13.png', alt='')

    p.mb-4(data-aos="fade-up") Conozca ahora, los pasos para resolver ecuaciones lineales:
    .row.justify-content-center.mb-5.bg-7.align-items-center.p-4(data-aos="fade-up")
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t3/15.svg', alt='')
      .col-sm-12.col-lg-5
        ol.lista-ol--cuadro.lista-ol--cuadro--separador.mb-0
          li.d-flex
            .lista-ol--cuadro__vineta.bg-cus
              span 1
            .flex-column  
              p.mb-0.fw-bold Identificar la ecuación
              p.mb-0 •  Reconocer la forma general.
              p.mb-0 •  Identificar variables y constantes.

          li.d-flex
            .lista-ol--cuadro__vineta.bg-cus
              span 2
            .flex-column  
              p.mb-0.fw-bold Despejar la variable
              p.mb-0 •  Realizar operaciones inversas.
              p.mb-0 •  Aislar la variable deseada.

          li.d-flex
            .lista-ol--cuadro__vineta.bg-cus
              span 3
            .flex-column  
              p.mb-0.fw-bold Calcular el valor
              p.mb-0 •  Realizar operaciones matemáticas.
              p.mb-0 •  Encontrar el valor de la variable.

          li.d-flex
            .lista-ol--cuadro__vineta.bg-cus
              span 4
            .flex-column  
              p.mb-0.fw-bold Verificar la solución
              p.mb-0 •  Sustituir el valor en la ecuación original.
              p.mb-0 •  Comprobar que se cumplan las condiciones.
    h2.mb-3(data-aos="fade-up") Método de resolución
    .bg-10.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.px-5.py-4
          h5.mb-4 Ejemplo práctico
          .row.justify-content-center.mb-5
            .col-sm-12.col-lg-4
                p.mb-0 #[b Paso 1.] Restar 5 de ambos lados.
                p.mb-0 •  2x + 5 - 5 = 15 - 5
                p.mb-0 •  2x = 10

            .col-sm-12.col-lg-4
                p.mb-0 #[b Paso 2.] Dividir entre 2.
                p.mb-0 •  2x ÷ 2 = 10 ÷ 2
                p.mb-0 •  x = 5

            .col-sm-12.col-lg-4
                p.mb-0 #[b Paso 3.] Verifición.
                p.mb-0 •  2(5) + 5 = 15
                p.mb-0 •  10 + 5 = 15

        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t3/16.svg', alt='')
    h2.mb-3(data-aos="fade-up") Representación gráfica
    .row.justify-content-center.mb-4(data-aos="fade-up")
      .col-sm-12.col-lg-6
       .p-4.bg-1.mb-0.h-100
         .row
           .col-lg-auto.d-none.d-lg-block
             img(src='@/assets/curso/t3/17.svg', style='max-width: 90px').mx-auto
           .col-lg
              p.mb-0.fw-bold En un plano cartesiano, una ecuación lineal:
              p.mb-0 •  Siempre forma una línea recta.
              p.mb-0 •  Tiene pendiente constante.
              p.mb-0 •  Puede cortar los ejes x e y.

      .col-sm-12.col-lg-6
       .p-4.bg-1.mb-0.h-100
         .row.align-items-center
           .col-lg-auto.d-none.d-lg-block
             img(src='@/assets/curso/t3/18.svg', style='max-width: 90px').mx-auto
           .col-lg
              p.mb-0.fw-bold Importancia en diferentes campos
              p.mb-0 #[b 1. Economía.] Predicción de gastos.
              p.mb-0 #[b 2. Ingeniería.] Cálculo de estructuras.
              p.mb-0 #[b 3. Física.] Movimiento uniforme.
              p.mb-0 #[b 4. Computación.] Algoritmos lineales.
              p.mb-0 #[b 5. Estadística.] Regresión lineal.


    p.mb-4(data-aos="fade-up") Las ecuaciones lineales son herramientas matemáticas fundamentales para modelar relaciones simples y predecir comportamientos en diversos campos científicos y cotidianos; representan la forma más básica de describir una relación proporcional y constante entre variables, siendo esenciales para el análisis cuantitativo.
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        .row.justify-content-center.align-items-center.mb-0
          .col-sm-12.col-lg-12
            .bg-color-white.shadow-soft.p-4
              .row.justify-content-around.align-items-center
                .col-md-auto.d-none.d-lg-block
                  img(src="@/assets/template/bg-icono-pdf.svg", style="width: 60px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-0
                      h3.mb-1 Ejercicios
                      p.mb-0.mb-cus Para dar profundidad al tema, en el PDF Ejercicios, se explicarán 3 ejercicios de ecuaciones lineales, junto con una analogía que le permitirán comprender en contextos reales su usabilidad.
                    .col-sm-auto
                      a.boton.color-adicional-1.texto-blanco(href='PEND' target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right

    .bg-full-width.bg-3.mb-5(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 Ejemplos prácticos de aplicación de ecuaciones lineales en finanzas, sistemas y contabilidad
             p.mb-4 En el PDF #[b Ejemplos prácticos de aplicación de ecuaciones lineales], se presentan ejercicios detallados que muestran cómo las ecuaciones lineales permiten modelar y resolver situaciones reales en diferentes contextos empresariales. A través de problemas como el análisis de punto de equilibrio, la proyección de inversiones y el cálculo de costos de producción, se destaca la utilidad del álgebra para optimizar recursos y tomar decisiones estratégicas. Este material busca fortalecer las habilidades matemáticas aplicadas, facilitando un enfoque práctico en la gestión de proyectos y operaciones financieras.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/PEND.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Ejemplos prácticos de aplicación de ecuaciones lineales
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t3/19.svg', alt='')
    p.mb-5(data-aos="fade-up") Estos ejercicios demuestran cómo las ecuaciones lineales, son herramientas fundamentales para análisis financiero, optimización de sistemas y toma de decisiones contables.
    #t_3_4.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.4] Aplicación del álgebra en la vida diaria
    p.mb-4 El álgebra es una herramienta fundamental con diversas aplicaciones en nuestra vida cotidiana. Aunque con frecuencia se considera que los problemas matemáticos son conceptos abstractos y distantes de nuestras actividades diarias, en realidad están profundamente integrados en muchos aspectos de nuestra rutina.
    .bg-7.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t3/20.png', alt='')
        .col-lg
          .p-4
            p.mb-0 A lo largo de esta Unidad 2, hemos visto cómo el razonamiento lógico y las expresiones algebraicas, se encuentran en una amplia gama de situaciones comunes. Desde la elaboración de presupuestos personales hasta el cálculo de distancias y tiempos de viaje, el álgebra se convierte en un recurso práctico para tomar decisiones informadas.
    p.mb-4(data-aos="fade-up") Esta conexión entre las matemáticas y la vida diaria, demuestra que muchos problemas reales se pueden resolver utilizando conceptos algebraicos simples, lo que subraya su relevancia más allá del aula. A continuación, se presentan algunos ejemplos claros de cómo el álgebra influye en nuestra vida cotidiana:
    .bg-full-width.bg-3.mb-5(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 Ejemplos en diferentes áreas 
             p.mb-4 En el PDF #[b Ejemplos en diferentes áreas], se exploran ejemplos prácticos que muestran cómo las herramientas algebraicas son fundamentales para modelar y resolver situaciones comunes. Desde la planificación financiera y el cálculo de intereses hasta el análisis de trayectorias y crecimiento poblacional, este material permite entender cómo el álgebra se aplica en diversos contextos de la vida diaria. El documento ofrece soluciones detalladas a problemas reales, resaltando la utilidad del pensamiento algebraico para tomar decisiones informadas y optimizar recursos en diferentes áreas del conocimiento.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/PEND.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Ejemplos en diferentes áreas 
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t3/21.png', alt='')
    p.mb-4(data-aos="fade-up") Para finalizar la unidad, se proponen una serie de ejercicios matemáticos resueltos que le ayudarán a comprender mejor la aplicación del álgebra en la vida diaria. 
    .bg-full-width.bg-3.mb-5(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t3/22.png', alt='')
          .col-lg-7
             h2.mb-4 Ejercicios aplicación del álgebra en la vida diaria 
             p.mb-4 En el PDF #[b Ejercicios aplicación del álgebra en la vida diaria], se presentan situaciones prácticas que permiten comprender cómo las ecuaciones algebraicas ayudan a resolver problemas cotidianos relacionados con finanzas personales, proyección de ahorros, control de gastos, cálculo de intereses y amortización de préstamos. A través de ejemplos detallados, se ilustra cómo aplicar el álgebra para tomar decisiones informadas y optimizar recursos en distintos contextos. Este enfoque práctico facilita el desarrollo de habilidades matemáticas esenciales para mejorar la planificación y gestión financiera en la vida diaria.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/PEND.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Ejercicios aplicación del álgebra en la vida diaria 
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://elibro.net/en/ereader/tecnologicadeloriente/110620?page=10' target='_blank' rel='noopener noreferrer') Peña, J. A. (1999). Álgebra en todas partes. FCE - Fondo de Cultura Económica. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://es.wikibooks.org/wiki/Matem%C3%A1ticas/%C3%81lgebra/Introducci%C3%B3n_Expresiones_algebraicas' target='_blank' rel='noopener noreferrer') Wikilibros detalla cómo las expresiones algebraicas y las ecuaciones son esenciales para modelar situaciones de la vida cotidiana, como problemas financieros y cálculos relacionados con el movimiento.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://phet.colorado.edu/es/simulations/equality-explorer' target='_blank' rel='noopener noreferrer') PhET Interactive Simulations. Explorador de igualdades.
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/ESE9RzEtPXk?si=Pr4U61B2CqSrzsm5' target='_blank' rel='noopener noreferrer') Ayudinga! (2022). Resolver ecuaciones lineales o de primer grado | Práctica #1 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/Y71eYtWpU_4?si=m7oOAsOhX9G_x0Sm' target='_blank' rel='noopener noreferrer') Ayudinga! (2022). Resolver ecuaciones lineales o de primer grado | Práctica #2

          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
    .bg-full-width.border-top.actividad.ctn-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario='cuestionario'/>
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
  cuestionario: {
      tema: '--',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: 'En el diseño de algoritmos, la complejidad O(n²) significa que:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El algoritmo es lineal',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El tiempo de ejecución crece cuadráticamente',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El algoritmo es constante',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tiempo decrece con n',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! La notación O(n²) indica un crecimiento cuadrático del tiempo de ejecución.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'Para calcular el interés compuesto, la fórmula correcta es:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Principal × Tasa',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Principal × (1 + Tasa)^Tiempo',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Principal + (Tasa × Tiempo)',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Principal + Tiempo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Perfecto! Esta fórmula considera el efecto del interés sobre interés.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'Un monomio es:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una ecuación completa',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un término algebraico con una única variable',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una suma de términos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una resta de variables',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente! Un monomio es un término algebraico que contiene una única variable.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'La propiedad distributiva establece que:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los números se pueden sumar en cualquier orden',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'a(b + c) = ab + ac',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'a + b = b + a',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '(a + b) + c = a + (b + c)',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! La propiedad distributiva relaciona la multiplicación con la suma.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'Para calcular el número óptimo de unidades a producir se debe:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usar solo los costos fijos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Considerar costos fijos, variables y precio de venta',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mirar solo el precio de venta',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ignorar los costos variables',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente! La optimización de producción requiere considerar todos los factores de costo y precio.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Felicidades! Has superado la prueba con éxito.',
      mensaje_final_reprobado:
        'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
