#include "DS18B20.h"
#define NUM_SAMPLES 10

int ds18b20::getValue(int DS18B20_PIN)
{
  float tempValue = 0;
  for (int i = 0; i <= NUM_SAMPLES; i++) 
  { 
     tempValue = tempValue + digitalRead(DS18B20_PIN); 
     delay(1); 
  } 
  return (tempValue/(float)NUM_SAMPLES);
}
