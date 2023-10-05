import * as styles from './_styles.css';

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
    <div className={styles.header}>
      <div className={styles.headerCaption}>
        <img src={src} alt={alt} />
        <h3>{title}</h3>
        <p className={styles.headerPercentage}>
          {percentageCompleted}/{percentage}%
        </p>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
