import PersonIcon from "@mui/icons-material/Person";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";
import { ButtonGroup, Button, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    red: { main: "#a80038" },
  },
});
const LeftPane = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="left-pane">
        <img
          src={require("../android-chrome-192x192.png")}
          alt="text-gram-logo"
          className="logo"
        />
        <br />
        <ButtonGroup orientation="vertical" variant="text" style={{}}>
          <Button
            color="red"
            style={{
              borderTopLeftRadius: "999px",
              borderTopRightRadius: "999px",
              borderBottomLeftRadius: "999px",
              borderBottomRightRadius: "999px",
              border: "1px solid",
              marginBottom: "5px",
            }}
          >
            <Link className="sidebar-links" to="/">
              <div className="sidebar-container">
                <div className="sidebar-icons">
                  <HomeOutlinedIcon fontSize="large" />
                </div>
                <div className="sidebar-text">Home</div>
              </div>
            </Link>
          </Button>
          <Button
            color="red"
            style={{
              borderTopLeftRadius: "999px",
              borderTopRightRadius: "999px",
              borderBottomLeftRadius: "999px",
              borderBottomRightRadius: "999px",
              border: "1px solid",
            }}
          >
            <Link className="sidebar-links" to="/users" underline="hover">
              <div className="sidebar-container">
                <div className="sidebar-icons">
                  <PersonIcon fontSize="large" />
                </div>
                <div className="sidebar-text">Users</div>
              </div>
            </Link>
          </Button>
        </ButtonGroup>
      </div>
    </ThemeProvider>
  );
};
export default LeftPane;
