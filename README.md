# OpenDevEd Wordle

## instructions

Before starting, you need to configure your environment:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/OpenDevEd/OpenDevEd-wordle.git
    ```
2. Navigate to the project directory and change branch:

    ```bash
    cd OpenDevEd-wordle && git checkout -b wordle-mazhari
    ```
3. Install dependencies:

    ```bash
    npm install
    ```
4. Start server:

    Start the development server:
    ```bash
    npm run dev
    ```
    Start the production server:
    ```bash
    npm run build && npm run start
    ```
## approach
### way Nextjs ?
According to React's documentation, the best ways to start a React project is by choosing one of the React-powered frameworks. Next.js was chosen for this project due to its seamless integration with React and its powerful features for building server-rendered React applications

### State Management
Since the project is relatively small and the state management requirements are not complex, there is no extensive need for state sharing across multiple components. Therefore, a dedicated state management library was not used in this project. Using a state management library for such a small-scale project could introduce unnecessary overhead and complexity, potentially affecting performance and development efficiency.

## additional features
- **virtual keyboard:** The game includes a virtual keyboard component for user interaction, allowing players to easily input their guesses using a virtual keyboard. The keyboard also displays letter states, showing which letters have been correctly guessed and in which positions. 
- **Responsive Design:** The game interface is designed to be responsive and work well on different screen sizes.
- **Notifications:** The game provides notifications to the user in case of invalid input.
- **Dark Mode:** Support for dark mode is implemented using Tailwind CSS's dark mode utility classes.