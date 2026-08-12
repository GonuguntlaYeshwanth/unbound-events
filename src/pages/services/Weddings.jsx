import ServicePage from "../../components/ServicePage";
import servicePages from "../../data/servicePages";

function Weddings() {
  return (
    <ServicePage
      service={servicePages.weddings}
    />
  );
}

export default Weddings;