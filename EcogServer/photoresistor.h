#if ARDUINO < 100
#include <WProgram.h>
#else
#include <Arduino.h>
#endif

class Photoresistor
{
private:
  int pin;

public:
  Photoresistor(int _pin);
  int getValue();
};
