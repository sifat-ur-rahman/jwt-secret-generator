# JWT Secret Generator

A fast, secure, and professional tool to generate cryptographically secure random secrets for JWT authentication. Built with Next.js 16 and React 19.

### 🚀 Live URL — [jwt-secret-generator.vercel.app](https://jwt-secret-generator.vercel.app)

## Features

- **Cryptographically Secure**: Uses the Web Crypto API (`crypto.getRandomValues()`) to generate 64-byte (512-bit) random secrets
- **Instant Generation**: One-click secret generation with instant results
- **Copy to Clipboard**: Easily copy generated secrets with visual feedback
- **Clear Button**: Clear generated secrets with the X button
- **Local Processing**: All secrets are generated locally in your browser—nothing is stored or transmitted
- **Dark Theme**: Professional dark interface with smooth animations and accessibility support
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Usage

1. **Generate a Secret**: Click the "Generate Secret" button to create a new JWT secret
2. **Copy Secret**: Click "Copy" to copy the secret to your clipboard
3. **Clear Secret**: Click the X button in the output box to clear the current secret
4. **Generate New Secret**: Press "Generate Secret" again to create another secret

## Security

- **Browser-Based Generation**: All secrets are generated client-side using the secure Web Crypto API
- **No Server Communication**: Secrets never leave your browser
- **No Storage**: Secrets are not stored, logged, or cached
- **Cryptographically Secure**: Uses `crypto.getRandomValues()` for true randomness

## Performance

- **Zero External Requests**: No API calls or external dependencies for secret generation
- **Instant Generation**: Secrets are generated in milliseconds
- **Lightweight**: Optimized bundle size with Next.js and shadcn/ui

## Support

For issues, questions, or feedback, please open an issue on GitHub or contact support.

---

**Made with ❤️ using Next.js and React**
