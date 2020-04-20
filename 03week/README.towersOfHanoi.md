Towers of Hanoi is a simple logic game involving three stacks. 
The first stack has four (or more) blocks, each one bigger than the next, stacked like a pyramid. 
The point of the game is to move the blocks from one stack and arrange them in the same order into another stack, but never placing a larger block onto a smaller block.

1) function towersOfHanoi(startStack, endStack)
This function creates a start and end variable that allows me to use the startStack & endStack as array indexes. This way I can start and end at any three of the stacks
It also verifies if the checkForWin(). If this function returns false then it allows the movePiece() to run

2) function isLegal(start, end)
For a move from one stack to another stack to be legal, start needs to have an element to move and it can end on either a stack that has no element or the last element on the stack needs to be less than the element moving from start
Otherwise function returns false

3) function movePiece(start, end)
This function first checks the isLegal() and if it returns true, then it allows the start stack to remove its last element and push it to the end stack. Then the checkForWin() is checked to see if player won with this move
Otherwise console prints 'Illegal move'

4) function checkForWin()
Since the game start with 4 elements on stack A, to win either stack b or stack C needs to have four elements. 
Function checks to see if either stacks B or C has four elements, if it does then function returns true and consoles 'You won!'
Otherwise function returns false

