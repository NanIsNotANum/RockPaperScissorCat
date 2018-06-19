
# RockPaperScissorCat Introduction


This "Rock-Paper-Scissor with Cat" game is designed for cat fans ( as I am a huge fan for both cats and dogs)
It is a pure client side application, mainly developed with "composition pattern" instead of the common inheritance(class, or prototype) pattern. By using the closure featre, the main raw data of player and game is not touchable by external user. 

## Browser / device support

This app is design with the purpose to be played on multiple sizes of screen, with the help of CSS design and <meta/> in html. Also, all the javascript feature is vanilla-wise and well-supported by most of the modern browsers.

A basic UI/UX test has been performed on Mac with:

* Google Chrome: Version 66.0.3359.181 (Official Build) (64-bit)
* Opera: 52.0.2871.40
* FireFox: 59.0.2 (64-Bit)

both PC monitor and mobile emulator mode.


## How to run it?

simply open the index.html file with browser will do.

## Test


Mocha is used to testing this app, both unit test and functional test(UserGameInterface.test)
the test tech used in this app is pure client driven.
simply open the test/test.html file with browser will triger the test process and show the result on the page.
