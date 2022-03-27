# Ejercicio 14: Calcular la diferencia en días de dos fechas dadas.

from datetime import date

hoy = date(2021, 4, 11)#en medio los meses
otra_fecha = date(1978, 5, 5)#en medio los meses

delta = otra_fecha - hoy

print(delta)
print(delta.days)
