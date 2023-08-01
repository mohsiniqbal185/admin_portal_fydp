import {RouterProvider} from 'react-router-dom'
import { router } from './routes/Routes.jsx';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </div>
  )
}

export default App