import { ArrowLeft, User, Cpu, Radio } from 'lucide-react'
import { WindowControls } from '../components/WindowControls'

interface RemoteControlConfigProps {
  onNavigate?: (key: string) => void
}

interface ConnectorCard {
  emoji: string
  name: string
  desc: string
  connected: boolean
}

const connectors: ConnectorCard[] = [
  { emoji: '🐧', name: 'QQ', desc: '通过 QQ 开放平台接收消息并远程驱动 LLM 任务。', connected: false },
  { emoji: '🪁', name: '飞书', desc: '通过飞书机器人远程发起任务并接收执行回执。', connected: true },
  { emoji: '🔔', name: '钉钉', desc: '通过钉钉机器人远程发起任务并接收执行回执。', connected: false },
  { emoji: '💬', name: '企业微信', desc: '通过企业微信机器人接收通知并远程触发自动化任务。', connected: true },
]

export function RemoteControlConfig({ onNavigate }: RemoteControlConfigProps) {
  return (
    <div className="w-[1440px] h-[900px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl">
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        {/* Settings Sidebar */}
        <div
          className="w-[248px] shrink-0 h-full bg-[#f5f5f5] flex flex-col gap-3.5 px-4 pb-3"
          style={{ borderRight: '1px solid #e5e5e5' }}
        >
          <WindowControls />

          {/* Back Button */}
          <button
            onClick={() => onNavigate?.('main')}
            className="flex items-center gap-2.5 rounded-md p-2 w-full text-left cursor-pointer"
          >
            <ArrowLeft size={16} className="text-[#0a0a0a]" />
            <span className="text-base font-medium text-[#0a0a0a] leading-[1.5] font-['Noto_Sans_SC']">返回</span>
          </button>

          {/* Menu Items */}
          <div className="flex flex-col gap-1">
            {[
              { icon: <User size={18} className="text-[#737373]" />, label: '账号', active: false },
              { icon: <Cpu size={18} className="text-[#737373]" />, label: '模型', active: false },
              { icon: <Radio size={18} className="text-[#737373]" />, label: '远程控制', active: true },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 rounded-md p-2 w-full cursor-pointer ${
                  item.active ? 'bg-[#f5f5f5]' : ''
                }`}
              >
                {item.icon}
                <span
                  className={`text-base leading-[1.5] font-['Noto_Sans_SC'] ${
                    item.active ? 'font-semibold text-[#0a0a0a]' : 'font-normal text-[#0a0a0a]'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 bg-white rounded-2xl flex flex-col overflow-hidden h-full">
          <div className="flex-1 flex flex-col gap-6 px-9 py-6 overflow-auto">
            {/* Header */}
            <div className="flex flex-col gap-1.5 w-full">
              <h1 className="text-[28px] font-bold text-[#0a0a0a] leading-[1.3] font-['Noto_Sans_SC']">远程控制</h1>
              <p className="text-sm text-[#737373] leading-[1.5] font-['Noto_Sans_SC']">
                管理远程控制方式，保存配置后即可用于远程下达任务。
              </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-4 w-full">
              {/* Row 1 */}
              <div className="flex gap-4">
                {connectors.slice(0, 2).map((conn) => (
                  <ConnectorCard key={conn.name} {...conn} />
                ))}
              </div>
              {/* Row 2 */}
              <div className="flex gap-4">
                {connectors.slice(2, 4).map((conn) => (
                  <ConnectorCard key={conn.name} {...conn} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ConnectorCard({ emoji, name, desc, connected }: ConnectorCard) {
  return (
    <div className="flex-1 bg-[#f5f5f5] border border-[#e5e5e5] rounded-[14px] px-3.5 py-3.5 flex flex-col gap-2">
      {/* Top Row */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white border border-[#e5e5e5] flex items-center justify-center text-[18px]">
            {emoji}
          </div>
          <span className="text-sm font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">{name}</span>
        </div>
        <button
          className={`flex items-center justify-center gap-1.5 rounded-md px-4 py-2 text-sm font-['Noto_Sans_SC'] shadow-sm border border-[#e5e5e5] cursor-pointer ${
            connected ? 'bg-white text-[#0a0a0a]' : 'bg-white text-[#0a0a0a]'
          }`}
        >
          {connected ? '已连接' : '连接'}
        </button>
      </div>
      {/* Description */}
      <p className="text-sm text-[#737373] leading-[1.5] font-['Noto_Sans_SC']">{desc}</p>
    </div>
  )
}
