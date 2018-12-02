import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Button,
  SvgView,
  Card,
  Image,
  Media,
  Content,
  PreviewCardAuthor,
  PreviewCard,
  PreviewCardsLayout,
  Pagination, Container
} from '../src/js'
import { withActions, action } from '@storybook/addon-actions'
import { host } from 'storybook-host'
import { areaPreviewContent } from './__data__/area.vl'
import { samplePreviews } from './__data__/previews'

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
  ))

storiesOf('SvgView', module)
  .addDecorator(host({
    align: 'center'
  }))
  .add('default content', () => (<SvgView/>))
  .add('default content with custom dimensions', () => (<SvgView height={300} width={600}/>))
  .add('custom content', () => (<SvgView
    content={'<svg class="marks" width="246" height="249" viewBox="0 0 246 249" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(52,11)"><g class="mark-group role-frame root"><g transform="translate(0,0)"><path class="background" d="M0.5,0.5h189v200h-189Z" style="fill: none; stroke: #ddd;"></path><g><g class="mark-group role-axis"><g transform="translate(0.5,0.5)"><path class="background" d="M0,0h0v0h0Z" style="pointer-events: none; fill: none;"></path><g><g class="mark-rule role-axis-grid" style="pointer-events: none;"><line transform="translate(0,200)" x2="189" y2="0" style="fill: none; stroke: #ddd; stroke-width: 1; opacity: 1;"></line><line transform="translate(0,160)" x2="189" y2="0" style="fill: none; stroke: #ddd; stroke-width: 1; opacity: 1;"></line><line transform="translate(0,120)" x2="189" y2="0" style="fill: none; stroke: #ddd; stroke-width: 1; opacity: 1;"></line><line transform="translate(0,80)" x2="189" y2="0" style="fill: none; stroke: #ddd; stroke-width: 1; opacity: 1;"></line><line transform="translate(0,40)" x2="189" y2="0" style="fill: none; stroke: #ddd; stroke-width: 1; opacity: 1;"></line><line transform="translate(0,0)" x2="189" y2="0" style="fill: none; stroke: #ddd; stroke-width: 1; opacity: 1;"></line></g></g></g></g><g class="mark-rect role-mark marks"><path d="M1.0499999999999972,144h18.900000000000002v56h-18.900000000000002Z" style="fill: #4c78a8;"></path><path d="M22.049999999999997,89.99999999999999h18.900000000000002v110.00000000000001h-18.900000000000002Z" style="fill: #4c78a8;"></path><path d="M43.05,114h18.900000000000002v86h-18.900000000000002Z" style="fill: #4c78a8;"></path><path d="M64.05,18h18.900000000000002v182h-18.900000000000002Z" style="fill: #4c78a8;"></path><path d="M85.05,38h18.900000000000002v162h-18.900000000000002Z" style="fill: #4c78a8;"></path><path d="M106.05,94h18.900000000000002v106h-18.900000000000002Z" style="fill: #4c78a8;"></path><path d="M127.05,162h18.900000000000002v38h-18.900000000000002Z" style="fill: #4c78a8;"></path><path d="M148.05,26h18.900000000000002v174h-18.900000000000002Z" style="fill: #4c78a8;"></path><path d="M169.05,96h18.900000000000002v104h-18.900000000000002Z" style="fill: #4c78a8;"></path></g><g class="mark-group role-axis"><g transform="translate(0.5,200.5)"><path class="background" d="M0,0h0v0h0Z" style="pointer-events: none; fill: none;"></path><g><g class="mark-rule role-axis-tick" style="pointer-events: none;"><line transform="translate(9,0)" x2="0" y2="5" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line><line transform="translate(31,0)" x2="0" y2="5" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line><line transform="translate(52,0)" x2="0" y2="5" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line><line transform="translate(73,0)" x2="0" y2="5" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line><line transform="translate(94,0)" x2="0" y2="5" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line><line transform="translate(115,0)" x2="0" y2="5" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line><line transform="translate(136,0)" x2="0" y2="5" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line><line transform="translate(157,0)" x2="0" y2="5" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line><line transform="translate(178,0)" x2="0" y2="5" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line></g><g class="mark-text role-axis-label" style="pointer-events: none;"><text text-anchor="end" transform="translate(9.499999999999998,7) rotate(270) translate(0,3)" style="font-family: sans-serif; font-size: 10px; fill: #000; opacity: 1;">A</text><text text-anchor="end" transform="translate(30.5,7) rotate(270) translate(0,3)" style="font-family: sans-serif; font-size: 10px; fill: #000; opacity: 1;">B</text><text text-anchor="end" transform="translate(51.5,7) rotate(270) translate(0,3)" style="font-family: sans-serif; font-size: 10px; fill: #000; opacity: 1;">C</text><text text-anchor="end" transform="translate(72.5,7) rotate(270) translate(0,3)" style="font-family: sans-serif; font-size: 10px; fill: #000; opacity: 1;">D</text><text text-anchor="end" transform="translate(93.5,7) rotate(270) translate(0,3)" style="font-family: sans-serif; font-size: 10px; fill: #000; opacity: 1;">E</text><text text-anchor="end" transform="translate(114.5,7) rotate(270) translate(0,3)" style="font-family: sans-serif; font-size: 10px; fill: #000; opacity: 1;">F</text><text text-anchor="end" transform="translate(135.5,7) rotate(270) translate(0,3)" style="font-family: sans-serif; font-size: 10px; fill: #000; opacity: 1;">G</text><text text-anchor="end" transform="translate(156.5,7) rotate(270) translate(0,3)" style="font-family: sans-serif; font-size: 10px; fill: #000; opacity: 1;">H</text><text text-anchor="end" transform="translate(177.5,7) rotate(270) translate(0,3)" style="font-family: sans-serif; font-size: 10px; fill: #000; opacity: 1;">I</text></g><g class="mark-rule role-axis-domain" style="pointer-events: none;"><line transform="translate(0,0)" x2="189" y2="0" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line></g><g class="mark-text role-axis-title" style="pointer-events: none;"><text text-anchor="middle" transform="translate(94.5,29)" style="font-family: sans-serif; font-size: 11px; font-weight: bold; fill: #000; opacity: 1;">a</text></g></g></g></g><g class="mark-group role-axis"><g transform="translate(0.5,0.5)"><path class="background" d="M0,0h0v0h0Z" style="pointer-events: none; fill: none;"></path><g><g class="mark-rule role-axis-tick" style="pointer-events: none;"><line transform="translate(0,200)" x2="-5" y2="0" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line><line transform="translate(0,160)" x2="-5" y2="0" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line><line transform="translate(0,120)" x2="-5" y2="0" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line><line transform="translate(0,80)" x2="-5" y2="0" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line><line transform="translate(0,40)" x2="-5" y2="0" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line><line transform="translate(0,0)" x2="-5" y2="0" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line></g><g class="mark-text role-axis-label" style="pointer-events: none;"><text text-anchor="end" transform="translate(-7,203)" style="font-family: sans-serif; font-size: 10px; fill: #000; opacity: 1;">0</text><text text-anchor="end" transform="translate(-7,163)" style="font-family: sans-serif; font-size: 10px; fill: #000; opacity: 1;">20</text><text text-anchor="end" transform="translate(-7,123)" style="font-family: sans-serif; font-size: 10px; fill: #000; opacity: 1;">40</text><text text-anchor="end" transform="translate(-7,83)" style="font-family: sans-serif; font-size: 10px; fill: #000; opacity: 1;">60</text><text text-anchor="end" transform="translate(-7,43)" style="font-family: sans-serif; font-size: 10px; fill: #000; opacity: 1;">80</text><text text-anchor="end" transform="translate(-7,3)" style="font-family: sans-serif; font-size: 10px; fill: #000; opacity: 1;">100</text></g><g class="mark-rule role-axis-domain" style="pointer-events: none;"><line transform="translate(0,200)" x2="0" y2="-200" style="fill: none; stroke: #888; stroke-width: 1; opacity: 1;"></line></g><g class="mark-text role-axis-title" style="pointer-events: none;"><text text-anchor="middle" transform="translate(-34,100) rotate(-90) translate(0,-2)" style="font-family: sans-serif; font-size: 11px; font-weight: bold; fill: #000; opacity: 1;">b</text></g></g></g></g></g></g></g></g></svg>'}
    height={400}
    width={400}/>))


storiesOf('Image', module)
  .addDecorator(host({
    width: 400,
    height: 400,
    align: 'center'
  }))
  .add('size 32', () => (<Image
    size="32"
    src="https://bulma.io/images/placeholders/32x32.png"
    alt="Placeholder image"/>)
  )
  .add('size 128', () => (<Image
    size="128"
    src="https://bulma.io/images/placeholders/128x128.png"
    alt="Placeholder image"/>)
  )
  .add('ratio 4by3', () => (<Image
    ratio="4by3"
    src="https://bulma.io/images/placeholders/1280x960.png"
    alt="Placeholder image"/>)
  )

storiesOf('Container', module)
  .add('default', () => (
    <Container>
      <Image
        size={'64'}
        src="https://bulma.io/images/placeholders/64x64.png"
        alt="Placeholder image"/>
    </Container>)
  )

storiesOf('Content', module)
  .addDecorator(host({
    width: 200,
    height: 500,
    align: 'center'
  }))
  .add('default', () => (
    <Content>
      <ol className="is-lower-alpha">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
      <ol className="is-lower-roman">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
      <ol className="is-upper-alpha">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
      <ol className="is-upper-alpha">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
    </Content>)
  )
  .add('small', () => (
    <Content size={'small'}>
      <ol className="is-lower-alpha">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
      <ol className="is-lower-roman">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
      <ol className="is-upper-alpha">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
      <ol className="is-upper-alpha">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
    </Content>)
  )

storiesOf('Media', module)
  .addDecorator(host({
    width: 200,
    height: 50,
    align: 'center'
  }))
  .add('default', () => (
    <Media
      left={
        <Image size="32" src="https://bulma.io/images/placeholders/32x32.png"/>
      }>
      <Content>
        <p>
          <strong>John Smith</strong>
          <small>@johnsmith</small>
          <small>31m</small>
          <br/>
          adskmlskam admkldmasldmlsa asdmlaskdmlk
        </p>
      </Content>
    </Media>)
  )

storiesOf('Card', module)
  .addDecorator(host({
    width: 400,
    height: 300,
    align: 'center'
  }))
  .add('default with image and content', () => (
    <Card image={
      <Image
        ratio="4by3"
        src="https://bulma.io/images/placeholders/1280x960.png"
        alt="Placeholder image"/>
    }>
      <Media
        left={
          <Image size="32" src="https://bulma.io/images/placeholders/32x32.png"/>
        }>
        <Content>
          <p>
            <strong>John Smith</strong>
            <small>@johnsmith</small>
            <small>31m</small>
            <br/>
            adskmlskam admkldmasldmlsa asdmlaskdmlk
          </p>
        </Content>
      </Media>
    </Card>)
  )
  .add('with svg view and content', () => (
    <Card image={
      <SvgView content={areaPreviewContent}/>
    }>
      <Media
        left={
          <Image size="32" src="https://bulma.io/images/placeholders/32x32.png"/>
        }>
        <Content>
          <p>
            <strong>John Smith</strong>
            <small>@johnsmith</small>
            <small>31m</small>
            <br/>
            adskmlskam admkldmasldmlsa asdmlaskdmlk
          </p>
        </Content>
      </Media>
    </Card>)
  )

storiesOf('PreviewCardAuthor', module)
  .addDecorator(host({
    width: 200,
    height: 50,
    align: 'center'
  }))
  .add('default', () => (<PreviewCardAuthor/>))
  .add('with all props', () => (<PreviewCardAuthor
    avatar="https://randomuser.me/api/portraits/lego/7.jpg"
    login="userlogin"
    title="Bar Chart"
  />))

storiesOf('PreviewCard', module)
  .addDecorator(host({
    width: 300,
    height: 400,
    align: 'center'
  }))
  .add('default', () => (
    <PreviewCard preview={areaPreviewContent}>
      <PreviewCardAuthor
        avatar="https://randomuser.me/api/portraits/lego/7.jpg"
        login="userlogin"
        title="Bar Chart"
      />
    </PreviewCard>))


storiesOf('PreviewCardLayout', module)
  .addDecorator(CenterDecorator)
  .add('default', () => (
    <PreviewCardsLayout previews={samplePreviews}>
      {(item) => (
        <PreviewCard preview={item.preview}>
          <PreviewCardAuthor
            title={item.title}
            login={item.author.login}
          />
        </PreviewCard>)}
    </PreviewCardsLayout>))


storiesOf('Pagination', module)
  .addDecorator(host({
    width: 600,
    height: 400,
    align: 'center'
  }))
  .add('default', () => (
    <Pagination
      prev={<Button>{'Prev'}</Button>}
      next={<Button type={'primary'}>{'Next'}</Button>}
    />))



