#include <Servo.h>
#include <Adafruit_NeoPixel.h>

#define LED_PIN    6
#define LED_COUNT 24

Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

int servoPin = 3;

Servo Servo1;

int angle = 0;

void setup()
{
  //initialize serial communications at a 9600 baud rate
  Serial.begin(9600);

  Servo1.attach(servoPin);

  strip.begin();
  strip.show();
  strip.setBrightness(50);
}

void loop()
{
  for (angle = 0; angle <= 180; angle += 15){
    Servo1.write(angle);
    Serial.println(angle);
    if (angle == 0){
      strip.clear();
      strip.show();
    } else if (angle ==180){
      for (int i=0; i<24; i++){
        strip.setPixelColor(i, 0, 0, 255);
      }
      strip.show();
    } else {
      strip.setPixelColor(12-angle/15, 0, 255, 0);
      strip.setPixelColor(24-angle/15, 0, 255, 0);
      strip.show();
    }
    delay(1000);
  }

  delay(3000);

  for (angle = 165; angle >= 0; angle -= 15){
    Servo1.write(angle);
    Serial.println(angle);
    strip.setPixelColor(12-angle/15, 255, 0, 0);
    strip.setPixelColor(24-angle/15, 255, 0, 0);
    strip.show();
    delay(250);
  }

  strip.clear();
  strip.show();
  delay(3000);
}
