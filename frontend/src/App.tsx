import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
