import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store } from '_helpers'
import { App } from 'App'

import { configureFakeBackend } from '_helpers'
configureFakeBackend()

import 'stylesheets/application'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
