A Particle Emmiter
=================

##### What is this?
![alt text](truong-promo.gif "particle emitter")

For a [story about online trolling](https://www.buzzfeed.com/lamvo/heres-what-it-feels-like-to-be-trolled-in-trumps-america), we at the BuzzFeed Open Lab put together an animated data visualization. This is the cleaned up code for this project.

##### What problem does this solve?
Visualizing more than a few thousand data points in d3.js can get a little heavy on the browser because you have to animate thousands of `<svg>` elements. Using `<canvas>` allows you to manipulate and update pixels instead.

##### Project background
The code for this project came from an in-class exercise for a JavaScript class. I’ve modified the project to make this graphic.

The original code is from [Eric Haseltine](https://twitter.com/erichaseltine), the JavaScript instructor who introduced me to the joy of canvas.

##### Dependencies

For this project you need `underscore.js` and `JQuery` for the counter. The canvas animation is written in `JavaScript`.

```
<script src="js/libs/jquery-2.1.3.min.js"></script>
<script src="js/libs/underscore-1.6.0.min.js" type="text/javascript" charset="utf-8"></script>
```

## How to use this
[coming soon]

## How to run this project locally (for the nerds)

If you want to preview the graphic locally, you can do so by going to your Terminal. Navigate into your directory using `cd` and once you're there run a local server by running this command in your terminal `python -m SimpleHTTPServer`. To preview the graphic go to a browser of your choice and go to `localhost:8000`.

## Copyright
Do What The F*** you want to Public License

Version 1.0, February 2017
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

Ok, the purpose of this license is simple
and you just

DO WHAT THE F*** YOU WANT TO.
