import { jsx as m } from "react/jsx-runtime";
import "react";
const h = ({
  children: r,
  variant: e = "primary",
  size: s = "medium",
  disabled: t = !1,
  onClick: a,
  ...n
}) => {
  const o = `shared-btn shared-btn--${e} shared-btn--${s} ${t ? "shared-btn--disabled" : ""}`;
  return /* @__PURE__ */ m(
    "button",
    {
      className: o,
      disabled: t,
      onClick: a,
      ...n,
      children: r
    }
  );
};
export {
  h as ButtonSheard
};
//# sourceMappingURL=index.es.js.map
