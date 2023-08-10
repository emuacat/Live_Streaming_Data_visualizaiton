import {Socket} from "phoenix"
import RealtimeLineChart from './line_chart'

let socket = new Socket("/socket", {params: {token: window.userToken}})

socket.connect()

let chart = new RealtimeLineChart(document.getElementById('chart-canvas'));

let channel = socket.channel("memory:latest", {})
channel.join()
  .receive("ok", resp => { console.log("Joined successfully", resp) })
  .receive("error", resp => { console.log("Unable to join", resp) })

channel.on("memory:latest:new", (event) => chart.newPoints(event.label, event.value))

export default socket
