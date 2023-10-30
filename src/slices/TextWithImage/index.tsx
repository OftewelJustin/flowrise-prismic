import { Content } from "@prismicio/client";
import {JSXMapSerializer, PrismicRichText, SliceComponentProps} from "@prismicio/react";
import {PrismicNextImage} from "@prismicio/next";
import Heading from "@/app/components/Heading";
import Bounded from "@/app/components/Bounded";
import clsx from "clsx";
import { SliceZone } from "@prismicio/react";


const components: JSXMapSerializer = {
  heading2: ({children}) => (
      <Heading as="h2" size="lg" className="">
        {children}
      </Heading>
  ),
  paragraph: ({children}) => (
      <p className="max-w-md text-lg font-body text-slate-600">
        {children}
      </p>
  )
}

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-8 md:grid-cols-2 place-items-center">
        <PrismicNextImage field={slice.primary.image} className={clsx("grid gap-4 rounded-lg", slice.variation === "imageRight" && "md:order-2")} />
        <div className="grid gap-4">
          <PrismicRichText field={slice.primary.heading} components={components} />
          <PrismicRichText field={slice.primary.body} components={components} />
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
