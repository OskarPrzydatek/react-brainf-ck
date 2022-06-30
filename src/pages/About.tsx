import PageLayout from "../layouts/PageLayout/PageLayout";

import Section from "../layouts/Section/Section";

import { PageTitles } from "../constants/pageTitles";

import { sectionOneParagraphs } from "../content/sectionOneParagraphs";
import { sectionTwoParagraphs } from "../content/sectionTwoParagraphs";

export default function About() {
  return (
    <PageLayout title={PageTitles.ABOUT}>
      <Section title={"Definicja Języka"} paragraphs={sectionOneParagraphs} />
      <Section
        title={"Brainf*ck - Jak To jest Zrobione?"}
        paragraphs={sectionTwoParagraphs}
      />
    </PageLayout>
  );
}
