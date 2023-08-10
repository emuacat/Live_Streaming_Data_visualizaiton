defmodule Consumer.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    import Supervisor.Spec
    children = [
      # Start the Telemetry supervisor
      ConsumerWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: Consumer.PubSub},
      # Start the Endpoint (http/https)
      ConsumerWeb.Endpoint,
      # Start the consumer process
      worker(Kaffe.Consumer, [])
      # Start a worker by calling: Consumer.Worker.start_link(arg)
      # {Consumer.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Consumer.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    ConsumerWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
