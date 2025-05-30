# InnerSource Game Guesser

A fun, interactive game to help team members understand what InnerSource is by exploring its relationship with Open Source and Closed Source concepts.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The app will be available at http://localhost:3000

### Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## How to Play

1. Read the statement about InnerSource presented to you
2. Decide if the statement is true or false in relation to InnerSource
3. Click the "True" or "False" button to answer
4. Watch as the InnerSource logo moves between Open Source and Closed Source based on your answers
5. After answering all questions, see how InnerSource fits between the two concepts

## Project Structure

- `src/components/InnerSourceGame.tsx` - Main game component
- `src/components/Question.tsx` - Question display and interaction
- `src/components/LogoIcons.tsx` - SVG logo components
- `requirements.md` - Detailed requirements for the application

## Customization

To add more questions to the game or modify existing ones, edit the `questions` array in `src/components/InnerSourceGame.tsx`.

## About InnerSource

InnerSource is the application of open source principles and practices within organizations. It combines the best aspects of open source collaboration with the security and focus of proprietary software development.