import Nav from "react-bootstrap/Nav";

function NavTabs({ setSelectedTab }) {
  const handleSelect = (eventKey) => setSelectedTab(eventKey);

  return (
    <Nav
      fill
      variant="tabs"
      defaultActiveKey="ComposeTeam"
      onSelect={handleSelect}
    >
      <Nav.Item>
        <Nav.Link eventKey="ComposeTeam">Compose Team</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="FirstQuarter">First Quarter</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavTabs;
