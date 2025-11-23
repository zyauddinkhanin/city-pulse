# 📱 City Pulse – Local Events Explorer

A cross-platform (iOS/Android) React Native CLI application designed to help users discover and explore local events powered by the **Ticketmaster Discovery API**.

## ✨ Features

City Pulse offers a seamless experience for finding, saving, and managing local events with multi-language support.

- **✅ Search Events (Home Screen):** Search for events using **keywords** combined with a **city name**. Utilizes the **Ticketmaster Discovery API** for real-time results, presented in a clean, **card-based UI**.
- **✅ Event Details Screen:** View comprehensive event information: **Image, venue, date, and description**. Allows users to **add or remove** the event from their favorites list.
- **✅ Favourite Events:** **Persistent** storage of favorite events using **AsyncStorage**. Favorites are accessible across app sessions.
- **✅ Language Toggle (English ↔ Arabic):** Instantly switches all major UI text between **English** and **Arabic**. Automatically applies **RTL (Right-to-Left) layout** when Arabic is selected. _(Note: Arabic text uses placeholder English content, focusing on RTL layout demonstration.)_
- **✅ Profile Screen:** Displays **mock user profile data**, including name, email, and a user avatar.

## 🚀 Tech Stack

| Tool                          | Purpose                                                 |
| :---------------------------- | :------------------------------------------------------ |
| **React Native CLI**          | Core mobile application framework                       |
| **TypeScript**                | Static type safety for robust development               |
| **Ticketmaster API**          | Event search, discovery, and details                    |
| **AsyncStorage**              | Local, persistent storage for favorite events           |
| **React Navigation**          | Handling navigation and screen stacks                   |
| **i18n + RTL Support**        | Multi-language and layout switching                     |
| **Context API / Redux**       | Global application state management (optional/flexible) |
| **React Native Maps (Bonus)** | Event venue location preview                            |
| **Biometric Login (Bonus)**   | Local authentication (Face ID/Fingerprint)              |

## 📐 Navigation Flow

The primary application flow is structured as follows:

`Splash` → `Home` → `Event Details` → `Profile`

## 📂 Project Structure (Simplified)

src/ ├── api/ # API services (Ticketmaster integration) ├── components/ # Reusable UI components ├── hooks/ # Reusable logic hooks ├── navigation/ # React Navigation stacks and configuration ├── screens/ # Primary application screens (Home, Details, Profile) ├── context/ # Global app context (Language, Favorites) └── utils/ # Helpers (AsyncStorage, constants)

---

## ▶️ Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone [https://github.com/zyauddinkhanin/city-pulse.git](https://github.com/zyauddinkhanin/city-pulse.git)
cd city-pulse
2. Install Dependencies
Bash

yarn install
3. Configure Environment Variables
Create a file named .env in the project root directory and add your Ticketmaster API key.

⚠️ Important: Ensure you have enabled Public APIs in the Ticketmaster Developer Console and use the Consumer Key.

TICKETMASTER_API_KEY=YOUR_KEY_HERE
4. iOS Specific Setup
Navigate into the ios directory to install native dependencies:

Bash

cd ios && pod install && cd ..
5. Run the Application
Platform	Command
Android	yarn android
iOS	yarn ios

Export to Sheets

📄 Assumptions
The Arabic UI uses placeholder English text but has the required RTL layout correctly enabled.

The Profile Screen uses mock data.

The Ticketmaster API is used within its free tier limits.

🧑‍💻 Author
Zyauddin Khan React Native Developer
```
