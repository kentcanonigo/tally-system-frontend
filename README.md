# Frontend Development Setup

Welcome to the frontend repository! This guide will help you set up your development environment for working on the frontend app.

## NOTE: Right now developing the frontend locally (without docker) is recommended because of the extra steps you need to go through to allow the android emulator to access the docker container. I have not implemented docs for this.

## 📌 Prerequisites
Before you start, ensure you have the following installed:
- [Node.js (LTS)](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)
- [Docker (Optional)](https://www.docker.com/)

## 🚀 Getting Started

```sh
# Clone the repository
git clone https://github.com/kentcanonigo/tally-system-frontend/tree/main
cd frontend

# Install dependencies
npm install

# Start the Expo development server
npx expo start
```

Use the android virtual device manager to run medium tablet to test changes.

This will generate a QR code. You can scan it using the **Expo Go app** or use an **Android Emulator/iOS Simulator** to preview the app.

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

## Connecting the backend
Create a .env file inside the root folder and provide an EXPO_PUBLIC_API_URL entry.
If running the backend locally, use 10.0.2.2:8081. If running with docker, use your host pc's local ipv4 address with port 8000
```sh
EXPO_PUBLIC_API_URL=http://192.168.x.x:8000
```

---

## 🔄 Common Development Commands
| Action | Command |
|--------|---------|
| Start Expo Server (without Docker) | `npx expo start` |
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

