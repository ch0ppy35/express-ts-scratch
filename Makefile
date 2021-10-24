#Makefile

.PHONY: run dev lint build clean cleanenv install format

run:
	npm start

dev:
	npm run dev

lint:
	npm run eslint

build:
	npm run build

clean:
	rm -rf dist/

cleanenv:
	rm -rf node_modules/
	rm -rf dist/

install:
	npm install

format:
	npm run prettier-format

default: build