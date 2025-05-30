# InnerSource Game Requirements

## Requirements for the SPA Game Guesser Application

1. **User Interface**:
   - A clean and responsive design using Tailwind CSS.
   - A catchy, funny title at the top of the page: "What InnerSource is?" with a humorous tone.
   - Two specific logo images:
     - Open Source logo on the left (based on the Tux penguin with open arms)
     - Closed Source logo on the right (based on a "closed" sign)
     - A smaller InnerSource logo in the center (4x smaller than the others) that moves left and right when the user answers questions.
   - Two buttons for user interaction: "True" (if the question makes really sense) and "False" (if it is not).
   - Depending on the user answer, the moving logo will move to the left or right side of the screen erratically.
   - After answering all questions, the InnerSource logo will stop moving and rest in the middle of the two other logos and a bit up, with a message below saying "InnerSource is a middle ground between Open Source and Closed Source".
   - Enhanced styling with appropriate colors and backgrounds to make the game visually appealing.

2. **Game Logic**:
   - The game should present a series of statements about InnerSource.
   - Users will guess if each statement is closely related to Open Source or to Closed Source by clicking the "True" or "False" buttons.
   - The application should move the position of the InnerSource logo based on the user's answers. Each answer has 2 properties
     - An attribute to know if it is related to Open Source or not.
     - A weight that determines how far the InnerSource logo will move left or right based on the user's answer.
   - If the user answers "True", and the question is related to Open Source, the InnerSource logo will move left by the weight value; if "False", it will move right by the weight value. 
   - If the user answers "True", and the question is related to Closed Source, the InnerSource logo will move right by the weight value; if "False", it will move left by the weight value.

3. **Scoring System**:
   - After all questions are answered, display the final message about InnerSource.

4. **Questions**:
    - The application should have at least 5 questions about InnerSource, each with a weight and a relation to Open Source or Closed Source.
    - Example questions:
      - "InnerSource projects often use open source tools and practices." (True, weight: 20)
      - "InnerSource is a proprietary software development methodology." (False, weight: 30)
      - "InnerSource encourages collaboration across teams within an organization." (True, weight: 15)
      - "InnerSource is only applicable to open source projects." (False, weight: 25)
      - "InnerSource can help improve code quality and sharing within a company." (True, weight: 10)

5. **Technical Requirements**:
    - Use React for the frontend framework.
    - Use TypeScript for type safety.
    - Use Tailwind CSS for styling.
    - The application should be a single-page application (SPA) without page reloads.
    - The application should be responsive and work on both desktop and mobile devices.