const version = "v3.4.1";
const project = "frontend-v2";

module.exports = {
  version,
  project,
  api: {
    submitParams: {
      source: project,
      version
    }
  },
  authorization: {
    userId: {
      cookieKey: "userID"
    }
  },
  cdn: {
    cn: "https://penguin.upyun.galvincdn.com",
    global: "https://penguin-stats.s3.amazonaws.com"
  },
  advancedQuery: {
    maxQueries: 5,
  },
  randomBackground: {
    limit: 3,
    max: 446
  },
  previewCard: {
    item: {
      pagination: 5
    }
  },
  servers: ["CN", "US", "JP", "KR"]
}