module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        path: '.env',
        safe: false,
        allowUndefined: true,
        blocklist: null,
        allowlist: ['TICKETMASTER_API_KEY', 'BASE'],
      },
    ],
  ],
};
