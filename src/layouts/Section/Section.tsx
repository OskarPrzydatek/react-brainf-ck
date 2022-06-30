import "./Section.css";

import PharagraphListItem from "../../components/PharagraphListItem/PharagraphListItem";

type Paragraph = {
  subtitle?: string;
  content: string;
  code?: string;
  linkTo?: string;
};

type SectionProps = {
  title: string;
  paragraphs: Array<Paragraph>;
};

export default function Section({ title, paragraphs }: SectionProps) {
  return (
    <section className="section">
      <h2 className="section__header">{title}</h2>
      <ul className="section__paragraphs-list">
        {paragraphs.map(({ subtitle, content, code, linkTo }) => (
          <PharagraphListItem
            key={content}
            subtitle={subtitle}
            content={content}
            code={code}
            linkTo={linkTo}
          />
        ))}
      </ul>
    </section>
  );
}
