import { DAppProvider,Config,Mainnet } from '@usedapp/core';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';
import {BrowserRouter} from 'react-router-dom'
import './styles/main.css'
const config:Config = {
  readOnlyChainId:Mainnet.chainId,
  readOnlyUrls:{
    [Mainnet.chainId]:'https://mainnet.infura.io/v3/876b84e2106a41429f36e38602038ef7'
  }
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <DAppProvider config={config}>
          <App />
      </DAppProvider>
    </Provider>
  </BrowserRouter>
);


