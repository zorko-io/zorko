import React  from 'react';
import { storiesOf } from '@storybook/react';
import {Button, SvgView} from '../src/js'
import {withActions, action} from '@storybook/addon-actions'
import {host} from 'storybook-host'

import '../src/sass/index.scss'

import { CenterDecorator } from './decorator'


let logButtonClick = action('button-click-log')

storiesOf('Button', module)
  .addDecorator(CenterDecorator)
  .addDecorator(withActions(
    'click [data-test="button"]'
  ))
  .add('default type', () => (<Button onClick={logButtonClick}>Hello Button</Button>))
  .add('primary type', () => (
    <Button onClick={logButtonClick} type="primary">
     Test
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={logButtonClick}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('loading', () => (
    <Button loading={true} type={'primary'} onClick={logButtonClick}>
      You shouldn't see it
    </Button>
  ));

storiesOf('SvgView', module)
  .addDecorator(host({
    align: 'center'
  }))
  .add('default content', () => (<SvgView height={300} width={600}/>) )
