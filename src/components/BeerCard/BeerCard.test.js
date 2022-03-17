import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BeerCard from "./BeerCard";

it("should match beer card component snapshot", ()=>{
    const {container} = render (<BeerCard/>)
    expect(container).toMatchSnapshot();

})

it("should render the beer card", ()=>{
   render(<BeerCard/>)
   const beerCard = screen.getByRole("article")
   expect(beerCard).toBeInTheDocument();

})
it("button should be display", ()=>{
   render(<BeerCard/>)
   const button = screen.getByRole("button")

   expect(button).toBeInTheDocument();

})
it("should render the image of the beer", ()=>{
   render(<BeerCard/>)
   const beer = screen.getByRole("img")

   expect(beer).toBeInTheDocument();

})

