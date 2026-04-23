# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a: Luca Ariel Almiron** <!-- Tu nombre completo -->
**Fecha: 23/04/2026** <!-- Fecha del examen, ej: 21/04/2026 -->

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso

```
Lo usé al inicio, cuando tenía el HTML base sin refinar y quería partir de una versión más correcta en cuanto a semántica y accesibilidad antes de avanzar con el resto del ejercicio.
```

### Lo que le pedí a la IA

```
Actúa como un Desarrollador Frontend Senior experto en Accesibilidad Web (WCAG).
Debes refactorizar el siguiente código HTML de una "Ficha de Personaje" para cumplir con estándares modernos de semántica y accesibilidad, siguiendo estas reglas estrictas:
Semántica: Reemplaza todos los <div> y <span> que actúan como contenedores estructurales por etiquetas semánticas apropiadas (<header>, <nav>, <main>, <section>, <article>, <footer>). No uses atributos ARIA innecesarios; prefiere elementos HTML nativos semánticos.
Accesibilidad de Imágenes: Agrega un atributo alt descriptivo y funcional a cada etiqueta <img>. Si una imagen es puramente decorativa, usa alt="" (vacío)
Formularios: Asegúrate de que cada campo de entrada (input, select, etc.) esté asociado a un <label> mediante los atributos id en el input y for en el label. Importante: El id debe ser único y coincidir exactamente con el for.
Interactividad: Todos los elementos que funcionen como botones (ej: <div class="btn">) deben ser reemplazados por la etiqueta técnica correcta: <button>.
Configuración Documental: Agrega el atributo lang="es" a la etiqueta <html> y asegúrate de que el <head> incluya el <meta name="viewport" content="width=device-width, initial-scale=1.0">.
Contraste: Asegúrate de que las clases sugeridas sigan una nomenclatura que indique intención de contraste (p. ej. text-primary-dark), asumiendo que el CSS externo Cumple con WCAG 2.1 Nivel AA (incluyendo contraste mínimo 4.5:1 para texto normal)
Naming Convention: Todos los atributos id, class y name deben estar estrictamente en inglés. Utiliza nombres nemotécnicos y descriptivos que indiquen claramente la función de cada elemento (ejemplo: user-email-input en lugar de dato1). Evita abreviaturas confusas.
Vinculación: Asegúrate de incluir el enlace al archivo CSS externo como <link rel="stylesheet" href="style.css"> y el script al final del body como <script src="script.js"></script>.
Salida: Solo entrégame el código HTML limpio. No agregues CSS inline ni bloques de <style>.
Código base a refactorizar:
(codigo html original)
```

### Análisis del resultado obtenido

```
La IA encaró el problema intentando mejorar la estructura general del HTML desde el lado de la semántica y accesibilidad, agregando cosas importantes como los alt en imágenes y la relación correcta entre label e input. También respetó bastante bien la estructura original, lo cual ayudó a no romper el layout que ya venía dado.
Igual no cumplió completamente con lo que le pedí, porque dejó varios <div> y <span> que seguían teniendo un rol estructural cuando deberían haber sido reemplazados por etiquetas semánticas. O sea, mejoró el código, pero no lo llevó al nivel “ideal” que pedía el prompt.
Me sirvió como punto de partida porque me dejó una base bastante ordenada, con nombres consistentes y accesibilidad básica aplicada, entonces después solo tuve que ajustar detalles más finos.
```

### Qué debí corregir manualmente y por qué

```
Tuve que corregir principalmente temas de semántica, porque la IA no reemplazó todos los <div> y <span> como se pedía. Me di cuenta leyendo el código y viendo que todavía había contenedores genéricos en lugares donde correspondían etiquetas más específicas.
También tuve que sacar atributos aria-required que la IA agregó en los inputs, porque eran innecesarios al ya usar required, y eso iba en contra de la consigna de evitar ARIA redundante.
Por último, ajusté algunos detalles de estructura, como usar listas en vez de spans para ciertos grupos de elementos (por ejemplo los tags), y mejorar la organización interna de algunas secciones. No eran errores graves, pero sí cosas necesarias para que el código quede realmente bien hecho y alineado con buenas prácticas.
```

---

## Prompt 2

### Momento del proceso

```
Lo usé al empezar la parte de JavaScript, cuando tenía que armar el script.js desde cero y no tenía claro cómo estructurar bien las funciones y las variables según lo que pedía la consigna.
```

### Lo que le pedí a la IA

```
Actúa como un Desarrollador JavaScript Senior siguiendo estándares de Clean Code.
Tarea: crea el archivo script.js para el proyecto "Ficha de Personaje" cumpliendo estrictamente con estos requisitos técnicos:
Variables y Constantes: declara las estadísticas del personaje usando const o let según corresponda. Usa estos valores iniciales: name = 'Zara Darkbane', characterClass = 'Sorceress', level = 7, health = 80, mana = 120, attack = 45, defense = 30. También declara spellCost = 30 y isStunned = false. Prohibido usar var. Todos los nombres en inglés y descriptivos.
Funciones Obligatorias:
calculateDamage(attack, defense): función declarada. Retorna la diferencia attack - defense. Si el resultado es negativo, retorna 0.
isAlive(health): arrow function. Retorna true si health > 0, false en caso contrario (incluye negativos).
canCastSpell(currentMana, spellCost, isStunned): arrow function. Retorna true solo si currentMana >= spellCost Y isStunned === false.
getPresentation(name, characterClass, level): función declarada. Retorna un string con el formato exacto: 'Nombre — Clase (Nivel N)'. Por ejemplo: 'Zara Darkbane — Sorceress (Nivel 7)'.
Ejecución y Resultados: llama a cada función usando las variables declaradas (no uses números directamente). Almacena los resultados en variables si es necesario. Muestra cada resultado en consola con console.log() y mensajes claros (ej. 'Daño calculado: 15', '¿Personaje vivo? true', etc.).
Buenas Prácticas: usa nombres nemotécnicos en inglés. Indentación limpia. Comentarios breves explicando cada función. Incluye 'use strict' al inicio.
Salida: entrégame solo el contenido de script.js dentro de un bloque de código.
```

### Análisis del resultado obtenido

```
La IA resolvió bastante bien la estructura general del script, creando todas las variables, funciones y ejecuciones tal como pedía la consigna. Se nota que siguió un enfoque ordenado, separando bien cada sección (variables, funciones y ejecución) y usando buenas prácticas como const/let y arrow functions donde correspondía.
El resultado en general era lo que esperaba porque el código funcionaba correctamente y cumplía con la lógica pedida. Incluso agregó una parte de validación del formulario con eventListener que no estaba explícitamente en el prompt, pero que suma funcionalidad al proyecto.
Como base me sirvió mucho porque ya me dejó armado todo el flujo del programa y además me dio una idea de cómo conectar el JS con el HTML mediante el formulario.
```

### Qué debí corregir manualmente y por qué

```
Tuve que ajustar algunos detalles puntuales. Por ejemplo, en la función getPresentation la IA usó el parámetro characterType en lugar de characterClass, lo cual no coincidía exactamente con lo que pedía la consigna. Lo detecté leyendo el código y comparándolo con el enunciado.
También revisé el uso de let en variables como characterHealth e isStunned. En este caso decidí dejarlas como let porque podrían cambiar en una lógica más completa del juego, aunque en este script puntual no se modifican.
Por último, la parte del event listener no era obligatoria según el prompt, pero la dejé porque está bien implementada y agrega validación básica del formulario. Solo verifiqué que no rompiera nada y que los ids coincidieran correctamente con el HTML.
```

---

## Reflexión final

```
En general la IA cometió algunos errores repetidos más que nada en detalles finos, como no seguir exactamente los nombres pedidos o no aplicar completamente ciertos cambios de semántica en HTML. No fueron errores graves, pero sí cosas que tuve que revisar manualmente para asegurar que cumpla al 100% con la consigna.
Hubo partes que resolvió muy bien a la primera, especialmente en JavaScript, donde prácticamente no tuve que hacer correcciones porque la lógica, la estructura y el uso de buenas prácticas estaban bien aplicados. En ese sentido, me ahorró bastante tiempo y me sirvió directamente como solución válida.
Para la próxima trataría de ser más preciso en los detalles finos del prompt, ya que aunque en general funcionó bien, la IA tiende a desviarse en cosas puntuales como nombres o decisiones no especificadas.
```
