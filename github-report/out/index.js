"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var lodash_1 = __importDefault(require("lodash"));
var svc = new GithubApiService_1.GithubApiService();
if (process.argv.length < 3)
    console.log("please pass user name as argument");
else {
    var username_1 = process.argv[2];
    svc.getUserInfo(username_1, function (user) {
        svc.getRepos(username_1, function (repos) {
            var sortedRepos = lodash_1.default.sortBy(repos, function (repo) { return repo.forkCount * -1; });
            var filteredRepos = lodash_1.default.take(sortedRepos, 5);
            user.repos = repos;
            console.log(user);
        });
    });
}
