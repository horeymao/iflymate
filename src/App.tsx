import { useState } from 'react'
import { CoworkMain } from './pages/CoworkMain'
import { CoworkScheduled } from './pages/CoworkScheduled'
import { CoworkScheduledTaskList } from './pages/CoworkScheduledTaskList'
import { CoworkScheduledNewTask } from './pages/CoworkScheduledNewTask'
import { CoworkSkills } from './pages/CoworkSkills'
import { CoworkTask } from './pages/CoworkTask'
import { CoworkTaskArtifact } from './pages/CoworkTaskArtifact'
import { RemoteControlConfig } from './pages/RemoteControlConfig'

type Screen =
  | 'main'
  | 'scheduled'
  | 'scheduled-task-list'
  | 'scheduled-new'
  | 'skills'
  | 'task'
  | 'task-artifact'
  | 'remote-control'

const screens: { key: Screen; label: string }[] = [
  { key: 'main', label: 'Cowork Main' },
  { key: 'scheduled', label: 'Scheduled (Empty)' },
  { key: 'scheduled-task-list', label: 'Scheduled (Task List)' },
  { key: 'scheduled-new', label: 'Scheduled (New Task)' },
  { key: 'skills', label: 'Skills' },
  { key: 'task', label: 'Task Chat' },
  { key: 'task-artifact', label: 'Task + Artifact' },
  { key: 'remote-control', label: 'Remote Control Config' },
]

function ScreenRenderer({ screen, onNavigate }: { screen: Screen; onNavigate: (key: string) => void }) {
  const nav = onNavigate as (key: any) => void
  switch (screen) {
    case 'main': return <CoworkMain onNavigate={nav} />
    case 'scheduled': return <CoworkScheduled onNavigate={nav} />
    case 'scheduled-task-list': return <CoworkScheduledTaskList onNavigate={nav} />
    case 'scheduled-new': return <CoworkScheduledNewTask onNavigate={nav} />
    case 'skills': return <CoworkSkills onNavigate={nav} />
    case 'task': return <CoworkTask onNavigate={nav} />
    case 'task-artifact': return <CoworkTaskArtifact onNavigate={nav} />
    case 'remote-control': return <RemoteControlConfig onNavigate={nav} />
    default: return <CoworkMain onNavigate={nav} />
  }
}

export function App() {
  const [current, setCurrent] = useState<Screen>('main')

  const handleNavigate = (key: string) => {
    const navMap: Record<string, Screen> = {
      new: 'main',
      main: 'main',
      scheduled: 'scheduled',
      'scheduled-new': 'scheduled-new',
      'scheduled-task-list': 'scheduled-task-list',
      skills: 'skills',
      connector: 'remote-control',
      task: 'task',
      'task-artifact': 'task-artifact',
      'remote-control': 'remote-control',
    }
    if (navMap[key]) setCurrent(navMap[key])
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-6 p-6">
      {/* Screen Switcher */}
      <div className="flex flex-wrap gap-2 w-full max-w-[1440px]">
        {screens.map((s) => (
          <button
            key={s.key}
            onClick={() => setCurrent(s.key)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
              current === s.key
                ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]'
                : 'bg-white text-[#0a0a0a] border-[#e5e5e5] hover:bg-[#f5f5f5]'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Screen */}
      <div className="overflow-auto w-full flex justify-center">
        <ScreenRenderer screen={current} onNavigate={handleNavigate} />
      </div>
    </div>
  )
}

export default App
