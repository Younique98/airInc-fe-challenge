# Performance Considerations

## Lighthouse Scores

- Mobile: 62 → Target: 90+
- Desktop: 91

## Optimizations Implemented

- `priority` prop added to hero image
- Responsive `sizes` attribute added
- Lazy loading preserved with blur placeholder
- Reduced layout shift by fixing image aspect ratios
- Tailwind classes cleaned for leaner CSS

## Areas to Revisit (Post-Submission)

- Minify JavaScript
- Remove duplicate modules from JS bundles
- Explore dynamic import of heavier components
- Optimize image loading order
