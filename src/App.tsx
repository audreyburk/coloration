import { BrowserRouter, Routes, Route } from 'react-router'

// import Header from './components/Header'

// import ColorPage    from './pages/ColorPage'
// import ColorsPage   from './pages/ColorsPage'
import CreatePage   from './pages/CreatePage'
// import HomePage     from './pages/HomePage'


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<CreatePage />} />
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/create" element={<CreatePage />} />
          <Route path="/colors" element={<ColorsPage />} />
          <Route path="/colors/:id" element={<ColorPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
