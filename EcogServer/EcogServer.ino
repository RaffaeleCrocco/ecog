#include <ESP8266WiFi.h>
#include "aWOT.h"
#include "StaticFiles.h"
#include "DHTesp.h" //hum and temp sensor for air
#include "moist.h" //hum sensor for terrain
#include "DS18B20.h" //temp sensor for terrain
#include "photoresistor.h" //light sensor



#define WIFI_SSID "TIM-58389203"
#define WIFI_PASSWORD "c36bkPbKh7SCT6zAd3HH3yQ7"
#define LED 5
#define DHT11_PIN 4
#define MOIST_PIN 0
#define DS18B20_PIN 14
#define PHOTORESISTOR_PIN 12

//define object from costructors
DHTesp DHT;
moist MOIST;
ds18b20 DS18B20;
photoresistor PHOTORESISTOR;

WiFiServer server(80);
Application app;
bool ledOn;
float airTemp;
float airHum;
float terrHum;
float terrTemp;
bool light;


void readAirTemp(Request &req, Response &res){
  airTemp = DHT.getTemperature();
  res.print(airTemp);
}

void readAirHum(Request &req, Response &res){
  airHum = DHT.getHumidity();
  res.print(airHum);
}

void readTerrHum(Request &req, Response &res){
  terrHum = MOIST.getValue(MOIST_PIN);
  res.print(terrHum);
}

void readTerrTemp(Request &req, Response &res){
  terrTemp = DS18B20.getValue(DS18B20_PIN);
  res.print(terrTemp);
}

void readLed(Request &req, Response &res){
  res.print(ledOn);
}

void readLight(Request &req, Response &res){
  light = PHOTORESISTOR.getValue(PHOTORESISTOR_PIN);
  res.print(light);
}

void updateLed(Request &req, Response &res){
  ledOn = (req.read() != '0');
  digitalWrite(LED, ledOn);
  return readLed(req, res);
}

void setup() {
  pinMode(LED, OUTPUT);
  DHT.setup(DHT11_PIN, DHTesp::DHT11);
  //pinMode(DHT11_PIN, INPUT); already in the DHT11 library

  
  
  Serial.begin(115200);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(WiFi.localIP());

  //method for internal light
  app.get("/led", &readLed);
  app.put("/led", &updateLed);

  //get for dht11
  app.get("/airtemp", &readAirTemp);
  app.get("/airhum", &readAirHum);
  
  //get for fork
  app.get("/terrhum", &readTerrHum);
  
  //get for probe
  app.get("/terrtemp", &readTerrTemp);

  //get for light sensor
  app.get("/light", &readLight);

  app.use(staticFiles());

  server.begin();
}

void loop() {
  WiFiClient client = server.available();

  if (client.connected()) {
    app.process(&client);
  }
}
