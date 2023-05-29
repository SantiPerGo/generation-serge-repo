################################################################################
# definiendo variables a usar en el makefile
################################################################################

# banderas para compilar
JFLAGS = -d

# compiladores
JC = javac

# otras variables
RUTA = ./
PROGRAM = ProgramaPrincipal
CLASSES = ClaseAuxiliar.java \
	  ProgramaPrincipal.java

################################################################################
# definiendo sufijos y reglas de sufijos
################################################################################

# definiendo sufijos que van a utilizarse en el makefile
.SUFFIXES: .java .class

# empleando el sufijo "-d" para cuando un archivo es un package
# NOTA: ES NECESARIO DEJAR EL SALTO DE LÍNEA O MARCA ERROR
.java.class:
	$(JC) $(JFLAGS) $(RUTA) $*.java

################################################################################
# definiendo los comandos posibles de usar por el usuario
################################################################################

# comando para compilar códigos si el usuario escribe "make"
default: $(CLASSES:.java=.class)

# comando para eliminar los archivos ".class", ".jar"
# NOTA: ES NECESARIO DEJAR EL SALTO DE LÍNEA O MARCA ERROR
clean:
	$(RM) *.class

# comando para ejecutar código principal del cliente
# NOTA: ES NECESARIO DEJAR EL SALTO DE LÍNEA O MARCA ERROR
run:
	java $(PROGRAM)











