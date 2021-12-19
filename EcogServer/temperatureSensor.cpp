#include "temperatureSensor.h"

float temperatureSensor::getTemperature(){
  temp.requestTemperatures();
  return temp.getTempCByIndex(0);
}

temperatureSensor::temperatureSensor(int PIN):oneWire(PIN),temp(&oneWire){
  temp.begin();
}
