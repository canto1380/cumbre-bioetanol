import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/Home/HomePage'
import NewsPage from '../pages/News/NewsPage'
import NotFoundPage from '../pages/NotFound/NotFoundPage'
import NewPage from '../pages/NewPage/NewPage'


function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/noticias' element={<NewsPage />} />
          <Route path='/noticias/:id' element={<NewPage />} />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter