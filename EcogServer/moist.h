

#if ARDUINO < 100
#include <WProgram.h>
#else
#include <Arduino.h>
#endif

class Moist
{
private:
  int pin;

public:
  Moist(int _pin);
  int getValue();
};
