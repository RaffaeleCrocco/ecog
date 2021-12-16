
# EcoG 

IoT user interface and C files for smart greenhouses monitoring using ESP8266 microcontroller.

## Set up after download
To connect the device you should go to `/EcogServer/EcogServer.ino` and change two define with your own wifi credential. Remember those are string so you should use `" "`.
```c++
  #define WIFI_SSID <WIFI-NAME>
  #define WIFI_PASSWORD <WIFI-PASSWORD>
```

When it first connect to your home wifi the system reserve for himself an IP address that it will be used for host the website where all the sensors data of your greenhouse are showed.

For example, in my case the system reserved for himself `192.168.1.2`. 



## Microcontroller server API

#### PUT

```javascript
  PUT ${ip reserver by device}/${path}
```

| Path | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/led` | `Boolean` | Setting state of internal light |

#### GET

```javascript
  GET ${ip reserver by device}/${path}
```

| Path | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/led`      | `Boolean` | Getting state of internal light |
| `/airtemp`      | `float` | Getting internal air temperature |
| `/airhum`      | `float` | Getting internal air humidity |
| `/terrtemp`      | `float` | Getting internal terrain temperature |
| `/terrhum`     | `float` | Getting internal terrain humidity |
| `/light`     | `float` | Getting state of external light |


## Plant json API
Plant data are stored in a `.json` file to make more accurate comparization with system extracted data. 
```text
plant object  
├── name
│   ├── common  [string]
│   └── species  [string]
├── stats
│   ├── lifespan  [string]
│   ├── seasonal  [bool]
│   ├── months  [vector of string]
│   ├── temperature  [vector of int]
│   ├── humidity
│   │   ├── terrain  [vector of int]
│   │   └── air  [vector of int] 
│   └── light 
│       └── time  [vector of int] 
└── watering   
    └── month
        ├── lable  [string]
        └── times  [vector of int]
```
In the future I plan to add more plants .