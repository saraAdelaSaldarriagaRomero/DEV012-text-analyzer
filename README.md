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

![Text analyzer demo] "Text analyzer demo"

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

### Control de Versiones (Git y GitHub)

- **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

  - [ ] La estudiante creó una cuenta en Github.

  - [ ] La estudiante configuró su cuenta de Github con una llave SSH.

- **Git: Control de versiones con git (clone, add, commit, push)**

  - [ ] La estudiante creó un _fork_ para su proyecto.

  - [ ] La estudiante clonó su repositorio usando una llave SSH.

  - [ ] La estudiante creó _commits_ y los guardó en Github.

- **GitHub: Despliegue con GitHub Pages**

  - [ ] La aplicación está desplegada en Github Pages.

### Centrado en la usuaria

- **Diseñar y desarrollar un producto o servicio poniendo a las
  usuarias en el centro**

### Diseño de producto

- **Diseñar en distintos niveles de fidelidad**

  - [ ] La estudiante creó prototipos de baja fidelidad para la UI (interfaz gŕafica).

- **Seguir los principios básicos de diseño visual**

  - [ ] Se tuvieron en cuenta las reglas básica del
        [diseño visual](https://coda.io/d/Bootcamp-UX-Contenido_dqkqk2rV9Z2/Reglas-basicas-de-diseno-visual_suVcO)
        para diseñar la UI (interfáz gráfica)

## 7. Pruebas

Este proyecto cuenta con 3 conjuntos de pruebas que te ayudarán a conocer si
cumples los criterios mínimos de aceptación.

### Pruebas unitarias

Una prueba unitaria es una técnica de prueba de software en la que se comprueba
que cada componente individual de un programa o sistema funciona correctamente
de manera aislada. En otras palabras, se prueba cada unidad de código por
separado para asegurarse de que cumpla con los requisitos y especificaciones.

Las pruebas unitarias de este proyecto ejecutarán los métodos `getWordCount`,
`getCharacterCount`, `getCharacterCountExcludingSpaces`, `getNumbersCount`,
`getNumbersSum` y `getAverageWordLength` con diferentes argumentos y se
confirmará que los valores retornados sean los esperados.

Puedes ejecutar estas pruebas con el comando `npm run test` como se muestra
en la siguiente imagen:

![npm run test](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650584-c8267968-d631-4fbb-b05f-458a970544b7.gif "npm run test")

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas unitarias cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y
las [reglas recomendadas (`eslint:recommended`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

### Pruebas de criterios mínimos de aceptación

Estas pruebas analizarán tus archivos
[`index.html`](src/index.html),
[`index.js`](src/index.html),
[`analyzer.js`](src/analyzer.js)
y
[`style.css`](src/style.css)
para verificar que cumples con los
[criterios minimos de aceptacion](#5-objetivos-de-aprendizaje-y-criterios-de-aceptación-mínimos-del-proyecto).
Cada criterio esta relacionado con un objetivo de aprendizaje.

Puedes ejecutar todas estas pruebas con el comando `npm run test:oas`
como se muestra en la siguiente imagen:

![npm run test oas](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650602-f0ca9170-7563-4edc-9e78-874fa012c4fd.gif "npm run test oas")

Puedes ejecutar las pruebas de cada grupo de objetivos de aprendizaje de
manera individual con los siguientes comandos:

- `npm run test:oas-html`
- `npm run test:oas-css`
- `npm run test:oas-web-api`
- `npm run test:oas-js`

#### Pruebas end-to-end

Una prueba end-to-end (E2E) es una técnica de prueba de software en la que
se verifica el funcionamiento de todo el sistema desde el inicio hasta el
final. En otras palabras, se prueba el flujo completo del software, simulando
la interacción de la usuaria con la aplicación, para asegurarse de que todas
las partes del sistema funcionan correctamente en conjunto.

Puedes ejecutar estas pruebas con el comando `npm run test:e2e` como se muestra
en la siguiente imagen:

![npm run test e2e](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650622-a4da630e-8d39-4dd8-9fde-1a38c31a53e2.gif "npm run test e2e")

### Github actions

Este repositorio usa una GitHub Action para ejecutar automáticamente
las pruebas unitarias, pruebas de criterios mínimos de aceptación y
y pruebas end-to-end cada vez que se hagas un _push_ en la rama
_main_ de tu repositorio.

Puedes consultar el resultado de esta Github Action
en la pestaña _Actions_ de tu repositorio en Github
como se muestra en la siguiente imagen:

![Github Action](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650640-a8a8ed26-6f48-4053-8b3b-7dec7e35a9f8.gif "Github Action")

## 8. Pistas, tips y lecturas complementarias

### Prepara tu PC para trabajar

Antes de comenzar instala lo siguiente:

1. [Node.js](https://nodejs.org/)
2. [git](https://git-scm.com/download/) Si estas en Linux es muy probable que
   ya este instalado 👀.
   Para conocer más de git visita
   [este enlace](https://curriculum.laboratoria.la/es/topics/scm/01-git)
3. Un editor de código, te sugerimos [Code](https://code.visualstudio.com/)

Después en [GitHub](https://github.com/):

1. Crear una cuenta. Conoce más de GitHub en este
   [link](https://curriculum.laboratoria.la/es/topics/scm/02-github/01-github)
2. Realiza un fork de este proyecto
3. Configura tu SSH Key en GitHub. Puedes revisar este
   [video](https://www.youtube.com/watch?v=g0ZV-neSM7E) o
   [artículo](https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

Luego en una [shell](https://curriculum.laboratoria.la/es/topics/shell)
ejecuta lo siguiente. Si estas en Windows puedes usar Git Bash:

1. Clona el fork en tu PC
2. Ubica la shell en el proyecto que clonaste
3. Instala las dependencias del proyecto con `npm install`
4. Instala `playwright` con `npx playwright install chromium --with-deps`
5. Para arrancar el servidor web `npm start` y dirígete a
   `http://localhost:3000` en tu navegador.
6. A codear se ha dicho! :rocket:

### Recursos y temas relacionados

Súmate al canal de Slack [#project-text-analyzer](https://claseslaboratoria.slack.com/archives/C058GP6K9NY)

## 9. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con un coach, asegúrate que tu proyecto:

- [ ] Cumple con todos los criterios mínimos de aceptación al ejecutar `npm run test:oas`
- [ ] Cumple con todas las pruebas unitarias al ejecutar `npm run test`
- [ ] Cumple con todas las pruebas _end to end_ al ejecutar `npm run test:e2e`
- [ ] Esta libre de _errores_ de `eslint` al ejecutar `npm run test`
- [ ] Está subido a GitHub.
- [ ] Esta desplegado en GitHub Pages.
- [ ] Tiene un README con la definición del producto.

Recuerda que debes hacer una autoevaluación de _objetivos de aprendizaje_ y
_life skills_ desde tu dashboard de estudiante.

Si no has completado todo lo anterior, no consideramos que estás lista para
tu sesión de Project Feedback.

## 10. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

    <details><summary>Links</summary><p>

  - [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  - [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
  </p></details>

### CSS

- [ ] **Uso de selectores de CSS**

    <details><summary>Links</summary><p>

  - [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  - [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
  </p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

    <details><summary>Links</summary><p>

  - [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  - [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  - [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  - [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
  </p></details>

### Web APIs

- [ ] **Uso de selectores del DOM**

    <details><summary>Links</summary><p>

  - [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  - [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  - [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
  </p></details>

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

    <details><summary>Links</summary><p>

  - [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  - [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  - [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  - [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
  </p></details>

- [ ] **Manipulación dinámica del DOM**

    <details><summary>Links</summary><p>

  - [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  - [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  - [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  - [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  - [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  - [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
  </p></details>

### JavaScript

- [ ] **Tipos de datos primitivos**

    <details><summary>Links</summary><p>

  - [Valores primitivos - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures#valores_primitivos)
  </p></details>

- [ ] **Strings (cadenas de caracteres)**

    <details><summary>Links</summary><p>

  - [Strings](https://curriculum.laboratoria.la/es/topics/javascript/06-strings)
  - [String — Cadena de caracteres - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
  </p></details>

- [ ] **Variables (declaración, asignación, ámbito)**

    <details><summary>Links</summary><p>

  - [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  - [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
  </p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

    <details><summary>Links</summary><p>

  - [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  - [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
  </p></details>

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

    <details><summary>Links</summary><p>

  - [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  - [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
  </p></details>

- [ ] **Funciones (params, args, return)**

    <details><summary>Links</summary><p>

  - [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  - [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  - [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  - [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
  </p></details>

- [ ] **Pruebas unitarias (unit tests)**

    <details><summary>Links</summary><p>

  - [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
  </p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

    <details><summary>Links</summary><p>

  - [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  - [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
  </p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

    <details><summary>Links</summary><p>

  - [Sitio oficial de GitHub Pages](https://pages.github.com/)
  </p></details>

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Diseñar en distintos niveles de fidelidad**

- [ ] **Seguir los principios básicos de diseño visual**

## 11. Funcionalidades opcionales

Si terminaste con todas las [funcionalidades requeridas](#3-funcionalidades),
intenta implementar las siguientes funcionalidades opcionales para
profundizar en los objetivos de aprendizaje del proyecto:

- Que el recuento de palabras y caracteres sea 0 para una entrada de
  texto vacía.
- Que el recuento de palabras y caracteres sea 0 para una entrada de
  texto con solo espacios.
- Que el recuento de palabras y caracteres sea 0 para una entrada de
  texto con solo caracteres de puntuación.

Puedes habilitar las pruebas unitarias y en _end to end_ de estos casos
en los archivos [test/analyzer.spec.js](test/analyzer.spec.js) y
[read-only/test/e2e/app.spec.js](read-only/test/e2e/app.spec.js).
También tendrás que ajustar las pruebas ya existentes de las
funcionalidades requeridas.
