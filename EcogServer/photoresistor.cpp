#include "photoresistor.h"

Photoresistor::Photoresistor(int _pin)
{
  Photoresistor::pin = _pin;
}

int Photoresistor::getValue()
{
  return !digitalRead(Photoresistor::pin);
}
