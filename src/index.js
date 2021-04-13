import ReactDOM from 'react-dom'

import classes from './styles/root.module.scss'

import App from './main_app'
import reportWebVitals from './reportWebVitals'

import './styles/global.scss'

const root = document.getElementById('root')

root.classList.add(classes.root)

if (root.hasChildNodes()) {
  ReactDOM.hydrate(<App />, root)
} else {
  ReactDOM.render(<App />, root)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
