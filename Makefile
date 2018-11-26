all:
	npm install 
	# using papogen
	node_modules/papogen/main.js \
		-s src/ \
		-g md -m md_doc \
		-o . -t Kevin\ Cyu