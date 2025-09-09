This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## AI-Scape - Browser Extension Start Page

This project implements a browser extension start page that serves as a centralized interface for interacting with multiple AI services. It provides users with a unified experience to ask questions, receive responses from various LLMs, and view summarized results.

### Project Overview

AI-Scape is a browser extension start page that allows users to:
- Interact with multiple AI services (ChatGPT, Claude, Gemini) simultaneously
- Enter questions once and get responses from all configured services
- View individual responses in dedicated panes
- Configure API keys and preferences through a settings interface
- Use iframe-based integration for service isolation

### Key Features Implemented

#### UI Components
- Main header with navigation and settings access
- Horizontal AI service panes for ChatGPT, Claude, and Gemini
- Input area for user questions
- Individual service components with loading states and responses
- Settings popup for API key management and preferences

#### Core Functionality
- Multi-LLM API connectivity (ChatGPT, Claude, Gemini)
- Iframe-based service implementation for isolation
- Question injection into service inputs
- Send button automation within iframes
- Response aggregation and display
- Settings persistence using local storage

#### Technical Implementation
- React components with TypeScript
- Next.js app directory structure
- Tailwind CSS for styling
- Local storage integration for settings
- Responsive design for all screen sizes

### Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/             # Reusable UI components
│   ├── AIServicePane.tsx   # Individual service pane component
│   ├── ChatGPTService.tsx  # ChatGPT integration
│   ├── ClaudeService.tsx   # Claude integration
│   ├── GeminiService.tsx   # Gemini integration
│   ├── Header.tsx          # Main header component
│   ├── QuestionInput.tsx   # Input area for questions
│   └── Settings/           # Settings related components
└── hooks/                  # Custom React hooks
    └── useSettings.ts      # Settings management hook
```

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
