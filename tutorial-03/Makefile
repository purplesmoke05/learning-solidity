.PHONY: test

compile:
	truffle compile
	yarn generate-types

migrate:
	yarn build-migration-files
	truffle migrate

test:
	yarn test
