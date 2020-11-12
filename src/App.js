// Redux
import { Provider } from 'react-redux'

// Store
import store from './store'

// Components
import AppRoutes from './components/AppRoutes'

const App = () => {

  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
