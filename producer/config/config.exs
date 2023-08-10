import Config

config :kaffe,
  producer: [
    endpoints: [localhost: 9092],
    topics: ["topic_1"]
  ]
