const categories = [
	{
		id: 1,
		name: 'Frontend courses',
		slug: 'frontend',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et magna id magna rutrum cursus. Sed vestibulum ante porta blandit mattis. Nullam eget neque id neque porta egestas quis quis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac leo ante. Aliquam egestas, arcu vitae porta efficitur, nunc lacus tincidunt nunc, eget pharetra risus erat vitae diam. Praesent magna lacus, bibendum a lorem ac, volutpat auctor sapien. Suspendisse potenti. Praesent congue justo massa, id vulputate erat vehicula vitae. Curabitur tincidunt massa eu tellus pulvinar lacinia. Donec condimentum, ex ut faucibus hendrerit, arcu mauris egestas diam, in suscipit nisi nisi sit amet lorem. Vivamus tristique orci finibus libero posuere, in vestibulum ante egestas. Nunc sit amet fermentum urna. Sed ut ligula non lorem tristique laoreet id ac urna.',
		image: '/public/frontend/frontend.jpg',
		courses: [
			{
				id: 1,
				name: 'Vue.js + Vuex, base course',
				slug: 'vue_vuex_base',
				image: '/public/frontend/vue_vuex_base.jpg',
				price: 10000,
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et magna id magna rutrum cursus. Sed vestibulum ante porta blandit mattis. Nullam eget neque id neque porta egestas quis quis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac leo ante. Aliquam egestas, arcu vitae porta efficitur, nunc lacus tincidunt nunc, eget pharetra risus erat vitae diam. Praesent magna lacus, bibendum a lorem ac, volutpat auctor sapien. Suspendisse potenti. Praesent congue justo massa, id vulputate erat vehicula vitae. Curabitur tincidunt massa eu tellus pulvinar lacinia. Donec condimentum, ex ut faucibus hendrerit, arcu mauris egestas diam, in suscipit nisi nisi sit amet lorem. Vivamus tristique orci finibus libero posuere, in vestibulum ante egestas. Nunc sit amet fermentum urna. Sed ut ligula non lorem tristique laoreet id ac urna.'
			},
			{
				id: 2,
				name: 'Nuxt.js',
				slug: 'nuxt_js',
				image: '/public/frontend/nuxt_js.jpg',
				price: 12000,
				description: 'Donec tempus rutrum molestie. Donec quis magna ut eros fringilla suscipit et ac orci. Curabitur eget purus quis augue dictum eleifend quis vel lectus. Maecenas tempus libero ut metus pharetra auctor. Nunc id tempus nibh. Donec interdum lobortis odio, et ultrices lectus consectetur pulvinar. Aenean varius eros erat, ut tempor sem feugiat ac. Fusce tempor sapien dolor, nec ornare ex pharetra vitae. Vivamus pharetra leo lacus, ultricies consequat purus aliquet vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque consectetur turpis lorem, eu auctor nunc tincidunt in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vestibulum malesuada urna, eu lobortis massa tincidunt eget. Fusce arcu felis, consequat id augue posuere, tincidunt interdum nulla. Mauris quis elit nisl.'
			},
			{
				id: 3,
				name: 'React.js, base course',
				slug: 'react_base',
				image: '/public/frontend/react_base.jpg',
				price: 10000,
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et magna id magna rutrum cursus. Sed vestibulum ante porta blandit mattis. Nullam eget neque id neque porta egestas quis quis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac leo ante. Aliquam egestas, arcu vitae porta efficitur, nunc lacus tincidunt nunc, eget pharetra risus erat vitae diam. Praesent magna lacus, bibendum a lorem ac, volutpat auctor sapien. Suspendisse potenti. Praesent congue justo massa, id vulputate erat vehicula vitae. Curabitur tincidunt massa eu tellus pulvinar lacinia. Donec condimentum, ex ut faucibus hendrerit, arcu mauris egestas diam, in suscipit nisi nisi sit amet lorem. Vivamus tristique orci finibus libero posuere, in vestibulum ante egestas. Nunc sit amet fermentum urna. Sed ut ligula non lorem tristique laoreet id ac urna.'
			},
			{
				id: 4,
				name: 'React + Redux',
				slug: 'react_redux',
				image: '/public/frontend/react_redux.jpg',
				price: 14000,
				description: 'Donec tempus rutrum molestie. Donec quis magna ut eros fringilla suscipit et ac orci. Curabitur eget purus quis augue dictum eleifend quis vel lectus. Maecenas tempus libero ut metus pharetra auctor. Nunc id tempus nibh. Donec interdum lobortis odio, et ultrices lectus consectetur pulvinar. Aenean varius eros erat, ut tempor sem feugiat ac. Fusce tempor sapien dolor, nec ornare ex pharetra vitae. Vivamus pharetra leo lacus, ultricies consequat purus aliquet vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque consectetur turpis lorem, eu auctor nunc tincidunt in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vestibulum malesuada urna, eu lobortis massa tincidunt eget. Fusce arcu felis, consequat id augue posuere, tincidunt interdum nulla. Mauris quis elit nisl.'
			},
			{
				id: 5,
				name: 'Next.js + Typescript',
				slug: 'next_typescript',
				image: '/public/frontend/next_typescript.jpg',
				price: 16000,
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et magna id magna rutrum cursus. Sed vestibulum ante porta blandit mattis. Nullam eget neque id neque porta egestas quis quis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac leo ante. Aliquam egestas, arcu vitae porta efficitur, nunc lacus tincidunt nunc, eget pharetra risus erat vitae diam. Praesent magna lacus, bibendum a lorem ac, volutpat auctor sapien. Suspendisse potenti. Praesent congue justo massa, id vulputate erat vehicula vitae. Curabitur tincidunt massa eu tellus pulvinar lacinia. Donec condimentum, ex ut faucibus hendrerit, arcu mauris egestas diam, in suscipit nisi nisi sit amet lorem. Vivamus tristique orci finibus libero posuere, in vestibulum ante egestas. Nunc sit amet fermentum urna. Sed ut ligula non lorem tristique laoreet id ac urna.'
			}
		]
	},
	{
		id: 2,
		name: 'Backend courses',
		slug: 'backend',
		description: 'Donec tempus rutrum molestie. Donec quis magna ut eros fringilla suscipit et ac orci. Curabitur eget purus quis augue dictum eleifend quis vel lectus. Maecenas tempus libero ut metus pharetra auctor. Nunc id tempus nibh. Donec interdum lobortis odio, et ultrices lectus consectetur pulvinar. Aenean varius eros erat, ut tempor sem feugiat ac. Fusce tempor sapien dolor, nec ornare ex pharetra vitae. Vivamus pharetra leo lacus, ultricies consequat purus aliquet vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque consectetur turpis lorem, eu auctor nunc tincidunt in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vestibulum malesuada urna, eu lobortis massa tincidunt eget. Fusce arcu felis, consequat id augue posuere, tincidunt interdum nulla. Mauris quis elit nisl.',
		image: '/public/backend/backend.jpg',
		courses: [
			{
				id: 1,
				name: 'Node.js - base course',
				slug: 'node_base',
				image: '/public/backend/node_base.jpg',
				price: 10000,
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et magna id magna rutrum cursus. Sed vestibulum ante porta blandit mattis. Nullam eget neque id neque porta egestas quis quis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac leo ante. Aliquam egestas, arcu vitae porta efficitur, nunc lacus tincidunt nunc, eget pharetra risus erat vitae diam. Praesent magna lacus, bibendum a lorem ac, volutpat auctor sapien. Suspendisse potenti. Praesent congue justo massa, id vulputate erat vehicula vitae. Curabitur tincidunt massa eu tellus pulvinar lacinia. Donec condimentum, ex ut faucibus hendrerit, arcu mauris egestas diam, in suscipit nisi nisi sit amet lorem. Vivamus tristique orci finibus libero posuere, in vestibulum ante egestas. Nunc sit amet fermentum urna. Sed ut ligula non lorem tristique laoreet id ac urna.'
			},
			{
				id: 2,
				name: 'Node.js + Express + MongoDB',
				slug: 'node_express_mongo',
				image: '/public/backend/node_express_mongo.jpg',
				price: 14000,
				description: 'Donec tempus rutrum molestie. Donec quis magna ut eros fringilla suscipit et ac orci. Curabitur eget purus quis augue dictum eleifend quis vel lectus. Maecenas tempus libero ut metus pharetra auctor. Nunc id tempus nibh. Donec interdum lobortis odio, et ultrices lectus consectetur pulvinar. Aenean varius eros erat, ut tempor sem feugiat ac. Fusce tempor sapien dolor, nec ornare ex pharetra vitae. Vivamus pharetra leo lacus, ultricies consequat purus aliquet vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque consectetur turpis lorem, eu auctor nunc tincidunt in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vestibulum malesuada urna, eu lobortis massa tincidunt eget. Fusce arcu felis, consequat id augue posuere, tincidunt interdum nulla. Mauris quis elit nisl.'
			},
			{
				id: 3,
				name: 'Nest.js',
				slug: 'nest',
				image: '/public/backend/nest.jpg',
				price: 18000,
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et magna id magna rutrum cursus. Sed vestibulum ante porta blandit mattis. Nullam eget neque id neque porta egestas quis quis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac leo ante. Aliquam egestas, arcu vitae porta efficitur, nunc lacus tincidunt nunc, eget pharetra risus erat vitae diam. Praesent magna lacus, bibendum a lorem ac, volutpat auctor sapien. Suspendisse potenti. Praesent congue justo massa, id vulputate erat vehicula vitae. Curabitur tincidunt massa eu tellus pulvinar lacinia. Donec condimentum, ex ut faucibus hendrerit, arcu mauris egestas diam, in suscipit nisi nisi sit amet lorem. Vivamus tristique orci finibus libero posuere, in vestibulum ante egestas. Nunc sit amet fermentum urna. Sed ut ligula non lorem tristique laoreet id ac urna.'
			}
		]
	},
	{
		id: 3,
		name: 'Common courses',
		slug: 'common',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et magna id magna rutrum cursus. Sed vestibulum ante porta blandit mattis. Nullam eget neque id neque porta egestas quis quis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac leo ante. Aliquam egestas, arcu vitae porta efficitur, nunc lacus tincidunt nunc, eget pharetra risus erat vitae diam. Praesent magna lacus, bibendum a lorem ac, volutpat auctor sapien. Suspendisse potenti. Praesent congue justo massa, id vulputate erat vehicula vitae. Curabitur tincidunt massa eu tellus pulvinar lacinia. Donec condimentum, ex ut faucibus hendrerit, arcu mauris egestas diam, in suscipit nisi nisi sit amet lorem. Vivamus tristique orci finibus libero posuere, in vestibulum ante egestas. Nunc sit amet fermentum urna. Sed ut ligula non lorem tristique laoreet id ac urna.',
		image: '/public/common/common.jpg',
		courses: [
			{
				id: 1,
				name: 'JavaScript',
				slug: 'java_script',
				image: '/public/common/java_script.jpg',
				price: 16000,
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et magna id magna rutrum cursus. Sed vestibulum ante porta blandit mattis. Nullam eget neque id neque porta egestas quis quis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac leo ante. Aliquam egestas, arcu vitae porta efficitur, nunc lacus tincidunt nunc, eget pharetra risus erat vitae diam. Praesent magna lacus, bibendum a lorem ac, volutpat auctor sapien. Suspendisse potenti. Praesent congue justo massa, id vulputate erat vehicula vitae. Curabitur tincidunt massa eu tellus pulvinar lacinia. Donec condimentum, ex ut faucibus hendrerit, arcu mauris egestas diam, in suscipit nisi nisi sit amet lorem. Vivamus tristique orci finibus libero posuere, in vestibulum ante egestas. Nunc sit amet fermentum urna. Sed ut ligula non lorem tristique laoreet id ac urna.'
			},
			{
				id: 2,
				name: 'TypeScript',
				slug: 'type_script',
				image: '/public/common/type_script.jpg',
				price: 18000,
				description: 'Donec tempus rutrum molestie. Donec quis magna ut eros fringilla suscipit et ac orci. Curabitur eget purus quis augue dictum eleifend quis vel lectus. Maecenas tempus libero ut metus pharetra auctor. Nunc id tempus nibh. Donec interdum lobortis odio, et ultrices lectus consectetur pulvinar. Aenean varius eros erat, ut tempor sem feugiat ac. Fusce tempor sapien dolor, nec ornare ex pharetra vitae. Vivamus pharetra leo lacus, ultricies consequat purus aliquet vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque consectetur turpis lorem, eu auctor nunc tincidunt in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vestibulum malesuada urna, eu lobortis massa tincidunt eget. Fusce arcu felis, consequat id augue posuere, tincidunt interdum nulla. Mauris quis elit nisl.'
			},
			{
				id: 3,
				name: 'Git for developers',
				slug: 'git',
				image: '/public/common/git.jpg',
				price: 4000,
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et magna id magna rutrum cursus. Sed vestibulum ante porta blandit mattis. Nullam eget neque id neque porta egestas quis quis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac leo ante. Aliquam egestas, arcu vitae porta efficitur, nunc lacus tincidunt nunc, eget pharetra risus erat vitae diam. Praesent magna lacus, bibendum a lorem ac, volutpat auctor sapien. Suspendisse potenti. Praesent congue justo massa, id vulputate erat vehicula vitae. Curabitur tincidunt massa eu tellus pulvinar lacinia. Donec condimentum, ex ut faucibus hendrerit, arcu mauris egestas diam, in suscipit nisi nisi sit amet lorem. Vivamus tristique orci finibus libero posuere, in vestibulum ante egestas. Nunc sit amet fermentum urna. Sed ut ligula non lorem tristique laoreet id ac urna.'
			}
		]
	}
]
