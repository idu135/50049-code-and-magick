'use strict'

window.renderStatistics = function(ctx, names, times){
	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
	ctx.fillRect(110, 20, 420, 270);

	ctx.fillStyle = '#fff';
	ctx.fillRect(100, 10, 420, 270);

	ctx.strokeStyle = '#000';
	ctx.strokeRect(100, 10, 420, 270);


	ctx.fillStyle = "#000"
	ctx.font = '16px PT Mono #000';
	ctx.fillText('Ура, вы победили!', 110, 40);
  ctx.fillText('Список результатов:', 110, 55);

  var max = 0;
  for (var i = 0; i < times.length; i ++) {
  		time = times[i];
      if(time > max){
      max = time;
      }
  }
		var histoHeight = 150,
    histoX = 110;
	  columnWidth = 40,
	  columnIndent = 90,
	  step = histoHeight / max;

		for(var i = 0; i < times.length; i++){
    	var name = names[i];
      var time = times[i];
      var height = step * time;

      if(name === 'Вы'){
      ctx.fillStyle = 'red';
      } else {
      ctx.fillStyle = 'rgba(0, 0, ' + (Math.random() * 255).toFixed(0) + ', ' + (Math.random() * 0.5).toFixed(1) + ')'

      var max = 255, min = 1;
      }

      ctx.fillRect(histoX + columnIndent * i, 200, columnWidth, -height);
      ctx.fillStyle = '#000';
      ctx.fillText(name + ' : ' + time.toFixed(0), histoX + columnIndent * i, histoHeight+ 80);
    }
}

var canvas = document.querySelector('canvas');

renderStatistics(canvas.getContext('2d'), ['Вы', 'Катя', 'Люся', 'Аня'], [100, 220, 140, 300]);
