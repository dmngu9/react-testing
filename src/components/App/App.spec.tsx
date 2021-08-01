import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { getUser } from "utils/getUser";
import App from "./";

jest.mock("utils/getUser", () => ({
  getUser: jest.fn(),
}));

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should display error if fail to fetch user", async () => {
    (getUser as jest.Mock).mockRejectedValue(new Error("error"));

    const { queryByText } = render(<App />);

    await waitFor(() => {
      expect(queryByText(/There is an error occured/i)).toBeInTheDocument();
    });
  });

  it("should display no user if fetch user return null", async () => {
    (getUser as jest.Mock).mockResolvedValue(null);

    const { queryByText } = render(<App />);

    await waitFor(() => {
      expect(queryByText(/No user information available/i)).toBeInTheDocument();
    });
  });

  it("should render user information", async () => {
    (getUser as jest.Mock).mockResolvedValue({
      name: 'Minh',
      company: 'REA'
    });

    const { queryByText, queryByRole } = render(<App />);

    await waitFor(() => {
      expect(queryByText(/Name: Minh/i)).toBeInTheDocument();
      expect(queryByText(/Company: REA/i)).toBeInTheDocument();
      expect(queryByRole('button')).toBeInTheDocument()
    });
  });

  it("should render user fun fact", async () => {
    (getUser as jest.Mock).mockResolvedValue({
      name: 'Minh',
      company: 'REA'
    });

    const { findByText, getByRole, queryByText } = render(<App />);
    await findByText(/Name: Minh/i)
    fireEvent.click(getByRole('button'))

    expect(queryByText(/Im from Sydney/i)) .toBeInTheDocument()
  });
});
