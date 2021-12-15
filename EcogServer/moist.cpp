#include "moist.h"
#define NUM_SAMPLES 100

int moist::getValue(int MOIST_PIN)
{
  float moistValue = 0;
  for (int i = 0; i <= NUM_SAMPLES; i++) 
  { 
     moistValue = moistValue + analogRead(MOIST_PIN); 
     delay(1); 
  } 
  return 100 - ((moistValue/(float)NUM_SAMPLES) * 0.096711);
}
