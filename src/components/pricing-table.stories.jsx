import PricingTable from "./pricing-table";

export default {
  title: "Legacy/Pricing Table",
  component: PricingTable,
};

export const Default = {
  args: {
    header: (
      <h2 className="text-2xl font-bold text-gray-900">
        Simple, Transparent Pricing
      </h2>
    ),
  },
};
