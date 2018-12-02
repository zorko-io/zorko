import React  from 'react';
import { storiesOf } from '@storybook/react';
import {Button} from '../src/js'
// import {host} from 'storybook-host';

import '../src/sass/index.scss'

import { CenterDecorator } from './decorator'


storiesOf('Button', module)
  .addDecorator(CenterDecorator)
  .add('with text', () => (<Button>Hello Button</Button>))
  .add('with some emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('with primary type', () => (
    <Button type={'primary'}>
     Test
    </Button>
  ));
