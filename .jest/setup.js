import * as React from 'react'
import { setGlobalConfig } from '@storybook/testing-react';
import * as globalStorybookConfig from '../.storybook/preview';

setGlobalConfig(globalStorybookConfig);

global.React = React
