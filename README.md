# Frontend Development Setup

Welcome to the frontend repository! This guide will help you set up your development environment for working on the frontend app.

## 📌 Prerequisites
Before you start, ensure you have the following installed:
- [Node.js (LTS)](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)
- [Docker (Optional)](https://www.docker.com/)

## 🚀 Getting Started

### **Option 1: Fastest Way (For UI Changes)**
If you're only working on UI (JSX, styles), you can **skip Docker** and run Expo directly:

```sh
# Clone the repository
git clone https://github.com/kentcanonigo/tally-system-frontend/tree/main
cd frontend

# Install dependencies
npm install

# Start the Expo development server
npx expo start
```

This will generate a QR code. You can scan it using the **Expo Go app** or use an **Android Emulator/iOS Simulator** to preview the app.

---

### **Option 2: Full Setup with Docker (For API Integration & Consistency)**
If you want to match the full development environment (e.g., working with API integration), you can use Docker:

```sh
# Clone the repository
git clone https://github.com/kentcanonigo/tally-system-frontend.git
cd frontend

# Start the frontend with Docker
docker-compose up --build
```

This will:
✅ Install dependencies inside the container  
✅ Start the Expo development server  
✅ Allow API communication with the backend (if needed)

To **restart the frontend server** inside Docker:
```sh
docker-compose restart frontend
```

To **stop everything**:
```sh
docker-compose down
```

---

## 🎨 Switching Between Expo Go & Development Build

### **Expo Go (For Quick UI Testing)**
- Use `npx expo start` and scan the QR code with the Expo Go app.

### **Development Build (For Full Native Support)**
If you need to test native modules or use EAS development builds:
```sh
eas build --profile development --platform android
```
Install the generated APK, then run:
```sh
EXPO_USE_DEV_SERVER=true npx expo start
```

---

## 🔄 Common Development Commands
| Action | Command |
|--------|---------|
| Start Expo Server (without Docker) | `npx expo start` |
| Start Expo Server (Docker) | `docker-compose up --build` |
| Restart Expo Server in Docker | `docker-compose restart frontend` |
| Stop all containers | `docker-compose down` |
| Install dependencies | `npm install` |
| Run a development build | `EXPO_USE_DEV_SERVER=true npx expo start` |

---

## 🔧 Contributing
1️⃣ Create a new branch:
```sh
git checkout -b feature/new-feature
```
2️⃣ Make your changes and commit:
```sh
git commit -m "✨ Added new feature"
```
3️⃣ Push your branch:
```sh
git push origin feature/new-feature
```
4️⃣ Open a Pull Request on GitHub.

Happy coding! 🚀

