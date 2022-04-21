let SummarizerManager = require("node-summarizer").SummarizerManager;
let Summarizer = new SummarizerManager(``, 1);
let summary = Summarizer.getSummaryByFrequency().summary;

console.log(summary);