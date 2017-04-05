const StORAGE_KEY = 'totos-vue.js'
export default{
	fetch () {
		return JSON.parse(window.localStorage.getItem(
			StORAGE_KEY) || '[]')
	},
	save: function (items) {
		window.localStorage.setItem(StORAGE_KEY, JSON.stringify(
			items))
	}
}