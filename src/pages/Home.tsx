import Interpreter from "../components/Interpreter/Interpreter";

import PageLayout from "../layouts/PageLayout/PageLayout";

import { PageTitles } from "../constants/pageTitles";

export default function Home() {
  return (
    <PageLayout title={PageTitles.HOME}>
      <Interpreter />
    </PageLayout>
  );
}
