module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest",
      "^.+\\.js$": "babel-jest",
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "moduleDirectories": [
      "node_modules",
      "src",
    ],
    "moduleNameMapper": {
      "modulePaths": ["/shared/vendor/modules"],
      "moduleFileExtensions": ["js", "jsx"],
      "moduleDirectories": ["node_modules", "bower_components", "shared"],  
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.tsx",
      "\\.(css|less)$": "<rootDir>/__mocks__/fileMock.tsx"
    },
    "snapshotSerializers": ["enzyme-to-json/serializer"],
};