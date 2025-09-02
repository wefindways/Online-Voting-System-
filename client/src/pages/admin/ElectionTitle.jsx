import Breadcrumb from "../../components/Breadcrumb";

function ElectionTitle() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Election Title</h1>
      <Breadcrumb />
    </div>
  );
}

export default ElectionTitle;