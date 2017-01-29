'use strict';

window.renderStatistics = function(ctx, names, times){

	var drawText = function(text, x, y, color){
		ctx.fillStyle = color || '#000';
		ctx.font = '16px PT Mono';
		ctx.fillText(text, x, y);
	};

	var drawRect = function(x1, y1, x2, y2, color){
		ctx.fillStyle = color;
		ctx.fillRect(x1, y1, x2, y2);
	};

	var randomColor = function(){
	  return 'rgba(0, 0, ' + (Math.random() * 255).toFixed(0) + ', ' + (Math.random() * 0.7).toFixed(1) + ')';
	}

	drawRect(110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');

	drawRect(100, 10, 420, 270, '#FFF');

	ctx.strokeStyle = '#000';
	ctx.strokeRect(100, 10, 420, 270);

	drawText('Ура, вы победили!', 110, 40);
  drawText('Список результатов:', 110, 55);

  var max = 0;
  for (var i = 0; i < times.length; i ++) {
  		time = times[i];
      if(time > max){
      max = time;
      }
  }
		var histoHeight = 150,
    histoX = 150,
	  columnWidth = 40,
	  columnIndent = 90,
	  step = histoHeight / max;

		for(var i = 0; i < times.length; i++){
    	var name = names[i];
      var time = times[i];
      var height = step * time;
			var currentColor = '#FF0000';

      if(name !== 'Вы'){
      	currentColor = randomColor();
      	var max = 255, min = 1;
      }

      drawRect(histoX + columnIndent * i, 240, columnWidth, -height, currentColor);
      drawText(name, histoX + columnIndent * i, histoHeight + 115);
			drawText(time.toFixed(0), histoX + columnIndent * i, histoHeight - height + 70);
    }
}
