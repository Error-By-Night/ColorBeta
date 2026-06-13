<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">ColorBeta</h3>

  <p align="center">
    A cross-platform mobile app that helps colorblind rock climbers identify climbing routes by sampling hold colors and highlighting matching holds on the wall.
    <br />
    <a href="https://github.com/Error-By-Night/ColorBeta"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Error-By-Night/ColorBeta/issues/new?labels=bug">Report Bug</a>
    &middot;
    <a href="https://github.com/Error-By-Night/ColorBeta/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-the-app">Running the App</a></li>
        <li><a href="#development-builds">Development Builds</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

ColorBeta is a mobile app for colorblind rock climbers. It uses the phone camera to:

1. **Sample a hold** — capture or tap a hold to record its reference color
2. **Scan the wall** — photograph the climbing wall (live camera processing planned)
3. **Highlight the route** — identify and overlay all holds matching the sampled color

The app is designed with accessibility in mind: adjustable color tolerance, colorblind simulation modes, and high-contrast overlays so route identification does not rely on color alone.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Expo][Expo-badge]][Expo-url]
* [![React Native][ReactNative-badge]][ReactNative-url]
* [![TypeScript][TypeScript-badge]][TypeScript-url]
* [![Expo Router][ExpoRouter-badge]][ExpoRouter-url]
* [![NativeWind][NativeWind-badge]][NativeWind-url]
* [![Zustand][Zustand-badge]][Zustand-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Project Structure

```
ColorBeta/
├── app/                    # Expo Router screens
│   ├── (tabs)/
│   │   ├── index.tsx       # Scan Hold — sample reference color
│   │   ├── route.tsx       # Route — capture wall & highlight holds
│   │   └── settings.tsx    # Tolerance & colorblind settings
│   └── _layout.tsx         # Root layout
├── core/
│   └── color/              # Color types & matching logic (CIELAB, delta E)
├── stores/
│   └── routeStore.ts       # Zustand session state
├── components/             # Shared UI components
├── assets/                 # Images, fonts, icons
├── global.css              # Tailwind / NativeWind styles
├── tailwind.config.js
├── babel.config.js
├── metro.config.js
└── eas.json                # EAS Build profiles (dev client)
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) `^20.19.4`, `^22.13.0`, `^24.3.0`, or `>= 25.0.0` (required by React Native 0.85)
* npm (comes with Node.js)
* [Expo CLI](https://docs.expo.dev/more/expo-cli/) (via `npx expo`)
* For device testing:
  * **iOS:** Xcode + iOS Simulator, or a physical iPhone
  * **Android:** Android Studio + emulator, or a physical Android device
* For native module development (camera, OpenCV): [EAS CLI](https://docs.expo.dev/build/setup/) and an Expo Dev Client build

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Error-By-Night/ColorBeta.git
   cd ColorBeta
   ```
2. Install dependencies
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Running the App

Start the Expo development server:

```sh
npm start
```

Then press `i` for iOS simulator, `a` for Android emulator, or scan the QR code with Expo Go.

For web preview:

```sh
npm run web
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Development Builds

This project uses **Expo Dev Client** for native modules (camera, computer vision) that are not available in Expo Go.

1. Install EAS CLI globally (one-time)
   ```sh
   npm install -g eas-cli
   ```
2. Log in to your Expo account
   ```sh
   eas login
   ```
3. Create a development build
   ```sh
   eas build --profile development --platform ios
   # or
   eas build --profile development --platform android
   ```
4. Install the build on your device, then start the dev server
   ```sh
   npm run start:dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

### Current workflow (scaffold)

1. Open the **Scan Hold** tab and capture a photo of a single hold to sample its color
2. Open the **Route** tab and capture the climbing wall
3. Adjust **Settings** — color tolerance and colorblind simulation mode

Camera capture and hold highlighting are planned for upcoming phases. The scaffold provides navigation, state management, and styling foundations.

### Planned workflow

1. Tap or photograph a hold → app samples color in CIELAB space
2. Photograph or live-scan the wall → app masks pixels within delta E tolerance
3. Matched holds are highlighted with outlines and optional patterns for colorblind users

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Expo + TypeScript scaffold with Expo Router
- [x] NativeWind styling
- [x] Zustand session state
- [x] Expo Dev Client configuration
- [ ] Photo-based hold color sampling
- [ ] Photo-based wall capture and color matching
- [ ] CIELAB color matching with adjustable delta E tolerance
- [ ] Hold highlight overlays (React Native Skia)
- [ ] Live camera processing (react-native-vision-camera)
- [ ] Colorblind simulation preview
- [ ] OpenCV integration for hold segmentation
- [ ] Route saving and gym presets

See the [open issues](https://github.com/Error-By-Night/ColorBeta/issues) for a full list of proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag `enhancement`.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/Error-By-Night/ColorBeta/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Error-By-Night/ColorBeta" alt="contrib.rocks image" />
</a>

<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Joey Kang — [GitHub @Error-By-Night](https://github.com/Error-By-Night)

Project Link: [https://github.com/Error-By-Night/ColorBeta](https://github.com/Error-By-Night/ColorBeta)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Expo](https://expo.dev/) — cross-platform React Native toolchain
* [NativeWind](https://www.nativewind.dev/) — Tailwind CSS for React Native
* [Zustand](https://zustand.docs.pmnd.rs/) — lightweight state management
* Color matching will use CIELAB perceptual color space and delta E for hold identification

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Error-By-Night/ColorBeta.svg?style=for-the-badge
[contributors-url]: https://github.com/Error-By-Night/ColorBeta/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Error-By-Night/ColorBeta.svg?style=for-the-badge
[forks-url]: https://github.com/Error-By-Night/ColorBeta/network/members
[stars-shield]: https://img.shields.io/github/stars/Error-By-Night/ColorBeta.svg?style=for-the-badge
[stars-url]: https://github.com/Error-By-Night/ColorBeta/stargazers
[issues-shield]: https://img.shields.io/github/issues/Error-By-Night/ColorBeta.svg?style=for-the-badge
[issues-url]: https://github.com/Error-By-Night/ColorBeta/issues
[license-shield]: https://img.shields.io/github/license/Error-By-Night/ColorBeta.svg?style=for-the-badge
[license-url]: https://github.com/Error-By-Night/ColorBeta/blob/master/LICENSE
[Expo-badge]: https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white
[Expo-url]: https://expo.dev/
[ReactNative-badge]: https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[ReactNative-url]: https://reactnative.dev/
[TypeScript-badge]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[ExpoRouter-badge]: https://img.shields.io/badge/Expo_Router-000020?style=for-the-badge&logo=expo&logoColor=white
[ExpoRouter-url]: https://docs.expo.dev/router/introduction/
[NativeWind-badge]: https://img.shields.io/badge/NativeWind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[NativeWind-url]: https://www.nativewind.dev/
[Zustand-badge]: https://img.shields.io/badge/Zustand-764ABC?style=for-the-badge
[Zustand-url]: https://zustand.docs.pmnd.rs/
