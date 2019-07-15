export const state = () => ({
	fileid: 0,
	file: {
		name: 'defalt',
		content: 'defalt'
	}
});

export const mutations = {
	increment(state) {
		state.counter++;
	},
	setfileid(state, id) {
		state.fileid = id;
	},
	setfile(state, file) {
		state.file = file;
	}
};
