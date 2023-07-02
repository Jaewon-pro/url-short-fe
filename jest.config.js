module.exports = {
    collectCoverage: true,
    // node 14.x의 coverage provider v8은 속도가 좋고 보고서도 어느 정도 괜찮습니다
    coverageProvider: 'v8',
    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
      '!<rootDir>/out/**',
      '!<rootDir>/.next/**',
      '!<rootDir>/*.config.js',
      '!<rootDir>/coverage/**',
    ],
    moduleNameMapper: {
      // CSS imports 처리 (CSS 모듈 포함)
      // https://jestjs.io/docs/webpack#mocking-css-modules
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
   
      // CSS imports 처리 (CSS 모듈 미포함)
      '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
   
      // 이미지 imports 처리
      // https://jestjs.io/docs/webpack#handling-static-assets
      '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,
   
      // 모듈 별칭 처리
      '^@/app/components/(.*)$': '<rootDir>/app/components/$1',
    },
    // 각 테스트가 실행되기 전에 더 많은 설정 옵션을 추가하세요
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    testEnvironment: 'jsdom',
    transform: {
      // next/babel 프리셋을 사용하여 테스트를 Babel로 변환
      // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
  };