const t="/assets/ultrasonic-BIMhicK8.png",i="/assets/piezo-B518Fmrv.png",s="/assets/display-CW1wR6ll.png",n="/assets/led_tower-B-_PrFm-.png",o="/assets/park-DmhpZYrj.png",a="/assets/buzzer_music-C4QOtign.jpg",r="/assets/smart_house-DZgARchA.jpg",l="/assets/iot_garden-CX1d_UJf.jpg",c="/assets/music_player-BKdkasA-.png",m="/assets/reaction_game-DxDmcq0m.png",d="/assets/maze_rotations-DZ9ptRsh.png",g="/assets/sound_sensor_data-C-kC6vZ-.png",p="/assets/piano-C3PhGawG.jpg",u="/assets/night_lights-C-YFin7R.jpg",h="/assets/pet_feeder-Dhd5eqiJ.jpg",f="/assets/photoresistor-Bu2D6u81.jpg",y="/assets/temp_fan-CoLFQWOb.png",e={ultrasonic:{id:"ultrasonic",image:t,name:"Ultrasonic Sensor",done:!0},piezo:{id:"piezo",image:i,name:"Piezo Buzzer",done:!0},display:{id:"display",image:s,name:"OLED Display",done:!0},"led tower":{id:"led tower",image:n,name:"RGB Tower",done:!1}},P={ultrasonic:{description:`## Description
Ultrasonic Sensor is used for measuring distance by send high frequency sound
waves. When waves reach a wall they are reflected back. Reflected sound is
detected by the sensor. The time that it takes to comeback can be used to
calculate distance to the wall.
## Test Code
\`\`\` python
from machine import Pin
import utime
trigger = Pin(14, Pin.OUT)
echo = Pin(15, Pin.IN)
def ultra():         #Create a function

   utime.sleep_us(2)  #Pause for two milliseconds to ensure the previous setting The low potential has completed the
   trigger . high ()
   trigger.high()
   utime.sleep_us(5)   # After pulling the high potential, wait for 5 milliseconds, and immediately set to Low
   trigger.low()
   while echo.value() == 0:         #Create a while loop to check whether the echo pin is 0, record the time
       signaloff = utime.ticks_us()
   while echo.value() == 1:         #Create a while loop to check Whether the echo pin value is 1, record the time
       signalon = utime.ticks_us()
   timepassed = signalon - signaloff    #Calculate the time difference between sending and receiving

   #Sonic travel time x speed of sound (343.2 m/s , Which is 0.0343 cm per microsecond), and the back-and-forth distance is divided by 2
   distance = (timepassed * 0.0343) / 2
   print("The distance is ： ",distance,"cm")

while True:
   ultra()
   utime.sleep(1)  #wait for 1 second
\`\`\`
    `},piezo:{description:`## Description
Piezo is sound producing element. It makes sound. Sound is created by the piezo
buzzer. If you hear 8-bit sound, it may be created by the piezo. Piezo is
a component that creates sound. Sound and sound, sound.
## Test Code
\`\`\`
from machine import Pin, PWM
from utime import sleep
buzzer = PWM(Pin(15))

tones = {
"B0": 31,
"C1": 33,
"CS1": 35,
"D1": 37,
"DS1": 39,
"E1": 41,
"F1": 44,
"FS1": 46,
"G1": 49,
"GS1": 52,
"A1": 55,
"AS1": 58,
"B1": 62,
"C2": 65,
}

song = ["E5","G5","A5","P","E5","G5","B5","A5","P","E5","G5","A5","P","G5","E5"]

def playtone(frequency):
    buzzer.duty_u16(1000)
    buzzer.freq(frequency)

def bequiet():
    buzzer.duty_u16(0)

def playsong(mysong):
    for i in range(len(mysong)):
        if (mysong[i] == "P"):
            bequiet()
        else:
            playtone(tones[mysong[i]])
        sleep(0.3)
    bequiet()
playsong(song)
\`\`\`
`},display:{description:`## Description
OLED Display ... ... SSD1306 library ... something
## Test Code
\`\`\`
from machine import Pin, I2C
from ssd1306 import SSD1306_I2C
WIDTH =128
HEIGHT= 64
i2c=I2C(0,scl=Pin(1),sda=Pin(0),freq=200000)
oled = SSD1306_I2C(WIDTH,HEIGHT,i2c)
while True:
    oled.fill(0)
    oled.text("DIY PROJECTS LAB", 0, 0)
    oled.text("Tutorial", 0, 40)
    oled.show()
\`\`\`
`},"led tower":{description:`## Description
RGB tower consists of 5 RGB LED that can emit light. The emitted light can
be of many colors. Colors that are RGB tower emits are different. Three colors:
Red, Green, Blue can be used to produce various colors using RGB tower.
## Test Code
\`\`\` python
from machine import Pin, PWM

cool_white = PWM(Pin(0))
blue = PWM(Pin(1))
red = PWM(Pin(2))
green = PWM(Pin(3))
warm_white = PWM(Pin(4))

cool_white.freq(500)
blue.freq(10000)
red.freq(500)
green.freq(500)
warm_white.freq(500)
\`\`\`
`}},w={1:{id:"1",image:o,name:"Park Easy",level:2,programming:0,electronics:0,modelling:0,open:!0},2:{id:"2",image:a,name:"8-bit Music",level:1,programming:0,electronics:0,modelling:0,open:!0},12:{id:"12",image:y,name:"Automated Fan",level:2,programming:0,electronics:0,modelling:0,open:!0},3:{id:"3",image:d,name:"Maze Game",level:2,programming:0,electronics:0,modelling:0,open:!0},7:{id:"7",image:g,name:"Sound Detection",level:2,programming:0,electronics:0,modelling:0,open:!0},9:{id:"9",image:u,name:"Night Lights",level:2,programming:0,electronics:0,modelling:0,open:!0},10:{id:"10",image:f,name:"Auto Brightness",level:3,programming:0,electronics:0,modelling:0,open:!0},13:{id:"13",image:c,name:"Music Player",level:3,programming:0,electronics:0,modelling:0,open:!0},4:{id:"4",image:m,name:"Reaction Game",level:3,programming:0,electronics:0,modelling:0,open:!0},11:{id:"11",image:h,name:"Pet Feeder",level:3,programming:0,electronics:0,modelling:0,open:!0},8:{id:"8",image:p,name:"Small Piano",level:4,programming:0,electronics:0,modelling:0,open:!0},5:{id:"5",image:r,name:"Smart House",level:4,programming:0,electronics:0,modelling:0,open:!0},6:{id:"6",image:l,name:"Smart Garden",level:4,programming:0,electronics:0,modelling:0,open:!0}},b={1:{videoUrl:"https://www.youtube.com/embed/gdSwL-VU-XU?si=IMsh2U1_FVI3l9Cs",description:`## Background
Imagine you are a team of engineers at "Park-Easy," a startup dedicated to enhancing vehicle safety and parking efficiency. Your latest challenge is to address a common problem many drivers face: safely and efficiently parking in tight garage spaces without damaging their vehicle or property.
## The Challenge
Your team has been tasked with developing an innovative solution to help drivers park their vehicles safely in garages, especially those with limited space. After brainstorming, your team decides to create an ultrasonic parktronic system that guides drivers during the parking process, reducing the risk of collisions and ensuring optimal parking alignment.
## Check List
* Verify that the ultrasonic sensor measures distance.
* Check if the distance is correctly displayed on display in the format:
"The distance is X.XX cm.
* Confirm that the LEDs display the correct colors based on the distance measured:
* LEDs show different colors based on the proximity flag calculation.
* Correct number of LEDs light up according to the distance.
* Ensure the buzzer activates correctly when the distance is less than 7 cm.
* Observe the refresh rate and responsiveness (specified delay of 0.2 seconds).`,tokens:[e.ultrasonic,e.piezo,e.display,e["led tower"]]}};export{b as a,e as b,P as c,w as t};
