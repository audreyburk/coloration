import { BrowserRouter, Routes, Route } from 'react-router'

// import Header from './components/Header'

// import ColorPage    from './pages/ColorPage'
// import ColorsPage   from './pages/ColorsPage'
import CreatePage   from './pages/CreatePage'
// import HomePage     from './pages/HomePage'


{/* <Routes>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />

  <Route element={<AuthLayout />}>      put header, etc, in a layout that wraps the rest
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>

  <Route path="concerts">
    <Route index element={<ConcertsHome />} />
    <Route path=":city" element={<City />} />
    <Route path="trending" element={<Trending />} />
  </Route>
</Routes> */}


function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<CreatePage />} />
        {/* <Route element={Layout}>
          <Route path="/" element={<HomePage />} />
          <Route path="/colors" element={<ColorsPage />} />
          <Route path="/colors/:id" element={<ColorPage />} />
          <Route path="/author/:id" element={<AuthorPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
