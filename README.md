# OpenDevEd-wordle
## Project Overview
This project is about creating a Wordle web game using ReactJS. The game follows the classic Wordle rules where players guess a hidden word and receive feedback on the correctness of their guesses. The objective is to guess the hidden word within a limited number of attempts.

### How to run the application locally:

- Clone the Repository: ```git clone <repository-url>```
- Navigate into the cloned directory: ```cd <project-directory>```
- Navigate to my branch: ``` git checkout wordle-MohammedEd-dobaji ```
= Then go to "wordle-game" folder : ``` cd wordle-game ```
- Install the necessary dependencies: ``` npm install ```
- Run the Application: ``` run start ``` 
- This will start a development server and open the Wordle game in your default web browser
- Access the Game: Once the server is running, open your web browser and go to http://localhost:3000.
- Play the Game: You can now play the Wordle game locally in your browser.

### Game Logic:

- Win or Lose:
    If you correctly guess the word within the given attempts, you win!
    If you exhaust all attempts without guessing the word, you lose.
- Restart the Game:
    After winning or losing, the game will automatically refresh after a short delay to allow you to play again.
- The game retrieves words from a JSON file using Axios.
- The main component of the game is located in src/components/Arrays.js.
- The game logic is defined in src/utils/GameLogic.js.
