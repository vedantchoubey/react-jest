import React from 'react';
import { render, screen, act, shallow} from '@testing-library/react';
import App from './../../App';

global,fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
        icon_url: "http://image.png", value: "joke text"
    })
}))

describe("App", () => {
    it("loads the joke on mount", async () => {
        await act( async () => render(<App />))
        expect(screen.getByText("joke text")).toBeInTheDocument()
    })
})

describe("App", () => {
    it("render the image", async () => {
        const logo = shallow(<App icon_url={icon_url}/>);
        expect(logo.find("img").prop("src")).toEqual(icon_url);
    });
});