# Sign-In With Ethereum (SIWE) Quickstart

This project demonstrates a simple Sign-In With Ethereum (SIWE) authentication flow using a frontend in HTML, JavaScript, and Tailwind CSS, along with a backend built with Node.js and Express.

## Project Structure

```
siwe-quickstart/
│── frontend/          # Frontend code
│── backend/           # Backend code
│── README.md          # Project documentation
│── package.json       # Dependencies and scripts
```

## Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A web3-enabled browser (e.g., MetaMask installed)

---

## Setup and Installation

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm start
   ```
   The frontend will be available at `http://localhost:8080`.

### Backend Setup

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   node server.js
   ```
   The backend will be available at `http://localhost:3000`.

---

## How It Works

### Frontend
- The frontend provides buttons to:
  - **Connect Wallet**: Connects to a web3 wallet using `ethers.js`.
  - **Sign in with Ethereum**: Signs a message to authenticate the user.
  - **Get session information**: Fetches the authenticated user's address.

### Backend
- Provides API endpoints for:
  - `/nonce`: Generates a nonce for SIWE authentication.
  - `/verify`: Verifies the signed SIWE message.
  - `/personal_information`: Returns authenticated session details.

---

## Technologies Used

### Frontend
- HTML, JavaScript, Tailwind CSS
- [Ethers.js](https://docs.ethers.io/)
- [SIWE.js](https://github.com/spruceid/siwe.js)
- Webpack for bundling

### Backend
- Node.js with Express
- [SIWE](https://github.com/spruceid/siwe.js)
- Express-session for session handling
- CORS for cross-origin requests

---

## Troubleshooting

### Common Issues
1. **MetaMask not detected**: Ensure MetaMask is installed and enabled.
2. **CORS errors**: Check if the backend allows requests from the frontend origin.
3. **Session issues**: Verify that cookies are enabled and properly handled.

### Debugging
Use the browser console (`F12` in most browsers) and backend logs (`console.log`) to track issues.

---

## Future Improvements
- Implement database storage for sessions.
- Enhance UI with better authentication feedback.
- Deploy backend to a cloud platform.

---

## License
This project is open-source and available under the MIT License.

