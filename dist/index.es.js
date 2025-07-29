import { jsx as a, jsxs as n, Fragment as v } from "react/jsx-runtime";
const _ = ({
  children: d,
  variant: r = "primary",
  size: l = "medium",
  disabled: i = !1,
  loading: e = !1,
  startIcon: c,
  endIcon: s,
  onClick: m,
  ...h
}) => {
  const o = `shared-btn shared-btn--${r} shared-btn--${l} ${i || e ? "shared-btn--disabled" : ""}`;
  return /* @__PURE__ */ a(
    "button",
    {
      className: o,
      disabled: i || e,
      onClick: m,
      ...h,
      children: e ? /* @__PURE__ */ a("span", { className: "loader" }) : /* @__PURE__ */ n(v, { children: [
        c && /* @__PURE__ */ a("span", { className: "icon-start", children: c }),
        /* @__PURE__ */ a("span", { children: d }),
        s && /* @__PURE__ */ a("span", { className: "icon-end", children: s })
      ] })
    }
  );
}, b = ({
  title: d,
  description: r,
  image: l,
  variant: i = "primary",
  size: e = "medium",
  disabled: c = !1,
  loading: s = !1,
  startIcon: m,
  endIcon: h,
  onClick: o,
  children: t,
  ...N
}) => {
  const p = `shared-card shared-card--${i} shared-card--${e} ${c || s ? "shared-card--disabled" : ""}`;
  return /* @__PURE__ */ n(
    "div",
    {
      className: p,
      onClick: !c && !s ? o : void 0,
      ...N,
      children: [
        s && /* @__PURE__ */ a("div", { className: "loader-overlay", children: /* @__PURE__ */ a("span", { className: "loader" }) }),
        l && /* @__PURE__ */ a("div", { className: "shared-card__image-wrapper", children: /* @__PURE__ */ a("img", { src: l, alt: d, className: "shared-card__image" }) }),
        /* @__PURE__ */ n("div", { className: "shared-card__content", children: [
          m && /* @__PURE__ */ a("div", { className: "icon-start", children: m }),
          d && /* @__PURE__ */ a("h3", { className: "shared-card__title", children: d }),
          r && /* @__PURE__ */ a("p", { className: "shared-card__description", children: r }),
          t,
          h && /* @__PURE__ */ a("div", { className: "icon-end", children: h })
        ] })
      ]
    }
  );
}, $ = ({
  isOpen: d,
  onClose: r,
  title: l,
  children: i,
  footer: e,
  size: c = "medium"
}) => d ? /* @__PURE__ */ a("div", { className: "modal-backdrop", onClick: r, children: /* @__PURE__ */ n(
  "div",
  {
    className: `modal-content modal-size--${c}`,
    onClick: (s) => s.stopPropagation(),
    children: [
      /* @__PURE__ */ n("div", { className: "modal-header", children: [
        /* @__PURE__ */ a("h3", { children: l }),
        /* @__PURE__ */ a("button", { onClick: r, className: "modal-close", children: "×" })
      ] }),
      /* @__PURE__ */ a("div", { className: "modal-body", children: i }),
      e && /* @__PURE__ */ a("div", { className: "modal-footer", children: e })
    ]
  }
) }) : null;
export {
  _ as ButtonSheard,
  b as CardShared,
  $ as ModalShared
};
//# sourceMappingURL=index.es.js.map
