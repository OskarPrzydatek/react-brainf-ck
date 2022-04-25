import "./Home.css";

import Compiler from "../../components/Compiler/Compiler";

import PageLayout from "../../layouts/PageLayout/PageLayout";

export default function Home() {
  return (
    <PageLayout title="Kompilator">
      <Compiler />
    </PageLayout>
  );
}
