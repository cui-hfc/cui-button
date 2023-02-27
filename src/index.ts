import type { HyperFunctionComponent } from "hyper-function-component";

import { element, tmpl, before, renderWithDiff, initHfcSlot } from "cui-utils";

import "./index.css";

const RootTmpl = tmpl(`
  <!-- default slot -->
`);

const HFC: HyperFunctionComponent = (initProps) => {
  const fragment = RootTmpl();

  const defaultSlotAnchor = fragment.childNodes[1];

  let defaultSlot = initHfcSlot(
    () => element("span"),
    (target) => {
      target.classList.add("label");
      before(target, defaultSlotAnchor);
    }
  );

  return renderWithDiff<HTMLButtonElement>(
    ({ ops, slots }) => {
      const defaultSlotOp = ops.get("default");
      defaultSlot.render(defaultSlotOp, slots?.default);
    },
    {
      initProps,
      fragment,
      c(container) {
        container.type = "button";
      },
    }
  );
};

HFC.tag = "button";
HFC.hfc = import.meta.env.HFC_NAME;
HFC.ver = import.meta.env.HFC_VERSION;
HFC.names = import.meta.env.HFC_PROP_NAMES;

export default HFC;
