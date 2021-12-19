#ifndef temperatureSensor_h
#define temperatureSensor_h

#include <OneWire.h>
#include <DallasTemperature.h>


class temperatureSensor{
  private:
    OneWire oneWire;
    DallasTemperature temp;
  public:
    temperatureSensor(int PIN);
    float getTemperature();
};

#endif
