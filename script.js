// Espera a que el contenido del DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {
    // Array de preguntas completo y estructurado, incrustado directamente.
    const questions = [
    { type: "true-false", question: "Una de las tendencias actuales en la gestión de proyectos de software es el uso de herramientas ágiles y colaborativas como Jira o Trello.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "multiple-choice", question: "¿Qué es Lambda?", answers: [{ text: "Un servicio de computación sin servidor que permite ejecutar código sin la necesidad de administrar servidores", correct: true }, { text: "Un servicio de pago que envía mensajes y correos", correct: false }, { text: "Un servicio computacional que requiere gran manejo de servidores y servicios", correct: false }, { text: "Niguna de las anteriores", correct: false }] },
    { type: "true-false", question: "Una organización quiere innovar mediante las tecnologías más recientes, pero también tiene necesidades de cumplimiento den las que se especifica que los datos se deben almacenar en ubicaciones deteminadas. ¿Cuál enfoque de nube debería satisfacer sus necesidades? La respuesta es Nube híbrida", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "multiple-choice", question: "¿Quién introdujo el concepto de autómatas como base de la informática moderna?", answers: [{ text: "Marvin Minsky", correct: false }, { text: "Alan Turing", correct: true }, { text: "John McCarthy", correct: false }, { text: "Claude Shannon", correct: false }] },
    { type: "true-false", question: "El análisis estático de código permite detectar vulnerabilidades sin necesidad de ejecutar la aplicación.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "multiple-choice", question: "¿Cuál de los siguientes es un objetivo de las pruebas de seguridad basadas en el riesgo?", answers: [{ text: "Verificar la operación confiable del software bajo condiciones hostiles de ataque", correct: true }, { text: "Verificar la estética del software", correct: false }, { text: "Mejorar la experiencia del usuario", correct: false }, { text: "Aumentar la velocidad de ejecución del software", correct: false }] },
    { type: "true-false", question: "El fuzzing testing se utiliza para descubrir errores inesperados enviando datos malformados al sistema.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "multiple-choice", question: "¿Cuál de las siguientes opciones describe mejor qué es la gestión de proyectos?", answers: [{ text: "El diseño de productos digitales sin planificación previa.", correct: false }, { text: "La aplicación de conocimientos, habilidades, herramientas y técnicas para ejecutar actividades de un proyecto y cumplir con sus objetivos.", correct: true }, { text: "Un conjunto de actividades para administrar recursos humanos únicamente.", correct: false }, { text: "Un método para mantener ocupados a los empleados de una empresa.", correct: false }] },
    { type: "true-false", question: "Indique si es verdadero o falso. AWS Management Console.- Es una consola de administración de AWS, es una interfaz web para AWS y se utiliza para acceder a servicios de AWS como de Azurre.", answers: [{ text: "Verdadero", correct: false }, { text: "Falso", correct: true }] },
    { type: "multiple-choice", question: "¿Cuál es una de las aplicaciones del procesamiento de lenguaje natural?", answers: [{ text: "Simulación de vuelo", correct: false }, { text: "Diseño gráfico", correct: false }, { text: "Reconocimiento de voz", correct: true }, { text: "Análisis financiero", correct: false }] },
    { type: "multiple-choice", question: "Una técnica que reduce la dimensionalidad del problema eliminando palabras irrelevantes es", answers: [{ text: "Stop words", correct: true }, { text: "Normalización", correct: false }, { text: "Stemming", correct: false }, { text: "Tokenización", correct: false }] },
    { type: "true-false", question: "Indique si es verdadero o falso. ¿Qué significa API en el contexto de AWS? Interfaz de Programación de Aplicaciones, es un conjunto de reglas, protocolos y herramientas que permiten a diferentes aplicaciones comunicarse entre sí, especialmente para interactuar con los servicios en la nube de Amazon Web Services.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "multiple-choice", question: "¿Qué determina la resolución de una imagen?", answers: [{ text: "La profundidad de color", correct: false }, { text: "El tamaño del archivo", correct: false }, { text: "El tipo de cámara utilizada", correct: false }, { text: "El número de píxeles", correct: true }] },
    { type: "true-false", question: "Los falsos negativos son más peligrosos que los falsos positivos desde una perspectiva de seguridad.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "true-false", question: "En la nube de AWS, una VPC es una Virtual Private Cloud.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "true-false", question: "La gestión de parches y actualizaciones de seguridad solo es necesaria para sistemas operativos, no para aplicaciones de software.", answers: [{ text: "Verdadero", correct: false }, { text: "Falso", correct: true }] },
    { type: "multiple-choice", question: "¿Qué operación morfológica es útil para rellenar agujeros en una imagen binaria?", answers: [{ text: "Cierre", correct: true }, { text: "Dilatación", correct: false }, { text: "Apertura", correct: false }, { text: "Erosión", correct: false }] },
    { type: "multiple-choice", question: "¿Qué métrica combina precisión y recall?", answers: [{ text: "Accuracy", correct: false }, { text: "F1-score", correct: true }, { text: "Especificidad", correct: false }, { text: "Sensibilidad", correct: false }] },
    { type: "true-false", question: "Indique si es verdadero o falso. Un bucket es un contenedor de almacenamiento en Amazon S3 donde se guardan archivos (objetos). Es similar a una carpeta o directorio, pero a nivel del sistema de almacenamiento en la nube.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "multiple-choice", question: "¿Cuál fue un paradigma fundamental en los años 1940 y 1950 para el procesamiento de lenguaje?", answers: [{ text: "Algoritmos genéticos", correct: false }, { text: "Redes neuronales profundas", correct: false }, { text: "Algoritmos probabilísticos", correct: true }, { text: "Sistemas expertos", correct: false }] },
    { type: "true-false", question: "Las pruebas de seguridad deben ser diseñadas sin considerar los riesgos del sistema.", answers: [{ text: "Verdadero", correct: false }, { text: "Falso", correct: true }] },
    { type: "true-false", question: "El análisis dinámico evalúa el comportamiento del software en tiempo de ejecución para detectar problemas de seguridad.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "multiple-choice", question: "¿Qué es un histograma en el contexto de una imagen?", answers: [{ text: "Un formato de archivo", correct: false }, { text: "Una representación gráfica de la intensidad de los píxeles", correct: true }, { text: "Un proceso de detección de bordes", correct: false }, { text: "Un método para comprimir imágenes", correct: false }] },
    { type: "true-false", question: "La autenticación de múltiples factores (MFA) requiere que el usuario verifique su identidad mediante al menos dos elementos diferentes.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "multiple-choice", question: "¿Qué actividad es propia de la fase de seguimiento y monitoreo?", answers: [{ text: "Aprobar el acta de inicio", correct: false }, { text: "Escribir el informe final", correct: false }, { text: "Realizar auditoría externa", correct: false }, { text: "Medir indicadores clave de avance", correct: true }] },
    { type: "multiple-choice", question: "¿Qué caracteriza a los problemas de regresión en el aprendizaje automático?", answers: [{ text: "No requiere datos etiquetados", correct: false }, { text: "Se centra en la detección de anomalías", correct: false }, { text: "La variable respuesta es cuantitativa", correct: true }, { text: "La variable respuesta es cualitativa", correct: false }] },
    { type: "true-false", question: "Indique si es verdadero o falso. Azure App Service es un servicio de computación en la nube de Microsoft Azure que permite crear, alojar y escalar aplicaciones web, API RESTful y backends móviles de forma sencilla y rápida.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "true-false", question: "La revisión de código es una práctica que se realiza únicamente al final del ciclo de desarrollo de software.", answers: [{ text: "Verdadero", correct: false }, { text: "Falso", correct: true }] },
    { type: "multiple-choice", question: "¿Cuál es el efecto de un filtro pasa alto en una imagen?", answers: [{ text: "Convierte la imagen a escala de grises", correct: false }, { text: "limina ruido de alta frecuencia", correct: false }, { text: "Suaviza los bordes", correct: false }, { text: "Aumenta la nitidez y resalta detalles finos", correct: true }] },
    { type: "true-false", question: "Verdadero o Falso. Durante la elaboración de un proyecto tecnológico, se definen actividades, recursos, cronograma y presupuesto.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "true-false", question: "Indique si es verdadero o falso. Otra forma de despleagar aplicaciones en Azure es a través de extensiones disponibles para Azure y App Service , las cuales se instalan para conectarse a la suscripción de Azure y luego al servicio de aplicación correcto y cargue el código fuente de la aplicación directamente desde el código.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "true-false", question: "Indique si es verdadero o falso. AWS Global Infraestrutura, La infraestructura global de AWS es masiva y está divida en regiones geográficas. Las regiones geográficas se dividen en zonas de disponibilidad separadas.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "true-false", question: "Las herramientas de análisis de seguridad de código pueden generar falsos positivos, lo que significa que pueden indicar problemas que en realidad no existen.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "true-false", question: "El escaneo de vulnerabilidades automatiza la identificación de configuraciones inseguras y debilidades conocidas.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "multiple-choice", question: "¿Cuál de las siguientes actividades pertenece a la Gestión de los Riesgos del Proyecto?", answers: [{ text: "Gestionar las adquisiciones externas del proyecto", correct: false }, { text: "Verificar que los entregables cumplen con requisitos técnicos", correct: false }, { text: "Estimar la duración de las tareas del cronograma", correct: false }, { text: "Identificar amenazas y oportunidades que puedan afectar el proyecto", correct: true }] },
    { type: "multiple-choice", question: "¿Qué técnica permite detectar vulnerabilidades y errores lógicos en el código fuente sin ejecutar la aplicación?", answers: [{ text: "Análisis dinámico", correct: false }, { text: "Pruebas de penetración", correct: false }, { text: "Análisis estático de código", correct: true }, { text: "Fuzzing Testing", correct: false }] },
    { type: "multiple-choice", question: "¿Cuál de las siguientes técnicas se usa para cifrar datos almacenados en reposo?", answers: [{ text: "OAuth", correct: false }, { text: "AES-256 y RSA", correct: true }, { text: "Tokens TOTP", correct: false }, { text: "TLS/SSL", correct: false }] },
    { type: "multiple-choice", question: "¿Qué métrica se utiliza para calcular la pureza de una división en árboles de decisión?", answers: [{ text: "Entropía", correct: true }, { text: "Media", correct: false }, { text: "Varianza", correct: false }, { text: "Desviación estándar", correct: false }] },
    { type: "multiple-choice", question: "¿Qué técnica se utiliza para dividir el espacio de las variables predictoras en árboles de decisión?", answers: [{ text: "Splitting basado en la moda", correct: false }, { text: "Recursive binary splitting", correct: true }, { text: "Splitting aleatorio", correct: false }, { text: "Splitting basado en la media", correct: false }] },
    { type: "multiple-choice", question: "¿Cuál es la diferencia principal entre un clasificador binario y uno multiclase?", answers: [{ text: "La técnica de entrenamiento utilizada", correct: false }, { text: "El número de clases que pueden predecir", correct: true }, { text: "La velocidad de predicción", correct: false }, { text: "La complejidad del modelo", correct: false }] },
    { type: "multiple-choice", question: "¿Qué técnica se utiliza para generar un sub-árbol después de crear un árbol de decisión grande?", answers: [{ text: "Bagging", correct: false }, { text: "Post-pruning", correct: true }, { text: "Cross-validation", correct: false }, { text: "Pre-pruning", correct: false }] },
    { type: "multiple-choice", question: "¿Qué representa la 'precisión' en el contexto de la clasificación?", answers: [{ text: "La proporción de ejemplos predichos como positivos que son realmente positivos", correct: true }, { text: "La proporción de ejemplos positivos correctamente clasificados", correct: false }, { text: "La proporción de ejemplos negativos correctamente clasificados", correct: false }, { text: "La proporción de ejemplos predichos como negativos que son realmente negativos", correct: false }] },
    { type: "true-false", question: "Indique si es verdadero o falso. ¿DynamoDB utiliza el modelo de almacenamiento clave-valor y documentos?", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "multiple-choice", question: "¿Qué es una subpredicción en el contexto de la regresión?", answers: [{ text: "Cuando un modelo no puede hacer una predicción.", correct: false }, { text: "Cuando un modelo predice el valor exacto.", correct: false }, { text: "Cuando un modelo predice un valor más alto que el valor real", correct: false }, { text: "Cuando un modelo predice un valor más bajo que el valor real.", correct: true }] },
    { type: "true-false", question: "Indique si es verdadero o falso. ¿Qué es API Gateway? API Gateway es un servicio de administración de API completamente automatizado que permite crear, publicar, mantener, monitorear y proteger APIs RESTful", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "true-false", question: "La revisión de código y las pruebas de penetración son prácticas de seguridad que se realizan solo después de que el software ha sido implantado.", answers: [{ text: "Verdadero", correct: false }, { text: "Falso", correct: true }] },
    { type: "multiple-choice", question: "¿Cuál de los siguientes roles desempeña un gerente de proyectos de software para contribuir al éxito del proyecto?", answers: [{ text: "Programar funcionalidades del backend", correct: false }, { text: "Diseñar la arquitectura de software", correct: false }, { text: "Facilitar la comunicación entre el equipo y los interesados", correct: true }, { text: "Realizar pruebas unitarias de código", correct: false }] },
    { type: "multiple-choice", question: "¿Cuál es la primera etapa del ciclo de vida del desarrollo seguro de aplicaciones (SDLC)?", answers: [{ text: "Planificación", correct: true }, { text: "Implementación", correct: false }, { text: "Diseño", correct: false }, { text: "Análisis", correct: false }] },
    { type: "true-false", question: "El principio de privilegio mínimo implica otorgar a los usuarios el máximo nivel de acceso posible para facilitar su trabajo.", answers: [{ text: "Verdadero", correct: false }, { text: "Falso", correct: true }] },
    { type: "multiple-choice", question: "¿Para evitar el desbordamiento de búfer?", answers: [{ text: "Cifrado de datos", correct: false }, { text: "Uso de contraseñas fuertes", correct: false }, { text: "Validación de entradas", correct: true }, { text: "Monitoreo de red", correct: false }] },
    { type: "multiple-choice", question: "¿Qué ocurre durante la fase de identificación y selección de proyectos?", answers: [{ text: "Se entrega el producto final al cliente", correct: false }, { text: "Se ejecutan las tareas planificadas del proyecto", correct: false }, { text: "Se revisan los entregables con criterios de calidad", correct: false }, { text: "Se evalúan las necesidades y oportunidades para definir qué proyectos ejecutar", correct: true }] },
    { type: "multiple-choice", question: "¿Cuál es el propósito principal de la Gestión de la Integración del Proyecto?", answers: [{ text: "Controlar los gastos del proyecto", correct: false }, { text: "Coordinar todos los elementos del proyecto para trabajar de forma conjunta", correct: true }, { text: "Garantizar que los entregables cumplan con los estándares de calidad", correct: false }, { text: "Supervisar el trabajo del equipo técnico", correct: false }] },
    { type: "multiple-choice", question: "¿Qué es un algoritmo de regresión?", answers: [{ text: "Un tipo de algoritmo de aprendizaje supervisado que predice variables cualitativas.", correct: false }, { text: "Un tipo de algoritmo de aprendizaje no supervisado que predice variables cuantitativas", correct: false }, { text: "Un tipo de algoritmo de aprendizaje supervisado que predice variables categóricas.", correct: false }, { text: "Un tipo de algoritmo de aprendizaje supervisado que predice variables numéricas o cuantitativas", correct: true }] },
    { type: "multiple-choice", question: "¿Qué característica es crucial para el aprendizaje de modelos en PLN?", answers: [{ text: "Velocidad de procesamiento", correct: false }, { text: "Elección del idioma", correct: false }, { text: "Elección del hardware", correct: false }, { text: "Volumen de datos", correct: true }] },
    { type: "true-false", question: "Indique si es verdadero o falso, con respecto al modelo de despliegue. En una nube pública, los proveedores externos de servicios en la nube suministran los recursos como un servicio completamente administrado.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "multiple-choice", question: "¿Cuál de las siguientes tareas corresponde al cierre del proyecto?", answers: [{ text: "Firmar el acta de entrega final", correct: true }, { text: "Generar código fuente adicional", correct: false }, { text: "Asignar tareas nuevas", correct: false }, { text: "Ajustar el cronograma", correct: false }] },
    { type: "multiple-choice", question: "¿Qué tipo de imagen tiene un único canal y utiliza un rango de valores entre 0 y 255?", answers: [{ text: "Imagen a color", correct: false }, { text: "Imagen en escala de grises", correct: true }, { text: "Imagen binaria", correct: false }, { text: "Imagen HDR", correct: false }] },
    { type: "true-false", question: "El sistema MAC (Control de Acceso Basado en Políticas) permite modificar las reglas de acceso según las necesidades del usuario.", answers: [{ text: "Verdadero", correct: false }, { text: "Falso", correct: true }] },
    { type: "multiple-choice", question: "¿Qué es el procesamiento de lenguaje natural?", answers: [{ text: "Un campo del lenguaje simbólico", correct: false }, { text: "Un campo de la inteligencia artificial", correct: true }, { text: "Un tipo de hardware", correct: false }, { text: "Un algoritmo de búsqueda", correct: false }] },
    { type: "true-false", question: "Las implementaciones en la nube publica son complejas y requieren mucho tiempo. Necesitan una importante inversión inicial en infraestructura y recursos humanos. Se tienen que contratar equipos con conocimientos avanzados de codificación e ingeniería para configurar el entorno de nube privada.", answers: [{ text: "Verdadero", correct: false }, { text: "Falso", correct: true }] },
    { type: "multiple-choice", question: "¿Qué técnica es utilizada para convertir palabras en números en un modelo vectorial?", answers: [{ text: "Bag of Words", correct: true }, { text: "Deep Learning", correct: false }, { text: "Modelos probabilísticos", correct: false }, { text: "Redes neuronales convolucionales", correct: false }] },
    { type: "multiple-choice", question: "En problemas de clasificación binaria, un ejemplo de aplicación sería:", answers: [{ text: "Determinación de si un correo es spam o no", correct: true }, { text: "Estimación de ingresos personales", correct: false }, { text: "Predicción del precio de un inmueble", correct: false }, { text: "Agrupación de clientes según preferencias", correct: false }] },
    { type: "true-false", question: "Una forma de desplegar aplicaciones en la nube de Azure es: Emplear el usuario de cliente FTP, para conectarse a Azure App Service a través de sus credenciales y luego a través del cliente FTP, y así poder ir a cargar los paquetes de la aplicación en el servicio de la aplicación.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "multiple-choice", question: "¿Cuál de las siguientes afirmaciones es verdadera sobre la matriz de confusión?", answers: [{ text: "Sus filas representan las clases predichas y las columnas las clases reales", correct: false }, { text: "No se puede utilizar para problemas multiclase", correct: false }, { text: "Solo se utiliza para clasificación binaria", correct: false }, { text: "Es útil para evaluar la precisión de un clasificador", correct: true }] },
    { type: "multiple-choice", question: "¿Cuál de las siguientes responsabilidades pertenece a un gerente de proyectos de software?", answers: [{ text: "Escribir código fuente en JavaScript", correct: false }, { text: "Controlar el cumplimiento del cronograma y presupuesto del proyecto", correct: true }, { text: "Ejecutar pruebas automatizadas", correct: false }, { text: "Realizar diseño gráfico de interfaces", correct: false }] },
    { type: "multiple-choice", question: "¿Cuál es el objetivo principal de las pruebas de penetración?", answers: [{ text: "Documentar el código", correct: false }, { text: "Mejorar el rendimiento del software", correct: false }, { text: "Identificar vulnerabilidades explotables", correct: true }, { text: "Verificar la usabilidad de la aplicación", correct: false }] },
    { type: "multiple-choice", question: "¿Qué es una ventaja del clasificador Näive Bayes?", answers: [{ text: "Siempre tiene un rendimiento superior a otros clasificadores", correct: false }, { text: "Funciona bien incluso con la suposición de independencia entre variables", correct: true }, { text: "Considera todas las variables como dependientes", correct: false }, { text: "No requiere datos de entrenamiento", correct: false }] },
    { type: "multiple-choice", question: "¿Qué práctica se recomienda para el manejo de errores en aplicaciones?", answers: [{ text: "Usar bloques try-catch", correct: true }, { text: "Ignorar los errores menores", correct: false }, { text: "Mostrar mensajes de error detallados al usuario", correct: false }, { text: "No registrar errores", correct: false }] },
    { type: "multiple-choice", question: "¿Qué tipo de pruebas se centran en el comportamiento del software en tiempo de ejecución?", answers: [{ text: "Análisis estático", correct: false }, { text: "Pruebas de penetración", correct: false }, { text: "Fuzzing Testing", correct: false }, { text: "Análisis dinámico", correct: true }] },
    { type: "true-false", question: "Indique si es verdadero o falso, con respecto al modelo de despliegue. Cloud Privada.- En la Cloud Privada, la infraestructura se usa solo dentro de una única organización En una nube privada, una única organización controla y mantiene la infraestructura subyacente para suministrar los recursos de TI.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "true-false", question: "Indique si es falso o verdadero lo siguiente: El centro de implementación del portal de Azure es una de las formas de implementar aplicaciones, esta opción se habilita mediante el uso de acciones de GitHub.", answers: [{ text: "Verdadero", correct: true }, { text: "Falso", correct: false }] },
    { type: "true-false", question: "Responda Verdadero o Falso. El gerente de proyectos de software debe dominar únicamente habilidades técnicas y no necesita desarrollar habilidades interpersonales.", answers: [{ text: "Verdadero", correct: false }, { text: "Falso", correct: true }] },
    { type: "multiple-choice", question: "¿En qué momento se considera que nace un proyecto?", answers: [{ text: "Cuando se asigna un presupuesto.", correct: false }, { text: "Cuando se identifica una necesidad, oportunidad o demanda que requiere una solución específica.", correct: true }, { text: "Cuando el cliente aprueba el producto final.", correct: false }, { text: "Cuando se contrata al gerente del proyecto.", correct: false }] },
    { type: "multiple-choice", question: "¿Qué técnica combina árboles de decisión utilizando Bagging y selección aleatoria de variables?", answers: [{ text: "Boosting", correct: false }, { text: "Decision Trees", correct: false }, { text: "Random Forests", correct: true }, { text: "Gradient Boosting", correct: false }] },
    { type: "true-false", question: "El uso de bibliotecas y componentes de terceros no presenta riesgos de seguridad en el desarrollo de aplicaciones.", answers: [{ text: "Verdadero", correct: false }, { text: "Falso", correct: true }] },
    { type: "multiple-choice", question: "¿Qué se debe hacer para mitigar el riesgo de inyección SQL?", answers: [{ text: "Implementar firewalls", correct: false }, { text: "Desplegar la aplicación en una red segura", correct: false }, { text: "Escapar caracteres especiales", correct: true }, { text: "Usar contraseñas complejas", correct: false }] },
    { type: 'multiple-correct', question: 'Seleccione cuales son las características de ideas con potencial:', answers: [ { text: 'Relaciona nuestros intereses, ideas personales y experiencias con la idea de investigación.', correct: true }, { text: 'Las ideas son novedosas.', correct: true }, { text: 'Las ideas de investigación que producen conocimiento son necesariamente nuevas', correct: false }, { text: 'Temas que no sean demasiado generales.', correct: true }, { text: 'Las ideas pueden fomentar nuevas respuestas.', correct: true }, { text: 'Deben intrigar, alentar y motivar al investigador.', correct: true }, { text: 'Es importante que la idea sea atractiva, interesante o necesaria.', correct: true }, { text: 'Sirve para elaborar teorías y solucionar problemáticas.', correct: true } ] },
    { type: 'matching', question: 'Relacione la palabra con el concepto:', pairs: [ { item: 'Oportunidad', match: 'En ocasiones puede resultar que haya fondos o recursos para investigar sobre cierto tópico' }, { item: 'Solucionar una problemática', match: 'Requiere resolverse algo "crítico" o deficiente.' }, { item: 'Conceptualización o concepción', match: 'Se puede indagar sobre algún tema.' }, { item: 'Huecos de conocimiento', match: 'El investigador al profundizar en algún campo de conocimiento detecta temas poco estudiados o no investigados en su contexto y decide adentrarse en estos.' }, { item: 'Conceptualización o concepción', match: 'Detectar un fenómeno o problema de investigación que requiere indagarse a profundidad o aportar mayor conocimiento o evidencia para conocerlo, definirlo, describirlo y comprenderlo.' }, { item: 'Inspiración e imaginación', match: 'Basada en los intereses personales del investigador, sus experiencias y capacidad creativa.' } ] },
    { type: 'multiple-correct', question: 'Marque lo correcto con respecto a las Ventajas de IaaS', answers: [ { text: 'a. Capacidad de respuesta mejorada.- Los clientes pueden suministrar recursos en cuestión de minutos, además de probar y lanzar rápidamente nuevas ideas para más usuarios.', correct: true }, { text: 'b. Seguridad integral.- Con un alto nivel de seguridad en el sitio, en los centros de datos y mediante el cifrado, las organizaciones a menudo pueden aprovechar la seguridad y protección más avanzadas que podrían proporcionar si alojaran la infraestructura de la nube internamente.', correct: true }, { text: 'c. Menos latencia, rendimiento mejorado. - Dado que los proveedores de IaaS normalmente operan centros de datos en múltiples zonas geográficas, los clientes de IaaS pueden ubicar aplicaciones y servicios más cerca de los usuarios para minimizar la latencia y maximizar el rendimiento.', correct: true }, { text: 'd. Acceso más rápido a la mejor tecnología', correct: true }, { text: 'e. Mayor disponibilidad. - Con IaaS, una empresa puede crear servidores redundantes fácilmente e incluso crearlos en otras zonas geográficas para garantizar la disponibilidad durante cortes locais o desastres físicos.', correct: true } ] },
    { type: 'multiple-correct', question: 'Los objetivos deben ser:', answers: [ { text: 'realistas', correct: true }, { text: 'claros', correct: true }, { text: 'medibles', correct: true }, { text: 'apropiados', correct: true }, { text: 'concretos', correct: true } ] },
    { type: 'matching', question: 'Relaciona las siguientes áreas del PMBOK con la función que mejor las describe:', pairs: [ { item: 'Gestión de los Riesgos', match: 'Identificar, analizar y responder a incertidumbres' }, { item: 'Gestión de la Calidad', match: 'Asegura que el proyecto y sus entregables cumplan con los requisitos planificados.' }, { item: 'Gestión de los Costos', match: 'Estima, asigna y controla los costos para que el proyecto se complete dentro del presupuesto' }, { item: 'Gestión del Alcance', match: 'Asegurar que el proyecto incluya solo el trabajo necesario para el excito del proyecto.' } ] },
    { type: 'matching', question: 'Relaciona cada concepto con su definición correspondiente:', pairs: [ { item: 'VAN (Valor Actual Neto)', match: 'Permite analizar la rentabilidad de un proyecto' }, { item: 'VPN (Valor Presente Neto)', match: 'Diferencia entre el valor presente de ingresos esperados y los costos del proyecto' }, { item: 'TIR (Tasa Interna de Retorno)', match: 'Tasa de descuento que hace que el valor actual neto sea igual a cero' } ] },
    { type: 'matching', question: 'Relaciona cada fase con su característica principal:', pairs: [ { item: 'Aceptación del proyecto', match: 'Validación del cumplimiento con los requisitos' }, { item: 'Seguimiento y monitoreo', match: 'Control del avance y cumplimiento de objetivos' }, { item: 'Elaboración del proyecto', match: 'Definición de recursos, tareas y presupuesto' } ] },
    { type: 'matching', question: 'Relaciona cada componente de gestión con su propósito.', pairs: [ { item: 'Aprender de la experiencia del proyecto', match: 'Evaluación' }, { item: 'Mantener informadas a las partes interesadas', match: 'Comunicación' }, { item: 'Identificar problemas potenciales y mitigarlos', match: 'Riesgos' }, { item: 'Verificar que los entregables cumplan los estándares', match: 'Calidad' }, { item: 'Asegurar que el proyecto no se desvíe de los límites', match: 'Control del alcance' } ] },
    { type: 'matching', question: 'Relacione lo correcto con respecto a las características de computación en la Nube.', pairs: [ { item: 'Elasticidad', match: 'A las aplicaciones se les permite solicitar los recursos que necesitan usar de una forma rápida y cambiante (elástica)' }, { item: 'Amplio acceso a la red.', match: 'Los recursos están disponibles desde la red y se acceden a ellos a través de mecanismos estándares desde multitud de plataformas clientes' }, { item: 'Servicios bajo demanda.', match: 'De manera similar, una aplicación puede requerir ciertos servicios, por ejemplo de almacenamiento, computación o hosting, y los puede solicitar cuando los requiera.' }, { item: 'Medición de servicios.', match: 'Las plataformas ofrecen herramientas para monitorizar el uso de estos recursos y que se puedan controlar por parte de los usuarios.' }, { item: 'Conjunto de recursos.', match: 'Los recursos físicos (hardware) y los virtuales (software) se van asignando y reasignando según los requisitos de los usuarios y sus aplicaciones' } ] },
    { type: 'ordering', question: 'Ordene el Proceso cualitativo:', items: [ 'Idea', 'Planteamiento del problema', 'Inmersión en el campo', 'Concepción del diseño o abordaje principal del estudio', 'Definición de la muestra inicial del estudio y acceso a esta', 'Recolección de los datos', 'Análisis de los datos', 'Interpretación de resultados', 'Elaboración del reporte de resultados' ] },
    { type: 'ordering', question: 'Proceso cuantitativo.', items: [ 'Idea', 'Planteamiento del problema', 'Revisión de la literatura y desarrollo del marco o perspectiva teórica', 'Visualización del alcance del estudio.', 'Elaboración de hipótesis y definición de variables', 'Desarrollo del diseño de investigación', 'Definición y selección de la muestra', 'Recolección de los datos', 'Análisis de los datos', 'Elaboración del reporte de resultados' ] },
    { type: 'multiple-correct', question: 'Marque lo correcto con respecto a AWS.', answers: [ { text: 'a. Los recursos se distribuyen en todo el mundo y el uso de esos recursos se comparten entre miles y miles de titulares de cuentas de AWS.', correct: true }, { text: 'b. Los recursos se distribuyen en todo el mundo y el uso de esos recursos se comparten entre miles y miles de titulares de cuentas de AWS.', correct: true }, { text: 'c. Es una colección de servicios de computación en la nube pública que en conjunto forman una plataforma de computación en la nube, ofrecidas a través de Internet por Amazon.com', correct: true }, { text: 'd. Las cuentas están completamente aisladas unas de otras en el nivel hipervisor, también tienen la opción de sus propios recursos', correct: true } ] },
    { type: 'matching', question: 'Relaciona cada metodología con una de sus características clave.', pairs: [ { item: 'Waterfall', match: 'Proceso secuencial y lineal' }, { item: 'Scrum', match: 'Enfoque iterativo con roles definidos' }, { item: 'Kanban', match: 'Flujo visual de tareas' } ] },
    { type: 'multiple-correct', question: 'Marque lo correcto con respecto a Amazon S3', answers: [ { text: 'a. Guarda datos como archivos, imágenes, videos, backups, registros, etc., en forma de "objetos" dentro de tarjetas CD', correct: false }, { text: 'b. Su propósito principal es almacenar y recuperar cualquier cantidad de datos desde cualquier parte del mundo, en cualquier momento y a través de Internet.', correct: true }, { text: 'c. Es un servicio de almacenamiento de objetos en la nube proporcionado por Amazon Web Services (AWS)', correct: true } ] },
    { type: 'multiple-correct', question: 'Identifique ¿Cuáles de las siguientes son áreas de conocimiento según el PMBOK? (Seleccione todas las correctas)', answers: [ { text: 'a. Control Administrativo', correct: false }, { text: 'b. Gestión de la Comunicación', correct: true }, { text: 'c. Gestión de recursos', correct: true }, { text: 'd. Gestión de los stakeholders', correct: true }, { text: 'e. Gestión del Talento', correct: false }, { text: 'f. Gestión del Cronograma', correct: true } ] },
    { type: 'multiple-correct', question: 'Marque las afirmaciones correctas respecto a Microsoft Azure:', answers: [ { text: 'a. Una categoría son las aplicaciones web, los sistemas de bases de datos como SQL Server, MariaDB, Postgres y también NoSQL como Cosmos DB.', correct: true }, { text: 'b. Otra categoría es IaaS donde están los servicios de infraestructura como servicio, principalmente máquinas virtuales.', correct: true }, { text: 'c. Otra categoría es Servicios para comunicación, conexión y seguridad en redes.', correct: true }, { text: 'd. Azure es la plataforma en la nube para implementar aplicaciones empresariales que tienen múltiples servicios organizados en diferentes categorías.', correct: true }, { text: 'e. Otra categoría es Servicios para proteger datos, identidades y entornos.', correct: true } ] },
    { type: 'matching', question: 'Relaciona cada fase de la gestión de proyectos con su actividad principal correspondiente.', pairs: [ { item: 'Transferir productos o servicios finales', match: 'Cierre' }, { item: 'Definir qué está dentro y fuera del proyecto', match: 'Planificación' }, { item: 'Monitorear cronograma y presupuesto', match: 'Seguimiento y Control' }, { item: 'Elaborar el acta de constitución del proyecto', match: 'Inicio' }, { item: 'Asignar tareas y responsabilidades', match: 'Ejecución' } ] },
    { type: 'table-completion', question: 'Completa cada área de la gestión de proyectos con la herramienta y utilidad sugerida por el PMBOK.', table: { headers: ['Área / Proceso', 'Herramienta / Técnica', 'Utilidad'], rows: [ { 'Área / Proceso': 'Planificación del cronograma', 'Herramienta / Técnica': { correct: 'Diagrama de Gantt' }, 'Utilidad': { correct: 'Visualiza el tiempo y las dependencias' } }, { 'Área / Proceso': { correct: 'Gestión de calidad' }, 'Herramienta / Técnica': 'Hojas de verificación, histogramas', 'Utilidad': 'Control de calidad y detección de errores' }, { 'Área / Proceso': 'Gestión de riesgos', 'Herramienta / Técnica': { correct: 'Análisis cualitativo y cuantitativo de riesgos' }, 'Utilidad': { correct: 'Priorizar y medir riesgos' } }, { 'Área / Proceso': 'Gestión de integración', 'Herramienta / Técnica': 'Acta de constitución del proyecto', 'Utilidad': { correct: 'Inicia formalmente el proyecto' } }, { 'Área / Proceso': { correct: 'Monitoreo y control' }, 'Herramienta / Técnica': { correct: 'Análisis de valor ganado (EVM)' }, 'Utilidad': 'Mide el rendimiento frente a lo planificado' } ] }, choices: [ 'Diagrama de Gantt', 'Visualiza el tiempo y las dependencias', 'Gestión de calidad', 'Análisis cualitativo y cuantitativo de riesgos', 'Priorizar y medir riesgos', 'Inicia formalmente el proyecto', 'Monitoreo y control', 'Análisis de valor ganado (EVM)' ] },
    { type: 'fill-in-the-blank', question: 'Lea la descripción de cada fase de la gestión de proyectos según el PMBOK y escriba la palabra que corresponde en el espacio en blanco.', sentences: [ 'La fase de ___ consiste en definir formalmente el proyecto, identificar a los interesados y aprobar el acta de constitución.', 'En la fase de ___ se determinan el alcance, cronograma, presupuesto, riesgos y calidad del proyecto.', 'La fase de ___ implica coordinar personas y recursos para ejecutar el plan y producir los entregables.', 'Durante la fase de ___ se mide el rendimiento del proyecto, se comparan los resultados con el plan y se realizan ajustes.', 'La fase de ___ se enfoca en entregar el proyecto, documentar lo aprendido y liberar recursos.' ], choices: [ 'Inicio', 'Planificación', 'Ejecución', 'Monitoreo y Control', 'Cierre' ], correctOrder: [ 'Inicio', 'Planificación', 'Ejecución', 'Monitoreo y Control', 'Cierre' ] },
    { type: 'multiple-correct', question: 'Marque los Modelos de Servicio que se manejan en la nube.', answers: [ { text: 'a. IP', correct: false }, { text: 'b. DNS', correct: false }, { text: 'c. PaaS', correct: true }, { text: 'd. SaaS', correct: true }, { text: 'e. IaaS', correct: true } ] },
    { type: 'table-tf', question: 'Indique si las siguientes afirmaciones son verdaderas o falsas.', rows: [ { statement: 'Una de las características de la ruta cuantitativa son los instrumentos estandarizados.', correct: 'Verdadero' }, { statement: 'El proceso de la ruta cualitativa es orientado a múltiples realidades subjetivas.', correct: 'Verdadero' }, { statement: 'Una de las fortalezas del proceso de la ruta cuantitativa es la naturalidad de observaciones.', correct: 'Falso' }, { statement: 'Una de las características de la ruta cuantitativa son los diseños emergentes.', correct: 'Falso' } ] },
    { type: 'table-tf', question: 'Indique si es Verdadero o Falso las siguientes afirmaciones sobre las preguntas de investigación cuantitativa:', rows: [ { statement: 'Ser específicas, enfocadas o concretas, que sus respuestas sean conocidas.', correct: 'Falso' }, { statement: 'Contener conceptos (variables) que puedan ser observables o medibles.', correct: 'Verdadero' }, { statement: 'Contestarse utilizando medios electrónicos.', correct: 'Falso' }, { statement: 'Poder responderse recolectando y analizando datos que no sean empíricos.', correct: 'Falso' } ] },
    { type: 'table-tf', question: 'Seleccione si es verdadero o falso los siguientes criterios para plantear un problema de investigación cuantitativa:', rows: [ { statement: 'El planteamiento debe implicar la posibilidad de ser investigado empíricamente.', correct: 'Verdadero' }, { statement: 'El problema debe estar formulado como pregunta, claramente y sin ambigüedad.', correct: 'Verdadero' }, { statement: 'El planteamiento debe ser estético. Por ejemplo, no es correcto bajo ninguna circunstancia trabajar algo que pueda dañar a seres humanos o implique racismo.', correct: 'Falso' }, { statement: 'Cuando el problema asocia variables, fenómenos, eventos, hechos, etc., la o las relaciones deben expresarse de manera general.', correct: 'Falso' } ] },
    { type: "multiple-choice", question: "Dado el siguiente conjunto de actividades con sus duraciones y dependencias:\nActividad | Predecesora(s) | Duración (días)\nA | — | 3\nB | A | 4\nC | A | 5\nD | B, C | 2\nE | D | 3\nCalcular la ruta critica", answers: [ { text: "C → D → E → FIN = 5 +2 + 3=10 días", correct: false }, { text: "A → C → D → E = 3 + 5 + 2 + 3 = 13 días", correct: true }, { text: "A → B → D → E = 3 + 4 + 2 + 3 = 12 días", correct: false } ] },
    { type: "multiple-choice", question: "Evaluación de viabilidad financiera del proyecto\nDado el siguiente proyecto con:\n- Inversión inicial: $50.000\n- Flujos netos de dinero en 5 años\n- TIR estimada: 5%\n- Tasa de descuento: 3%\n- VAN calculado: $55.654,80\n¿Cuál es la conclusión más adecuada sobre la viabilidad financiera del proyecto?", answers: [ { text: "No se puede determinar la viabilidad con estos datos", correct: false }, { text: "El proyecto no es viable porque la TIR es menor que la tasa de descuento", correct: false }, { text: "El proyecto es viable porque el VAN es negativo", correct: false }, { text: "El proyecto es viable porque el VAN es positivo y la TIR supera la tasa de descuento", correct: true } ] },
    { type: "multiple-choice", question: "Análisis de Ocurrencia Temprana (TE)\n[Imagen de un diagrama de Pert]\n¿Cuál es la ocurrencia temprana (TE) de la actividad D?", answers: [ { text: "7 días", correct: false }, { text: "8 días", correct: true }, { text: "5 días", correct: false } ] }
];

    // Muestra el total de preguntas
    const totalQuestionsDisplay = document.getElementById('total-questions-display');
    totalQuestionsDisplay.innerText = `Banco total de preguntas: ${questions.length}`;

    initializeQuiz(questions);
});
function initializeQuiz(allQuestions) {
    const startButton = document.getElementById('start-btn');
    const nextButton = document.getElementById('next-btn');
    const restartButton = document.getElementById('restart-btn');
    const checkButton = document.getElementById('check-btn');
    const questionContainerElement = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const resultContainerElement = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');
    const questionCounterElement = document.getElementById('question-counter');
    const draggableOptionsContainer = document.getElementById('draggable-options-container');
    const showAnswerButton = document.getElementById('show-answer-btn');
    const correctAnswerContainer = document.getElementById('correct-answer-container');
    let shuffledQuestions, currentQuestionIndex, score;
    startButton.addEventListener('click', startGame);
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        setNextQuestion();
    });
    restartButton.addEventListener('click', startGame);
    checkButton.addEventListener('click', checkComplexAnswer);
    showAnswerButton.addEventListener('click', showCorrectAnswer);

    function startGame() {
        score = 0;
        startButton.classList.add('hide');
        resultContainerElement.classList.add('hide');
        
        const priorityTypes = ['ordering', 'fill-in-the-blank', 'table-completion', 'matching', 'table-tf'];
        const priorityQuestions = allQuestions.filter(q => priorityTypes.includes(q.type));
        const otherQuestions = allQuestions.filter(q => !priorityTypes.includes(q.type));

        const shuffledOthers = otherQuestions.sort(() => Math.random() - 0.5);
        
        const neededOthersCount = 40 - priorityQuestions.length;
        
        shuffledQuestions = [
            ...priorityQuestions,
            ...shuffledOthers.slice(0, neededOthersCount > 0 ? neededOthersCount : 0)
        ];

        currentQuestionIndex = 0;
        questionContainerElement.classList.remove('hide');
        setNextQuestion();
    }

    function setNextQuestion() {
        resetState();
        if (currentQuestionIndex < shuffledQuestions.length) {
            questionCounterElement.innerText = `Pregunta ${currentQuestionIndex + 1} de ${shuffledQuestions.length}`;
            const question = shuffledQuestions[currentQuestionIndex];
            showQuestion(question);
        } else {
            showResult();
        }
    }

    function resetState() {
        clearStatusClass(document.body);
        nextButton.classList.add('hide');
        checkButton.classList.add('hide');
        showAnswerButton.classList.add('hide'); // Ocultar el botón de mostrar respuesta
        correctAnswerContainer.classList.add('hide'); // Ocultar el contenedor de respuesta correcta
        correctAnswerContainer.innerHTML = ''; // Limpiar el contenido
        draggableOptionsContainer.classList.add('hide');
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
        while (draggableOptionsContainer.firstChild) {
            draggableOptionsContainer.removeChild(draggableOptionsContainer.firstChild);
        }
    }

    function showQuestion(question) {
        questionElement.innerText = question.question;
        switch (question.type) {
            case 'true-false':
            case 'multiple-choice':
                showMultipleChoice(question);
                break;
            case 'multiple-correct':
                showMultipleCorrect(question);
                break;
            case 'matching':
                showMatching(question);
                break;
            case 'ordering':
                showOrdering(question);
                break;
            case 'fill-in-the-blank':
                showFillInTheBlank(question);
                break;
            case 'table-completion':
                showTableCompletion(question);
                break;
            case 'table-tf':
                showTableTF(question);
                break;
        }
    }
    function showTableTF(question) {
        checkButton.classList.remove('hide');
        const table = document.createElement('table');
        table.classList.add('table-tf');
        const header = table.createTHead().insertRow();
        header.insertCell().innerText = 'Afirmación';
        header.insertCell().innerText = 'Verdadero';
        header.insertCell().innerText = 'Falso';

        const body = table.createTBody();
        question.rows.forEach((row, index) => {
            const tableRow = body.insertRow();
            tableRow.insertCell().innerText = row.statement;
            const cellV = tableRow.insertCell();
            const cellF = tableRow.insertCell();
            const radioV = document.createElement('input');
            radioV.type = 'radio';
            radioV.name = `q_${index}`;
            radioV.value = 'Verdadero';
            radioV.dataset.correct = row.correct;
            cellV.appendChild(radioV);
            const radioF = document.createElement('input');
            radioF.type = 'radio';
            radioF.name = `q_${index}`;
            radioF.value = 'Falso';
            radioF.dataset.correct = row.correct;
            cellF.appendChild(radioF);
        });
        answerButtonsElement.appendChild(table);
    }

    function showMultipleChoice(question) {
        const shuffledAnswers = [...question.answers].sort(() => Math.random() - 0.5);
        shuffledAnswers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectSimpleAnswer);
            answerButtonsElement.appendChild(button);
        });
    }

    function showMultipleCorrect(question) {
        checkButton.classList.remove('hide');
        question.answers.forEach(answer => {
            const container = document.createElement('div');
            container.classList.add('checkbox-container');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = answer.text;
            checkbox.name = 'answer';
            checkbox.dataset.correct = answer.correct;
            const label = document.createElement('label');
            label.htmlFor = answer.text;
            label.innerText = answer.text;
            container.appendChild(checkbox);
            container.appendChild(label);
            answerButtonsElement.appendChild(container);
        });
    }

    function showMatching(question) {
        checkButton.classList.remove('hide');
        const table = document.createElement('table');
        table.classList.add('matching-table');
        const allMatches = question.pairs.map(p => p.match);
        question.pairs.forEach(pair => {
            const row = table.insertRow();
            const cell1 = row.insertCell();
            cell1.innerText = pair.item;
            const cell2 = row.insertCell();
            const select = document.createElement('select');
            select.classList.add('matching-select');
            select.dataset.correct = pair.match;
            const shuffledOptions = [...allMatches].sort(() => Math.random() - 0.5);
            const defaultOption = document.createElement('option');
            defaultOption.innerText = 'Selecciona...';
            select.appendChild(defaultOption);
            shuffledOptions.forEach(optionText => {
                const option = document.createElement('option');
                option.value = optionText;
                option.innerText = optionText;
                select.appendChild(option);
            });
            cell2.appendChild(select);
        });
        answerButtonsElement.appendChild(table);
    }

    function showOrdering(question) {
        checkButton.classList.remove('hide');
        draggableOptionsContainer.classList.remove('hide');
        const dropZone = document.createElement('div');
        dropZone.classList.add('drop-zone', 'ordering-zone');
        answerButtonsElement.appendChild(dropZone);
        const shuffledItems = [...question.items].sort(() => Math.random() - 0.5);
        shuffledItems.forEach((item, index) => {
            const div = document.createElement('div');
            div.innerText = item;
            div.classList.add('draggable');
            div.draggable = true;
            div.id = `drag-${index}`;
            div.dataset.text = item;
            div.addEventListener('dragstart', dragStart);
            draggableOptionsContainer.appendChild(div);
        });
        dropZone.addEventListener('dragover', dragOver);
        dropZone.addEventListener('drop', drop);
    }

    function showFillInTheBlank(question) {
        checkButton.classList.remove('hide');
        draggableOptionsContainer.classList.remove('hide');
        question.sentences.forEach((sentence, s_idx) => {
            const p = document.createElement('p');
            const parts = sentence.split('___');
            p.innerText = parts[0];
            const dropZone = document.createElement('span');
            dropZone.classList.add('drop-zone', 'blank-zone');
            dropZone.dataset.correct = question.correctOrder[s_idx];
            dropZone.addEventListener('dragover', dragOver);
            dropZone.addEventListener('drop', drop);
            p.appendChild(dropZone);
            p.append(parts[1] || '');
            answerButtonsElement.appendChild(p);
        });
        const shuffledChoices = [...question.choices].sort(() => Math.random() - 0.5);
        shuffledChoices.forEach((choice, index) => {
            const div = document.createElement('div');
            div.innerText = choice;
            div.classList.add('draggable');
            div.draggable = true;
            div.id = `drag-${index}`;
            div.dataset.text = choice;
            div.addEventListener('dragstart', dragStart);
            draggableOptionsContainer.appendChild(div);
        });
    }

    function showTableCompletion(question) {
        checkButton.classList.remove('hide');
        draggableOptionsContainer.classList.remove('hide');
        const table = document.createElement('table');
        table.classList.add('completion-table');
        const header = table.createTHead().insertRow();
        question.table.headers.forEach(h => header.insertCell().innerText = h);
        const body = table.createTBody();
        question.table.rows.forEach(rowData => {
            const row = body.insertRow();
            question.table.headers.forEach(headerText => {
                const cell = row.insertCell();
                const cellData = rowData[headerText];
                if (typeof cellData === 'object') {
                    const dropZone = document.createElement('div');
                    dropZone.classList.add('drop-zone', 'table-zone');
                    dropZone.dataset.correct = cellData.correct;
                    dropZone.addEventListener('dragover', dragOver);
                    dropZone.addEventListener('drop', drop);
                    cell.appendChild(dropZone);
                } else {
                    cell.innerText = cellData;
                }
            });
        });
        answerButtonsElement.appendChild(table);
        const shuffledChoices = [...question.choices].sort(() => Math.random() - 0.5);
        shuffledChoices.forEach((choice, index) => {
            const div = document.createElement('div');
            div.innerText = choice;
            div.classList.add('draggable');
            div.draggable = true;
            div.id = `drag-${index}`;
            div.dataset.text = choice;
            div.addEventListener('dragstart', dragStart);
            draggableOptionsContainer.appendChild(div);
        });
    }

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        const dropzone = e.target.closest('.drop-zone');
        if (!dropzone) return;
        if (dropzone.classList.contains('ordering-zone')) {
            dropzone.appendChild(draggableElement);
            draggableElement.classList.add('dropped');
        } else if (dropzone.classList.contains('drop-zone') && !dropzone.hasChildNodes()) {
            dropzone.appendChild(draggableElement);
            draggableElement.classList.add('dropped');
        }
    }

    function selectSimpleAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct === 'true';
        if (correct) {
            score++;
        }
        setStatusClass(selectedButton, correct);
        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === 'true') {
                setStatusClass(button, true);
            }
            button.disabled = true;
        });
        nextButton.classList.remove('hide');
    }

    function checkComplexAnswer() {
        const question = shuffledQuestions[currentQuestionIndex];
        let isCorrect = false;
        switch (question.type) {
            case 'multiple-correct':
                let allCorrect = true;
                answerButtonsElement.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                    const label = checkbox.nextElementSibling;
                    const isChecked = checkbox.checked;
                    const shouldBeChecked = checkbox.dataset.correct === 'true';
                    if (isChecked !== shouldBeChecked) {
                        allCorrect = false;
                    }
                    setStatusClass(label, isChecked === shouldBeChecked);
                });
                isCorrect = allCorrect;
                break;
            case 'matching':
                let allMatched = true;
                answerButtonsElement.querySelectorAll('.matching-select').forEach(select => {
                    const selectedValue = select.value;
                    const correctValue = select.dataset.correct;
                    if (selectedValue !== correctValue) {
                        allMatched = false;
                        setStatusClass(select, false);
                    } else {
                        setStatusClass(select, true);
                    }
                });
                isCorrect = allMatched;
                break;
            case 'ordering':
                let allOrdered = true;
                const orderedContainer = answerButtonsElement.querySelector('.ordering-zone');
                const droppedItems = Array.from(orderedContainer.children);
                droppedItems.forEach((item, index) => {
                    if (item.dataset.text === question.items[index]) {
                        setStatusClass(item, true);
                    } else {
                        setStatusClass(item, false);
                        allOrdered = false;
                    }
                });
                if (droppedItems.length !== question.items.length) {
                    allOrdered = false;
                }
                isCorrect = allOrdered;
                break;
            case 'fill-in-the-blank':
            case 'table-completion':
                let allFilled = true;
                answerButtonsElement.querySelectorAll('.drop-zone').forEach(zone => {
                    const dropped = zone.firstChild;
                    if (dropped && dropped.dataset.text === zone.dataset.correct) {
                        setStatusClass(zone, true);
                    } else {
                        allFilled = false;
                        setStatusClass(zone, false);
                    }
                });
                isCorrect = allFilled;
                break;
            case 'table-tf':
                let allTfCorrect = true;
                answerButtonsElement.querySelectorAll('.table-tf tbody tr').forEach(row => {
                    const selected = row.querySelector('input[type="radio"]:checked');
                    if (selected) {
                        if (selected.value !== selected.dataset.correct) {
                            allTfCorrect = false;
                            setStatusClass(row, false);
                        } else {
                            setStatusClass(row, true);
                        }
                    } else {
                        allTfCorrect = false;
                        setStatusClass(row, false);
                    }
                });
                isCorrect = allTfCorrect;
                break;
        }
        if (isCorrect) {
            score++;
        }
        checkButton.classList.add('hide');
        nextButton.classList.remove('hide');
        showAnswerButton.classList.remove('hide'); // Mostrar el botón de mostrar respuesta
    }

    function showCorrectAnswer() {
        const question = shuffledQuestions[currentQuestionIndex];
        correctAnswerContainer.innerHTML = ''; // Limpiar contenido anterior
        correctAnswerContainer.classList.remove('hide');

        const title = document.createElement('h3');
        title.innerText = 'Respuesta Correcta:';
        correctAnswerContainer.appendChild(title);

        switch (question.type) {
            case 'multiple-choice':
            case 'true-false':
                const correctOption = question.answers.find(a => a.correct);
                const pSimple = document.createElement('p');
                pSimple.innerText = correctOption ? correctOption.text : 'No disponible';
                correctAnswerContainer.appendChild(pSimple);
                break;
            case 'multiple-correct':
                const correctMultiOptions = question.answers.filter(a => a.correct).map(a => a.text);
                const ulMulti = document.createElement('ul');
                correctMultiOptions.forEach(text => {
                    const li = document.createElement('li');
                    li.innerText = text;
                    ulMulti.appendChild(li);
                });
                correctAnswerContainer.appendChild(ulMulti);
                break;
            case 'matching':
                const tableMatching = document.createElement('table');
                tableMatching.classList.add('correct-answer-table');
                question.pairs.forEach(pair => {
                    const row = tableMatching.insertRow();
                    row.insertCell().innerText = pair.item;
                    row.insertCell().innerText = pair.match;
                });
                correctAnswerContainer.appendChild(tableMatching);
                break;
            case 'ordering':
                const ulOrdering = document.createElement('ol');
                question.items.forEach(item => {
                    const li = document.createElement('li');
                    li.innerText = item;
                    ulOrdering.appendChild(li);
                });
                correctAnswerContainer.appendChild(ulOrdering);
                break;
            case 'fill-in-the-blank':
                const pFill = document.createElement('p');
                let filledSentence = question.sentences[0];
                question.correctOrder.forEach(correctWord => {
                    filledSentence = filledSentence.replace('___', `**${correctWord}**`);
                });
                pFill.innerHTML = filledSentence;
                correctAnswerContainer.appendChild(pFill);
                break;
            case 'table-completion':
                const tableCompletion = document.createElement('table');
                tableCompletion.classList.add('correct-answer-table');
                const headerComp = tableCompletion.createTHead().insertRow();
                question.table.headers.forEach(h => headerComp.insertCell().innerText = h);
                const bodyComp = tableCompletion.createTBody();
                question.table.rows.forEach(rowData => {
                    const row = bodyComp.insertRow();
                    question.table.headers.forEach(headerText => {
                        const cell = row.insertCell();
                        const cellData = rowData[headerText];
                        if (typeof cellData === 'object') {
                            cell.innerHTML = `<strong>${cellData.correct}</strong>`;
                        } else {
                            cell.innerText = cellData;
                        }
                    });
                });
                correctAnswerContainer.appendChild(tableCompletion);
                break;
            case 'table-tf':
                const tableTf = document.createElement('table');
                tableTf.classList.add('correct-answer-table');
                const headerTf = tableTf.createTHead().insertRow();
                headerTf.insertCell().innerText = 'Afirmación';
                headerTf.insertCell().innerText = 'Respuesta Correcta';
                const bodyTf = tableTf.createTBody();
                question.rows.forEach(row => {
                    const tr = bodyTf.insertRow();
                    tr.insertCell().innerText = row.statement;
                    tr.insertCell().innerText = row.correct;
                });
                correctAnswerContainer.appendChild(tableTf);
                break;
        }
    }

    function showResult() {
        questionContainerElement.classList.add('hide');
        draggableOptionsContainer.classList.add('hide');
        resultContainerElement.classList.remove('hide');
        scoreElement.innerText = `Tu puntaje es ${score} de ${shuffledQuestions.length}`;
        showAnswerButton.classList.add('hide'); // Asegurarse de que el botón de respuesta se oculte al finalizar
        correctAnswerContainer.classList.add('hide'); // Asegurarse de que el contenedor se oculte al finalizar
    }

    function setStatusClass(element, correct) {
        clearStatusClass(element);
        if (correct) {
            element.classList.add('correct');
        } else {
            element.classList.add('wrong');
        }
    }

    function clearStatusClass(element) {
        element.classList.remove('correct');
        element.classList.remove('wrong');
    }
}
