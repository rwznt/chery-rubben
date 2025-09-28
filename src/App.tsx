import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import RouteData from './helper/route-data'
import Layout from './components/layouts/layout'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        {
          RouteData.map((d, i) => (
            <Route key={i} path={d.path} element={<Layout isHeader={d.isHeader}>{d.component()}</Layout>} />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
