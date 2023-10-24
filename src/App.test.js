import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('deve mostrar o nome do personagem', () => {
  render(<App />);
  const linkElement = screen.getByText(/Meu personagem Scooby-Doo/i);
  expect(linkElement).toBeInTheDocument();
});

test('deve mudar o nome do personagem', () => {
  const { getByTestId } = render(<App />);
  const botao = getByTestId('botao-muda');
  fireEvent.click(botao)

  const linkElement = screen.getByText(/Meu personagem Salsicha/i);
  expect(linkElement).toBeInTheDocument();
});

test('deve mostrar quantidade de casos resolvidos', () => {
  const { getByTestId } = render(<App />);
  const botao = getByTestId('botao-resolve-caso');

  // Antes de clicar no botão
  const linkElement1 = screen.getByText(/Quantidade de casos resolvidos: 0/i);
  expect(linkElement1).toBeInTheDocument();

  fireEvent.click(botao)

  // Depois de clicar no botão
  const linkElement2 = screen.getByText(/Quantidade de casos resolvidos: 1/i);
  expect(linkElement2).toBeInTheDocument();

});
