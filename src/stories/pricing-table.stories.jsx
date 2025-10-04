import Section from "@/components/section";

import PricingTable from "../components/pricing-table";
import { getComponentExamples } from "./lib/get-examples";

const args = await getComponentExamples("pricing-table");

export default {
  title: "Components/Pricing table",
  component: PricingTable,
};

const Decorator = ({ children, dark = false }) => (
  <Section darkVariant={dark} content={children} />
);

export const Default = {
  args,
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const Dark = {
  args,
  decorators: [
    (Story) => (
      <Decorator dark>
        <Story />
      </Decorator>
    ),
  ],
};
