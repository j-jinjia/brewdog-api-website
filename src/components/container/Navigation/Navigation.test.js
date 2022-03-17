import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavFaq from "../../NavFaq/NavFaq";
import Navigation from "./Navigation"


it("should match beer card component snapshot", ()=>{
    const {container} = render (<Navigation />)
    expect(container).toMatchSnapshot();

})

it("should render the navigation bar", ()=>{
   render(<Navigation/>)
   const navBar = screen.getByRole("article")
   expect(navBar).toBeInTheDocument();

})

it("help should appear in navigation bar", ()=>{
    render(<Navigation/>)
    const help = screen.getByText("HELP");
    expect(help).toBeInTheDocument();

})