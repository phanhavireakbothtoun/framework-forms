application.js: webpack.config.js src/* src/*/*
	./node_modules/webpack/bin/webpack.js

deploy:
	git push heroku master

setup:
	heroku create framework-forms

watch:
	find src | entr -d make
