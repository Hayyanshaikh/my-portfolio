# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


package table
[
	{
			serviceId: id,
			packageId: packId,
			features: ["feature1", "feature2", ...]
	}
]


tier Table
[
	{
		tierId: tierId,
		tier: basic,
	},
	{
		tierId: tierId,
		tier: standard,
	},
	{
		tierId: tierId,
		tier: premium,
	},
]

pricing table
[
	{
		price: "$5 - $8",
		tierId: tierId,
		salePrice: "$5",
		packId: packageId,
	},
	{
		price: "$10 - $13",
		tierId: tierId,
		salePrice: "$10",
		packId: packageId,
	},
	{
		price: "$15 - $18",
		tierId: tierId,
		salePrice: "$15",
		packId: packageId,
	}
]
