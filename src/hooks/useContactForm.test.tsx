import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithIntl } from "@/test/renderWithIntl";
import { useContactForm } from "./useContactForm";

function TestForm() {
  const { errors, status, handleSubmit } = useContactForm();
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" />
      {errors.name && <p>{errors.name}</p>}
      <input name="email" />
      {errors.email && <p>{errors.email}</p>}
      <textarea name="message" />
      {errors.message && <p>{errors.message}</p>}
      <p data-testid="status">{status}</p>
      <button type="submit">Enviar</button>
    </form>
  );
}

function fillAndSubmit(
  container: HTMLElement,
  values: { name?: string; email?: string; message?: string },
) {
  if (values.name !== undefined) {
    fireEvent.change(container.querySelector('input[name="name"]')!, {
      target: { value: values.name },
    });
  }
  if (values.email !== undefined) {
    fireEvent.change(container.querySelector('input[name="email"]')!, {
      target: { value: values.email },
    });
  }
  if (values.message !== undefined) {
    fireEvent.change(container.querySelector('textarea[name="message"]')!, {
      target: { value: values.message },
    });
  }
  fireEvent.click(screen.getByRole("button", { name: "Enviar" }));
}

describe("useContactForm", () => {
  it("shows validation errors and stays idle when the form is empty", () => {
    const { container } = renderWithIntl(<TestForm />);
    fillAndSubmit(container, {});

    expect(screen.getByText("Escribe tu nombre.")).toBeInTheDocument();
    expect(screen.getByText("Introduce un correo válido.")).toBeInTheDocument();
    expect(
      screen.getByText("El mensaje debe tener al menos 10 caracteres."),
    ).toBeInTheDocument();
    expect(screen.getByTestId("status")).toHaveTextContent("idle");
  });

  it("rejects a message that's too short even if name/email are valid", () => {
    const { container } = renderWithIntl(<TestForm />);
    fillAndSubmit(container, {
      name: "Ada Lovelace",
      email: "ada@example.com",
      message: "muy corto",
    });

    expect(screen.queryByText("Escribe tu nombre.")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Introduce un correo válido."),
    ).not.toBeInTheDocument();
    expect(
      screen.getByText("El mensaje debe tener al menos 10 caracteres."),
    ).toBeInTheDocument();
  });

  it("moves to the error status when the form is valid but no endpoint is configured", () => {
    const { container } = renderWithIntl(<TestForm />);
    fillAndSubmit(container, {
      name: "Ada Lovelace",
      email: "ada@example.com",
      message: "Hola, quiero conversar sobre un proyecto.",
    });

    expect(screen.queryByText("Escribe tu nombre.")).not.toBeInTheDocument();
    expect(screen.getByTestId("status")).toHaveTextContent("error");
  });
});
