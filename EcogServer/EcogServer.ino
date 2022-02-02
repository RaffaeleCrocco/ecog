//##################################
//            includes
//##################################

#include <ESP8266WiFi.h>
#include "aWOT.h"
#include "StaticFiles.h"
#include "DHTesp.h"            //hum and temp sensor for air
#include "moist.h"             //hum sensor for terrain
#include "photoresistor.h"     //light sensor
#include "temperatureSensor.h" //temp sensor for terrain

#include <Wire.h>              // Display
#include <Adafruit_GFX.h>      //
#include <Adafruit_SSD1306.h>  //

//##################################
//     intial configuration
//##################################

// change this with your home wifi credential
#define WIFI_SSID "TIM-58389203"
#define WIFI_PASSWORD "c36bkPbKh7SCT6zAd3HH3yQ7"

// define pin for each sensor
#define LED 16
#define DHT11_PIN 2
#define MOIST_PIN 0
#define DS18B20_PIN 14
#define PHOTORESISTOR_PIN 12

// define display constants
#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels

// define object using costructors
DHTesp DHT;
Moist MOIST(MOIST_PIN);
Photoresistor PHOTORESISTOR(PHOTORESISTOR_PIN);;
temperatureSensor DS18B20(DS18B20_PIN);
WiFiServer server(80);
Application app;

// define variables to store sensors data
bool ledOn;
float airTemp;
float airHum;
float terrHum;
float terrTemp;
bool light;

// define display object
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

//##################################
//     functions to send data
//##################################

void readAirTemp(Request &req, Response &res)
{
  airTemp = DHT.getTemperature();
  res.print(airTemp);
}

void readAirHum(Request &req, Response &res)
{
  airHum = DHT.getHumidity();
  res.print(airHum);
}

void readTerrHum(Request &req, Response &res)
{
  terrHum = MOIST.getValue();
  res.print(terrHum);
}

void readTerrTemp(Request &req, Response &res)
{
  terrTemp = DS18B20.getTemperature();
  res.print(terrTemp);
}

void readLed(Request &req, Response &res)
{
  res.print(ledOn);
}

void readLight(Request &req, Response &res)
{
  light = PHOTORESISTOR.getValue();
  res.print(light);
}

void updateLed(Request &req, Response &res)
{
  ledOn = (req.read() != '0');
  digitalWrite(LED, ledOn);
  return readLed(req, res);
}

//##################################
//         setup function
//##################################

void setup()
{
  

  pinMode(LED, OUTPUT);                // setting led pin as an output
  DHT.setup(DHT11_PIN, DHTesp::DHT11); // setting up the dht sensor

  Serial.begin(115200); // setting the serial to print IP the device reserve for itself
  
  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) { // check display allocation
    Serial.println(F("SSD1306 allocation failed"));
    while (true);
  }
  display.display();
  display.clearDisplay();
  display.setTextSize(2);
  display.setTextColor(WHITE);
  display.cp437(true);
  
  // wifi configuration and IP printing
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  
  while (WiFi.status() != WL_CONNECTED){
    display.setCursor(0, 0);
    display.print("Connecting");
    display.display();
  }
  display.clearDisplay();
  display.setCursor(0, 0);
  display.print("Connected");
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(0, 20);
  display.print("Reserved:");
  display.print(WiFi.localIP());
  display.display();

  // method for sensors
  app.get("/led", &readLed);
  app.put("/led", &updateLed);
  app.get("/airtemp", &readAirTemp);
  app.get("/airhum", &readAirHum);
  app.get("/terrhum", &readTerrHum);
  app.get("/terrtemp", &readTerrTemp);
  app.get("/light", &readLight);

  app.use(staticFiles());
  server.begin(); // starting the server
}

void loop()
{
  WiFiClient client = server.available();

  // we keep processing data until the client is connected to the server
  if (client.connected())
  {
    app.process(&client);
  }
}
