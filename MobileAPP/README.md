# React Native Mobile Application

## Overview

This project is a React Native mobile app built with Expo.  
It demonstrates basic navigation and authentication UI, including a Welcome screen and a Login screen, following best practices for structure and responsiveness.

## Features

- **Welcome Screen:**  
  - App logo, title, and description  
  - “Get Started” button navigates to Login

- **Login Screen:**  
  - Username/email input (with show/hide option)  
  - Password input (with show/hide option)  
  - “Forgot password?” link  
  - Responsive layout for mobile and web

- **Navigation:**  
  - Stack navigation using Expo Router  
  - Back navigation from Login to Welcome

## Setup & Run Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the app:**
   ```bash
   npx expo start
   ```
   - Press `w` to open in web browser, or scan the QR code with Expo Go on your phone.

## Folder Structure

```
/app
  /index.tsx         # Welcome screen
  /login.tsx         # Login screen
  /splash.tsx        # Splash screen
/components          # Reusable components
/assets              # Images and fonts
```

- **Expo Router** is used for file-based navigation.
- **Styles** are managed with StyleSheet objects in each screen file.

## Design Decisions

- **Expo** was chosen for easy cross-platform development and fast prototyping.
- **Expo Router** (React Navigation) provides a scalable navigation structure.
- **Responsive design** is achieved using flex layouts and percentage-based sizing.
- **Show/Hide** functionality for inputs improves user experience and privacy.

## Future Improvements

- Add real authentication logic
- Form validation and error handling
- Keyboard handling for better UX
