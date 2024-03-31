## Application Execution

To run the application, simply execute the following command:

npm run start

This command initializes the application and launches it in the specified environment.

# Coding Decisions Explanation

In developing my application, a clone of the popular game Wordle, I made several coding decisions to enhance efficiency and maintainability. Below, I outline some of the key choices I made:

## Project Overview

The project is a clone of Wordle, a word puzzle game where players have five attempts to guess a hidden word. Each time a word is guessed, the game provides feedback indicating which letters are correct and in the right position (colored green), which letters are correct but in the wrong position (colored yellow), and which letters do not exist in the word at all (colored gray).

## Using a Library for English Words

To streamline the generation of new words within my application, I opted to utilize a library specifically designed for handling English words. This decision simplifies the process of selecting and incorporating words into the application, saving time and effort.

## Context for State Management

Instead of delving into "prop hell," where passing props down multiple levels of components becomes cumbersome and error-prone, I chose to leverage React's context API for managing the state across the entire application. By centralizing state management, I can easily access and update the application state without the need for prop drilling.

## State Management with useState

Within the application, I employed the useState hook to manage state. This hook allows me to maintain stateful data within functional components, enabling seamless state management and updates throughout the application's lifecycle.

## Utilizing useCallback

In an effort to optimize performance and prevent unnecessary re-renders, I utilized the useCallback hook for certain functions. By memoizing functions and specifying dependencies, I ensure that these functions are only re-evaluated when necessary, rather than being recalculated every time the component re-renders.

## Staying True to React Principles

Throughout the development process, I adhered to React principles by dividing the application into many small components for reusability and maintaining clean code and good architecture. This approach not only enhances the maintainability of the codebase but also promotes reusability and scalability.

## Creativity and Customization

I strived to be as creative as possible throughout the development process, opting to implement custom solutions rather than relying solely on prebuilt components or libraries. By taking this approach, I aimed to deliver a unique and engaging user experience while also honing my development skills.

## Addressing Errors

Despite my best efforts, the application may still encounter errors. One such issue I encountered is the presence of multiple SonarQube notifications. I am actively working to resolve these errors and improve the overall quality of the application.

In conclusion, while the development process may have presented challenges, I remain committed to delivering a high-quality, efficient application.
