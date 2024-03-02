import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";

it("Should render restaurantCard component with props Data", () => {
  // using props for testing
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Subway");
  expect(name).toBeInTheDocument(); // import "@testing-library/jest-dom";
});

// it("Should render restaurantCard component with Promoted Label", () => {
//  // using props for testing
//   render();
//   const name = screen.getByText("");
//   expect(name).toBeInTheDocument();
// });
