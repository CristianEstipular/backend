const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log('Routes loaded:');
  console.log(require("./routes/Incidentroute.js"));
});