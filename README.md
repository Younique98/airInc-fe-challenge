# README: Air Gallery Challenge

## **Overview**

This project is a take-home challenge for Air, simulating a creative asset board system that focuses on performance, scalability, and frontend polish. It demonstrates the ability to optimize images, handle large datasets via infinite scroll, and structure clean, modular code under a four-hour deadline.

## **Live Demo**

🌐 [https://air-inc-fe-challenge-h4okxbw9n.vercel.app/](https://air-inc-fe-challenge-h4okxbw9n.vercel.app/)

## **Tech Stack**

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Query
- **Image Optimization:** Next.js <Image /> with blurDataURL, lazy loading, responsive sizes
- **Build & Deployment:** Vercel
- **Testing (if time permits):** Jest, axe-core accessibility checks

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
│   └── ImageWithPlaceholder.tsx
├── data/
│   └── mockAssets.json
├── hooks/
│   └── useInfiniteAssets.ts
├── utils/
│   └── fetcher.ts

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
- Realistic asset structure using `mockAssets.json`
- Tailwind used for fast, clean styling

## **Testing Strategy**

- Minimal test coverage to validate key functionality
- Accessibility and performance tested with Lighthouse and axe-core
- If time allows, include Jest + React Testing Library examples

## **Future Considerations**

For features and improvements not implemented due to time constraints, see:  
📄 [FUTURE_CONSIDERATIONS.md](./FUTURE_CONSIDERATIONS.md)

## **Contributing**

Not applicable — this is a personal take-home project

## **Screenshots**

_Add if time allows before final submission_

## **Project Management**

- **Repo:** [GitHub Repository](https://github.com/Younique98/airInc-fe-challenge)
- **Issues Board:** [GitHub Issues](https://github.com/Younique98/airInc-fe-challenge/issues)
- **Milestones:** [GitHub Milestones](https://github.com/Younique98/airInc-fe-challenge/milestones)

## **Documentation**

All technical decisions and tradeoffs are documented in the [PR template](.github/PULL_REQUEST_TEMPLATE.md), GitHub Issues, and the [FUTURE_CONSIDERATIONS.md](./FUTURE_CONSIDERATIONS.md).
