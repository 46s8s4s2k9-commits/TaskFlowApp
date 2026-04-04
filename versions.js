/**
 * ============================================================
 *  TaskFlow — Release Configuration
 * ============================================================
 *  HOW TO ADD A NEW VERSION:
 *  1. Add a new object to the TOP of the RELEASES array.
 *  2. Set `latest: true` on it and remove `latest: true` from
 *     the previous entry (only one should be latest at a time).
 *  3. Save. That's it — the page rebuilds itself automatically.
 *
 *  FIELDS:
 *    version   — string  — e.g. "1.2.0"
 *    label     — string  — short name shown in the badge
 *    date      — string  — release date, any human-readable format
 *    size      — string  — file size shown below the download button
 *    minOS     — string  — minimum macOS required
 *    latest    — bool    — marks the "Current Release" badge
 *    downloads — array   — one entry per download variant
 *      { label, arch, url }
 *        label — button label  e.g. "Apple Silicon"
 *        arch  — small chip    e.g. "arm64"
 *        url   — direct download URL
 *    notes     — array of { type, text }
 *        type  — "new" | "fix" | "change" | "perf"
 *        text  — plain string describing the change
 * ============================================================
 */

window.TASKFLOW_RELEASES = [

  /* ── V1.1.0 ──────────────────────────────────────────────── */
  {
    version: "1.1.0",
    label:   "V1.1.0",
    date:    "April 4, 2026",
    size:    "2.59 MB",
    minOS:   "macOS 15.7+",
    latest:  true,
    downloads: [
      {
        label: "Universal",
        arch:  "universal",
        url:   "https://github.com/46s8s4s2k9-commits/TaskFlowApp/releases/download/v1.1.0/TaskFlowMac.dmg"
      },
    ],
    notes: [
      { type: "new",    text: "Introduction of custom keyboard shortcuts, configurable within the app’s settings." },
      { type: "new",    text: "The Pomodoro Timer now features colour changes as the estimated time approaches." },
      { type: "change",    text: "Completed tasks for the day will now display a strikethrough and be visible in both the “Completed” and “All Tasks” tabs." },
      { type: "change",    text: "Users can now mark tasks as complete by directly clicking the checkmark." },
      { type: "change", text: "Enhancements to the user interface for tasks." }
      
      /*
      { type: "new",    text: "Recurring tasks — set daily, weekly or custom schedules" },
      { type: "new",    text: "Quick-add widget for the macOS menu bar" },
      { type: "new",    text: "Tag filtering: filter your task list by one or more tags instantly" },
      { type: "perf",   text: "Cold launch time reduced by ~40% on Apple Silicon" },
      { type: "fix",    text: "Fixed a crash when deleting the last task in a project" },
      { type: "fix",    text: "Progress bar now updates correctly after drag-reordering tasks" },
      { type: "change", text: "Keyboard shortcut for new task changed to ⌘N (was ⌘T)" }
       */

    ]
  },

  /* ── V1.0.0 ──────────────────────────────────────────────── */
  {
    version: "1.0.0",
    label:   "V1.0.0",
    date:    "April 4, 2026",
    size:    "13.8 MB",
    minOS:   "macOS 15.7+",
    latest:  false,
    downloads: [
      {
        label: "Universal",
        arch:  "universal",
        url:   "https://github.com/46s8s4s2k9-commits/TaskFlowApp/releases/download/v1.0.0/TaskFlow_MacV1.0.0.dmg"
      }
    ],
    notes: [
      { type: "new",  text: "Initial public release of TaskFlow for macOS" },
      { type: "new",  text: "Built-in Pomodoro timer with custom time" },
      { type: "new",  text: "Smart Projects with tags, priorities and deadlines" },
      { type: "new",  text: "100% local storage — no account, no cloud, no tracking" },
      { type: "change", text: "Removed all default subjects" },
    ]
  }

  /* ── ADD FUTURE VERSIONS ABOVE THIS LINE ─────────────── */
];
