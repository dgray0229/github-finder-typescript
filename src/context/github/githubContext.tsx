import { createContext } from "react";

export type RepoContext = {
  id: string;
  html_url: string;
  name: string;
};

export type UserContext = {
      login: string,
      id: number,
      avatar_url: string,
      html_url: string,
      name?: string,
      location?: string,
      bio?: string,
      blog?: string,
      company?: string,
      followers?: string,
      following?: string,
      public_repos?: string,
      public_gists?: string,
      hireable?: string,
};

export type GithubState = {
  users: UserContext[],
  user: UserContext | {},
  repos: RepoContext[],
  loading: boolean,
};

export type GithubMethods = {
  searchUsers: (query: string) => Promise<void>;
  getUsers: () => Promise<void>;
  getUser: (login: string) => Promise<void>;
  getUserRepos: (login: string) => Promise<void>;
  clearUsers: () => void;
};

export interface GithubContextInterface
  extends GithubState,
    Partial<GithubMethods> {}

const defaultContext: GithubState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
};

const githubContext = createContext<GithubContextInterface>(defaultContext);

export default githubContext;
