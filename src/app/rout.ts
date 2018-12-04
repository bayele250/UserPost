import { Routes } from "@angular/router";
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './users/user-detail/user-detail.component';
import {PostsComponent} from './posts/posts.component';
import {AppComponent} from './app.component';
import {NewPostComponent} from './posts/new-post/new-post.component'
export const appRoutes: Routes=[
    {path: 'home', component: AppComponent},
    
    {path: 'user', component: UsersComponent},

    {path: 'user/:id', component: UserDetailComponent},
    {path: 'post', component: PostsComponent},
    {path: 'post/new', component: NewPostComponent},
    { path:'', redirectTo:'/home', pathMatch: 'full' }
];