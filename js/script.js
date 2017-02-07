(function() {
	    var lastTime = 0;
	    var vendors = ['ms', 'moz', 'webkit', 'o'];
	    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
	        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	    }

	    if (!window.requestAnimationFrame){
	        window.requestAnimationFrame = function(callback) {
	            var currTime = new Date().getTime();
	            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
	              timeToCall);
	            lastTime = currTime + timeToCall;
	            return id;
	        };
		}
	    if (!window.cancelAnimationFrame){
	        window.cancelAnimationFrame = function(id) {
	            clearTimeout(id);
	        };
		}
	}());

	// PARTICLE ANIMATION STARTS HERE

		// screen size variables
	var	SCREEN_WIDTH = window.innerWidth,
		// how tall the graphic should be
		SCREEN_HEIGHT = 500,
		// set where on the screen you want the emitter to start
		originX = SCREEN_WIDTH/2,
		originY = SCREEN_HEIGHT/2,
		// set the color here
		color = '#1da1f2';


	// defining the canvas
	var canvas,
	c; // c is the canvas' context 2D

	var clickTime,
	currentTime;

	// set up the canvas (entire canvas) where particles will fly
	function setupCanvas() {
		canvas = document.createElement('canvas');
		c = canvas.getContext( '2d' );
		canvas.width = SCREEN_WIDTH;
		canvas.height = SCREEN_HEIGHT;
		document.body.appendChild(canvas);
	}

	// changes the movement of each particle
	Particle = function(startX, startY, color){
		// takes current x and y position position
		var x = startX;
		var y = startY;
		// calculates velocity
		var velX = -1*(randomRange(-30,30));
		var velY = -1*(randomRange(10,20));
		// gives you the size of each circle
		var size = 5;
		var r = Math.abs(Math.floor(velX));

		// update position of each particle to create effect of gravity
		var updatePosition = function(){
			// takes current x and y positions and adds velocityY and velocityX position
			y = y + velY;
			x = x + velX;

			if(y< 0){
				y = 1;
				velY = -1*(velY*0.8);
			}
			// Update Y Velocity (think Gravity)
			velY = velY + 0.2;
		}

		// makes the little canvas particle
		this.draw = function(c){
			c.fillStyle = color;
			c.beginPath();
			c.arc(x,y,size,0,2*Math.PI,false);
			c.fill();
			c.closePath();
			// after making the particle we update its position
			updatePosition();
		}

	}

	// draws each particle
	Emitter = function(startX, startY,color, numMentionsPerHour){
		var particles = [];
		this.animate = function(){
			if(particles.length < numMentionsPerHour){
				_(1).times(function(){
					var particle = new Particle(startX, startY, color);
					particles.push(particle);
					if(particles.length > 400){
						particles.shift();
					}
				});

			}
			_.each(particles, function(element){
				element.draw(c);
			})
		}
	}


	// returns a random number between the two limits provided
	randomRange = function(min, max){
		return ((Math.random()*(max-min)) + min);
	}




	init = function(color, mentions) {

        var emitters = [];
        
        // Create emitters based on data
        for (var i = 0; i < 215; i++) {
            emitters.push(new Emitter(originX,originY, '#1da1f2',data[i].number_of_mentions));
        }                    
            
        var counter = 0;
        var animatedEmitters = [];
		animate = function(timestamp){
			c;
			c.clearRect(0,0, SCREEN_WIDTH, SCREEN_HEIGHT);
			window.requestAnimationFrame(animate);
			// assume this returns a date where milliseconds is 0

			currentTime = new Date().getTime();
            
            // Check to see if we should animate an additional emitter, based on elasped time    
            if (counter < emitters.length && (currentTime - clickTime) > 150*(counter+1)) {
                animatedEmitters.push(emitters[counter]);
                counter++;
            }

            // Animate all emitters currently gathered for animation
            animatedEmitters.forEach(function(emitter){
                emitter.animate();
            })

			// reset graphic to original
			if((currentTime - clickTime) >37400){
				$('#clickme').animate({opacity: 1} , 500);

			}
		}

		startTime = Date.now();
		// Start the animation here
		animate();
	}

	setupCanvas();

	// update counter
	updatecounter = function(content){

		_.each(data, function(value, index){
			var delay = 150;
			setTimeout(function() {
					// update the mentions counter
					var currentVal = parseInt($('#counter').text().replace(/,/g,''));
					//your code to be executed after 1 second
					$('#counter').html(numberWithCommas(value.number_of_mentions + currentVal))

					// update the day counter
					if (value.day == -2 || value.day == 5){
						$('#day').html('Tuesday')
					} else if (value.day == -1 || value.day == 6){
						$('#day').html('Wednesday')
					} else if (value.day == 0){
						$('#day').html('Thursday')
					}else if (value.day == 1){
						$('#day').html('Friday')
					}	else if (value.day == 2){
						$('#day').html('Saturday')
					} else if (value.day == 3){
						$('#day').html('Sunday')
					}	else if (value.day == 4){
						$('#day').html('Monday')
					}

					// update hour of the day
					if (value.hour_of_day > 0 && value.hour_of_day < 12 ){
						$('#hour').html( value.hour_of_day + ' A.M. on ')
					} else if (value.hour_of_day > 12 && value.hour_of_day < 24 ){
						$('#hour').html(value.hour_of_day -12 +' P.M. on ')
					} else if (value.hour_of_day == 0 || value.hour_of_day == 24){
						$('#hour').html('12 A.M. on ')
					}



			}, index * delay);

		})

	}

	numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}



	$("#clickme").on("click", function(){

			$('#counter').html(0);

			// make things appear and disappear
			$('#clickme').animate({opacity: 0} , 150);
			$('.counter').animate({opacity: 1} , 150);
			$('.time').animate({opacity: 1} , 150);

			clickTime = new Date().getTime();
			// launch emitters
			init()
			// launch counter
			updatecounter();

	});

	$("#bottom-legend").css("top", SCREEN_HEIGHT-50)
