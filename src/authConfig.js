import { PublicClientApplication } from "@azure/msal-browser";


export const msalConfig = {
    auth: {
        clientId: "88f76bd3-446a-45e5-af27-674fc7853cec",
        authority: "https://login.microsoftonline.com/d37b19a4-5644-48b8-b879-66c5480183b6",
        redirectUri: window.location.origin,
        postLogoutRedirectUri:`${window.location.origin}/logout`
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true, 
    }
};

export const loginRequest = {
    scopes: ["user.read"]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};

export const msalInstance = new PublicClientApplication(msalConfig);