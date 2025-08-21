import Proyecto from "./ModalProyecto";
import Seccion from "./Seccion";
type Props = {
  id: string;
};

function Index({ id }: Props) {
  return (
    <>
      <div className="container-fluid bg-secondary px-0 py-4 section" id={id}>
        <Seccion texto="Mis Proyectos">
          <Proyecto
            titulo="Portfolio"
            descripcion={
              <>
                este portfolio fue creado para mostrar mis habilidades y
                proyectos.
                <br />
                hecho con [React, TypeScript, Bootstrap, vite]
              </>
            }
            VideoText="Video"
            WebText="Web"
            RepositorioText="GitHub"
            VideoLink=""
            WebLink=""
            RepositorioLink=""
          />

          <Proyecto
            titulo="Web App Gestion de Inventarios"
            descripcion={
              <>
                esta aplicación web es mi proyecto principal en desarrollo
                continuo para la gestion de inventarios, utilizando:
                <br />
                FRONT: [HTML, CSS, Bootstrap, JS]
                <br />
                BACK: [PHP, PHPMAILER, COMPOSER]
                <br />
                BBDD: [MYSQL SERVER]
                <br />
                :: ACTUALMENTE EL REPOSITORIO ES PRIVADO ::
              </>
            }
            VideoText="DEMO: Video"
            WebText="Web"
            RepositorioText="DEMO: GitHub"
            VideoLink="https://www.youtube.com/watch?v=jKZoG9FT1lA"
            WebLink=""
            RepositorioLink="https://github.com/matiasapl/INVENTARIO_DEMO_1.0_"
          />
        </Seccion>
      </div>
    </>
  );
}

export default Index;
