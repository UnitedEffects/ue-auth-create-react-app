import logo from "./logo.svg";
import "./App.css";
import { OidcUserStatus, useOidc, useOidcUser } from "@axa-fr/react-oidc";

function App() {
  const { login, logout, isAuthenticated } = useOidc();

  const DisplayUserInfo = () => {
    const { oidcUser, oidcUserLoadingState } = useOidcUser();

    switch (oidcUserLoadingState) {
      case OidcUserStatus.Loading:
        return <p>User Information are loading</p>;
      case OidcUserStatus.Unauthenticated:
        return <p>you are not authenticated</p>;
      case OidcUserStatus.LoadingError:
        return <p>Fail to load user information</p>;
      default:
        return (
          <div>
            <div>
              <h5>User information</h5>
              <p>{JSON.stringify(oidcUser, null, 2)}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DisplayUserInfo />
        {!isAuthenticated && (
          <button type="button" onClick={() => login("/profile")}>
            Login
          </button>
        )}
        {isAuthenticated && (
          <button type="button" onClick={() => logout()}>
            logout
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
