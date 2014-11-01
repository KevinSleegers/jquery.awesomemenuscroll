## Synopsis

Hi and welcome to the Github page of 'Awesome Menu Scroll'!
I've built this plugin from scratch to fulfill my needs for my own portfolio website (http://www.kevinsleegers.nl).

I'm contantly expanding the code so that it is more dynamic, and can be customized more to work on any website.

## Code Example

```javascript
$('body').awesomeMenuScroll({
		item: '.left>ul li a',
		active: 'active',
		prefix: '#page-',
		navHeight: '80',
		animation: 'swing',
		speed: 800,
		showInURL: false
		/* 	ALL OPTIONS ARE COMPLETELY OPTIONAL :-)
			item: which item you want to change, and that has data (default: 'a');
			active: what class you want to append if scroll reached a section (default: '.active');
			prefix: section class or id. 
				Example: Prefix: '#section-', id on section: id='#section-1'. The index will be added automatically, and will count from 1. (default: '#section-')
			navHeight: if your navigation bar is fixed, this value is the height of the nav (without px, so 80, and not 80px) (default: 'false');
			animation: what animation should happen when item is clicked, basic jQuery animations (default: 'swing');
			speed: scroll speed when clicked on item in milliseconds (default: 500);
			showInURL: should the anchor tag be shown in url? (default: 'false'); NOTE: THIS ONLY WORKS IF YOUR PREFIX IS AN ID (#)
		*/
	});
```

## Motivation

This is kind of a personal project, but I decided to share it through GitHub so other people can use it and experiment with it.

## Installation

If you want to use this plugin you first need to have or download jQuery.
Latest version can be downloaded here: http://code.jquery.com/jquery-latest.min.js

It doesn't matter where you place jquery.awesomemenuscroll.js as long as your reference in your html is correct.
For example, if jquery.awesomemenuscroll.js is located in a folder called 'js', your html reference would look like this:

```html
<script type="text/javascript" src="js/awesomemenuscroll.js"></script>
```

## Contributors

At the moment, just me and a couple of friends who are kind enough to test my versions before I commit them to GitHub. :)

## License

Completely open source for now, do whatever you like with it! Adjust it to your needs and have fun :)