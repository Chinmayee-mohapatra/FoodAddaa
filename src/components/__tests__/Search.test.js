import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestaurantListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  // original fetch function return to us a Promise.
  return Promise.resolve({
    json: () => {
      // json is converted to data object originally.
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// for Link component we need to Wrap inside Browser-Router
it("Should Search restaurant list for KS Bakers text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  //ReferenceError: fetch is not defined
  /**
   *When we are doing the render here on Body component then it is rendering on JS-DOM (browser like)
    not on the browser. It doesnt have all thw powers of browser.
    The fech superpower is given to us by Browser.
    So jest doesn't undersatnd "fetch".
    Hence we need to fake this fetch().
   */
  /**
   * NOTE: When using a fetch / state updates, wrap the render function inside act().
   */

  const cardsBeforeSearch = screen.getAllByTestId("resData");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  // console.log(searchBtn);

  const searchInput = screen.getByTestId("searchInput");
  // console.log(searchInput);

  fireEvent.change(searchInput, { target: { value: "KS Bakers" } });

  fireEvent.click(searchBtn);

  // screen should load a single card
  const cardsAfterSearch = screen.getAllByTestId("resData");

  expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter Top Rated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resData");
  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resData");
  expect(cardsAfterFilter.length).toBe(13);
});
