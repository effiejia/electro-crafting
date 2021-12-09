import processing.serial.*;
Serial myPort;
String val;

int angle;

String filename = "falls_resize.jpg";
String filename1 = "thermo_resize.jpg";
String filename2 = "geyser_resize.jpg";
String filename3 = "bison_resize.jpg";
PImage img;
PImage img1;
PImage img2;
PImage img3;

void setup()
{
  // I know that the first port in the serial list on my mac
  // is Serial.list()[0].
  // On Windows machines, this generally opens COM1.
  // Open whatever port is the one you're using.
  String portName = Serial.list()[0]; //change the 0 to a 1 or 2 etc. to match your port
  myPort = new Serial(this, portName, 9600);
  
  img = loadImage(filename);
  size(960,768);
  colorMode(HSB, 255);
  image(img, 0, 0);
  
  img1 = loadImage(filename1);
  size(960,768);
  colorMode(HSB, 255);
  image(img1, 0, 0);
  
  img2 = loadImage(filename2);
  size(960,768);
  colorMode(HSB, 255);
  image(img2, 0, 0);
  
  img3 = loadImage(filename3);
  size(960,768);
  colorMode(HSB, 255);
  image(img3, 0, 0);
}

void draw()
{
  if ( myPort.available() > 0) 
  {  // If data is available,
    val = myPort.readStringUntil('\n');         // read it and store it in val
    if (val != null){
      val = trim(val);
      angle = int(val);
    }
  } 
  println(angle);
  
  if (mouseX < 240){
    if (angle == 0){
      background(0);
    } else {
      img.loadPixels();
      for (int i=0; i<=40*(angle/15); i++){
        for (int j=0; j<img.height; j++){
          color c = img.pixels[j*img.width + i];
          fill(c);
          noStroke();
          rect(i, j, 1, 1);
        }
      }
      for (int x=40*(angle/15); x<479; x+=40){
        for (int y=0; y<img.height; y+=32){
          color c = img.pixels[y*img.width + x];
          fill(c);
          noStroke();
          rect(x, y, 40, 32);
        }
      }
      for (int k=img.width-1; k>=img.width-40*(angle/15); k--){
        for (int l=0; l<img.height; l++){
          color d = img.pixels[l*img.width + k];
          fill(d);
          noStroke();
          rect(k, l, 1, 1);
        }
      }
      for (int w=img.width-40*(angle/15)-40; w>=479; w-=40){
        for (int z=0; z<img.height; z+=32){
          color d = img.pixels[z*img.width + w];
          fill(d);
          noStroke();
          rect(w, z, 40, 32);
        }
      }
      img.updatePixels();
    }
  } else if (240 <= mouseX && mouseX < 480){
    if (angle == 0){
      background(0);
    } else {
      img1.loadPixels();
      for (int i=0; i<=40*(angle/15); i++){
        for (int j=0; j<img1.height; j++){
          color c = img1.pixels[j*img1.width + i];
          fill(c);
          noStroke();
          rect(i, j, 1, 1);
        }
      }
      for (int x=40*(angle/15); x<479; x+=40){
        for (int y=0; y<img1.height; y+=32){
          color c = img1.pixels[y*img1.width + x];
          fill(c);
          noStroke();
          rect(x, y, 40, 32);
        }
      }
      for (int k=img1.width-1; k>=img1.width-40*(angle/15); k--){
        for (int l=0; l<img1.height; l++){
          color d = img1.pixels[l*img1.width + k];
          fill(d);
          noStroke();
          rect(k, l, 1, 1);
        }
      }
      for (int w=img1.width-40*(angle/15)-40; w>=479; w-=40){
        for (int z=0; z<img1.height; z+=32){
          color d = img1.pixels[z*img1.width + w];
          fill(d);
          noStroke();
          rect(w, z, 40, 32);
        }
      }
      img1.updatePixels();
    } 
  } else if (480 <= mouseX && mouseX < 720){
    if (angle == 0){
      background(0);
    } else {
      img2.loadPixels();
      for (int i=0; i<=40*(angle/15); i++){
        for (int j=0; j<img2.height; j++){
          color c = img2.pixels[j*img2.width + i];
          fill(c);
          noStroke();
          rect(i, j, 1, 1);
        }
      }
      for (int x=40*(angle/15); x<479; x+=40){
        for (int y=0; y<img2.height; y+=32){
          color c = img2.pixels[y*img2.width + x];
          fill(c);
          noStroke();
          rect(x, y, 40, 32);
        }
      }
      for (int k=img2.width-1; k>=img2.width-40*(angle/15); k--){
        for (int l=0; l<img2.height; l++){
          color d = img2.pixels[l*img2.width + k];
          fill(d);
          noStroke();
          rect(k, l, 1, 1);
        }
      }
      for (int w=img2.width-40*(angle/15)-40; w>=479; w-=40){
        for (int z=0; z<img2.height; z+=32){
          color d = img2.pixels[z*img2.width + w];
          fill(d);
          noStroke();
          rect(w, z, 40, 32);
        }
      }
      img2.updatePixels();
    } 
  } else {
    if (angle == 0){
      background(0);
    } else {
      img3.loadPixels();
      for (int i=0; i<=40*(angle/15); i++){
        for (int j=0; j<img3.height; j++){
          color c = img3.pixels[j*img3.width + i];
          fill(c);
          noStroke();
          rect(i, j, 1, 1);
        }
      }
      for (int x=40*(angle/15); x<479; x+=40){
        for (int y=0; y<img3.height; y+=32){
          color c = img3.pixels[y*img3.width + x];
          fill(c);
          noStroke();
          rect(x, y, 40, 32);
        }
      }
      for (int k=img3.width-1; k>=img3.width-40*(angle/15); k--){
        for (int l=0; l<img3.height; l++){
          color d = img3.pixels[l*img3.width + k];
          fill(d);
          noStroke();
          rect(k, l, 1, 1);
        }
      }
      for (int w=img3.width-40*(angle/15)-40; w>=479; w-=40){
        for (int z=0; z<img3.height; z+=32){
          color d = img3.pixels[z*img3.width + w];
          fill(d);
          noStroke();
          rect(w, z, 40, 32);
        }
      }
      img3.updatePixels();
    } 
  }
}
