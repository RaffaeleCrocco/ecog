
#if ARDUINO < 100
#include <WProgram.h>
#else
#include <Arduino.h>
#endif

class ds18b20
{
  public:
      int getValue(int sensorPin);
};
  
