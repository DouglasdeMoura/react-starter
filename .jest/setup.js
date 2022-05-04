import * as React from 'react'
import { setGlobalConfig } from '@storybook/testing-react'
import { toHaveNoViolations } from 'jest-axe'
import * as globalStorybookConfig from '../.storybook/preview'

setGlobalConfig(globalStorybookConfig)
expect.extend(toHaveNoViolations)

global.React = React
