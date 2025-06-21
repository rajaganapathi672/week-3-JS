/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function left_to_right(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}
function top_right_to_left()
{
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}
function top_left_to_right()
{
   turnRight();
   move();
   putBeeper();
   turnRight();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}   
function main(){
   left_to_right();
   top_right_to_left();
   top_left_to_right();
   top_right_to_left();
   top_left_to_right();
}
