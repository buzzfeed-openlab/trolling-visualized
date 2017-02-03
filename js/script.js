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
		SCREEN_HEIGHT = 500,
		// originX = SCREEN_WIDTH/2,
		// originY = SCREEN_HEIGHT/2,
		originX = SCREEN_WIDTH/2,
		originY = SCREEN_HEIGHT/2,
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

			// makes sure the ball doesn't fly outside of the screen
			// if(y > SCREEN_HEIGHT){
			// 	y = SCREEN_HEIGHT;
			// 	velY = -1*(velY*0.8);
			// }

			// if(x > SCREEN_WIDTH || x < 0){
			// 	velX = -1*(velX * 0.8);
			// }

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

		animate = function(timestamp){
			c;
			c.clearRect(0,0, SCREEN_WIDTH, SCREEN_HEIGHT);
			window.requestAnimationFrame(animate);
			// assume this returns a date where milliseconds is 0

			currentTime = new Date().getTime();

			if((currentTime - clickTime) >150){emitter1.animate()}if((currentTime - clickTime) >300){emitter2.animate()}if((currentTime - clickTime) >450){emitter3.animate()}if((currentTime - clickTime) >600){emitter4.animate()}if((currentTime - clickTime) >750){emitter5.animate()}if((currentTime - clickTime) >900){emitter6.animate()}if((currentTime - clickTime) >1050){emitter7.animate()}if((currentTime - clickTime) >1200){emitter8.animate()}if((currentTime - clickTime) >1350){emitter9.animate()}if((currentTime - clickTime) >1500){emitter10.animate()}if((currentTime - clickTime) >1650){emitter11.animate()}if((currentTime - clickTime) >1800){emitter12.animate()}if((currentTime - clickTime) >1950){emitter13.animate()}if((currentTime - clickTime) >2100){emitter14.animate()}if((currentTime - clickTime) >2250){emitter15.animate()}if((currentTime - clickTime) >2400){emitter16.animate()}if((currentTime - clickTime) >2550){emitter17.animate()}if((currentTime - clickTime) >2700){emitter18.animate()}if((currentTime - clickTime) >2850){emitter19.animate()}if((currentTime - clickTime) >3000){emitter20.animate()}if((currentTime - clickTime) >3150){emitter21.animate()}if((currentTime - clickTime) >3300){emitter22.animate()}if((currentTime - clickTime) >3450){emitter23.animate()}if((currentTime - clickTime) >3600){emitter24.animate()}if((currentTime - clickTime) >3750){emitter25.animate()}if((currentTime - clickTime) >3900){emitter26.animate()}if((currentTime - clickTime) >4050){emitter27.animate()}if((currentTime - clickTime) >4200){emitter28.animate()}if((currentTime - clickTime) >4350){emitter29.animate()}if((currentTime - clickTime) >4500){emitter30.animate()}if((currentTime - clickTime) >4650){emitter31.animate()}if((currentTime - clickTime) >4800){emitter32.animate()}if((currentTime - clickTime) >4950){emitter33.animate()}if((currentTime - clickTime) >5100){emitter34.animate()}if((currentTime - clickTime) >5250){emitter35.animate()}if((currentTime - clickTime) >5400){emitter36.animate()}if((currentTime - clickTime) >5550){emitter37.animate()}if((currentTime - clickTime) >5700){emitter38.animate()}if((currentTime - clickTime) >5850){emitter39.animate()}if((currentTime - clickTime) >6000){emitter40.animate()}if((currentTime - clickTime) >6150){emitter41.animate()}if((currentTime - clickTime) >6300){emitter42.animate()}if((currentTime - clickTime) >6450){emitter43.animate()}if((currentTime - clickTime) >6600){emitter44.animate()}if((currentTime - clickTime) >6750){emitter45.animate()}if((currentTime - clickTime) >6900){emitter46.animate()}if((currentTime - clickTime) >7050){emitter47.animate()}if((currentTime - clickTime) >7200){emitter48.animate()}if((currentTime - clickTime) >7350){emitter49.animate()}if((currentTime - clickTime) >7500){emitter50.animate()}if((currentTime - clickTime) >7650){emitter51.animate()}if((currentTime - clickTime) >7800){emitter52.animate()}if((currentTime - clickTime) >7950){emitter53.animate()}if((currentTime - clickTime) >8100){emitter54.animate()}if((currentTime - clickTime) >8250){emitter55.animate()}if((currentTime - clickTime) >8400){emitter56.animate()}if((currentTime - clickTime) >8550){emitter57.animate()}if((currentTime - clickTime) >8700){emitter58.animate()}if((currentTime - clickTime) >8850){emitter59.animate()}if((currentTime - clickTime) >9000){emitter60.animate()}if((currentTime - clickTime) >9150){emitter61.animate()}if((currentTime - clickTime) >9300){emitter62.animate()}if((currentTime - clickTime) >9450){emitter63.animate()}if((currentTime - clickTime) >9600){emitter64.animate()}if((currentTime - clickTime) >9750){emitter65.animate()}if((currentTime - clickTime) >9900){emitter66.animate()}if((currentTime - clickTime) >10050){emitter67.animate()}if((currentTime - clickTime) >10200){emitter68.animate()}if((currentTime - clickTime) >10350){emitter69.animate()}if((currentTime - clickTime) >10500){emitter70.animate()}if((currentTime - clickTime) >10650){emitter71.animate()}if((currentTime - clickTime) >10800){emitter72.animate()}if((currentTime - clickTime) >10950){emitter73.animate()}if((currentTime - clickTime) >11100){emitter74.animate()}if((currentTime - clickTime) >11250){emitter75.animate()}if((currentTime - clickTime) >11400){emitter76.animate()}if((currentTime - clickTime) >11550){emitter77.animate()}if((currentTime - clickTime) >11700){emitter78.animate()}if((currentTime - clickTime) >11850){emitter79.animate()}if((currentTime - clickTime) >12000){emitter80.animate()}if((currentTime - clickTime) >12150){emitter81.animate()}if((currentTime - clickTime) >12300){emitter82.animate()}if((currentTime - clickTime) >12450){emitter83.animate()}if((currentTime - clickTime) >12600){emitter84.animate()}if((currentTime - clickTime) >12750){emitter85.animate()}if((currentTime - clickTime) >12900){emitter86.animate()}if((currentTime - clickTime) >13050){emitter87.animate()}if((currentTime - clickTime) >13200){emitter88.animate()}if((currentTime - clickTime) >13350){emitter89.animate()}if((currentTime - clickTime) >13500){emitter90.animate()}if((currentTime - clickTime) >13650){emitter91.animate()}if((currentTime - clickTime) >13800){emitter92.animate()}if((currentTime - clickTime) >13950){emitter93.animate()}if((currentTime - clickTime) >14100){emitter94.animate()}if((currentTime - clickTime) >14250){emitter95.animate()}if((currentTime - clickTime) >14400){emitter96.animate()}if((currentTime - clickTime) >14550){emitter97.animate()}if((currentTime - clickTime) >14700){emitter98.animate()}if((currentTime - clickTime) >14850){emitter99.animate()}if((currentTime - clickTime) >15000){emitter100.animate()}if((currentTime - clickTime) >15150){emitter101.animate()}if((currentTime - clickTime) >15300){emitter102.animate()}if((currentTime - clickTime) >15450){emitter103.animate()}if((currentTime - clickTime) >15600){emitter104.animate()}if((currentTime - clickTime) >15750){emitter105.animate()}if((currentTime - clickTime) >15900){emitter106.animate()}if((currentTime - clickTime) >16050){emitter107.animate()}if((currentTime - clickTime) >16200){emitter108.animate()}if((currentTime - clickTime) >16350){emitter109.animate()}if((currentTime - clickTime) >16500){emitter110.animate()}if((currentTime - clickTime) >16650){emitter111.animate()}if((currentTime - clickTime) >16800){emitter112.animate()}if((currentTime - clickTime) >16950){emitter113.animate()}if((currentTime - clickTime) >17100){emitter114.animate()}if((currentTime - clickTime) >17250){emitter115.animate()}if((currentTime - clickTime) >17400){emitter116.animate()}if((currentTime - clickTime) >17550){emitter117.animate()}if((currentTime - clickTime) >17700){emitter118.animate()}if((currentTime - clickTime) >17850){emitter119.animate()}if((currentTime - clickTime) >18000){emitter120.animate()}if((currentTime - clickTime) >18150){emitter121.animate()}if((currentTime - clickTime) >18300){emitter122.animate()}if((currentTime - clickTime) >18450){emitter123.animate()}if((currentTime - clickTime) >18600){emitter124.animate()}if((currentTime - clickTime) >18750){emitter125.animate()}if((currentTime - clickTime) >18900){emitter126.animate()}if((currentTime - clickTime) >19050){emitter127.animate()}if((currentTime - clickTime) >19200){emitter128.animate()}if((currentTime - clickTime) >19350){emitter129.animate()}if((currentTime - clickTime) >19500){emitter130.animate()}if((currentTime - clickTime) >19650){emitter131.animate()}if((currentTime - clickTime) >19800){emitter132.animate()}if((currentTime - clickTime) >19950){emitter133.animate()}if((currentTime - clickTime) >20100){emitter134.animate()}if((currentTime - clickTime) >20250){emitter135.animate()}if((currentTime - clickTime) >20400){emitter136.animate()}if((currentTime - clickTime) >20550){emitter137.animate()}if((currentTime - clickTime) >20700){emitter138.animate()}if((currentTime - clickTime) >20850){emitter139.animate()}if((currentTime - clickTime) >21000){emitter140.animate()}if((currentTime - clickTime) >21150){emitter141.animate()}if((currentTime - clickTime) >21300){emitter142.animate()}if((currentTime - clickTime) >21450){emitter143.animate()}if((currentTime - clickTime) >21600){emitter144.animate()}if((currentTime - clickTime) >21750){emitter145.animate()}if((currentTime - clickTime) >21900){emitter146.animate()}if((currentTime - clickTime) >22050){emitter147.animate()}if((currentTime - clickTime) >22200){emitter148.animate()}if((currentTime - clickTime) >22350){emitter149.animate()}if((currentTime - clickTime) >22500){emitter150.animate()}if((currentTime - clickTime) >22650){emitter151.animate()}if((currentTime - clickTime) >22800){emitter152.animate()}if((currentTime - clickTime) >22950){emitter153.animate()}if((currentTime - clickTime) >23100){emitter154.animate()}if((currentTime - clickTime) >23250){emitter155.animate()}if((currentTime - clickTime) >23400){emitter156.animate()}if((currentTime - clickTime) >23550){emitter157.animate()}if((currentTime - clickTime) >23700){emitter158.animate()}if((currentTime - clickTime) >23850){emitter159.animate()}if((currentTime - clickTime) >24000){emitter160.animate()}if((currentTime - clickTime) >24150){emitter161.animate()}if((currentTime - clickTime) >24300){emitter162.animate()}if((currentTime - clickTime) >24450){emitter163.animate()}if((currentTime - clickTime) >24600){emitter164.animate()}if((currentTime - clickTime) >24750){emitter165.animate()}if((currentTime - clickTime) >24900){emitter166.animate()}if((currentTime - clickTime) >25050){emitter167.animate()}if((currentTime - clickTime) >25200){emitter168.animate()}if((currentTime - clickTime) >25350){emitter169.animate()}if((currentTime - clickTime) >25500){emitter170.animate()}if((currentTime - clickTime) >25650){emitter171.animate()}if((currentTime - clickTime) >25800){emitter172.animate()}if((currentTime - clickTime) >25950){emitter173.animate()}if((currentTime - clickTime) >26100){emitter174.animate()}if((currentTime - clickTime) >26250){emitter175.animate()}if((currentTime - clickTime) >26400){emitter176.animate()}if((currentTime - clickTime) >26550){emitter177.animate()}if((currentTime - clickTime) >26700){emitter178.animate()}if((currentTime - clickTime) >26850){emitter179.animate()}if((currentTime - clickTime) >27000){emitter180.animate()}if((currentTime - clickTime) >27150){emitter181.animate()}if((currentTime - clickTime) >27300){emitter182.animate()}if((currentTime - clickTime) >27450){emitter183.animate()}if((currentTime - clickTime) >27600){emitter184.animate()}if((currentTime - clickTime) >27750){emitter185.animate()}if((currentTime - clickTime) >27900){emitter186.animate()}if((currentTime - clickTime) >28050){emitter187.animate()}if((currentTime - clickTime) >28200){emitter188.animate()}if((currentTime - clickTime) >28350){emitter189.animate()}if((currentTime - clickTime) >28500){emitter190.animate()}if((currentTime - clickTime) >28650){emitter191.animate()}if((currentTime - clickTime) >28800){emitter192.animate()}if((currentTime - clickTime) >28950){emitter193.animate()}if((currentTime - clickTime) >29100){emitter194.animate()}if((currentTime - clickTime) >29250){emitter195.animate()}if((currentTime - clickTime) >29400){emitter196.animate()}if((currentTime - clickTime) >29550){emitter197.animate()}if((currentTime - clickTime) >29700){emitter198.animate()}if((currentTime - clickTime) >29850){emitter199.animate()}if((currentTime - clickTime) >30000){emitter200.animate()}if((currentTime - clickTime) >30150){emitter201.animate()}if((currentTime - clickTime) >30300){emitter202.animate()}if((currentTime - clickTime) >30450){emitter203.animate()}if((currentTime - clickTime) >30600){emitter204.animate()}if((currentTime - clickTime) >30750){emitter205.animate()}if((currentTime - clickTime) >30900){emitter206.animate()}if((currentTime - clickTime) >31050){emitter207.animate()}if((currentTime - clickTime) >31200){emitter208.animate()}if((currentTime - clickTime) >31350){emitter209.animate()}if((currentTime - clickTime) >31500){emitter210.animate()}if((currentTime - clickTime) >31650){emitter211.animate()}if((currentTime - clickTime) >31800){emitter212.animate()}if((currentTime - clickTime) >31950){emitter213.animate()}if((currentTime - clickTime) >32100){emitter214.animate()}if((currentTime - clickTime) >32250){emitter215.animate()}if((currentTime - clickTime) >32400){emitter216.animate()}

			// reset graphic to original
			if((currentTime - clickTime) >37400){
				$('#clickme').animate({opacity: 1} , 500);

			}
		}

		emitter1	= new Emitter(originX,originY, '#1da1f2',0); emitter2	= new Emitter(originX,originY, '#1da1f2',1.2); emitter3	= new Emitter(originX,originY, '#1da1f2',0.2); emitter4	= new Emitter(originX,originY, '#1da1f2',0); emitter5	= new Emitter(originX,originY, '#1da1f2',0); emitter6	= new Emitter(originX,originY, '#1da1f2',0); emitter7	= new Emitter(originX,originY, '#1da1f2',0); emitter8	= new Emitter(originX,originY, '#1da1f2',0); emitter9	= new Emitter(originX,originY, '#1da1f2',0); emitter10	= new Emitter(originX,originY, '#1da1f2',0); emitter11	= new Emitter(originX,originY, '#1da1f2',0); emitter12	= new Emitter(originX,originY, '#1da1f2',0); emitter13	= new Emitter(originX,originY, '#1da1f2',0); emitter14	= new Emitter(originX,originY, '#1da1f2',0); emitter15	= new Emitter(originX,originY, '#1da1f2',0); emitter16	= new Emitter(originX,originY, '#1da1f2',0); emitter17	= new Emitter(originX,originY, '#1da1f2',0); emitter18	= new Emitter(originX,originY, '#1da1f2',0); emitter19	= new Emitter(originX,originY, '#1da1f2',0); emitter20	= new Emitter(originX,originY, '#1da1f2',0); emitter21	= new Emitter(originX,originY, '#1da1f2',0.2); emitter22	= new Emitter(originX,originY, '#1da1f2',0); emitter23	= new Emitter(originX,originY, '#1da1f2',0); emitter24	= new Emitter(originX,originY, '#1da1f2',0); emitter25	= new Emitter(originX,originY, '#1da1f2',0); emitter26	= new Emitter(originX,originY, '#1da1f2',0); emitter27	= new Emitter(originX,originY, '#1da1f2',0); emitter28	= new Emitter(originX,originY, '#1da1f2',0); emitter29	= new Emitter(originX,originY, '#1da1f2',0); emitter30	= new Emitter(originX,originY, '#1da1f2',0); emitter31	= new Emitter(originX,originY, '#1da1f2',0); emitter32	= new Emitter(originX,originY, '#1da1f2',0); emitter33	= new Emitter(originX,originY, '#1da1f2',0); emitter34	= new Emitter(originX,originY, '#1da1f2',0); emitter35	= new Emitter(originX,originY, '#1da1f2',0); emitter36	= new Emitter(originX,originY, '#1da1f2',0); emitter37	= new Emitter(originX,originY, '#1da1f2',0); emitter38	= new Emitter(originX,originY, '#1da1f2',0); emitter39	= new Emitter(originX,originY, '#1da1f2',0); emitter40	= new Emitter(originX,originY, '#1da1f2',0); emitter41	= new Emitter(originX,originY, '#1da1f2',0); emitter42	= new Emitter(originX,originY, '#1da1f2',0); emitter43	= new Emitter(originX,originY, '#1da1f2',0); emitter44	= new Emitter(originX,originY, '#1da1f2',0); emitter45	= new Emitter(originX,originY, '#1da1f2',0); emitter46	= new Emitter(originX,originY, '#1da1f2',0); emitter47	= new Emitter(originX,originY, '#1da1f2',0); emitter48	= new Emitter(originX,originY, '#1da1f2',0); emitter49	= new Emitter(originX,originY, '#1da1f2',0); emitter50	= new Emitter(originX,originY, '#1da1f2',0); emitter51	= new Emitter(originX,originY, '#1da1f2',0); emitter52	= new Emitter(originX,originY, '#1da1f2',0); emitter53	= new Emitter(originX,originY, '#1da1f2',122.2); emitter54	= new Emitter(originX,originY, '#1da1f2',317.4); emitter55	= new Emitter(originX,originY, '#1da1f2',245); emitter56	= new Emitter(originX,originY, '#1da1f2',119.8); emitter57	= new Emitter(originX,originY, '#1da1f2',69.8); emitter58	= new Emitter(originX,originY, '#1da1f2',53.4); emitter59	= new Emitter(originX,originY, '#1da1f2',71.4); emitter60	= new Emitter(originX,originY, '#1da1f2',122.4); emitter61	= new Emitter(originX,originY, '#1da1f2',167.4); emitter62	= new Emitter(originX,originY, '#1da1f2',208); emitter63	= new Emitter(originX,originY, '#1da1f2',177); emitter64	= new Emitter(originX,originY, '#1da1f2',144.4); emitter65	= new Emitter(originX,originY, '#1da1f2',105.4); emitter66	= new Emitter(originX,originY, '#1da1f2',118.6); emitter67	= new Emitter(originX,originY, '#1da1f2',112.6); emitter68	= new Emitter(originX,originY, '#1da1f2',126); emitter69	= new Emitter(originX,originY, '#1da1f2',353.4); emitter70	= new Emitter(originX,originY, '#1da1f2',278.8); emitter71	= new Emitter(originX,originY, '#1da1f2',246.4); emitter72	= new Emitter(originX,originY, '#1da1f2',207.2); emitter73	= new Emitter(originX,originY, '#1da1f2',152); emitter74	= new Emitter(originX,originY, '#1da1f2',167.6); emitter75	= new Emitter(originX,originY, '#1da1f2',129.6); emitter76	= new Emitter(originX,originY, '#1da1f2',134.8); emitter77	= new Emitter(originX,originY, '#1da1f2',85.2); emitter78	= new Emitter(originX,originY, '#1da1f2',66); emitter79	= new Emitter(originX,originY, '#1da1f2',68); emitter80	= new Emitter(originX,originY, '#1da1f2',25.6); emitter81	= new Emitter(originX,originY, '#1da1f2',22); emitter82	= new Emitter(originX,originY, '#1da1f2',8); emitter83	= new Emitter(originX,originY, '#1da1f2',10.4); emitter84	= new Emitter(originX,originY, '#1da1f2',31.4); emitter85	= new Emitter(originX,originY, '#1da1f2',39.6); emitter86	= new Emitter(originX,originY, '#1da1f2',39.6); emitter87	= new Emitter(originX,originY, '#1da1f2',50.8); emitter88	= new Emitter(originX,originY, '#1da1f2',68.4); emitter89	= new Emitter(originX,originY, '#1da1f2',49.2); emitter90	= new Emitter(originX,originY, '#1da1f2',32.8); emitter91	= new Emitter(originX,originY, '#1da1f2',21.2); emitter92	= new Emitter(originX,originY, '#1da1f2',15.2); emitter93	= new Emitter(originX,originY, '#1da1f2',17.6); emitter94	= new Emitter(originX,originY, '#1da1f2',21.2); emitter95	= new Emitter(originX,originY, '#1da1f2',19.2); emitter96	= new Emitter(originX,originY, '#1da1f2',13.6); emitter97	= new Emitter(originX,originY, '#1da1f2',12.4); emitter98	= new Emitter(originX,originY, '#1da1f2',14.4); emitter99	= new Emitter(originX,originY, '#1da1f2',28.6); emitter100	= new Emitter(originX,originY, '#1da1f2',16.4); emitter101	= new Emitter(originX,originY, '#1da1f2',6); emitter102	= new Emitter(originX,originY, '#1da1f2',3.6); emitter103	= new Emitter(originX,originY, '#1da1f2',1.2); emitter104	= new Emitter(originX,originY, '#1da1f2',12.4); emitter105	= new Emitter(originX,originY, '#1da1f2',4.4); emitter106	= new Emitter(originX,originY, '#1da1f2',2); emitter107	= new Emitter(originX,originY, '#1da1f2',1.2); emitter108	= new Emitter(originX,originY, '#1da1f2',1.6); emitter109	= new Emitter(originX,originY, '#1da1f2',3.2); emitter110	= new Emitter(originX,originY, '#1da1f2',5.2); emitter111	= new Emitter(originX,originY, '#1da1f2',5.6); emitter112	= new Emitter(originX,originY, '#1da1f2',6.4); emitter113	= new Emitter(originX,originY, '#1da1f2',9.6); emitter114	= new Emitter(originX,originY, '#1da1f2',4.4); emitter115	= new Emitter(originX,originY, '#1da1f2',15.6); emitter116	= new Emitter(originX,originY, '#1da1f2',13.6); emitter117	= new Emitter(originX,originY, '#1da1f2',5.6); emitter118	= new Emitter(originX,originY, '#1da1f2',3.2); emitter119	= new Emitter(originX,originY, '#1da1f2',3.2); emitter120	= new Emitter(originX,originY, '#1da1f2',5.6); emitter121	= new Emitter(originX,originY, '#1da1f2',4.8); emitter122	= new Emitter(originX,originY, '#1da1f2',5.2); emitter123	= new Emitter(originX,originY, '#1da1f2',0.8); emitter124	= new Emitter(originX,originY, '#1da1f2',4.8); emitter125	= new Emitter(originX,originY, '#1da1f2',1.6); emitter126	= new Emitter(originX,originY, '#1da1f2',1.6); emitter127	= new Emitter(originX,originY, '#1da1f2',2); emitter128	= new Emitter(originX,originY, '#1da1f2',0.8); emitter129	= new Emitter(originX,originY, '#1da1f2',1.6); emitter130	= new Emitter(originX,originY, '#1da1f2',0); emitter131	= new Emitter(originX,originY, '#1da1f2',0.4); emitter132	= new Emitter(originX,originY, '#1da1f2',0); emitter133	= new Emitter(originX,originY, '#1da1f2',2.8); emitter134	= new Emitter(originX,originY, '#1da1f2',2.4); emitter135	= new Emitter(originX,originY, '#1da1f2',0.8); emitter136	= new Emitter(originX,originY, '#1da1f2',3.6); emitter137	= new Emitter(originX,originY, '#1da1f2',2.4); emitter138	= new Emitter(originX,originY, '#1da1f2',5.2); emitter139	= new Emitter(originX,originY, '#1da1f2',2.4); emitter140	= new Emitter(originX,originY, '#1da1f2',2.4); emitter141	= new Emitter(originX,originY, '#1da1f2',0.4); emitter142	= new Emitter(originX,originY, '#1da1f2',3.6); emitter143	= new Emitter(originX,originY, '#1da1f2',1.2); emitter144	= new Emitter(originX,originY, '#1da1f2',2); emitter145	= new Emitter(originX,originY, '#1da1f2',4.6); emitter146	= new Emitter(originX,originY, '#1da1f2',1.8); emitter147	= new Emitter(originX,originY, '#1da1f2',6); emitter148	= new Emitter(originX,originY, '#1da1f2',1.8); emitter149	= new Emitter(originX,originY, '#1da1f2',0.6); emitter150	= new Emitter(originX,originY, '#1da1f2',1.2); emitter151	= new Emitter(originX,originY, '#1da1f2',3.4); emitter152	= new Emitter(originX,originY, '#1da1f2',0); emitter153	= new Emitter(originX,originY, '#1da1f2',0); emitter154	= new Emitter(originX,originY, '#1da1f2',1.8); emitter155	= new Emitter(originX,originY, '#1da1f2',1.2); emitter156	= new Emitter(originX,originY, '#1da1f2',0); emitter157	= new Emitter(originX,originY, '#1da1f2',0.6); emitter158	= new Emitter(originX,originY, '#1da1f2',1.8); emitter159	= new Emitter(originX,originY, '#1da1f2',1.2); emitter160	= new Emitter(originX,originY, '#1da1f2',1.2); emitter161	= new Emitter(originX,originY, '#1da1f2',1); emitter162	= new Emitter(originX,originY, '#1da1f2',5); emitter163	= new Emitter(originX,originY, '#1da1f2',2); emitter164	= new Emitter(originX,originY, '#1da1f2',0); emitter165	= new Emitter(originX,originY, '#1da1f2',0.4); emitter166	= new Emitter(originX,originY, '#1da1f2',0); emitter167	= new Emitter(originX,originY, '#1da1f2',2); emitter168	= new Emitter(originX,originY, '#1da1f2',2.4); emitter169	= new Emitter(originX,originY, '#1da1f2',0.8); emitter170	= new Emitter(originX,originY, '#1da1f2',0.8); emitter171	= new Emitter(originX,originY, '#1da1f2',0); emitter172	= new Emitter(originX,originY, '#1da1f2',0.4); emitter173	= new Emitter(originX,originY, '#1da1f2',0); emitter174	= new Emitter(originX,originY, '#1da1f2',0); emitter175	= new Emitter(originX,originY, '#1da1f2',0); emitter176	= new Emitter(originX,originY, '#1da1f2',0); emitter177	= new Emitter(originX,originY, '#1da1f2',0.2); emitter178	= new Emitter(originX,originY, '#1da1f2',0); emitter179	= new Emitter(originX,originY, '#1da1f2',0); emitter180	= new Emitter(originX,originY, '#1da1f2',0.4); emitter181	= new Emitter(originX,originY, '#1da1f2',0); emitter182	= new Emitter(originX,originY, '#1da1f2',0.4); emitter183	= new Emitter(originX,originY, '#1da1f2',0.4); emitter184	= new Emitter(originX,originY, '#1da1f2',0.2); emitter185	= new Emitter(originX,originY, '#1da1f2',1.2); emitter186	= new Emitter(originX,originY, '#1da1f2',0.8); emitter187	= new Emitter(originX,originY, '#1da1f2',0.4); emitter188	= new Emitter(originX,originY, '#1da1f2',0.8); emitter189	= new Emitter(originX,originY, '#1da1f2',0.4); emitter190	= new Emitter(originX,originY, '#1da1f2',0.4); emitter191	= new Emitter(originX,originY, '#1da1f2',0); emitter192	= new Emitter(originX,originY, '#1da1f2',0.2); emitter193	= new Emitter(originX,originY, '#1da1f2',0); emitter194	= new Emitter(originX,originY, '#1da1f2',0); emitter195	= new Emitter(originX,originY, '#1da1f2',0); emitter196	= new Emitter(originX,originY, '#1da1f2',0); emitter197	= new Emitter(originX,originY, '#1da1f2',0.2); emitter198	= new Emitter(originX,originY, '#1da1f2',0.2); emitter199	= new Emitter(originX,originY, '#1da1f2',0); emitter200	= new Emitter(originX,originY, '#1da1f2',0); emitter201	= new Emitter(originX,originY, '#1da1f2',0); emitter202	= new Emitter(originX,originY, '#1da1f2',0.2); emitter203	= new Emitter(originX,originY, '#1da1f2',0.2); emitter204	= new Emitter(originX,originY, '#1da1f2',0); emitter205	= new Emitter(originX,originY, '#1da1f2',0.2); emitter206	= new Emitter(originX,originY, '#1da1f2',0.4); emitter207	= new Emitter(originX,originY, '#1da1f2',0.2); emitter208	= new Emitter(originX,originY, '#1da1f2',0); emitter209	= new Emitter(originX,originY, '#1da1f2',0); emitter210	= new Emitter(originX,originY, '#1da1f2',0); emitter211	= new Emitter(originX,originY, '#1da1f2',0.4); emitter212	= new Emitter(originX,originY, '#1da1f2',0.2); emitter213	= new Emitter(originX,originY, '#1da1f2',0); emitter214	= new Emitter(originX,originY, '#1da1f2',0); emitter215	= new Emitter(originX,originY, '#1da1f2',0.2); emitter216	= new Emitter(originX,originY, '#1da1f2',0)



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
