
// in src/App.tsx
import { Admin, Resource, CustomRoutes } from "react-admin";
import postgrestRestProvider from "@promitheus/ra-data-postgrest";
import fakeDataProvider from "ra-data-fakerest";
import { Dashboard } from "./dashboard";
import { authProvider, apInitialize } from "./authProvider";
import { i18nProvider } from "./i18nProvider";
import LoginPage, { Login } from "./Login";
import data from "./data";
import { AlbumsList, AlbumsCreate, AlbumsEdit} from "./resources/Albums";
import { ArtistsList, ArtistsCreate, ArtistsEdit} from "./resources/Artists";
import { GenresList, GenresCreate, GenresEdit} from "./resources/Genres";
import { TracksList, TracksCreate, TracksEdit} from "./resources/Tracks";
import AlbumsIcon from "@mui/icons-material/Album";
import ArtistsIcon from "@mui/icons-material/Person";
import GenresIcon from "@mui/icons-material/MusicNote";
import TracksIcon from "@mui/icons-material/Audiotrack"; 
// SUPERTOKENS
import React from "react";
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import ThirdPartyPasswordless from "supertokens-auth-react/recipe/thirdpartypasswordless";
import Session from "supertokens-auth-react/recipe/session";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + "/auth",
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: "EMAIL",
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === "true") {
  dataProvider = postgrestRestProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      "/proxy"
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/myapp96a2091a4e8444c59f27ef19791bd1e8">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != "DEV" ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
        
      >
    <Resource name="Albums" options={{label:"albums"}} 
list={AlbumsList}
create={AlbumsCreate}
edit={AlbumsEdit}
recordRepresentation="albumname"
icon={AlbumsIcon}/>
<Resource name="Artists" options={{label:"artists"}} 
list={ArtistsList}
create={ArtistsCreate}
edit={ArtistsEdit}
recordRepresentation="artistname"
icon={ArtistsIcon}/>
<Resource name="Genres" options={{label:"genres"}} 
list={GenresList}
create={GenresCreate}
edit={GenresEdit}
recordRepresentation="genrename"
icon={GenresIcon}/>
<Resource name="Tracks" options={{label:"tracks"}} 
list={TracksList}
create={TracksCreate}
edit={TracksEdit}
recordRepresentation="name"
icon={TracksIcon}/>
    <CustomRoutes noLayout>
      {/*This renders the login UI on the /auth route*/}
      {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
      {/*Your app routes*/}
    </CustomRoutes>
  </Admin>
  </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
