import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../ContactForm";

describe("ContactForm", () => {
  beforeEach(() => {
    vi.stubGlobal("alert", vi.fn());
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({}),
      })
    );
  });

  it("blocks submit and does not call the API when name/email/message are empty", () => {
    const { container } = render(<ContactForm />);

    fireEvent.submit(container.querySelector("form"));

    expect(window.alert).toHaveBeenCalledWith("Please fill in all required fields");
    expect(window.fetch).not.toHaveBeenCalled();
  });

  it("submits with the correct payload shape once required fields are filled in", async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: "Asha Rao" },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "asha@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/^subject/i), {
      target: { value: "General Inquiry" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "I'd like to know more about the courses." },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await vi.waitFor(() => expect(window.fetch).toHaveBeenCalledTimes(1));

    const [url, options] = window.fetch.mock.calls[0];
    expect(url).toBe("/api/contact");
    expect(options.method).toBe("POST");
    expect(JSON.parse(options.body)).toMatchObject({
      name: "Asha Rao",
      email: "asha@example.com",
      subject: "General Inquiry",
      message: "I'd like to know more about the courses.",
    });
  });
});
