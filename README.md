# Analizador de texto

## Índice

- [1. Introducción](#1-Introducción)
- [2. Preámbulo](#2-preámbulo)
- [4. Funcionalidades](#4-funcionalidades)
- ***

## 1. Introducción

En este proyecto, he creado una aplicación web que te permitirá analizar un texto directamente en tu navegador. Con esta aplicación, podrás ingresar cualquier texto de tu elección, y a partir de ahí, se generarán una serie de indicadores y métricas específicas relacionadas con caracteres, letras, números y más. He desarrollado esta herramienta utilizando las tecnologías esenciales de la web, como HTML, CSS y JavaScript."

## 2. Preámbulo

![Una lupa sobre texto de libro](https://github.com/Laboratoria/curriculum/assets/92090/2b45f653-69a5-4282-a65c-d34125c36113)

_Credito: Foto de [ethan](https://unsplash.com/fr/@andallthings?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
_en [Unsplash](https://unsplash.com/es/fotos/72NpWZJOskU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

Un analizador de texto es una aplicación para extraer información útil de un
texto utilizando diversas técnicas, como el procesamiento del lenguaje
natural (NLP), el aprendizaje automático (ML) y el análisis estadístico.
Estas aplicaciones pueden proporcionar una variedad de métricas que brindan
información básica sobre la longitud y la estructura del texto como por
ejemplo, el conteo de palabras, el conteo de caracteres, el conteo de
oraciones y el conteo de párrafos. Otras métricas incluyen el análisis
de sentimientos, que utiliza técnicas de NLP para determinar el tono
general positivo, negativo o neutral del texto, y el análisis de
legibilidad, que utiliza algoritmos para evaluar la complejidad y la
legibilidad del texto.

En general, las aplicaciones de análisis de texto brindan información
valiosa y métricas sobre los textos que pueden ayudar a las usuarias a
tomar decisiones informadas y sacar conclusiones significativas.
Mediante el uso de estas herramientas de análisis, las usuarias pueden
obtener una comprensión más profunda de los textos.

## 4. Funcionalidades

El listado de funcionalidades es el siguiente:

1.  La aplicación permite a la usuaria ingresar un texto escribiéndolo
    en un cuadro de texto.

2.  La aplicación calcula las siguientes métricas y actualiza el
    resultado en tiempo real a medida que la usuaria escribe su texto:

        - **Recuento de palabras**: la aplicación puede contar el número de
        palabras en el texto de entrada y muestra este recuento a la usuaria
        - **Recuento de caracteres**: la aplicación cuenta el número de
        caracteres en el texto de entrada, incluidos espacios y signos de
        puntuación, y muestra este recuento a la usuaria.
        - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
        la aplicación cuenta el número de caracteres en el texto de
        entrada, excluyendo espacios y signos de puntuación, y muestra este recuento
        a la usuaria.
        - **Recuento de números**: la aplicación cuenta cúantos números hay en
        el texto de entrada y muestra este recuento a la usuaria.
        - **Suma total de números**: la suma todos los números que
        hay en el texto de entrada y muestra el resultado a la usuaria.
        - **Longitud media de las palabras**: la aplicación calcula la
        longitud media de las palabras en el texto de entrada y la muestra  a la usuaria.

3.  La aplicación permite limpiar el contenido de la caja de texto haciendo
    clic en un botón.


### HTML

En el archivo index.html estructure la pagina web en este caso la aplicacion Analizador de Texto, respetando su estructura basica, y dentro de la etiqueta body que es la que indica la parte visible del documento,lo maquete de la siguiente forma:

- Etiqueda header el encabezado de la pagina, dentro de esta puse una imagen<img> y el titulo <h1> .
- Un <textarea> es la caja de texto donde las usuarias van ha ingresar el texto que quieren analizar, a este agregue un <placeholder> un texto indicador para la usuaria.
- Una lista no ordenada <ul> que contiene 6 item o hijos <li> utilizados con el fin de mostrar cada metrica.
- Un boton con la etiquta <button> que permite a las usuarias mediante un clic, limpiar el contenido de texto.
- Un pie de pagina <footer> donde dentro de una etiqueta <p> escribi mi nombre como desarrolladora de la aplicacion.

A algunas de estas etiquetas les agregue indicadores de elementos como atributos, id, clases con su respetivo valor con el fin de identificarlos, personalizar su estilo, asi como llamarlos y darles uso en java script.

### CSS

- Use el archivo styles.css para darle diseño y presentacion a la aplicacion, utilizando los distintos selectores de texto.

- La paleta de colores que elegi fue el color azul celeste como protagonista ya que desde la psicologia del color este representa calma,tranquilidad y en el diseño da una senscion de espacio y limpiesa.

- El color magenta lo utilizo en los elentos que quiero resaltar como el titulo y el boton, este color se asocia con el amor.

- Para el color de la tipografia y el logo elegi el color gris ya que da sensacion de neutralidad.

- La tipografia que elegi es SanSerif - Arial, Helvetica, sans-serif que le da un toque moderno al diseño, estas tipograias son copatibles con la web.

Anterior a esto se realizo un prototipo de fidelidad media en Canva.

### Web APIs

- **Uso de selectores del DOM**

  - [ ] La aplicación usa el
        [`selector del DOM querySelector`]

  - [ ] La aplicación usa el
        [`selector del DOM getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById).

- **Manejo de eventos del DOM (listeners, propagación, delegación)**

  - [ ] La aplicación registra un
        [Event Listener](https://developer.mozilla.org/en/docs/Web/API/EventTarget/addEventListener)
        para escuchar el evento `input` del `<textarea>` para actualizar las métricas
        cuando se haga escriba en el cuadro de texto.

  - [ ] La aplicación registra un
        [Event Listener](https://developer.mozilla.org/en/docs/Web/API/EventTarget/addEventListener)
        para escuchar el evento `click` del `<button>` que limpia el contenido de la
        caja de texto.

- **Manipulación dinámica del DOM**
  - [ ] La aplicación actualiza el atributo
        [`textContent`](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
        o
        [`innerHTML`](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
        de los `<li>` que mostrar las métricas del texto.

### JavaScript

- **Tipos de datos primitivos**

  - [ ] La aplicación convierte valores tipo `string` a tipo `number`.

- **Strings (cadenas de caracteres)**

  - [ ] La aplicación usa métodos para manipular strings como
        [`split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split),
        [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
        o
        [`replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

- **Variables (declaración, asignación, ámbito)**

  - [ ] La aplicación declara variables con
        [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
        y
        [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const).

  - [ ] La aplicación NO declara variables con `var`.

- **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  - [ ] La aplicación usa el statement
        [`if..else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
        para evaluar condiciones.

- **Uso de bucles/ciclos (while, for, for..of)**

  - [ ] La aplicación usa el statement
        [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
        para crear un bucle.

- **Funciones (params, args, return)**

  - [ ] El objeto `analyzer` contiene un método `getWordCount` para calcular el
        recuento de palabras de un texto.

  - [ ] El objeto `analyzer` contiene un método `getCharacterCount` para calcular
        el recuento de caracteres de un texto.

  - [ ] El objeto `analyzer` contiene un método `getCharacterCountExcludingSpaces`
        para calcular el recuento de caracteres excluyendo espacios y signos de
        puntuación de un texto.

  - [ ] El objeto `analyzer` contiene un método `getNumbersCount` para contar
        cúantos números hay en un texto.

  - [ ] El objeto `analyzer` contiene un método `getNumbersSum` para la suma
        longitud media de los números en un texto.

  - [ ] El objeto `analyzer` contiene un método `getAverageWordLength` para
        calcular la longitud media de las palabras en un texto.

- **Pruebas unitarias (unit tests)**

  - [ ] Se pasan todas las pruebas unitarias.

- **Módulos de ECMAScript (ES Modules)**

  - [ ] La aplicación usan
        [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
        y
        [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
        para importar y exportar valores desde un modulo JavaScript.

- **Uso de linter (ESLINT)**

  - [ ] Al ejecutar el linter no se muestran errores de formato y estilo.

- **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

  - [ ] En el código se utilizan identificadores descriptivos para variables
        y funciones.

