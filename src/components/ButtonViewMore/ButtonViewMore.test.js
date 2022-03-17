import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonViewMore from "./ButtonViewMore";

it("should match navigation snapshot", ()=>{
    const {container} = render (<ButtonViewMore/>)
    expect(container).toMatchSnapshot();

})

it("should render the button", ()=>{
   render(<ButtonViewMore/>)
   const button = screen.getByRole("button")
   expect(button).toBeInTheDocument();

})