import { jsx as a, jsxs as t, Fragment as _ } from "react/jsx-runtime";
const b = ({
  children: e,
  variant: c = "primary",
  size: l = "medium",
  disabled: n = !1,
  loading: r = !1,
  startIcon: d,
  endIcon: s,
  onClick: h,
  ...i
}) => {
  const m = `shared-btn shared-btn--${c} shared-btn--${l} ${n || r ? "shared-btn--disabled" : ""}`;
  return /* @__PURE__ */ a(
    "button",
    {
      className: m,
      disabled: n || r,
      onClick: h,
      ...i,
      children: r ? /* @__PURE__ */ a("span", { className: "loader" }) : /* @__PURE__ */ t(_, { children: [
        d && /* @__PURE__ */ a("span", { className: "icon-start", children: d }),
        /* @__PURE__ */ a("span", { children: e }),
        s && /* @__PURE__ */ a("span", { className: "icon-end", children: s })
      ] })
    }
  );
}, u = ({
  title: e,
  description: c,
  image: l,
  variant: n = "primary",
  size: r = "medium",
  disabled: d = !1,
  loading: s = !1,
  startIcon: h,
  endIcon: i,
  onClick: m,
  children: N,
  ...o
}) => {
  const p = `shared-card shared-card--${n} shared-card--${r} ${d || s ? "shared-card--disabled" : ""}`;
  return /* @__PURE__ */ t(
    "div",
    {
      className: p,
      onClick: !d && !s ? m : void 0,
      ...o,
      children: [
        s && /* @__PURE__ */ a("div", { className: "loader-overlay", children: /* @__PURE__ */ a("span", { className: "loader" }) }),
        l && /* @__PURE__ */ a("div", { className: "shared-card__image-wrapper", children: /* @__PURE__ */ a("img", { src: l, alt: e, className: "shared-card__image" }) }),
        /* @__PURE__ */ t("div", { className: "shared-card__content", children: [
          h && /* @__PURE__ */ a("div", { className: "icon-start", children: h }),
          e && /* @__PURE__ */ a("h3", { className: "shared-card__title", children: e }),
          c && /* @__PURE__ */ a("p", { className: "shared-card__description", children: c }),
          N,
          i && /* @__PURE__ */ a("div", { className: "icon-end", children: i })
        ] })
      ]
    }
  );
};
export {
  b as ButtonSheard,
  u as CardShared
};
//# sourceMappingURL=index.es.js.map
