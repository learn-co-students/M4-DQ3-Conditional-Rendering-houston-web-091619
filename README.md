# Conditional Rendering Discussion Question 

Get together in groups and clone down this repository. For the purposes of this discussion question, you should work only out of `components/MenuBar.js` and `containers/MainBox.js`. Your end goal is to make this app function like so:
 
![alt text][example]

[example]: https://media.giphy.com/media/3oFzmbfBOqAmBzA7AY/giphy.gif "final"


A few things to think about:

1. Which component should have state? 
-Main box which shows all the info

2. Based on your answer to the question above, which component should have a method to change state?
-Main box
-which will have an onclick method which will use setState to change whenever you click on the button it will change 

3. Which component should call the function that changes state?
-click function 

4. Which component is responsible for passing down props?
-Menu Bar

5. How can state be used to manage the rendering of components and change the style of components already on the page?
-Using the display method to display whatever changes on the screen 
