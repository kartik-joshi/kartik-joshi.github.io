/*
  Featured projects.
  To add a project, copy one block below, paste it where you want it in the list
  (cards render in this order), and edit the fields. Nothing else needs to change.

  Fields:
    title     Project name.
    summary   One or two sentences: what it does and why it matters.
    results   Short, measured facts. Keep every number traceable to the repo's README.
    stack     Main technologies, shown as small tags.
    links     Any number of { label, url } pairs. The first one is styled as the primary link.
*/
window.PROJECTS = [
  {
    title: "NeighbourBrief TO",
    summary:
      "Turns Toronto Police Service open data into plain-language, multilingual neighbourhood safety bulletins. Code computes every count, a language model only writes the sentences, and nothing is published unless every number in every language matches the data.",
    results: [
      "450 counts on 18 neighbourhood profiles matched the TPS portal's own queries",
      "Translation into 23 supported languages, with numbers, script and meaning checked before publishing",
      "Static public site of 1,993 pages; a live crawl found all 2,165 internal links working",
      "274 offline tests; axe-core reports 0 WCAG 2.1 AA violations"
    ],
    stack: ["Python", "FastAPI", "Ollama", "Cohere RAG", "Azure Translator", "Playwright"],
    links: [
      { label: "Live site", url: "https://kartik-joshi.github.io/neighbourbrief-to/" },
      { label: "Source on GitHub", url: "https://github.com/kartik-joshi/neighbourbrief" }
    ]
  },
  {
    title: "Local Model Behavior Audit",
    summary:
      "A test harness that gives local LLM agents a real shell inside a locked-down Docker sandbox, records every command they run, and measures what they did against what they said.",
    results: [
      "5,404 runs across gemma3:12b, qwen3:8b and llama3.1:8b, reported with confidence intervals",
      "Claim checker caught 108 of 108 unsupported numbers (1 false alarm in 1,090)",
      "Replayed all 2,939 stored commands without the model; every exit code matched",
      "Three plain prompt rules raised Gemma's correct answers from 4% to 80%"
    ],
    stack: ["Python", "Docker", "Ollama", "SQLite", "Statistics"],
    links: [
      { label: "Source on GitHub", url: "https://github.com/kartik-joshi/local-model-behavior-audit" }
    ]
  },
  {
    title: "sardrone",
    summary:
      "A search-and-rescue drone in simulation, built to practise the robotics data loop end to end and measure how much of what a detector learns in simulation survives on real photos. Simulation only so far: on real photos the trained detector does not beat the off-the-shelf model by mAP, though it finds more people at high recall.",
    results: [
      "Fine-tuning on simulation alone dropped real-photo accuracy from 0.59 to 0.01 mAP@0.5",
      "Adding 300 real images restored it to 0.55; randomized worlds, camera realism and 4x more simulated data did not measurably help",
      "In closed loop, the drone found 39 of 45 people in unseen simulated worlds with no false reports",
      "A Cohere mission agent passed 17 of 20 missions I wrote, against 9 for a rule-based baseline"
    ],
    stack: ["PX4", "Gazebo", "YOLO11", "FiftyOne", "PyTorch", "Cohere"],
    links: [
      { label: "Source on GitHub", url: "https://github.com/kartik-joshi/sardrone" },
      { label: "Technical report", url: "https://github.com/kartik-joshi/sardrone/blob/main/docs/report.md" },
      { label: "v1.0 release", url: "https://github.com/kartik-joshi/sardrone/releases/tag/v1.0" },
      { label: "v2 roadmap", url: "https://github.com/kartik-joshi/sardrone/milestone/1" }
    ]
  }
];
