import * as React from "react";
import {
  PlasmicTextAreaWhite,
  DefaultTextAreaWhiteProps
} from "./plasmic/tady_to_zije_v_02/PlasmicTextAreaWhite";

import { TextInputRef } from "@plasmicapp/react-web";

export interface TextAreaWhiteProps extends DefaultTextAreaWhiteProps {
  // Feel free to add any additional props that this component should receive
}
function TextAreaWhite_(props: TextAreaWhiteProps, ref: TextInputRef) {
  const { plasmicProps } = PlasmicTextAreaWhite.useBehavior<TextAreaWhiteProps>(
    props,
    ref
  );
  return <PlasmicTextAreaWhite {...plasmicProps} />;
}

const TextAreaWhite = React.forwardRef(TextAreaWhite_);

export default Object.assign(
  TextAreaWhite,

  {
    __plumeType: "text-input"
  }
);
