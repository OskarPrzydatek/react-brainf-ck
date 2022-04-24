import "./PageLayout.css";

import NavBar from "../../components/NavBar/NavBar";

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function PageLayout({
  children,
  title,
}: PageLayoutProps): React.ReactElement {
  return (
    <section className="page-layout">
      <h1 className="page-layout__logo">Brainf*ck</h1>
      <NavBar />
      <h2 className="page-layout__header">{title}</h2>
      <main className="page-layout__content">{children}</main>
    </section>
  );
}
