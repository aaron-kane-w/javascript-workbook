Dodgeball League: We have a list of people who want to play. We first list the people, then decide who can play, and finally of those who can play we determine which team they will play for. 

We have an array of people (as objects) that have signed up to play in our dodgeball league. Upon first loading the DOM we will see we have several columns that are mostly empty:
- List of People with a “List People” button
- Dodgeball Players (empty)
- Blue Team (empty)
- Red Team (empty)

The only user interaction option when the DOM first loads is the “List People” button in the the List of People column. When clicked: 
- All person objects will be listed displaying in the DOM their name and skill set
- Next to each displayed person’s name & skill set will be a “Make Player” button

“Make Player” button when clicked:
- Removes the listed person & their “Make Player” button from the List Of People column
- Person object is added to the listOfPlayers array
- Person’s name and age is listed under the Dodgeball Players column of the DOM
- Under their name & age in the Dodgeball Players column the person will have two buttons, “blue” and “red”

“blue” and “red” buttons: 
- Both have very similar functions but are tied to their respective teams (Blue Team and Red Team)
- When one of these is clicked (example Blue): 
    - The person listed will be removed from the Dodgeball Players column along with both their associated “blue” and “red” buttons
    - The person’s name is added to the team array (in this example the blueTeam array)
    - The person’s name is listed in the DOM under their selected team (in this example the name would be listed under the Blue Team column)
