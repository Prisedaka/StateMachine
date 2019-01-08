install: install-deps install-flow-typed

install-deps:
	npm install

install-flow-typed:
	npm run flow-typed install

build:
	rm -rf dist
	npm run build

test:
	clear
	npm test

check-types:
	npm run flow

publish:
	npm publish

lint:
	npm run eslint .

.PHONY: test
