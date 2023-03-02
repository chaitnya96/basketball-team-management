import { useState } from "react";
import NavTabs from "./components/NavTabs";
import ComposeTeam from "./components/ComposeTeam";
import Quarter from "./components/Quarter";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { playersState } from "./helpers/constants";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("ComposeTeam");
  const [teams, setTeams] = useState([]);
  const [savedTeamState, setSavedTeamState] = useState(playersState);

  return (
    <Container>
      <h1 className="my-2">Basketball team manager</h1>
      <NavTabs setSelectedTab={setSelectedTab} />
      {selectedTab === "ComposeTeam" ? (
        <ComposeTeam onCreate={(team) => setTeams((prev) => [...prev, team])} />
      ) : (
        <Quarter
          teams={teams}
          savedTeamState={savedTeamState}
          setSavedTeamState={setSavedTeamState}
        />
      )}
      <ToastContainer />
    </Container>
  );
}

export default App;
