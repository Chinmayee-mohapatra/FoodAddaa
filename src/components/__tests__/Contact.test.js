import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../ContactUs";

// group test cases - into single block called describe
describe("Grouping contact us few test-cases", () => {
  // JEST and TESTING LIBRARY gives access to these functions: beforeAll() and beforeEach()
  beforeAll(() => {
    // console.log("Before All start");
  });

  beforeEach(() => {
    // console.log("Before Each Test");
  });

  afterAll(() => {
    // console.log("After ALl ");
  });

  afterEach(() => {
    // console.log("After Each");
  });

  // mostly used for cleanup tasks n all

  // Case 3
  it("Should load input name inside contact Component", () => {
    render(<ContactUs />);

    const name = screen.getByPlaceholderText("Name");

    // Assertion
    expect(name).toBeInTheDocument();
  });

  // Case 4
  test("Should load 2 input boxex on the contatct component", () => {
    // 1. render -> 2. query -> 3. assert
    render(<ContactUs />);

    // role for input box is textbox
    // For multiple items we use "ALL"
    // Quering
    const inputBoxes = screen.getAllByRole("textbox"); // this returns a react element
    // console.log(inputBoxes[0]); // prints object : virtual dom react element
    // console.log(inputBoxes.length);
    expect(inputBoxes.length).toBe(3);
  });
});

// Case 1
test("Should load Contact Us Component", () => {
  // whenever testing a react component -> we need to render() the component.
  render(<ContactUs />);
  // whatever we are rendering, it is being rendered into our JS-DOM.

  // One way for checking for errors : check if the heading is loaded in the page or not .
  // screen -> abject froom react-testing-library
  const heading = screen.getByRole("heading");
  // screen.getByRole -> find all the headings inside Contact component and store it back in heading variable.

  // Assertion
  expect(heading).toBeInTheDocument();
});

// Case 2
test("Should load Button Component", () => {
  render(<ContactUs />);

  const button = screen.getByRole("button");
  // role can be - heading, button, etc in the application.

  // getByText
  // const submit = screen.getByText("Submit");

  // Assertion
  expect(button).toBeInTheDocument();
});

// multiple test cases can be grouped together as a describe block.
// We can have describe inside a describe block also.
// NOTE:: we can write the name as it instaead of test also. "it is an alias of "test"
// Why is the name "it"? - reading becomes easy.
