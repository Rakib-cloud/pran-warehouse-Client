import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"
        className=""
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="fw-bold" href="#home">
              <img
                alt=""
                src="https://i.ibb.co/xDZFjpY/logo.png"
                width="45"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              <span style={{ color: "tomato" }}>PRAN DEALER INVENTORY</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto text-center">
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <Nav.Link as={Link} to="/inventory">
                Inventory
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link as={Link} to="/addItem">
                    Add Item
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manageInventory">
                    Manage Inventory
                  </Nav.Link>
                  <Nav.Link as={Link} to="/myItems">
                    My Items
                  </Nav.Link>
                  <button
                    onClick={() => signOut(auth)}
                    className="btn ms-5 text-white"
                    style={{ backgroundColor: "tomato" }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
