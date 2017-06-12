$(function(){
	var index;
	var imagenes= [];
	var contador=0;
  var contentImg = $("img");

	var showImg = function(sede, content, array){
		var crearRandom = function(array){
			if(imagenes.length<array.length){
			 	var imgAleatorio = Math.floor(Math.random()*array.length);
			 	if(imagenes.indexOf(imgAleatorio)==-1){
			 		imagenes.push(imgAleatorio);
			 		console.log(imgAleatorio,imagenes);
			 		return imgAleatorio;
			 	}
			}else{
				alert("No hay más fotos");
			}

		}

		index = crearRandom(array);

		contentImg.attr("src","assets/fotos/"+sede+"/"+array[index].image);

		var score = $("#score");
		var error = 0;

		$("form").submit(function(e){
			contador++;
			e.preventDefault();
			var nombre = $("input:text");

			if(nombre.val().toLowerCase() === array[index].name.toLowerCase()){
				contador=0;
				nombre.val("");
				score.text(eval(score.text())+5);
				$(".msj").text("Excelente, acertaste!");

				index = crearRandom(array);
				setTimeout(function(){
					contentImg.attr("src","assets/fotos/"+sede+"/"+array[index].image);
				},1000);

			}else{
				if(contador <= 4){
					nombre.val("");
				}else{
					contador=0;
					nombre.val("");

					index = crearRandom(array);
						setTimeout(function(){
							contentImg.attr("src","assets/fotos/"+sede+"/"+array[index].image);
						},3000);

					score.text(eval(score.text())-1);;
				}
				$(".msj").text("Sigue Intentando");
			}

		});

	};

	$("select").on("change", function(){
		sede = $(this).val();
		$(this).parent().next().show();

		if(sede === "peru"){
			showImg(sede, contentImg, peru);
		}else{
			showImg(sede, contentImg, mexico);
		}
	});
});

/*var crearRandom = function(array){
  var imagenes = [];
  while(imagenes.length<array.length){
    var imgAleatorio = Math.floor(Math.random()*array.length);
    if(imagenes.indexOf(imgAleatorio)==-1){
      imagenes.push(imgAleatorio);
    }
  }
  return imagenes;
};

var crearRandom = function(array){
  return Math.floor(Math.random()*array.length);
};*/
