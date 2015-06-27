SRCDIR := src
SRC    := $(SRCDIR)/itoolz.js
OUTDIR := dist
OUT    := $(OUTDIR)/itoolz.js

all: $(OUT)

$(OUT): $(SRC)
	[ -d $(OUTDIR) ] || mkdir $(OUTDIR)
	babel $(SRC) --out-file $(OUT) --source-maps

watch:
	[ -d $(OUTDIR) ] || mkdir $(OUTDIR)
	babel $(SRC) --watch --out-file $(OUT) --source-maps
