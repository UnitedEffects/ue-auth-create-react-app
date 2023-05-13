// OidcTrustedDomains.js

// Add below trusted domains, access tokens will automatically injected to be send to
// trusted domain can also be a path like https://www.myapi.com/users,
// then all subroute like https://www.myapi.com/useers/1 will be authorized to send access_token to.

// Domains used by OIDC server must be also declared here
const trustedDomains = {
  default: [
    "https://ue-auth-create-react-app.vercel.app/", // this should be the public url where your app is available
    "https://auth.unitedeffects.com/",
    new RegExp("^(https://[a-zA-Z0-9-]+.domain.com/api/)"),
  ],
};
