#include "moist.h"
#define NUM_SAMPLES 100

Moist::Moist(int _pin)
{
  Moist::pin = _pin;
}

int Moist::getValue()
{
  float moistValue = 0;
  for (int i = 0; i <= NUM_SAMPLES; i++)
  {
    moistValue = moistValue + analogRead(Moist::pin);
    delay(1);
  }
  return 100 - ((moistValue / (float)NUM_SAMPLES) * 0.096711);
}
