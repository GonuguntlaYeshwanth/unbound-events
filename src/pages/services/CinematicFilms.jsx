import ServicePage from "../../components/ServicePage";
import servicePages from "../../data/servicePages";

function CinematicFilms() {
  return (
    <ServicePage
      service={servicePages["cinematic-films"]}
    />
  );
}

export default CinematicFilms;