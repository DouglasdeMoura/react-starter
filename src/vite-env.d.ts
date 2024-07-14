/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

import { type TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'
import { type expect } from 'vitest'

export {}

// https://vitest.dev/guide/extending-matchers.html
declare module 'vitest' {
  interface Assertion<T = any>
    extends TestingLibraryMatchers<
      ReturnType<typeof expect.stringContaining>,
      T
    > {}
  interface AsymmetricMatchersContaining extends TestingLibraryMatchers {}
}
