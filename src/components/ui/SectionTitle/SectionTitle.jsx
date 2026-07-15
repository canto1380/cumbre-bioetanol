import clsx from "clsx";

import { SECTION_TITLE_ALIGNMENTS } from "./sectionTitle-constant.js";

function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}) {
  return (
    <div
      className={clsx(
        "bio-section-title",
        SECTION_TITLE_ALIGNMENTS[align],
        className
      )}
    >
      {badge && (
        <div className="bio-section-title-badge">
          <span className=""> · {badge.props.children} · </span>
        </div>
      )}

      {title && (
        <h2 className="bio-section-title-heading">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="bio-section-title-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;