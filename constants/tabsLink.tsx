const tabsLink = [
  {
    id: 1,
    route: "index",
    name: "Home",
  },
  {
    id: 2,
    route: "prime",
    name: "Prime",
  },
  {
    id: 3,
    route: "subscriptions",
    name: "Subscriptions",
  },
  {
    id: 4,
    route: "downloads",
    name: "Download",
  },
  {
    id: 5,
    route: "search",
    name: "Search",
  },
  {
    id: 6,
    route: "movie/[id]",
    name: "Search",
  },
  {
    id: 7,
    route: "tv/[id]/[season]",
    name: "Search",
  },
];

export const notOnTab = ["movie/[id]", "tv/[id]/[season]"];

export default tabsLink;
