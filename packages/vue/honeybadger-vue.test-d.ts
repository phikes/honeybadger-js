// TypeScript definitions test file
// See https://github.com/SamVerschueren/tsd#usage

import { createApp } from 'vue'
import HoneybadgerVue, { useHoneybadger } from '.'

const config = {
  apiKey: 'project api key',
  environment: 'production',
  revision: 'git SHA/project version'
}

const app = createApp({})
HoneybadgerVue.install(app, config)

app.$honeybadger.setContext({
  foo: 'bar'
}).notify('testing')

app.$honeybadger.notify('testing')

const honeybadger = useHoneybadger()
honeybadger.setContext({
  foo: 'bar'
}).notify('testing')

honeybadger.notify('testing')

