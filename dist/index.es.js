import { jsx as e, jsxs as c, Fragment as x } from "react/jsx-runtime";
const v = ({
  children: s,
  variant: l = "primary",
  size: t = "medium",
  disabled: n = !1,
  loading: a = !1,
  startIcon: d,
  endIcon: r,
  onClick: i,
  ...o
}) => {
  const m = `shared-btn shared-btn--${l} shared-btn--${t} ${n || a ? "shared-btn--disabled" : ""}`;
  return /* @__PURE__ */ e(
    "button",
    {
      className: m,
      disabled: n || a,
      onClick: i,
      ...o,
      children: a ? /* @__PURE__ */ e("span", { className: "loader" }) : /* @__PURE__ */ c(x, { children: [
        d && /* @__PURE__ */ e("span", { className: "icon-start", children: d }),
        /* @__PURE__ */ e("span", { children: s }),
        r && /* @__PURE__ */ e("span", { className: "icon-end", children: r })
      ] })
    }
  );
}, f = ({
  title: s,
  description: l,
  image: t,
  variant: n = "primary",
  size: a = "medium",
  disabled: d = !1,
  loading: r = !1,
  startIcon: i,
  endIcon: o,
  onClick: m,
  children: h,
  ...u
}) => {
  const b = {
    small: "p-3 text-sm",
    medium: "p-4 text-base",
    large: "p-6 text-lg"
  };
  return /* @__PURE__ */ c(
    "div",
    {
      className: `relative flex items-center gap-4 cursor-pointer transition-all duration-300 ${d || r ? "opacity-50 cursor-not-allowed" : ""} ${{
        primary: "bg-white shadow-md hover:shadow-lg rounded-xl border border-gray-100",
        secondary: "bg-gray-100 shadow-md hover:shadow-lg rounded-xl border border-gray-200"
      }[n]} ${b[a]}`,
      onClick: !d && !r ? m : void 0,
      ...u,
      children: [
        r && /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-white/70 flex justify-center items-center z-10 rounded-xl", children: /* @__PURE__ */ e("span", { className: "loader border-4 border-t-4 border-gray-200 rounded-full w-6 h-6 animate-spin" }) }),
        t && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: /* @__PURE__ */ e(
          "img",
          {
            src: t,
            alt: s,
            className: "w-10 h-10 rounded-full object-cover"
          }
        ) }),
        /* @__PURE__ */ c("div", { className: "flex flex-col flex-grow", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
            i && /* @__PURE__ */ e("div", { className: "text-gray-500", children: i }),
            s && /* @__PURE__ */ e("h3", { className: "font-semibold text-gray-900 text-lg", children: s }),
            o && /* @__PURE__ */ e("div", { className: "ml-auto text-gray-500", children: o })
          ] }),
          l && /* @__PURE__ */ e("p", { className: "text-gray-500 text-sm mt-1", children: l }),
          h
        ] })
      ]
    }
  );
}, g = ({
  isOpen: s,
  onClose: l,
  title: t,
  children: n,
  footer: a,
  size: d = "medium"
}) => s ? /* @__PURE__ */ e("div", { className: "modal-backdrop", onClick: l, children: /* @__PURE__ */ c(
  "div",
  {
    className: `modal-content modal-size--${d}`,
    onClick: (r) => r.stopPropagation(),
    children: [
      /* @__PURE__ */ c("div", { className: "modal-header", children: [
        /* @__PURE__ */ e("h3", { children: t }),
        /* @__PURE__ */ e("button", { onClick: l, className: "modal-close", children: "×" })
      ] }),
      /* @__PURE__ */ e("div", { className: "modal-body", children: n }),
      a && /* @__PURE__ */ e("div", { className: "modal-footer", children: a })
    ]
  }
) }) : null;
export {
  v as ButtonSheard,
  f as CardShared,
  g as ModalShared
};
//# sourceMappingURL=index.es.js.map
