import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
	moduleId: module.id,
	selector: 'user',
	templateUrl:'user.component.html',
	providers: [PostsService]
})
export class UserComponent  { 
	name: string; 
	email: string;
	address: address;
	hobbies: string[];
	showHobbies: boolean;
	posts: Post[];

	constructor(private postsService: PostsService){
		this.name = 'Ramanuj Prasad'; 
		this.email="pd.ramanuj@gmail.com",
		this.address = {
			street: '295 Groenhof',
			city: 'Amstelveen',
			state: 'NL'
		}
		this.hobbies =['Cooking', 'Reading', 'Traveling']
		this.showHobbies= false;
		this.postsService.getPost().subscribe(posts=>{
			this.posts=posts;
		})
	}
	toggleHobbies() {
		if(this.showHobbies==true){
			this.showHobbies= false;
		} else {
			this.showHobbies=true;
		}
	}
	addHobby(hobby:any){
		this.hobbies.push(hobby);
	}
	deleteHobby(i:any){
		this.hobbies.splice(i,1);
	}

}

interface address {
	street: string;
	city: string;
	state:string;
}

interface Post {
	id: number;
	title: string;
	body:string;
}
