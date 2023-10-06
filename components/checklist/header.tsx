/**
 * Checklist header component props.
 */
export type ChecklistHeaderProps = Pick<
  LocalChecklistCategory,
  'title' | 'description' | 'image'
> & {
  percentage: number;
  percentageCompleted: number;
};

/**
 * Checklist header component.
 */
export function ChecklistHeader(props: ChecklistHeaderProps) {
  const {
    title,
    description,
    image: { src, alt },
    percentage,
    percentageCompleted,
  } = props;

  return (
    <div className="header">
      <div className="caption">
        <img src={src} alt={alt} />
        <h3>{title}</h3>
        <p className="percentage">
          {percentageCompleted}/{percentage}
        </p>
      </div>
      <p className="description">{description}</p>
    </div>
  );
}
