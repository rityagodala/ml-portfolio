import "./globals.css";

export const metadata = {
  title: "Ritya Godala — ML Engineer",
  description: "ML Engineer specializing in computer vision, foundation models, and open-source contributions to PyTorch, HuggingFace, and Meta AI ecosystems.",
  openGraph: {
    title: "Ritya Godala — ML Engineer",
    description: "Open-source ML contributor across torchmetrics, PEFT, kornia, evaluate, and OGX.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
