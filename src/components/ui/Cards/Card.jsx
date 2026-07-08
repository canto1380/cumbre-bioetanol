import clsx from "clsx";

import {
    CARD_PADDINGS,
    CARD_SHADOWS,
} from "./card-constant.js";

function Card({
    children,
    padding = "md",
    shadow = "sm",
    bordered = true,
    hover = false,
    className,
    ...props
}) {
    return (
        <div
            className={clsx(
                "bio-card",
                CARD_PADDINGS[padding],
                CARD_SHADOWS[shadow],
                bordered && "bio-card-bordered",
                hover && "bio-card-hover",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export default Card;