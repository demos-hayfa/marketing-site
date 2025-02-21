import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe("Layout Navigation", () => {
  test("renders navigation links", () => {
    render(
      <BrowserRouter>
        <Layout title="Test Page">
          <p>Test Content</p>
        </Layout>
      </BrowserRouter>
    );

    expect(screen.getByText("TechCorp")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Home/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /About/i })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: /Products/i })).toHaveAttribute("href", "/products");
    expect(screen.getByRole("link", { name: /Contact/i })).toHaveAttribute("href", "/contact");
  });
});

jest.mock("global", () => {
  return {
    window: {
      location: {
        pathname: "/"
      }
    }
  };
});

// Test case to verify the active navigation link
test('highlights active navigation link', () => {
  // Mock window.location.pathname
  jest.spyOn(window.location, 'pathname', 'get').mockReturnValue('/');

  render(
    <BrowserRouter>
      <Layout title="Home Page">
        <p>Home Page Content</p>
      </Layout>
    </BrowserRouter>
  );

  // Assert that only the "Home" link has the active class applied
  expect(screen.getByRole("link", { name: /Home/i })).toHaveClass("text-white font-bold underline");
  expect(screen.getByRole("link", { name: /About/i })).not.toHaveClass("text-white font-bold underline");
  expect(screen.getByRole("link", { name: /Products/i })).not.toHaveClass("text-white font-bold underline");
  expect(screen.getByRole("link", { name: /Contact/i })).not.toHaveClass("text-white font-bold underline");

  // Mock pathname for /about page
  jest.spyOn(window.location, 'pathname', 'get').mockReturnValue('/about');
  render(
    <BrowserRouter>
      <Layout title="About Page">
        <p>About Page Content</p>
      </Layout>
    </BrowserRouter>
  );

  // Assert that only the "About" link has the active class applied
  expect(screen.getByRole("link", { name: /Home/i })).not.toHaveClass("text-white font-bold underline");
  expect(screen.getByRole("link", { name: /About/i })).toHaveClass("text-white font-bold underline");
  expect(screen.getByRole("link", { name: /Products/i })).not.toHaveClass("text-white font-bold underline");
  expect(screen.getByRole("link", { name: /Contact/i })).not.toHaveClass("text-white font-bold underline");

  // Mock pathname for /products page
  jest.spyOn(window.location, 'pathname', 'get').mockReturnValue('/products');
  render(
    <BrowserRouter>
      <Layout title="Products Page">
        <p>Products Page Content</p>
      </Layout>
    </BrowserRouter>
  );

  // Assert that only the "Products" link has the active class applied
  expect(screen.getByRole("link", { name: /Home/i })).not.toHaveClass("text-white font-bold underline");
  expect(screen.getByRole("link", { name: /About/i })).not.toHaveClass("text-white font-bold underline");
  expect(screen.getByRole("link", { name: /Products/i })).toHaveClass("text-white font-bold underline");
  expect(screen.getByRole("link", { name: /Contact/i })).not.toHaveClass("text-white font-bold underline");

  // Mock pathname for /contact page
  jest.spyOn(window.location, 'pathname', 'get').mockReturnValue('/contact');
  render(
    <BrowserRouter>
      <Layout title="Contact Page">
        <p>Contact Page Content</p>
      </Layout>
    </BrowserRouter>
  );

  // Assert that only the "Contact" link has the active class applied
  expect(screen.getByRole("link", { name: /Home/i })).not.toHaveClass("text-white font-bold underline");
  expect(screen.getByRole("link", { name: /About/i })).not.toHaveClass("text-white font-bold underline");
  expect(screen.getByRole("link", { name: /Products/i })).not.toHaveClass("text-white font-bold underline");
  expect(screen.getByRole("link", { name: /Contact/i })).toHaveClass("text-white font-bold underline");
});