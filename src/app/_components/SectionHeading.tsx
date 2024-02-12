export type SectionHeadingProps = React.PropsWithChildren<{
  title: string;
  headline: string;
  body?: string;
}>;

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  headline,
  body,
  ...props
}) => {
  return (
    <div className="text-center max-w-3xl mx-auto" {...props}>
      <span className="text-primary font-semibold text-xl uppercase">
        {headline}
      </span>
      <h2 className="text-4xl font-bold">{title}</h2>
      {body && <p className="text-body mt-4">{body}</p>}
    </div>
  );
};

export default SectionHeading;
