// src/setupTests.js
import { server } from './mocks/server.js'
// Establish API mocking before all tests.
beforeAll(() => server.listen())
//모든 요청 전에 서버를 연결

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
//각각의 테스팅이 끝나면 핸들러를 초기화 => 다른 테스트에 영향을 미치지 않음

// Clean up after the tests are finished.
afterAll(() => server.close())
//모든테스트가 끝나면 이 서버를 닫아라. 