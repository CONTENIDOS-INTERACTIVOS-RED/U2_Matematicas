<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Concepto de variable y expresión algebraica'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .p-4.bg-1.mb-5
      .row.align-items-center
        .col-lg
          p.mb-0 El término #[b variable], representa un símbolo, una representación que permite darle un valor numérico, para hacer más claro el concepto general se puede generar una analogía con el siguiente problema. 
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t2/1.svg', style='max-width: 90px').mx-auto
        
    .bg-4.p-4.mb-5
      .row.justify-content-center.mb-0
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/t2/2.png', alt='')
        .col-sm-12.col-lg-8
            p.mb-4 Un restaurante vende hamburguesas. Cada hamburguesa cuesta $8,000 y desea representar sus ingresos por x hamburguesas vendidas.
            p.mb-4.fw-bold Solución paso a paso:
            p.mb-0 #[b 1.] Identificar la variable: x (cantidad de hamburguesas).
            p.mb-0 #[b 2.] Identificar el precio unitario: $8,000
            p.mb-4 #[b 3.] Construir expresión algebraica: 8,000x
            p.mb-0 #[b Analogía de cocina.] Imagine que está preparando una receta. La variable (x) es como el número de personas que comerán. El precio de la hamburguesa es como la cantidad de ingredientes por persona. Multiplicar la cantidad de ingredientes por el número de personas, para saber cuánto se necesita comprar.

    p.mb-4.fw-bold A continuación, se definirá más a profundidad el concepto de una variable. 
    #t_2_1.titulo-segundo
      h2 #[span 2.1] Fundamentos de variables
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        p.mb-4 Una variable es un símbolo (usualmente una letra), que representa un valor numérico que puede tener la capacidad de cambiar o adaptarse. Se puede imaginar como un "contenedor matemático" que tiene la capacidad de contener diferentes valores numéricos, en diferentes contextos. 
        .p-3.bg-1.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t2/4.svg', style='max-width: 90px').mx-auto
            .col-lg
              h4.mb-3 Esta flexibilidad le permite:
              p.mb-0 #[b 1.] Representar cantidades desconocidas.
              p.mb-0 #[b 2.] Modelar relaciones matemáticas.
              p.mb-0 #[b 3.] Generalizar patrones numéricos.
              p.mb-0 #[b 4.] Resolver problemas abstractos.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/3.png', alt='')

    h2.mb-3 Tipología de variables
    p.mb-5  En álgebra, existen diversos tipos de variables:
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t2/5.png')
      .col-sm-12.col-lg-7
        AcordionA(tipo='b')
          div(titulo='Variables independientes')
            p.mb-0 No dependen de otros valores.
            p.mb-0 Pueden tomar valores arbitrarios.
            p.mb-0 #[b Ejemplo.] Tiempo en una ecuación de movimiento.
          div(titulo='Variables dependientes')
            p.mb-0 Su valor cambia en función de otras variables.
            p.mb-0 Se calculan a partir de variables independientes.
            p.mb-0 #[b Ejemplo.] Distancia como resultado de velocidad por tiempo.
          div(titulo='Variables discretas')
            p.mb-0 Toman valores enteros o contables.
            p.mb-0 Representan cantidades que no pueden fraccionarse.
            p.mb-0 #[b Ejemplo.] Número de estudiantes en un curso.
          div(titulo='Variables continuas')
            p.mb-0 Pueden tomar cualquier valor en un intervalo.
            p.mb-0 Representan magnitudes que admiten fraccionamiento.
            p.mb-0 #[b Ejemplo.] Temperatura, peso, altura.

    #t_2_2.titulo-segundo
      h2 #[span 2.2] Expresiones algebraicas
    .bg-8.mb-5
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 Una expresión algebraica, es una combinación de números, letras (llamadas variables) y operaciones matemáticas (como suma, resta, multiplicación o división), que representa una cantidad o relación. No tiene un signo de igualdad, por lo que no se considera una ecuación. 
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t2/6.png', alt='')
    p.mb-4 A continuación, se amplía el concepto de expresión algebraica, utilizando algunos ejemplos en términos sencillos de comprender: 
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t2/7.png')
      .col-sm-12.col-lg-7
        LineaTiempoD.color-acento-contenido.large
          div(numero='1' titulo='Ejemplo 1')
            p.mb-3 Imaginar que se está realizando una receta de cocina. Si para hacer galletas se necesitan 3 cucharadas de harina por cada galleta, la cantidad total de harina que se requiere, dependerá de cuántas galletas se decide preparar. Esto se puede expresar como:
            p.mb-3.text-center 3g
            p.mb-0 Donde:
            p.mb-0 3 es la cantidad fija de cucharadas por galleta.
            p.mb-0 g es el número de galletas que vas a hacer (una cantidad que puede variar).
            p.mb-0 Esto es una expresión algebraica porque combina un número fijo y una variable.

          div(numero='2' titulo='Ejemplo 2')
            p.mb-3 Si un taxi cobra $10.000 al inicio y $2.000 por cada kilómetro recorrido, el costo total del viaje se puede expresar como:
            p.mb-3.text-center $10.000 + $2.000#[i k]
            p.mb-0 Donde:
            p.mb-0 #[i k] es la cantidad de kilómetros recorridos.

          div(numero='3' titulo='Ejemplo 3')
            p.mb-3 Si se viaja a una velocidad constante de 60 km/h, el tiempo que se tarda en recorrer cierta distancia, se calcula como:
            p.mb-3.text-center d/60
            p.mb-0 Donde:
            p.mb-0 #[i d] es la distancia en kilómetros.
            p.mb-0 Las expresiones algebraicas son útiles porque permiten representar y resolver situaciones en las que hay cantidades que pueden cambiar.
    h2.mb-3 Estructura de expresiones algebraicas
    p.mb-5 Una expresión algebraica combina variables, constantes y operaciones matemáticas. Sus componentes fundamentales incluyen:
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t2/8.png' alt='')
          .custom-image-card__text.p-4
            h4.mb-2.text-center Variables
            p.mb-0.text-center Símbolos que representan valores desconocidos.
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t2/9.png' alt='')
          .custom-image-card__text.p-4
            h4.mb-2.text-center Constantes
            p.mb-0.text-center Números con valor fijo.

      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t2/10.png' alt='')
          .custom-image-card__text.p-4
            h4.mb-2.text-center Operadores
            p.mb-0.text-center Símbolos que indican acciones matemáticas (+, -, ×, ÷).

    h2.mb-3 Clasificación de expresiones algebraicas
    p.mb-5 Las expresiones algebraicas se clasifican en:
    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Monomios
              p.mb-0 Términos con una única variable.
              p.mb-4 #[b Ejemplo.] 3x, -2y, 5z²
              h5 Polinomios
              p.mb-0 Combinación de varios monomios.
              p.mb-0 #[b Ejemplo:] 2x² + 3x - 5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/11.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Expresiones racionales
              p.mb-0 Incluyen divisiones entre expresiones algebraicas.
              p.mb-0 #[b Ejemplo:] (x² + 2x) / (x - 1)
              p.mb-4 
              p.mb-0 #[b Ejemplo:]
              p.mb-0 #[b Problema.] Evaluar la expresión 3x² + 2x - 5 cuando x = 4
              p.mb-0 #[b Solución Paso a Paso:]
              p.mb-0 Sustituir x por 4 en la expresión.
              p.mb-0 Calcular 3(4)²: 3 × 16 = 48
              p.mb-0 Calcular 2(4): 2 × 4 = 8
              p.mb-0 Restar 5
              p.mb-0 Resultado final: 48 + 8 - 5 = 51
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/12.png', alt='')

    .bg-1.p-4.mb-5
      p.mb-0 #[b Analogía de viaje.] Es como planificar un viaje. La expresión algebraica es el plan de ruta, x es el destino, y cada cálculo representa los diferentes factores que influyen en el viaje (distancia, tiempo, paradas).
    #t_2_3.titulo-segundo
      h2 #[span 2.3] Operaciones con expresiones algebraicas
    p.mb-4 Primero, conozcamos las técnicas de simplificación:
    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Suma y resta de términos semejantes
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Combinar términos con idéntica parte variable.
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Ejemplo: 3x + 2x = 5x
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/13.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Multiplicación de expresiones
              ul.lista-ul--color.mb-0
                li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Aplicar propiedades distributivas.
                li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Ejemplo: 2(x + 3) = 2x + 6
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/14.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 División de expresiones algebraicas
              ul.lista-ul--color.mb-0
                li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Aplicar reglas de simplificación.
                li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Considerar restricciones de denominadores.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/15.png', alt='')
    p.mb-4 Y estudiemos algunos ejemplos:
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t2/16.png')
      .col-sm-12.col-lg-7
        AcordionA(tipo='b')
          div(titulo='Ejercicio 1')
            p.mb-4 #[b Identificación y transformación]
            p.mb-4 #[b Problema.] Convertir la expresión "El doble de un número incrementado en 5" a lenguaje algebraico.
            p.mb-0 #[b Solución:]
            p.mb-0 • Asignar variable: x
            p.mb-0 • Traducir: 2x + 5

          div(titulo='Ejercicio 2')
            p.mb-4 #[b Simplificación de expresiones]
            p.mb-4 #[b Problema.] Simplificar (4x² + 2x) + (3x² - x)
            p.mb-0 #[b Solución:]
            p.mb-0 • Identificar términos semejantes.
            p.mb-0 • Sumar coeficientes.
            p.mb-0 • Resultado: 7x² + x

          div(titulo='Ejercicio 3')
            p.mb-4 Simplificar la expresión 2x + 3y + 4x - y
            p.mb-0 #[b Solución paso a paso:]
            p.mb-0 1. Agrupar términos semejantes con x
            p.mb-0 2. Agrupar términos semejantes con y
            p.mb-0 3. Sumar coeficientes de x: 2x + 4x = 6x
            p.mb-0 4. Sumar coeficientes de y: 3y - y = 2y
            p.mb-0 5. Expresión simplificada: 6x + 2y

          div(titulo='Ejercicio 4')
            p.mb-4 #[b Aplicación práctica]
            p.mb-4 #[b Problema:] Un rectángulo tiene largo x+2 y ancho x-1. Expresar su área algebraicamente.
            p.mb-0 #[b Solución:]
            p.mb-0 A = (x+2)(x-1) = x² + x - 2


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
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://elibro.net/en/ereader/tecnologicadeloriente/105715?page=6' target='_blank' rel='noopener noreferrer') Chica Escobar, J. & Quintana Ávila, H. M. (2019). La ecuación general de segundo grado en dos y tres variables. Instituto Tecnológico Metropolitano. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://materialesdeaprendizaje.org/Objetos/matematicas/Despeje_de_Ecuaciones/conceptos.html' target='_blank' rel='noopener noreferrer') Materiales de Aprendizaje ofrece una guía paso a paso sobre el despeje de ecuaciones, explicando términos clave como coeficientes, variables, y procedimientos comunes para resolver ecuaciones lineales.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://es.symbolab.com/solver/linear-equation-calculator' target='_blank' rel='noopener noreferrer') Solucionador matemático de IA > Calculadora de ecuaciones lineales básicas

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://es.symbolab.com/solver/substitution-system-of-equations-calculator' target='_blank' rel='noopener noreferrer') Solucionador matemático de IA > Calculadora de sistemas de ecuaciones por sustitución

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://matrixcalc.org/es/slu.html' target='_blank' rel='noopener noreferrer') Solución de Sistemas de Ecuaciones Lineales Online calculadoras.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://es.onlinemschool.com/math/assistance/equation/combined_equations/' target='_blank' rel='noopener noreferrer') Solución de sistemas de ecuaciones lineales (método de sustitución

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://mathsolver.microsoft.com/es/topic/algebra/linear-equations' target='_blank' rel='noopener noreferrer') Ecuaciones lineales
            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/VNNI7aE6ccM?si=IMNNpJG0muAaWjnH' target='_blank' rel='noopener noreferrer') Ayudinga! (2022). Clasificación de expresiones algebraicas (Teoría y Ejemplos)
          
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
