# Wordle App Documentation

## Description

The Wordle App is a game where players guess a hidden 5-letter word within a limited number of attempts. Players can make guesses either by typing in the word or using a keyboard to select letters. The app provides feedback on the correctness of the guessed word, indicating exact matches and misplaced letters.

## Main Page

The main page of the Wordle App consists of the following components:

- **Header**: Displays the title of the game.
- **Word Display**: Shows the current word being guessed and indicates which letters have been correctly guessed.
- **Guessed Letters**: Displays previously guessed words and their correctness.
- **Keyboard**: Allows users to make guesses by clicking on letter buttons.
- **Type-In Input**: If the game type is set to "type-in", an input field is provided for users to type in their guesses.
- **Submit Button**: Allows users to submit their guesses.
- **You Won Dialog**: Appears when the player successfully guesses the word within the maximum number of attempts.
- **Explain Game Dialog**: Appears on the player's first visit to explain how to play the game and allows them to choose between "type-in" or "keyboard" game types.

## Game Logic

The game logic is managed using Zustand, a state management library. Here's how the game logic works:

- A random 5-letter word is selected from a predefined list of words when the game initializes.
- Users can make guesses by typing in the word or selecting letters using the keyboard.
- Each guess is evaluated for correctness, and feedback is provided to the user.
- The game tracks the number of attempts made, exact guesses, and incorrectly guessed letters.
- The game ends when the player correctly guesses the word or exhausts the maximum number of attempts.

## Framer Motion Animations

Framer Motion is used to add animations to various components on the main page, providing a smoother and more engaging user experience. Animations are applied to elements such as the word display, input fields, and buttons.

## Dependencies

The Wordle App uses the following dependencies:

- **@headlessui/react**: For accessible UI components.
- **axios**: For making HTTP requests (not currently used in the app).
- **framer-motion**: For adding animations to components.
- **next**: For server-side rendering and routing.
- **react**: For building user interfaces.
- **react-dom**: For rendering React components in the DOM.
- **react-toastify**: For displaying toast notifications.
- **zustand**: For state management.

## How to Run the Application

To run the Wordle App locally, follow these steps:

1. Clone the repository from [GitHub](https://github.com/your-repository-url).
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install` or `yarn install`.
4. Start the development server by running `npm run dev` or `yarn dev`.
5. Open your browser and visit `http://localhost:3000` to view the application.

Enjoy playing Wordle!
