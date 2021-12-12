#include <ESP8266WiFi.h>
#include "aWOT.h"
#include "StaticFiles.h"
#include "DHTesp.h"


#define WIFI_SSID "TIM-58389203"
#define WIFI_PASSWORD "c36bkPbKh7SCT6zAd3HH3yQ7"
#define LED 5
#define DHT11_PIN 4


//define object from costructors
DHTesp dht;

WiFiServer server(80);
Application app;
bool ledOn;
float airTemp;
float airHum;


void readAirTemp(Request &req, Response &res){
  airTemp = dht.getTemperature();
  res.print(airTemp);
}

void readAirHum(Request &req, Response &res){
  airHum = dht.getHumidity();
  res.print(airHum);
}


void readLed(Request &req, Response &res){
  res.print(ledOn);
}

void updateLed(Request &req, Response &res){
  ledOn = (req.read() != '0');
  digitalWrite(LED, ledOn);
  return readLed(req, res);
}

void setup() {
  pinMode(LED, OUTPUT);
  dht.setup(DHT11_PIN, DHTesp::DHT11);
  //pinMode(DHT11_PIN, INPUT); already in the DHT11 library

  
  
  Serial.begin(115200);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(WiFi.localIP());

  app.get("/led", &readLed);
  app.put("/led", &updateLed);

  //get for dht11
  app.get("/airtemp", &readAirTemp);
  app.get("/airhum", &readAirHum);

  app.use(staticFiles());

  server.begin();
}

void loop() {
  WiFiClient client = server.available();

  if (client.connected()) {
    app.process(&client);
  }
}
