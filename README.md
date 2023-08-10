# Visualizing Live Streaming Data with Elixir, Kafka, and Chart.js

Develop real-time web applications using Elixir, Kafka, and Chart.js to visualize streaming data dynamically.

## Features:
- Use WebSockets in Elixir for real-time data transfer.
- Implement channels in Elixir for soft real-time functionality.
- Plot data in a dynamic manner using Chart.js.

## Project Overview:
In this project, we use Kafka, a widely-adopted message streaming service, in conjunction with two Elixir applications. Kafka has two primary components: the producer (which sends messages) and the consumer (which receives them). We'll leverage the Kaffe library as a wrapper to interface between Kafka and our Elixir code.

Our journey begins with setting up Kafka and Zookeeper servers. We then dive into the creation of a producer application responsible for sending crucial system data like CPU utilization percentage and memory usage. After setting the producer in motion, we'll modify a pre-existing consumer application to grab these messages. The cherry on top is the real-time visualization of this data using Chart.js.

## Project Tasks:

### 1. Start Zookeeper and Kafka
   - **Task 0**: Start Zookeeper
   - **Task 1**: Start the Kafka Server

### 2. Configure the Producer
   - **Task 2**: Add the Application
   - **Task 3**: Produce Messages

### 3. Configure the Consumer
   - **Task 4**: Create a Socket
   - **Task 5**: Create a Channel
   - **Task 6**: Receive Messages
   - **Task 7**: Modify the Template

### 4. Plot Data in Real-Time
   - **Task 8**: Create a Chart
   - **Task 9**: Prevent Duplicate Labels
   - **Task 10**: Distinguish the Data
   - **Task 11**: Create New Labels
   - **Task 12**: Add New Points to the Chart
   - **Task 13**: Add the Event Handler

### 5. Run the Applications
   - **Task 14**: Run the Producer and Consumer

## Core Concepts Covered:
   - Web Development
   - Message Broker Architecture
   - Distributed Message-based Architecture
   - Kafka
   - Elixir
   - Phoenix
   - Chart.js
   - JavaScript

## Getting Started:
Provide here the installation steps, requirements, and any other necessary instructions a developer would need to get the project up and running.

