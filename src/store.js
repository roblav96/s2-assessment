// 

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
	strict: false,
	state: {

		accessLevels: [{
			"id": 1,
			"name": "Morning 9:00 - 10:00",
			"readerId": 10,
			"description": "Morning Front door Access"
		}, {
			"id": 2,
			"name": "Morning 10:00 - 11:00",
			"readerId": 11,
			"description": ""
		}, {
			"id": 3,
			"name": "Morning 11:00 - 12:00",
			"readerId": 12,
			"description": ""
		}, {
			"id": 4,
			"name": "Evening 3:00 - 4:00",
			"readerId": 13,
			"description": ""
		}, {
			"id": 5,
			"name": "Evening5:00 - 6:00",
			"readerId": 14,
			"description": ""
		}, {
			"id": 6,
			"name": "All Day Elevator",
			"readerId": 15,
			"description": ""
		}, {
			"id": 7,
			"name": "All Day Back Door",
			"readerId": 16,
			"description": ""
		}, {
			"id": 8,
			"name": "All Day Supply Door",
			"readerId": 17,
			"description": ""
		}],

		readers: [{
			"id": 10,
			"typeId": 1,
			"name": "Reader F1"
		}, {
			"id": 11,
			"typeId": 1,
			"name": "Reader F2"
		}, {
			"id": 12,
			"typeId": 1,
			"name": "Reader F3"
		}, {
			"id": 13,
			"typeId": 1,
			"name": "Reader F4"
		}, {
			"id": 14,
			"typeId": 1,
			"name": "Reader F5"
		}, {
			"id": 15,
			"typeId": 2,
			"name": "Reader E"
		}, {
			"id": 16,
			"typeId": 3,
			"name": "Reader B"
		}, {
			"id": 17,
			"typeId": 4,
			"name": "Reader S"
		}],

		readerTypes: [{
			"id": 1,
			"name": "Front Door"
		}, {
			"id": 2,
			"name": "Elevator Door"
		}, {
			"id": 3,
			"name": "Back Door"
		}, {
			"id": 4,
			"name": "Supply Door"
		}],

	}
})


