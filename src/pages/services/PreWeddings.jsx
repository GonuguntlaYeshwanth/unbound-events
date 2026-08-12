import ServicePage from "../../components/ServicePage";
import servicePages from "../../data/servicePages";

function PreWeddings() {
  return (
    <ServicePage
      service={servicePages["pre-weddings"]}
    />
  );
}

export default PreWeddings;