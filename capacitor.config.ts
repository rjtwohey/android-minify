import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capacitor-splash',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  },
  plugins: {
      SplashScreen: {
          // launchShowDuration: 10000,
          // launchAutoHide: false
      }
  }
};

export default config;
