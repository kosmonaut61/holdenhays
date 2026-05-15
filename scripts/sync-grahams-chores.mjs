import { execFileSync } from "node:child_process"
import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, "..")
const outputPath = resolve(repoRoot, "data/grahams-chores.json")

const raw = execFileSync("remindctl", ["list", "Grahams Chores", "--json"], {
  encoding: "utf8",
})

const reminders = JSON.parse(raw)
const payload = {
  listName: "Grahams Chores",
  syncedAt: new Date().toISOString(),
  source: "Apple Reminders",
  items: reminders.map((reminder) => ({
    id: reminder.id,
    title: reminder.title,
    isCompleted: Boolean(reminder.isCompleted),
    priority: reminder.priority ?? "none",
    notes: reminder.notes ?? null,
    dueDate: reminder.dueDate ?? null,
  })),
}

mkdirSync(dirname(outputPath), { recursive: true })
writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`)

console.log(`Synced ${payload.items.length} Graham chore${payload.items.length === 1 ? "" : "s"} to ${outputPath}`)
