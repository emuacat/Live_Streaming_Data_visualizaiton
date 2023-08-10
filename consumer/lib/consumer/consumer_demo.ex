defmodule ConsumerDemo do
  def handle_message(%{key: key, value: value} = message) do
    IO.puts "#{key}: #{value}"
    ConsumerWeb.Endpoint.broadcast!("memory:latest", "memory:latest:new", %{label: key, value: value})
    :ok
  end
end
