import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "../store/store";
import App from "../App";

beforeAll(() => {
  Object.defineProperty(global.SVGElement.prototype, "getBBox", {
    value: () => ({ x: 0, y: 0, width: 100, height: 100 })
  });
});

test("renders mission dashboard after loading", async () => {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  render(
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </Provider>
  );
  expect(await screen.findByText("Real-Time Mission Analytics")).toBeInTheDocument();
  expect(screen.getByText("Active Missions")).toBeInTheDocument();
  expect(screen.getByText("Live Events")).toBeInTheDocument();
});
