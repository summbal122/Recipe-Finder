// jest.config.js
module.exports = {
  testEnvironment: "jsdom",
  setupFiles: ["./jest.setup.js"],
transform: {
  "^.+\\.[jt]sx?$": ["babel-jest", { configFile: "./babel.jest.config.js" }]
},
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};