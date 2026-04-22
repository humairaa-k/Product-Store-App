import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store";
import { SettingsProvider } from "../features/context/settings/SettingsContext";

const queryClient = new QueryClient();

export const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SettingsProvider>
         <BrowserRouter>{children}</BrowserRouter>
        </SettingsProvider>
      </QueryClientProvider>
    </Provider>
  );
};

