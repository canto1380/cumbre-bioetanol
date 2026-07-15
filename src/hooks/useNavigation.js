import { useLocation, useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'

export default function useNavigation() {
  const navigate = useNavigate()
  const location = useLocation()

  const navigateToSection = (section) => {
    // Ya estoy en Home
    if (location.pathname === '/') {
      scroller.scrollTo(section, {
        duration: 700,
        smooth: true,
        offset: -90
      })

      return
    }

    // Estoy en otra página
    navigate('/', {
      state: {
        scrollTo: section
      }
    })
  }

  return {
    navigateToSection
  }
}