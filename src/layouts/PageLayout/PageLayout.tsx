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
    <main className="page-layout">
      <NavBar />
      <h2 className="page-layout__header">{title}</h2>
      <main className="page-layout__content">{children}</main>
    </main>
  );
}
