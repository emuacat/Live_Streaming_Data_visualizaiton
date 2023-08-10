import Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :consumer, ConsumerWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "zllQ/Ef2WHke12GbcIhacaMxpqhjSMWmI5lojU8Mei8rLHN3xzcui7RAlG6wz7wf",
  server: false

# In test we don't send emails.
config :consumer, Consumer.Mailer,
  adapter: Swoosh.Adapters.Test

# Print only warnings and errors during test
config :logger, level: :warn

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
