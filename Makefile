src = images/*.png scripts/*.js manifest.json

zip: $(src)
	zip extension.zip -r $(src)

.PHONY: clean
clean:
	rm -f extension.zip