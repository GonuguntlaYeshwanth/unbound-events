import ServicePage from "../../components/ServicePage";
import servicePages from "../../data/servicePages";

function Events() {
  return (
    <ServicePage
      service={servicePages.events}
    />
  );
}

export default Events;