// Obtener el canvas y su contexto
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Definir los datos de la gráfica
var data = [5, 19, 3, 5, 2, 10];

// Definir los colores de las barras
var barColors = ["red", "blue", "green", "orange", "purple", "gray"];

// Definir las propiedades del gráfico
var barWidth = 40;
var barSpacing = 10;
var barHeightScale = 10;
var startX = 50;
var startY = 250;

// Definir las propiedades de los ejes
var axisLineWidth = 2;
var tickLength = 5;
var tickSpacing = 50;
var labelFont = "12px Arial";
var labelSpacing = 20;

// Dibujar los ejes
ctx.beginPath();
ctx.lineWidth = axisLineWidth;
ctx.moveTo(startX, startY);
ctx.lineTo(startX + data.length * (barWidth + barSpacing), startY);
ctx.lineTo(startX + data.length * (barWidth + barSpacing), startY - Math.max(...data) * barHeightScale - tickLength);
ctx.stroke();

// Dibujar los ticks y etiquetas del eje Y
for (var i = 0; i <= Math.max(...data); i++) {
  var tickY = startY - i * barHeightScale;
  var tickX1 = startX - tickLength;
  var tickX2 = startX;
  ctx.beginPath();
  ctx.moveTo(tickX1, tickY);
  ctx.lineTo(tickX2, tickY);
  ctx.stroke();
  ctx.fillStyle = "black";
  ctx.font = labelFont;
  ctx.fillText(i, tickX1 - labelSpacing, tickY + 5);
}

// Dibujar las barras
for (var i = 0; i < data.length; i++) {
  var barHeight = data[i] * barHeightScale;
  var x = startX + i * (barWidth + barSpacing);
  var y = startY - barHeight;
  ctx.fillStyle = barColors[i];
  ctx.fillRect(x, y, barWidth, barHeight);
  
  // Dibujar las etiquetas del eje X
  ctx.fillStyle = "black";
  ctx.font = labelFont;
  ctx.fillText(i+1, x + barWidth/2, startY + labelSpacing);
}

// Gráficos de barras con ejes y etiquetas de nombre más colores para variar 