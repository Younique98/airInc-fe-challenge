# README: Air Gallery Challenge

## **Overview**

This project is a take-home challenge for Air, simulating a creative asset board system that focuses on performance, scalability, and frontend polish. It demonstrates the ability to optimize images, handle large datasets via infinite scroll, and structure clean, modular code under a four-hour deadline.

[![CI Pipeline](https://github.com/Younique98/airInc-fe-challenge/actions/workflows/ci.yml/badge.svg)](https://github.com/Younique98/airInc-fe-challenge/actions/workflows/ci.yml)

## **Live Demo**

🌐 [https://air-inc-fe-challenge.vercel.app/](https://air-inc-fe-challenge.vercel.app/)

## **Project Management**

- **Repo:** [GitHub Repository](https://github.com/Younique98/airInc-fe-challenge)
- **Issues Board:** [GitHub Issues](https://github.com/Younique98/airInc-fe-challenge/issues)
- **Milestones:** [GitHub Milestones](https://github.com/Younique98/airInc-fe-challenge/milestones)

## **Tech Stack**

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Query
- **Image Optimization:** Next.js <Image /> with blurDataURL, lazy loading, responsive sizes
- **Build & Deployment:** Vercel
- **Testing (planned):** Jest, React Testing Library, axe-core, cypress

## **Project Structure**

```
src/
├── app/
│   ├── api/
│   │   ├── boards.ts
│   │   └── clips.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── BoardCard.tsx
│   ├── ClipCard.tsx
│   └── ImageWithPlaceholder.tsx
├── hooks/
│   └── useInfiniteAssets.ts
├── utils/
│   └── formatDuration.ts
├── providers/
│   └── ReactQueryProvider.tsx

public/
├── next.svg
└── vercel.svg

docs/
└── FUTURE_CONSIDERATIONS.md

Other Files:
├── globals.css
├── .eslintrc.json
├── .gitignore
├── .nvmrc
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── README.md
```

## **Installation & Setup**

```bash
git clone https://github.com/Younique98/airInc-fe-challenge.git
cd airInc-fe-challenge
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

## **Features & Implementation**

### **1. Infinite Scroll**

- Powered by React Query + IntersectionObserver
- Handles large sets of mock data in a performant way
- Smooth scroll experience with pagination control

### **2. Optimized Image Loading**

- Uses Next.js `<Image />` component
- Adds `blurDataURL`, lazy loading, and responsive behavior
- Prioritizes hero images for faster LCP

### **3. Component-Driven Gallery UI**

- Modular design using `BoardCard.tsx`
- Tailwind used for fast, clean styling

### Boards
Dynamically fetched from API

Responsive layout with hover interactions

Future functionality: filter assets by selected board

### Assets & Gallery View
Infinite scrolling for assets using pagination cursor

Responsive grid layout that adjusts to viewport size

<Image /> components optimized with responsive sizes, decoding, and loading attributes

Video support with poster previews and hover interaction planned

### Performance
Lighthouse (Desktop): 100

Lighthouse (Mobile): 95

Largest Contentful Paint (LCP) improvements applied by:

Adjusting image priority logic

Removing overfetching

Dynamically sizing and lazy loading images
## **Testing Strategy (Planned)**
- Testing was deprioritized during the initial 4-hour window in favor of meeting feature requirements and performance benchmarks. Plans include:

- Unit tests for ClipCard, BoardCard, and layout logic

- Integration test for infinite scroll behavior

- Lighthouse + axe-core for accessibility regressions
- Minimal test coverage to validate key functionality
- Accessibility and performance tested with Lighthouse and axe-core
- If time allows, include Jest + React Testing Library examples

## **Future Considerations**

For features and improvements not implemented due to time constraints, see:  
[FUTURE_CONSIDERATIONS.md](docs/FUTURE_CONSIDERATIONS.md)

### Areas Identified for Expansion
Planned for tomorrow:

- Board-based asset filtering and search

- Hover-to-play video previews

- Context menu and ellipsis options

- Download/share/copy asset controls

- Improved spacing, hover effects, and gallery polish

- Stretch: Drag-and-drop reordering and selection tooling

Full details tracked in 📄 [FUTURE_CONSIDERATIONS.md](docs/FUTURE_CONSIDERATIONS.md)

## **Contributing**

Not applicable — this is a personal take-home project

## **Screenshots**

_Add if time allows before final submission_

## **Documentation**

All technical decisions and tradeoffs are documented in the [PR template](.github/PULL_REQUEST_TEMPLATE.md), GitHub Issues, and the [FUTURE_CONSIDERATIONS.md](./docs/FUTURE_CONSIDERATIONS.md).

### Considerations
Scoped third-party usage to essentials only

Opted for clarity and composability over abstraction

Iterative improvements prioritized over early optimizations


## Performance

Lighthouse scores (as of local dev):

- **Mobile:** 91
- **Desktop:** 91

Performance audits and fixes are documented in [PERFORMANCE_NOTES.md](docs/PERFORMANCE_NOTES.md).


### Submission
- Time taken: 4 hours

- Code: GitHub Repo

🌐 [Deployment](https://air-inc-fe-challenge.vercel.app/)

## Start - only thing provided api's and boilerplate
<img width="1311" alt="Screenshot 2025-04-25 at 1 22 59 PM" src="https://github.com/user-attachments/assets/aa90ac5c-cabe-4b05-b3de-efdf6bc64b55" />


## End Result

<img width="1576" alt="Screenshot" src="https://github.com/user-attachments/assets/b60dd880-a896-44eb-a05f-6bc122fe9535" />


https://github.com/user-attachments/assets/b2cfab89-fba1-4b13-97b2-def20e0efd47



