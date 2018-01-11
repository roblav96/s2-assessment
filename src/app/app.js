// 

import Vue from 'vue'



export default {

	mounted() {
		this.$refs.search_input.focus()
	},

	data() {
		return {
			drawer: false,
			editingId: -1,
			editing: {},
			saving: false,
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
			return this.$store.state.accessLevels.map(accessLevel => {
				let reader = this.$store.state.readers.find(v => v.id == accessLevel.readerId) || {}
				let type = this.$store.state.readerTypes.find(v => v.id == reader.typeId) || {}
				return {
					id: accessLevel.id,
					name: accessLevel.name,
					reader: reader.name,
					type: type.name,
				}
			})
		},

	},

	methods: {

		setEditing(item) {
			this.drawer = true
			this.editingId = item.id
			this.editing = Object.assign({}, item)
			this.$refs.editing_name.focus()
		},

		saveChanges() {
			this.saving = true

			// simulate sending changes to backend
			setTimeout(editing => {
				let accessLevel = this.$store.state.accessLevels.find(v => v.id == editing.id) || {}
				Object.assign(accessLevel, editing)

				let reader = this.$store.state.readers.find(v => v.id == accessLevel.readerId) || {}
				let type = this.$store.state.readerTypes.find(v => v.id == reader.typeId) || {}

				this.saving = false
				this.drawer = false

			}, 1000, this.editing)
		}

	},



}









