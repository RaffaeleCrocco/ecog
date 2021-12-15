#include "photoresistor.h"

int photoresistor::getValue(int PHOTORESISTOR_PIN)
{
  return !digitalRead(PHOTORESISTOR_PIN);
}
