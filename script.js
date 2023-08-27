(function(){

        "use strict";
		let convertType = 'Fahrenheit';
		const heading = document.querySelector('h1');
		const intro = document.querySelector('p');
		const answerDiv = document.getElementById('answer');
		const form = document.getElementById('convert');


		document.addEventListener('keydown' , function(event){
			let key = event.code;

			if(key=== 'KeyF'){

				convertType = 'Fahrenheit';
				heading.innerHTML = "Celsius to Fahrenheit Converter";
				intro.innerHTML = "Type in the temperature in celsius and click the button to convert the temperature to fahrenheit .";

			}
			else if(key=== 'KeyC'){

				convertType = 'Celsius';
				heading.innerHTML = "Fahrenheit to Celsius Converter";
				intro.innerHTML = "Type in the temperature in fahrenheit and click the button to convert the temperature to celsius .";

			}

		});

		form.addEventListener('submit' , function(event){
			event.preventDefault();
			const temperature = parseFloat(document.getElementById('temperature').value);
			if(temperature){

				if(convertType === 'Fahrenheit'){

					const conversion = (temperature * 1.8)+32;
					answerDiv.innerHTML = `<h2> ${temperature} celsius converts to ${conversion} fahrenheit</h2>`;

					 }
				else if(convertType === 'Celsius'){

					const conversion = (temperature - 32)*0.55555555;
					answerDiv.innerHTML = `<h2> ${temperature} fahrenheit converts to ${conversion} celsius</h2>`;

				}

			}
			else{
				answerDiv.innerHTML = "<h2> Please Provide A  Number !!</h2>";
			}
		});

})();
