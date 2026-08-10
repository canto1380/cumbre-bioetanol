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
import ScrollToTop from '../components/Commons/ScrollToTop'

function AppRouter() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/noticias' element={<NewsPage />} />
          <Route path='/noticias/:slug' element={<NewPage />} />
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
