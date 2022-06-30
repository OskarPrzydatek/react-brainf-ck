import "./PharagraphListItem.css";

type ParagraphProps = {
  subtitle?: string;
  content: string;
  code?: string;
  linkTo?: string;
};

export default function PharagraphListItem({
  subtitle,
  content,
  code,
  linkTo,
}: ParagraphProps) {
  return (
    <li>
      {subtitle && (
        <h3 className="pharagraph-list-item__subtitle">{subtitle}</h3>
      )}
      <p>{content}</p>
      {code && (
        <div className="pharagraph-list-item__code-wrapper">
          <code className="pharagraph-list-item__code">{code}</code>
        </div>
      )}
      {linkTo && (
        <a
          className="pharagraph-list-item__link-to"
          href={linkTo}
          target="_blanc"
        >
          Link do źródła
        </a>
      )}
    </li>
  );
}
