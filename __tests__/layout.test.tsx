import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

import { useRouter } from "next/router";
jest.mock("next/router", () => ({
  useRouter: jest.fn()
}));

describe("Layout Navigation", () => {
  const paths = ["/", "/about", "/products", "/contact"]

   paths.map((path: string) => {
    test(`renders active navigation link correctly for ${path}`, () => {
      (useRouter as jest.Mock).mockImplementation(() => ({
        pathname: path,
      }))
      render(
        <BrowserRouter>
          <Layout title="Test Page">
            <p>Test Content</p>
          </Layout>
        </BrowserRouter>
      )
      expect(screen.getAllBy[...expect(screen.getByRole("link", { name: /Home/i })).toHaveAttribute("href", "/");, ...expect(screen.getByRole("link", { name: /About/i })).toHaveAttribute("href", "/about");, ...expect(screen.getByRole("link", { name: /Products/i })).toHaveAttribute("href", "/products");, ...expect(screen.getByRole("link", { name: /Contact/i })).toHaveAttribute("href", "/contact");])
      expect(screen.getAllByRole("link").length).toEqual(4)
      screen.getAllByRole("link").forEach(link => {
        if (link.getAttribute('href') !== path) {
          expect(link).not.toHaveClass("text-white font-bold underline")
        } else {
          expect(link).toHaveClass("text-white font-bold underline")
        }
      })
    })
  })
})