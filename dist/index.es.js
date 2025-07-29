import { jsx as s, jsxs as i, Fragment as p } from "react/jsx-runtime";
const o = ({
  children: t,
  variant: d = "primary",
  size: c = "medium",
  disabled: e = !1,
  loading: a = !1,
  startIcon: r,
  endIcon: n,
  onClick: l,
  ...m
}) => {
  const h = `shared-btn shared-btn--${d} shared-btn--${c} ${e || a ? "shared-btn--disabled" : ""}`;
  return /* @__PURE__ */ s(
    "button",
    {
      className: h,
      disabled: e || a,
      onClick: l,
      ...m,
      children: a ? /* @__PURE__ */ s("span", { className: "loader" }) : /* @__PURE__ */ i(p, { children: [
        r && /* @__PURE__ */ s("span", { className: "icon-start", children: r }),
        /* @__PURE__ */ s("span", { children: t }),
        n && /* @__PURE__ */ s("span", { className: "icon-end", children: n })
      ] })
    }
  );
};
export {
  o as ButtonSheard
};
//# sourceMappingURL=index.es.js.map
