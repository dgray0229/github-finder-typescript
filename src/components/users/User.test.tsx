import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import renderer from "react-test-renderer";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import User from './User';

Enzyme.configure({ adapter: new Adapter() })

let wrapper: any = null

let getUser
let props: any = {
    loading: false,
    user: {
        avatar_url:"https://avatars0.githubusercontent.com/u/1?v=4",
        events_url:"https://api.github.com/users/mojombo/events{/privacy}",
        followers_url:"https://api.github.com/users/mojombo/followers",
        following_url:"https://api.github.com/users/mojombo/following{/other_user}",
        gists_url:"https://api.github.com/users/mojombo/gists{/gist_id}",
        gravatar_id:"",
        html_url:"https://github.com/mojombo",
        id:1,
        login:"mojombo",
        node_id:"MDQ6VXNlcjE=",
        organizations_url:"https://api.github.com/users/mojombo/orgs",
        received_events_url:"https://api.github.com/users/mojombo/received_events",
        repos_url:"https://api.github.com/users/mojombo/repos",
        site_admin:false,
        starred_url:"https://api.github.com/users/mojombo/starred{/owner}{/repo}",
        subscriptions_url:"https://api.github.com/users/mojombo/subscriptions",
        type:"User",
        url:"https://api.github.com/users/mojombo", 
    },
    repos: [
        {
            "repo": {
              "id": 156953038,
              "node_id": "MDEwOlJlcG9zaXRvcnkxNTY5NTMwMzg=",
              "name": "docz-website",
              "full_name": "mojombo/docz-website",
              "private": false,
              "owner": "{avatar_url: \"https://avatars0.githubusercontent.co…}",
              "html_url": "https://github.com/mojombo/docz-website",
              "description": null,
              "fork": true,
              "url": "https://api.github.com/repos/mojombo/docz-website",
              "forks_url": "https://api.github.com/repos/mojombo/docz-website/forks",
              "keys_url": "https://api.github.com/repos/mojombo/docz-website/keys{/key_id}",
              "collaborators_url": "https://api.github.com/repos/mojombo/docz-website/collaborators{/collaborator}",
              "teams_url": "https://api.github.com/repos/mojombo/docz-website/teams",
              "hooks_url": "https://api.github.com/repos/mojombo/docz-website/hooks",
              "issue_events_url": "https://api.github.com/repos/mojombo/docz-website/issues/events{/number}",
              "events_url": "https://api.github.com/repos/mojombo/docz-website/events",
              "assignees_url": "https://api.github.com/repos/mojombo/docz-website/assignees{/user}",
              "branches_url": "https://api.github.com/repos/mojombo/docz-website/branches{/branch}",
              "tags_url": "https://api.github.com/repos/mojombo/docz-website/tags",
              "blobs_url": "https://api.github.com/repos/mojombo/docz-website/git/blobs{/sha}",
              "git_tags_url": "https://api.github.com/repos/mojombo/docz-website/git/tags{/sha}",
              "git_refs_url": "https://api.github.com/repos/mojombo/docz-website/git/refs{/sha}",
              "trees_url": "https://api.github.com/repos/mojombo/docz-website/git/trees{/sha}",
              "statuses_url": "https://api.github.com/repos/mojombo/docz-website/statuses/{sha}",
              "languages_url": "https://api.github.com/repos/mojombo/docz-website/languages",
              "stargazers_url": "https://api.github.com/repos/mojombo/docz-website/stargazers",
              "contributors_url": "https://api.github.com/repos/mojombo/docz-website/contributors",
              "subscribers_url": "https://api.github.com/repos/mojombo/docz-website/subscribers",
              "subscription_url": "https://api.github.com/repos/mojombo/docz-website/subscription",
              "commits_url": "https://api.github.com/repos/mojombo/docz-website/commits{/sha}",
              "git_commits_url": "https://api.github.com/repos/mojombo/docz-website/git/commits{/sha}",
              "comments_url": "https://api.github.com/repos/mojombo/docz-website/comments{/number}",
              "issue_comment_url": "https://api.github.com/repos/mojombo/docz-website/issues/comments{/number}",
              "contents_url": "https://api.github.com/repos/mojombo/docz-website/contents/{+path}",
              "compare_url": "https://api.github.com/repos/mojombo/docz-website/compare/{base}...{head}",
              "merges_url": "https://api.github.com/repos/mojombo/docz-website/merges",
              "archive_url": "https://api.github.com/repos/mojombo/docz-website/{archive_format}{/ref}",
              "downloads_url": "https://api.github.com/repos/mojombo/docz-website/downloads",
              "issues_url": "https://api.github.com/repos/mojombo/docz-website/issues{/number}",
              "pulls_url": "https://api.github.com/repos/mojombo/docz-website/pulls{/number}",
              "milestones_url": "https://api.github.com/repos/mojombo/docz-website/milestones{/number}",
              "notifications_url": "https://api.github.com/repos/mojombo/docz-website/notifications{?since,all,participating}",
              "labels_url": "https://api.github.com/repos/mojombo/docz-website/labels{/name}",
              "releases_url": "https://api.github.com/repos/mojombo/docz-website/releases{/id}",
              "deployments_url": "https://api.github.com/repos/mojombo/docz-website/deployments",
              "created_at": "2018-11-10T06:07:54Z",
              "updated_at": "2020-01-16T15:05:41Z",
              "pushed_at": "2018-11-10T06:28:05Z",
              "git_url": "git://github.com/mojombo/docz-website.git",
              "ssh_url": "git@github.com:mojombo/docz-website.git",
              "clone_url": "https://github.com/mojombo/docz-website.git",
              "svn_url": "https://github.com/mojombo/docz-website",
              "homepage": null,
              "size": 1360,
              "stargazers_count": 1,
              "watchers_count": 1,
              "language": "TypeScript",
              "has_issues": false,
              "has_projects": true,
              "has_downloads": true,
              "has_wiki": true,
              "has_pages": false,
              "forks_count": 0,
              "mirror_url": null,
              "archived": false,
              "disabled": false,
              "open_issues_count": 0,
              "license": null,
              "forks": 0,
              "open_issues": 0,
              "watchers": 1,
            }
          }
    ],
    match: {
        isExact: true,
        params: {
        login: "mojombo"
        }
    },
    getUser: jest.fn(x => props.user.login),
    getUserRepos: jest.fn(x => props.user.repos),
}

getUser = async (login: string):Promise<void> => {
    
}



beforeEach(() => {
    wrapper = shallow(<User {...props} />)
  })


describe("User Component", () => {
    test('renders successfully', () => {
        expect(wrapper.exists()).toBe(true)
      });  
    test ("Has Results", () => {
        wrapper.find('.container', {}, (results: Array<{}>) => {
            expect(results.length).toBeGreaterThan(0)
        })
    });
});