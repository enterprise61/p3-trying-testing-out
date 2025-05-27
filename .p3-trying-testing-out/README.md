# p3-trying-testing-out

## Using jest DOM for testing inside of React

>`npm create vite my-app --template react-ts`

>`cd my-app`

### Install dependencies

>`npm install`
### Install testing libraries

>`npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom jest babel-jest @babel/preset-env @testing-library/user-event`



>`npm install --save-dev jest-environment-jsdom`
>`npm install --save-dev @types/jest`

### Configure Vitest

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

Export default defineConfig({
  plugins: [react()],
  test: {
     environment: 'jsdom',
      globals: true
  },
})
```

### Upodate Scripts in package.json

```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest"
}
```
### Create a test file