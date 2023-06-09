import type { LayerProps } from "react-map-gl"

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const areaLayer: LayerProps = {
	id: "data",
	type: "fill",
	source: "data",
	paint: {
		"fill-color": {
			property: "region",
			stops: [
				[0, "#3288bd"],
				[1, "#66c2a5"],
				[2, "#abdda4"],
				[3, "#e6f598"],
				[4, "#ffffbf"],
				[5, "#fee08b"],
				[6, "#fdae61"],
				[7, "#f46d43"],
				[8, "#d53e4f"],
			],
		},
		"fill-opacity": 0.8,
	},
}

export const pointLayer: LayerProps = {
	id: "data",
	type: "circle",
	source: "data",
	paint: {
		"circle-color": "#4E3FC8",
	},
}
