# Desarrollo de Software con IA

Created by: Javier Moya

<aside>
🎯

**Objetivo del curso:** construir una aplicación completa, con estándares empresariales y lista para producción, usando IA como herramienta de desarrollo.

No es necesario ser experto en programación, pero sí tener las bases.

</aside>

**Temas que veremos a lo largo del curso:** patrones de diseño de software y arquitectura de software.

---

# 1. Conceptos básicos

## ¿Qué es la IA?

### IA débil (o estrecha)

Es la IA que existe hoy: sistemas diseñados para tareas específicas.

- Sistemas de recomendación de Netflix o YouTube.
- Asistentes como ChatGPT o Claude, que son **LLM**. En el fondo, un LLM predice la siguiente palabra (token).

### AGI — Inteligencia Artificial General

Una IA capaz de realizar cualquier tarea intelectual que haga una persona. **Todavía no existe.**

### ASI — Superinteligencia Artificial

Una IA que superaría al ser humano en todos los ámbitos. Hoy es **especulación y filosofía** más que una realidad técnica (por ejemplo, la idea de que la IA superará al humano y "se rebelará").

---

## Machine Learning (ML)

El *machine learning* o aprendizaje automático es la rama de la IA en la que **los sistemas aprenden a partir de datos**, en lugar de seguir reglas programadas a mano.

![image.png](Desarrollo%20de%20Software%20con%20IA/image.png)

## LLM — Large Language Model

Un **modelo de lenguaje grande** es una IA que genera texto.

En su forma más simple, un LLM es un **modelo estadístico que predice la siguiente palabra**. Si escribes *"Hola, ¿cómo…"*, el modelo predice que lo más probable es *"estás?"*.

Esto le da una aparente **comprensión del lenguaje**, que proviene de los miles de millones de ejemplos de texto con los que fue entrenado.

### LLM vs. chatbot vs. buscador

- **Chatbot tradicional:** solo responde a frases predefinidas. Si le escribes algo fuera de lo previsto, no sabe contestar. Funciona como un árbol de decisión.
- **Buscador (Google, YouTube):** encuentra contenido que **ya existe**.
- **LLM:** **genera texto nuevo** a partir de los patrones que aprendió, aunque esa respuesta exacta nunca se haya escrito antes.

![image.png](Desarrollo%20de%20Software%20con%20IA/image%201.png)

### Ejemplos de LLM que conoces

![image.png](Desarrollo%20de%20Software%20con%20IA/image%202.png)

Todos se basan en el mismo principio fundamental: **predecir la siguiente palabra a partir de lo que aprendieron**.

![image.png](Desarrollo%20de%20Software%20con%20IA/image%203.png)

---

# 2. ¿Qué puede y qué no puede hacer un LLM?

### ✅ Puede

- Generar y explicar código.
- Resumir textos extensos.
- Traducir idiomas.

### ⚠️ Le cuesta

- Matemáticas (cálculos exactos).
- Hechos actuales (posteriores a su entrenamiento).
- Razonamiento complejo de varios pasos.
- Usar herramientas del mundo real (sin integraciones).

---

# 3. Arquitectura Transformer

La **arquitectura Transformer** es un tipo de red neuronal que permite a los modelos de lenguaje procesar texto y captar cómo se relacionan las palabras entre sí, incluso cuando están lejos unas de otras.

Su mecanismo clave, llamado **atención**, ayuda al modelo a decidir qué partes del texto son más relevantes para entender o generar cada palabra. Por eso puede manejar contextos largos y tareas como traducir, resumir o responder preguntas. Los Transformers son la base de muchos LLM, como GPT.

Revolucionó el procesamiento del lenguaje natural. Fue presentada en **2017** por investigadores de Google en el artículo *"Attention Is All You Need"*.

[1706.03762v7.pdf](Desarrollo%20de%20Software%20con%20IA/1706.03762v7.pdf)

![image.png](Desarrollo%20de%20Software%20con%20IA/image%204.png)

En las primeras capas, el modelo procesa cada palabra de manera más individual:

![image.png](Desarrollo%20de%20Software%20con%20IA/image%205.png)

En capas posteriores, combina la información y capta el sentido de la oración completa:

![image.png](Desarrollo%20de%20Software%20con%20IA/image%206.png)

### 3.1 La red neuronal

Una red neuronal está formada por capas que realizan operaciones matemáticas sobre los datos. Por ejemplo, una red neuronal tradicional podría tener esta estructura:

```
   Entrada
      ↓
Capa neuronal 1
      ↓
Capa neuronal 2
      ↓
Capa neuronal 3
      ↓
    Salida
```

Cada capa transforma la representación de los datos que recibe.

### 3.2 El bloque Transformer

En lugar de utilizar únicamente capas densas tradicionales, los investigadores de Google propusieron un bloque que incorpora mecanismos de atención. Un bloque Transformer típico contiene:

```
    Entrada
       ↓
Multi-Head Attention
       ↓
Add & LayerNorm
       ↓
Feed Forward Network
       ↓
Add & LayerNorm
       ↓
     Salida
```

*Este esquema representa una versión simplificada del bloque Transformer original; existen variantes modernas que modifican el orden de las operaciones.*

**La innovación principal está en el mecanismo de atención**, que permite que cada token utilice información de otros tokens de la secuencia para construir su representación.

> Ejemplo: *"El gato se acostó en el sofá porque estaba cansado."* El mecanismo de atención puede aprender la relación entre «cansado» y «gato», aunque estén separados por varias palabras.
> 

### 3.3 Un LLM utiliza muchos bloques Transformer

Aquí es donde se conecta con modelos como GPT:

```
       TEXTO
         ↓
  Tokenización
         ↓
     Embeddings
         ↓
┌─────────────────┐
│ Transformer 1   │
├─────────────────┤
│ Transformer 2   │
├─────────────────┤
│ Transformer 3   │
├─────────────────┤
│       ...       │
├─────────────────┤
│ Transformer N   │
└─────────────────┘
         ↓
 Proyección final
         ↓
 Probabilidades
         ↓
 Siguiente token
```

Por ejemplo, GPT-2 Large utiliza **36 bloques Transformer**, mientras que GPT-3 (175B) utiliza **96 bloques**. Cada bloque transforma las representaciones que recibe del anterior.

### 3.4 Entonces, ¿el Transformer es una capa?

Depende del nivel de abstracción:

- **Como arquitectura:** "Transformer" es el nombre del diseño completo del modelo (tokenización, embeddings, bloques y proyección final).
- **Como bloque:** en un LLM, cada bloque Transformer se apila uno sobre otro y se comporta como una "capa grande" del modelo. Cuando se dice que GPT-3 tiene 96 capas, se refiere a estos bloques.
- **Por dentro:** cada bloque no es una sola capa, sino que contiene varias subcapas: atención, red *feed forward* y normalización.

### 3.5 Modelo Transformer original

![image.png](Desarrollo%20de%20Software%20con%20IA/image%207.png)

---

# 4. Embeddings

**¿Cómo entiende el modelo las palabras que le damos?**

Los **embeddings** son la forma en que el modelo convierte los tokens —fragmentos de palabras— en números que la red neuronal puede procesar. En el esquema, aparecen después de la **tokenización** y antes de los bloques Transformer.

Piensa en cada token como un punto en un espacio matemático. Los tokens que se usan en contextos parecidos quedan representados de forma parecida. **No es una traducción directa de cada número a una característica humana**; el modelo aprende esas representaciones durante su entrenamiento.

Al principio son representaciones de entrada. Luego, los bloques Transformer las van transformando usando el contexto de la oración. Por eso, una palabra como *banco* puede terminar representada de manera distinta según si hablas de sentarte o de dinero.

<aside>
💡

**En corto:** la tokenización divide el texto; los embeddings convierten esos fragmentos en representaciones numéricas; el Transformer las contextualiza.

</aside>

![image.png](Desarrollo%20de%20Software%20con%20IA/image%208.png)

Todo esto el modelo lo resuelve con **matemáticas y estadística**: busca patrones y similitudes entre números.

---

# 5. Mecanismo de atención

El **mecanismo de atención** permite que cada token tome en cuenta a otros tokens de la oración para construir una representación más contextualizada. Es la parte clave del bloque Transformer.

Por ejemplo: *«El gato se acostó en el sofá porque estaba cansado»*. Al procesar *cansado*, el modelo puede asignar más importancia a *gato* que a *sofá*, porque esa relación ayuda a interpretar la oración.

De forma simplificada, calcula qué tokens son relevantes y cuánto, y combina esa información. No "entiende" como una persona: realiza esos cálculos con representaciones numéricas aprendidas.

![image.png](Desarrollo%20de%20Software%20con%20IA/image%209.png)

---

# 6. Tokenización

La **tokenización** es el paso en que el modelo divide el texto en unidades llamadas **tokens** y les asigna identificadores numéricos. Un token puede ser una palabra completa, parte de una palabra o un signo de puntuación; no siempre coincide con una palabra.

Por ejemplo, una palabra larga podría dividirse en varios fragmentos. La división exacta depende del tokenizador de cada modelo.

**Flujo:** texto → tokens → embeddings → bloques Transformer.

### Pruébalo tú mismo

- [Tokenizador de OpenAI](https://platform.openai.com/tokenizer)
- [Tokenizador de Claude](https://claude-tokenizer.vercel.app/)

<aside>
🔑

**Idea clave:** los LLM no ven palabras, **ven números**: una secuencia de números, uno tras otro. Lo que hacen es **predecir el siguiente número de esa secuencia**.

</aside>

Las palabras que aparecen en contextos similares terminan con representaciones (embeddings) similares.

El flujo completo es:

![image.png](Desarrollo%20de%20Software%20con%20IA/image%2010.png)

El modelo **predice token por token** basándose en patrones aprendidos, gracias al enorme volumen de datos con el que fue entrenado. No tiene conciencia: todo es matemáticas y probabilidades.

---

# 7. Entrenar un LLM

Un LLM se entrena ajustando millones o miles de millones de parámetros para que prediga mejor el siguiente token:

1. **Se preparan muchos textos** y se dividen en tokens.
2. **El modelo recibe una secuencia** de tokens y predice cuál sigue.
3. **Se compara su predicción con el token real.** La diferencia se mide con una función de pérdida.
4. **Se ajustan los parámetros** mediante retropropagación y descenso de gradiente para reducir esa diferencia.
5. **Se repite el proceso** con muchísimos ejemplos. Así el modelo aprende patrones del lenguaje.
6. **Después puede afinarse** con ejemplos de instrucciones y respuestas, y con evaluaciones para que resulte más útil y seguro.

En resumen: durante el entrenamiento, el modelo no memoriza una lista de respuestas predeterminadas; sus parámetros se ajustan repetidamente para mejorar sus predicciones. Luego, al generar texto, predice un token y vuelve a hacerlo usando el texto acumulado como contexto.

![image.png](Desarrollo%20de%20Software%20con%20IA/image%2011.png)

### Preentrenamiento

Durante el preentrenamiento, el modelo tiene que aprender **una única cosa: predecir la siguiente palabra**. Aun así, esa sola tarea le enseña muchas habilidades distintas (gramática, hechos, estilo, razonamiento básico, código…).

![image.png](Desarrollo%20de%20Software%20con%20IA/image%2012.png)

### ¿Cuánto cuesta entrenar un modelo "como GPT"?

Depende de lo que signifique "como GPT":

- **Entrenar un modelo pequeño** para una tarea específica puede costar desde cientos hasta miles de dólares.
- **Ajustar un modelo existente** con datos propios —*fine-tuning*— suele costar mucho menos: desde decenas o cientos de dólares hasta varios miles, según el modelo y el volumen.
- **Entrenar desde cero un modelo grande** puede costar millones. Las cifras de los modelos más avanzados son poco transparentes y algunas estimaciones llegan a decenas o más de cien millones de dólares.

Eso puede cubrir solo el **cómputo del entrenamiento**. Preparar datos, hacer pruebas, contratar especialistas y operar el modelo después elevan el costo total. Por eso, para la mayoría de los proyectos conviene usar un modelo existente y adaptarlo, en vez de entrenar uno desde cero.

> **Ejemplo:** entrenar GPT-3 (175 mil millones de parámetros) se estimó en alrededor de **4.6 millones de dólares** solo en cómputo. Es una estimación externa, no una cifra oficial de OpenAI, y no incluye todos los costos del proyecto.
> 

---

# 8. Fine-tuning (ajuste fino)

El *fine-tuning* consiste en continuar el entrenamiento de un modelo ya preentrenado con un conjunto más pequeño y específico de ejemplos. Así se adapta su comportamiento a una tarea, un estilo o un dominio concreto, sin entrenarlo desde cero.

Por ejemplo, una empresa puede proporcionarle ejemplos de preguntas y respuestas para que el modelo responda siguiendo el formato y el tono de su servicio al cliente. Durante el ajuste se actualizan algunos o todos los parámetros del modelo para que sus respuestas se parezcan más a los ejemplos.

### Proceso básico

1. Definir la tarea y reunir ejemplos representativos, correctos y de buena calidad.
2. Preparar los datos en el formato que requiere el modelo, por ejemplo, instrucciones junto con sus respuestas esperadas.
3. Entrenar el modelo con esos ejemplos y evaluar sus resultados con datos que no se usaron durante el entrenamiento.
4. Revisar errores y, si hace falta, mejorar los datos o el ajuste.

El *fine-tuning* puede ayudar a que el modelo siga instrucciones o formatos con mayor consistencia. No garantiza que conozca hechos nuevos ni que siempre responda correctamente; para información que cambia con frecuencia suele ser mejor conectarlo a fuentes actualizadas. También requiere cuidar la privacidad y la calidad de los datos usados.

**Diferencia con el preentrenamiento:** el preentrenamiento enseña patrones generales a partir de grandes cantidades de datos; el *fine-tuning* adapta un modelo existente a una necesidad más específica. En algunos casos basta con mejorar las instrucciones (*prompting*) y no es necesario ajustar el modelo.

![image.png](Desarrollo%20de%20Software%20con%20IA/image%2013.png)

### ¿El fine-tuning es aprendizaje supervisado?

**En muchos casos, sí**: se le muestran al modelo ejemplos de entradas y respuestas deseadas para que aprenda a responder de forma más consistente. Esas respuestas pueden haber sido escritas o revisadas por personas.

Pero no significa que una persona supervise **cada respuesta que el modelo genera**. La supervisión humana suele ocurrir al preparar o evaluar los ejemplos; después, el modelo responde por sí solo. También existen ajustes con otros métodos, como preferencias humanas o datos generados y revisados automáticamente.

### Etapas después del preentrenamiento

1. **Entrenamiento especializado:** ajuste supervisado con ejemplos de instrucciones y respuestas.
2. **Alineación con preferencias humanas:** se comparan respuestas y se refuerzan las que las personas consideran más útiles y seguras (por ejemplo, RLHF).

![image.png](Desarrollo%20de%20Software%20con%20IA/image%2014.png)

---

# 9. ¿Cómo aprende una IA a programar?

Una IA no aprende a programar exactamente como una persona. Durante su entrenamiento, ajusta los parámetros de una red neuronal para reconocer patrones en grandes colecciones de texto y código. Después puede usar esos patrones para generar, explicar y modificar programas.

### 9.1 Preentrenamiento con texto y código

- Se reúnen grandes cantidades de ejemplos: código, documentación, tutoriales y conversaciones sobre programación.
- El contenido se divide en tokens, que el modelo procesa como representaciones numéricas.
- En el entrenamiento, el modelo intenta predecir el siguiente token de una secuencia. Por ejemplo, después de `function sumar(a, b) { return`, puede aprender qué tokens suelen completar ese código.
- Se compara la predicción con el ejemplo real y se ajustan los parámetros para reducir el error. Al repetirlo muchas veces, aprende patrones de sintaxis, estructuras comunes y relaciones entre instrucciones y código.

Esto no significa que memorice o comprenda perfectamente cada programa. Aprende regularidades a partir de los ejemplos y puede producir código plausible pero incorrecto.

### 9.2 Ajuste para seguir instrucciones

Después del preentrenamiento, el modelo puede ajustarse con ejemplos de solicitudes y respuestas: por ejemplo, una instrucción para crear una función junto con una solución esperada. También puede evaluarse y optimizarse para que sus respuestas sean más útiles, claras y seguras.

Este ajuste ayuda a responder a tareas como explicar un error, escribir pruebas o refactorizar código. No garantiza que el resultado compile, sea seguro o cumpla todos los requisitos.

### 9.3 Uso de herramientas para probar código

Algunos asistentes pueden utilizar herramientas, como un intérprete, pruebas automatizadas o un entorno de desarrollo. En ese caso, pueden generar código, ejecutarlo, observar errores y proponer cambios. Este ciclo de prueba y corrección puede mejorar la solución durante la tarea.

Usar una herramienta no significa que el modelo esté aprendiendo de forma permanente: normalmente, los cambios se hacen en la respuesta o en el contexto de esa sesión. El modelo solo cambia de manera duradera si sus responsables incorporan datos y realizan un nuevo entrenamiento o ajuste.

### 9.4 Ejemplo del proceso

1. La persona pide: «Escribe una función que calcule el promedio de una lista».
2. El modelo interpreta la solicitud usando los patrones aprendidos.
3. Genera una posible solución y puede explicar cómo funciona.
4. Si dispone de herramientas, ejecuta pruebas y revisa los resultados.
5. La persona verifica el código y señala lo que debe corregirse.

### 9.5 Ideas importantes

- La IA aprende patrones de código; no sigue necesariamente una receta consciente ni razona igual que una persona.
- Puede cometer errores, inventar funciones o usar versiones desactualizadas de una biblioteca.
- El código debe revisarse, probarse y evaluarse en el contexto del proyecto antes de utilizarlo.
- Para aprender programación, conviene pedir explicaciones, estudiar los fundamentos y practicar escribiendo y depurando código por cuenta propia.

<aside>
⚠️

**Problemas comunes al programar con IA**

- **Conocimiento desactualizado:** el modelo pudo haber sido entrenado con código o bibliotecas viejas, por lo que puede inventar funciones, APIs o métodos que no existen o ya no funcionan.
- **Falta de contexto:** cuando abres ChatGPT en otra ventana y pegas fragmentos de código, el modelo no conoce realmente el contexto de tu proyecto (su estructura, dependencias y convenciones).
</aside>

---

# 10. Parámetros

Los **parámetros** son los valores numéricos internos de un modelo —principalmente *pesos* y *sesgos*— que se ajustan durante el entrenamiento. En conjunto, guardan los patrones que el modelo aprendió de los datos.

### ¿Qué hacen?

- Cada capa de la red neuronal hace operaciones matemáticas (multiplicaciones y sumas) sobre las representaciones numéricas de los tokens usando estos valores.
- Determinan cómo se transforman los embeddings, cómo funciona la atención y qué probabilidad recibe cada posible siguiente token.
- Nadie los escribe a mano: en cada paso del entrenamiento se mide el error de la predicción y los parámetros se ajustan un poco para reducirlo (retropropagación y descenso de gradiente).

**Analogía:** son como miles de millones de perillas que se van calibrando con ejemplos hasta que el modelo predice bien el siguiente token.

### ¿Dónde están dentro de un LLM?

- En la tabla de **embeddings** (los números que representan cada token).
- En las matrices del **mecanismo de atención**.
- En las redes **Feed Forward** de cada bloque Transformer.
- En la **proyección final**, que convierte el resultado en probabilidades para el siguiente token.

### ¿Qué significa 7B?

La **B** viene de *billion* en inglés, que equivale a **mil millones**. Entonces, un modelo **7B** tiene aproximadamente **7,000 millones de parámetros**.

<aside>
⚠️

Ojo: *billion* en inglés no es "billón" en español. Un billón en español es un millón de millones.

</aside>

| Nombre | Parámetros aproximados | Ejemplos |
| --- | --- | --- |
| 7B / 8B | 7,000 – 8,000 millones | Mistral 7B, Llama 3 8B |
| 70B | 70,000 millones | Llama 3 70B |
| 175B | 175,000 millones | GPT-3 |

### ¿Por qué importa el número de parámetros?

- **Capacidad:** más parámetros suelen permitir aprender patrones más complejos.
- **Memoria:** cada parámetro ocupa espacio. Un modelo 7B en 16 bits (2 bytes por parámetro) necesita unos **14 GB** solo para cargarse; con cuantización a 4 bits baja a unos **4 GB**, por eso se puede correr en una laptop o una GPU de consumo.
- **Costo y velocidad:** más parámetros implican más cómputo para entrenar y para generar cada respuesta.
- **No lo es todo:** la calidad también depende de los datos, del entrenamiento y del ajuste fino. Un modelo pequeño bien entrenado puede superar a uno más grande.

### No confundir con los parámetros de generación

Cuando usas un modelo por API, también ajustas valores como **temperatura**, **top-p** o **máximo de tokens**. Esas son configuraciones de uso que tú eliges en cada petición; los parámetros del modelo, en cambio, se aprenden en el entrenamiento y no cambian al escribir un prompt.

![image.png](Desarrollo%20de%20Software%20con%20IA/image%2015.png)