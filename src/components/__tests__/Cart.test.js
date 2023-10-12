import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { Provider } from "react-redux";
import MOCK_DATA from "../mocks/mockRestaurantMenu.json";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordianHeader);

  // assertion
  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  // Before the "Add +"" item Click
  expect(screen.getByText("0")).toBeInTheDocument();

  // Add button
  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);

  // After the "Add +" is clicked
  expect(screen.getByText("1")).toBeInTheDocument();

  // After one more "Add +" is clicked
  fireEvent.click(addBtn[1]);
  expect(screen.getByText("2")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(22);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  expect(
    screen.getByText("Your cart is empty. Add items to the cart.")
  ).toBeInTheDocument();
});
