// 

import Vue from 'vue'



export default {

	data() {
		return {
			search: '',
			headers: [
				{ text: 'Name', value: 'name', align: 'left' },
				{ text: 'Type', value: 'type', align: 'left' },
				{ text: 'Reader', value: 'reader', align: 'left' },
			],
		}
	},

	computed: {

		items() {
			return this.$store.state.accessLevels.map((accessLevel, index) => {
				let reader = this.$store.state.readers.find(v => v.id == accessLevel.readerId) || {}
				let type = this.$store.state.readerTypes.find(v => v.id == reader.typeId) || {}
				return {
					name: accessLevel.name,
					reader: reader.name,
					type: type.name,
				}
			})
		},

	},



}


