help:
	@echo 'TODO, Add help'

image:
	rm -rf build
	npm run build
	docker build -t gaia .

run:
	docker run --name gaia-dev --rm -p 3000:80 -d gaia

stop:
	docker stop gaia-dev

release: image
	docker tag gaia registry.richistron.com/gaia
	docker push registry.richistron.com/gaia
