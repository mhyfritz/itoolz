SRC=src/itoolz.js
OUT=itoolz.js

all: $(OUT)

$(OUT): $(SRC)
	babel $(SRC) --out-file $(OUT) --source-maps

watch:
	babel $(SRC) --watch --out-file $(OUT) --source-maps
