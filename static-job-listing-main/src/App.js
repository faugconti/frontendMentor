import "./App.css";
import Header from "./components/Header/Header";
import FilterContext from "./context/FilterContext";
import ListCards from "./components/ListCards/ListCards";
import ActiveFilters from "./components/ActiveFilters/ActiveFilters";

const App = () => {
  return (
    <FilterContext>
      <Header />
      <main>
        <ActiveFilters />
        <ListCards />
      </main>
    </FilterContext>
  );
};

export default App;
