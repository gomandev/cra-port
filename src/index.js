import ReactDOM from 'react-dom'
import './styles.css'
import App from './App'
import Underlay from './Underlay'
import contentful from './contentful'

ReactDOM.render(
  <>
    <Underlay />
    <App />
  </>,
  document.getElementById('root')
)
