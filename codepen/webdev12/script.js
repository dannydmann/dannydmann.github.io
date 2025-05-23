const { Anchor, Shape, Cylinder, Box, Ellipse, TAU } = Zdog;

(() => {
	const bounceOut = (t) => {
		const a = 4.0 / 11.0;
		const b = 8.0 / 11.0;
		const c = 9.0 / 10.0;
		const ca = 4356.0 / 361.0;
		const cb = 35442.0 / 1805.0;
		const cc = 16061.0 / 1805.0;
		const t2 = t * t;
		return t < a
			? 7.5625 * t2
			: t < b
			? 9.075 * t2 - 9.9 * t + 3.4
			: t < c
			? ca * t2 - cb * t + cc
			: 10.8 * t * t - 20.52 * t + 10.72;
	};

	const colors = {
		tree: "hsl(25 47% 57%)",
		log: ["hsl(159 85% 33%)", "hsl(157 99% 26%)"],
		perch: "hsl(25 47% 57%)",
		claw: "hsl(25 87% 52%)",
		leg: "hsl(20 87% 52%)",
		belly: "hsl(2 48% 30%)",
		back: "hsl(3 26% 32%)",
		chest: "hsl(3 48% 50%)",
		tail: "hsl(2 26% 32%)",
		head: "hsl(1 26% 32%)",
		beak: "hsl(2 26% 32%)",
		crest: "hsl(5 89% 59%)",
		eye: "hsl(32 34% 21%)"
	};

	const stroke = 0;
	const depth = 10;
	const z = depth * -1;

	const root = new Anchor();

	new Cylinder({
		addTo: root,
		color: colors.tree,
		stroke,
		diameter: 10,
		length: 75,
		translate: {
			x: -5 - 10,
			y: -12,
			z: (depth / 2) * -1
		},
		rotate: {
			x: TAU / 4
		}
	});

	const branch = new Box({
		color: colors.log[0],
		rightFace: colors.log[1],
		bottomFace: colors.log[1],
		stroke: 2,
		width: 8,
		height: 8,
		depth: 8
	});

	branch.copy({
		addTo: root,
		translate: {
			x: -10,
			y: -38,
			z: depth / 2
		}
	});

	branch.copy({
		addTo: root,
		translate: {
			x: -21,
			y: -22,
			z: depth * 2 * -1
		}
	});

	const perch = new Shape({
		addTo: root,
		color: colors.perch,
		stroke,
		fill: true,
		path: [
			{ x: -5, y: -5 },
			{
				arc: [
					{ x: -5, y: -10 },
					{ x: -10, y: -10 }
				]
			},
			{ x: -10, y: 5 },
			{
				arc: [
					{ x: -5, y: 5 },
					{ x: -5, y: 0 }
				]
			}
		]
	});

	const claw = new Shape({
		addTo: root,
		color: colors.claw,
		stroke,
		fill: true,
		path: [
			{ x: 0, y: 0 },
			{
				arc: [
					{ x: 0, y: -5 },
					{ x: -5, y: -5 }
				]
			},
			{ x: -5, y: 0 }
		]
	});

	const leg = new Shape({
		addTo: root,
		color: colors.leg,
		stroke,
		fill: true,
		path: [
			{ x: 0, y: 0 },
			{
				arc: [
					{ x: 0, y: -5 },
					{ x: 5, y: -5 }
				]
			},
			{ x: 5, y: 0 }
		]
	});

	new Shape({
		addTo: leg,
		color: colors.belly,
		stroke,
		fill: true,
		path: [
			{ x: 5, y: -10 },
			{ x: 11, y: -10 },
			{ x: 11, y: 3 },
			{
				arc: [
					{ x: 5, y: 3 },
					{ x: 5, y: -3 }
				]
			}
		]
	});

	new Shape({
		addTo: leg,
		color: colors.back,
		stroke,
		fill: true,
		path: [
			{ x: 5, y: -10 },
			{ x: 5, y: -16 },
			{ x: 11, y: -16 },
			{
				arc: [
					{ x: 17, y: -16 },
					{ x: 17, y: -10 }
				]
			},
			{ x: 17, y: 3 },
			{
				arc: [
					{ x: 17, y: 9 },
					{ x: 11, y: 9 }
				]
			},
			{ x: 11, y: -10 }
		]
	});

	new Shape({
		addTo: leg,
		color: colors.chest,
		stroke,
		fill: true,
		path: [
			{ x: 5, y: -10 },
			{
				arc: [
					{ x: -1, y: -10 },
					{ x: -1, y: -16 }
				]
			},
			{ x: -1, y: -22 },
			{
				arc: [
					{ x: -1, y: -25 },
					{ x: 2, y: -25 }
				]
			},
			{
				arc: [
					{ x: 5, y: -25 },
					{ x: 5, y: -22 }
				]
			}
		]
	});

	new Shape({
		addTo: leg,
		color: colors.tail,
		stroke,
		fill: true,
		path: [
			{ x: 11, y: 3 },
			{
				arc: [
					{ x: 5, y: 3 },
					{ x: 5, y: 9 }
				]
			},
			{ x: 5, y: 10 },
			{
				arc: [
					{ x: 5, y: 16 },
					{ x: 11, y: 16 }
				]
			}
		]
	});

	new Shape({
		addTo: leg,
		color: colors.head,
		stroke,
		fill: true,
		path: [
			{ x: -1, y: -22 },
			{
				arc: [
					{ x: -1, y: -28 },
					{ x: 5, y: -28 }
				]
			},
			{
				arc: [
					{ x: 11, y: -28 },
					{ x: 11, y: -22 }
				]
			},
			{
				arc: [
					{ x: 11, y: -16 },
					{ x: 5, y: -16 }
				]
			},
			{ x: 5, y: -22 },
			{
				arc: [
					{ x: 5, y: -25 },
					{ x: 2, y: -25 }
				]
			},
			{
				arc: [
					{ x: -1, y: -25 },
					{ x: -1, y: -22 }
				]
			}
		]
	});

	new Shape({
		addTo: leg,
		color: colors.beak,
		stroke,
		fill: true,
		path: [
			{ x: -1, y: -22 },
			{ x: -5, y: -22 },
			{
				arc: [
					{ x: -10, y: -22 },
					{ x: -10, y: -17 }
				]
			},
			{ x: -1, y: -17 }
		]
	});

	new Shape({
		addTo: leg,
		color: colors.crest,
		stroke,
		fill: true,
		path: [
			{ x: 5, y: -28 },
			{
				arc: [
					{ x: 5, y: -33 },
					{ x: 10, y: -33 }
				]
			},
			{ x: 17, y: -33 },
			{
				arc: [
					{ x: 17, y: -28 },
					{ x: 12, y: -28 }
				]
			}
		]
	});

	new Ellipse({
		addTo: leg,
		color: colors.eye,
		diameter: 3,
		stroke: 1,
		fill: true,
		translate: {
			x: 1,
			y: -21,
			z: 2
		}
	});

	for (const shape of [perch, claw, leg, ...leg.children.slice(0, -1)]) {
		const { color, stroke, fill, path } = shape;
		const [h, s, l] = color.match(/\d+/g);
		const colorShadow = `hsl(${h} ${s}% ${parseFloat(l) * 0.8}%)`;

		for (let i = 0; i < path.length; i++) {
			let pathShadow = [];
			const p1 = path[i];
			const p2 = path[(i + 1) % path.length];

			const p1Arc = Object.hasOwn(p1, "arc");
			const p2Arc = Object.hasOwn(p2, "arc");

			const { x: x1, y: y1 } = p1Arc ? p1.arc[1] : p1;

			if (p2Arc) {
				const { x: xc, y: yc } = p2.arc[0];
				const { x: x2, y: y2 } = p2.arc[1];

				pathShadow = [
					{ x: x1, y: y1, z: 0 },
					{ x: x1, y: y1, z },
					{
						arc: [
							{ x: xc, y: yc, z },
							{ x: x2, y: y2, z }
						]
					},
					{ x: x2, y: y2, z: 0 },
					{
						arc: [
							{ x: xc, y: yc, z: 0 },
							{ x: x1, y: y1, z: 0 }
						]
					}
				];
			} else {
				const { x: x2, y: y2 } = p2;

				pathShadow = [
					{ x: x1, y: y1, z: 0 },
					{ x: x1, y: y1, z },
					{ x: x2, y: y2, z },
					{ x: x2, y: y2, z: 0 }
				];
			}

			new Shape({
				addTo: shape,
				color: colorShadow,
				stroke,
				fill,
				path: pathShadow
			});
		}
	}

	const element = document.querySelector("canvas");
	const context = element.getContext("2d");
	const { width, height } = element;
	const zoom = 4.8;

	context.lineJoin = "round";
	context.lineCap = "round";

	const render = () => {
		context.clearRect(0, 0, width, height);
		context.save();
		context.translate(width / 2, height / 2);
		context.scale(zoom, zoom);
		root.renderGraphCanvas(context);
		context.restore();
	};

	root.rotate.y = 0.2;
	root.rotate.x = 0.12;
	root.translate.y = 12;

	root.updateGraph();
	render();

	const input = document.querySelector('input[type="range"]');

	let state = "wait";
	let frame = null;
	let offset = 0;
	let ticker = 0;
	let cycle = 40;
	const getCycle = (offset) => 40 + 40 * Math.abs(offset);
	const angle = TAU / 9;

	const update = (value) => {
		leg.rotate.z = angle * value;

		root.updateGraph();
		render();
	};

	const reset = () => {
		ticker++;
		if (ticker >= cycle) {
			ticker = 0;
			input.value = 0;
			update(0);

			state = "wait";
			cancelAnimationFrame(frame);
		} else {
			const value = (1 - bounceOut(ticker / cycle)) * offset;
			input.value = value;
			update(value);

			frame = requestAnimationFrame(reset);
		}
	};

	function handleInput(e) {
		if (state === "reset") {
			state = "wait";
			cancelAnimationFrame(frame);

			ticker = 0;
		}

		const value = parseFloat(e.target.value);
		update(value);
	}

	function handleReset(e) {
		if (state === "reset") return;

		const value = parseFloat(e.target.value);

		if (value === 0) return;

		offset = value;
		cycle = getCycle(offset);

		state = "reset";
		frame = requestAnimationFrame(reset);
	}

	input.removeAttribute("disabled");
	input.addEventListener("input", handleInput);
	input.addEventListener("pointerup", handleReset);
	input.addEventListener("blur", handleReset);
})();