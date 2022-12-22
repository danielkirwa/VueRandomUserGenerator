const app = Vue.createApp({
	
	data(){
		return{
			Photo: '',
			FirstName: '',
			LastName: '',
			Email: '',
			Phone: '',
			Gender: '',
			YoB: '',
			ID: '',
			Country: '',
			City: '',
			Title: '',
			Password: '',



		}
	},
	methods:{
		async getnew(){
			const res = await fetch('https://randomuser.me/api')
			const { results } = await res.json()
            //console.log(results)
           this.FirstName = results[0].name.first
           this.LastName = results[0].name.last
           this.Photo = results[0].picture.large
            this.Email = results[0].email 
			this.Phone = results[0].phone
			this.Gender = results[0].gender
			this.YoB = results[0].dob.date 
			this.ID = results[0].id.value 
			this.Country = results[0].location.country 
			this.City = results[0]. location.city
			this.Title = results[0].name.title 
			this.Password = results[0].login.password
		},
	},
})
app.mount('#app')