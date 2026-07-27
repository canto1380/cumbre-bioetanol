import { Link } from "react-router-dom"
import Button from "../../components/ui/Buttons"
import { ArrowLeft, Home } from "lucide-react"
import { PAGE_SEO, Seo } from "../../seo"

function NotFoundPage() {
  return (
    <>
      <Seo
        title={PAGE_SEO.notFound.title}
        description={PAGE_SEO.notFound.description}
        path={PAGE_SEO.notFound.path}
        noindex={PAGE_SEO.notFound.noindex}
      />
    <section className="bio-not-found">
      <div className="bio-not-found-content">
        <span className="bio-not-found-code">404</span>

        <h1>Página no encontrada</h1>

        <p>
          La página que estás buscando no existe, fue movida o la dirección
          ingresada es incorrecta.
        </p>

        <div className="bio-not-found-actions">
          <Link to="/">
            <Button
              className='btn-not-found'
              leftIcon={<Home size={18}
              />}>
              Volver al inicio
            </Button>
          </Link>

          <Button
            variant="outline"
            className='btn-not-found'
            leftIcon={<ArrowLeft size={18} />}
            onClick={() => window.history.back()}
          >
            Página anterior
          </Button>
        </div>
      </div>
    </section>
    </>
  )
}
export default NotFoundPage