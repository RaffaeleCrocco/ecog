#if ARDUINO < 100
#include <WProgram.h>
#else
#include <Arduino.h>
#endif

class photoresistor
{
  public:
      int getValue(int sensorPin);
};
  
