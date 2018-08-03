import {GithubApiService} from './GithubApiService';
import { User } from './User';
import {Repo} from './Repo';

import _ from 'lodash';
let svc=new GithubApiService();

if(process.argv.length<3)
console.log("please pass user name as argument");
else{
let username=process.argv[2];
svc.getUserInfo(username,(user:User)=>{
    svc.getRepos(username,(repos:Repo[])=>{
     let sortedRepos=_.sortBy(repos,(repo:Repo)=>repo.forkCount*-1);
     let filteredRepos=_.take(sortedRepos,5);
     user.repos=repos;
        console.log(user);
    });
});
}

