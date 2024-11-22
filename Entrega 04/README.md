#       PROCESO PARA CREAR VISUALIZACIONES
## Alhena Arce Vera

### 1 **Explicación y paso a paso**

El objetivo de este proyecto fue generar visualizaciones informativas basadas en datos relacionados con el número de empresas en la industria de servicios de comida y la distribución de cadenas de pizzerías en la Región Metropolitana.
Definición del Problema y Objetivo:

 - _**Tres visualizaciones:**_

Primero, elegí hacer tres visualizacones, una más general ("Actividades de restaurantes y servicios móviles de comida"), luego otra que diga el Total de ventas anuales en UF que han tenido las empresas por año y la última visualización es más aterrizada y específica a las cadenas de pizzas en la Región Metropolitana. La idea de tener estas tres visualizaciones es que con las primeras dos, se observa cuántas empresas hay que estén en el rubro de comidas y restaurantes, después se observa cuánto ganan esas empresas (y por tanto si es conveniente tener una empresa de comida) y por último, la tercera visualización sería mostrar que del total de empresas relacionadas con restaurantes y comidas, cuántos locales de pizza hay. Cabe destacar, que todas estas visualizaciones son en el sector de la Región Metropolitana. 

- **Preparación de los Datos:** 

Tuve que arreglar la base de datos de las Actividades de restaurantes y servicios móviles de comida, ya que le había cambiado las comas por puntos. Una vez arreglada la tabla (ahora con comas tal como se mostraba en la tabla dinámica) la exporté como bases de datos en formato CSV con el nombre "tablalimpiaaa.csv". Con la segunda visualización, que era la de cantidad de cadenas en la Región Metropolitana, tuve que limpiarla, ya que en el excel original estaba mal puesto o más bien desordenado. Una vez ya ordenada la tabla y con la cantidad total de cuántos locales hay en cada cadena de pizzas en la Región Metropolitana, exporté la tabla en formato csv con el nombre "rmcadenas.csv".

Para la primera visualización, elegí usar las variables "Año" y "Total n° de empresas" en el rubro de actividad económica "Actividades de restaurantes y de servicio móvil de comidas". De esa manera, con la visualización podríamos ver cuántas empresas de comida y restaurantes hay por año. Cabe destacar, que estos datos son exclusivos de la Región Metropolitana.

Elegí esta base de datos y estas variables para la visualización 1 porque este conjunto de datos proporciona información clave sobre la evolución de empresas en la RM. Su estructura permite explorar tendencias a lo largo del tiempo y analizar el impacto económico del rubro alimentario.

Para la segunda visualización, elegí usar la variale "Años" y "Total Ventas anuales en UF", para así evaluar el rendimiento económico del rubro, en este caso, de restaurantes y comidas. 

Elegí estas variables porque el enfoque en las ventas anuales proporciona una medida concreta del tamaño económico de la RM y su impacto general en la economía nacional.

Para la tercera visualización, la tabla de datos sólo tenía dos variables que era las que necesitaba que era "Cadenas" y "Región Metropolitana". Estas variables sirven pra tener la información de cuántas cadenas de pizzerías hay en la Región Metropolitana hasta noviembre de 2024. Por lo tanto, la primera visualización es mucho más general mientras que en las egunda visualización lo especificamos más a pizzerías, entonces, del total de empresas de Actividades de restaurantes y de servicio móvil de comidas, hay tantas cadenas de pizzerías en la Región Metropolitana. 

Elegí esta base de datos para la visualización 2 para observar cuántos locales de pizza por cadena hay en la RM y ver que del total de empresas de actividades de restaurantes cuántas pizzerías hay. Además, con esta base de datos se puede ver qué cadenas son las que más locales tienen. 

- _**Elección de Herramientas:**_

Utilicé phyton y la librería altair, en dónde fui copiando y pegando los códigos que estaban en el github sobre esta clase y fui modificando los nombres y variables según mis datos y las variables que yo quiera ocupar para la visualización.

**Diseño de las Visualizaciones:**

Para todas las visualizaciones, quise que el gráfico fuera lo más fácil y simple de entender. El tipo de gráfico utilizado en ambas fue el de barra vertical. En la primera visualización, se muestran los años en el eje X para destacar la progresión temporal, y el total de empresas en el eje Y para evidenciar tendencias.
En la segunda visualización, el eje x también son los años y el eje y son el total de ventas por año medidas en UF. 
Y en la tercera visualización, la Región Metropolitana está en el eje x, mientras que las cadenas en el eje y. Por lo tanto, se observa la cantidad de locales en la región metropolitana por la cadena específica. Por ejemplo, hay 87 locales de Papa Johns en la RM. También se ordenó las cadenas por cantidad en orden descendente para destacar las cadenas que lideran.
Los colores elegidos son parte de la paleta de colores de nuestra página y como va de más general a más específico quise que sean colores "seguidos", iniciando con el amarillo, pasando por el naranjo y terminando con el rojo, que al final es la visualización más importante de las tres ya que es la más específica para nuestra página web. Arreglé también los gráficos ya que me salían los años de mayor a menos y tenía que ser al revés así que cambié el código y en vez de -y lo cambié a y para que se vieran los gráficos de manera creciente. 

### 2 _**Preguntas Resueltas por las Visualizaciones:**_

- Primera visualización:

¿Cómo ha crecido el número de empresas en el sector alimentario desde 2005?

¿Qué años han mostrado los mayores incrementos o caídas en la creación de empresas?

- Segunda visualización:

¿Cuánto venden las empresas por año?

¿La ventas de las empresas han ido creciendo o decayendo?

- Tercera visualización:

¿Cuál es la cadena de pizzerías con mayor presencia en la Región Metropolitana?

¿Cómo se comparan las principales cadenas en términos de establecimientos?

¿Qué cadenas tienen menor presencia en el mercado local?

¿Cúantos locales de pizza hay por x cadena en la Región Metropolitana?
