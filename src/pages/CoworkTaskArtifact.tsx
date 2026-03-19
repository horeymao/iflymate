import { ChevronDown, ChevronRight, Copy, ThumbsUp, ThumbsDown, Globe, FileText, RefreshCw, X } from 'lucide-react'
import { Sidebar } from '../components/Sidebar'

interface CoworkTaskArtifactProps {
  onNavigate?: (key: string) => void
}

export function CoworkTaskArtifact({ onNavigate }: CoworkTaskArtifactProps) {
  return (
    <div className="w-[1440px] h-[900px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl">
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        <Sidebar activeItem="new" onNavigate={onNavigate as any} />

        {/* Right Area */}
        <div className="flex-1 bg-white rounded-2xl flex overflow-hidden h-full gap-2">
          {/* Chat Column */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Task Header */}
            <div className="flex items-center gap-2 px-6 h-[52px] border-b border-[#e5e5e5] shrink-0">
              <span className="text-[15px] font-medium text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">
                生成 Q1 季度销售分析报告
              </span>
              <ChevronDown size={16} className="text-[#737373]" />
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col gap-6 px-10 py-8 pb-5 overflow-auto">
              {/* User Message */}
              <div className="flex flex-col items-end w-full">
                <div className="max-w-[500px] bg-[#f5f5f5] rounded-2xl px-5 py-4">
                  <p className="text-[15px] text-[#0a0a0a] leading-[1.7] font-['Noto_Sans_SC']">
                    帮我基于本季度的 OKR 完成情况、项目交付数据和团队协作评分，生成一份 Q1 季度销售分析报告。
                    <br />
                    <br />
                    要求：
                    <br />
                    1. 包含核心业绩指标达成率
                    <br />
                    2. 分区域销售数据对比
                    <br />
                    3. 重点客户跟进情况
                    <br />
                    4. 下季度策略建议
                  </p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[13px] font-medium text-[#737373] leading-[1.4] font-['Noto_Sans_SC']">
                    已完成分析
                  </span>
                  <ChevronRight size={14} className="text-[#737373]" />
                </div>

                <p className="text-[15px] text-[#0a0a0a] leading-[1.7] font-['Noto_Sans_SC'] w-full">
                  已根据您提供的数据源，整合了 CRM 系统中的销售数据、OKR 平台的目标完成进度以及项目管理工具中的交付记录，为您生成了完整的 Q1 季度销售分析报告。
                </p>
                <p className="text-[15px] text-[#0a0a0a] leading-[1.7] font-['Noto_Sans_SC'] w-full">
                  报告要点：
                  <br />• 整体销售额达成率 112%，超额完成目标
                  <br />• 华东区域增长最为显著，同比增长 34%
                  <br />• 重点客户续约率 91%，新签 12 家企业客户
                  <br />• 建议 Q2 加大华南区域投入，优化渠道策略
                </p>
                <p className="text-[15px] font-semibold text-[#0a0a0a] leading-[1.7] font-['Noto_Sans_SC'] w-full">
                  报告已生成完毕，您可以点击下方卡片查看完整内容。
                </p>

                {/* Artifact Card */}
                <div className="flex items-center gap-3.5 bg-[#f5f5f5] rounded-xl border border-[#e5e5e5] px-4 py-3.5 cursor-pointer">
                  <div className="w-10 h-10 bg-[#E8F0FE] rounded-lg flex items-center justify-center shrink-0">
                    <FileText size={18} className="text-[#4285F4]" />
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1">
                    <span className="text-sm font-medium text-[#0a0a0a] font-['Noto_Sans_SC']">
                      Q1 季度销售数据分析报告
                    </span>
                    <span className="text-xs text-[#737373] font-['Noto_Sans_SC']">Word 文档 · 已生成</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white border border-[#e5e5e5] rounded-md px-3 py-1.5 shrink-0">
                    <span className="text-[13px] text-[#0a0a0a] font-['Noto_Sans_SC']">Word</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-1">
                  <Copy size={16} className="text-[#737373] cursor-pointer" />
                  <ThumbsUp size={16} className="text-[#737373] cursor-pointer" />
                  <ThumbsDown size={16} className="text-[#737373] cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Reply Area */}
            <div className="px-6 py-4 pb-5 flex items-center justify-center">
              <div className="w-[680px] bg-white rounded-2xl border border-[#e5e5e5] shadow-[0_2px_6px_rgba(0,0,0,0.04)] px-5 py-4 flex flex-col gap-4 justify-between">
                <span className="text-[15px] text-[#737373] leading-[1.2] font-['Noto_Sans_SC']">回复...</span>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <Globe size={16} className="text-[#737373]" />
                    <FileText size={16} className="text-[#737373]" />
                  </div>
                  <div className="flex items-center gap-3.5">
                    <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC']">DeepSeek 3.1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="w-[440px] shrink-0 bg-white rounded-2xl border border-[#e5e5e5] flex flex-col overflow-hidden">
            {/* Preview Header */}
            <div className="flex items-center justify-between px-4 h-[52px] border-b border-[#e5e5e5] shrink-0">
              <span className="text-[13px] font-medium text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">
                Q1 季度销售数据分析报告
              </span>
              <div className="flex items-center gap-2.5">
                <RefreshCw size={16} className="text-[#737373] cursor-pointer" />
                <X size={16} className="text-[#737373] cursor-pointer" />
              </div>
            </div>

            {/* Preview Content */}
            <div className="flex-1 flex flex-col gap-5 px-8 py-7 overflow-auto">
              <h2 className="text-xl font-bold text-[#0a0a0a] leading-[1.5] font-['Noto_Sans_SC']">
                Q1 季度销售数据分析报告
              </h2>
              <p className="text-[13px] text-[#737373] leading-[1.5] font-['Noto_Sans_SC']">2025年第一季度 · 销售部</p>
              <div className="w-full h-px bg-[#e5e5e5]" />

              <h3 className="text-base font-semibold text-[#0a0a0a] leading-[1.5] font-['Noto_Sans_SC']">
                一、核心业绩指标
              </h3>
              <p className="text-[13px] text-[#333333] leading-[1.8] font-['Noto_Sans_SC']">
                本季度销售部门整体表现优异，核心业绩指标均超额完成预定目标。总销售额达到 2,847 万元，同比增长
                28.3%，达成率为 112%。其中新客户贡献收入占比 31%，较上季度提升 7 个百分点。
              </p>

              <h3 className="text-base font-semibold text-[#0a0a0a] leading-[1.5] font-['Noto_Sans_SC']">
                二、分区域销售数据对比
              </h3>
              <p className="text-[13px] text-[#333333] leading-[1.8] font-['Noto_Sans_SC']">
                华东区域：1,245 万元（+34%）
                <br />
                华北区域：682 万元（+18%）
                <br />
                华南区域：498 万元（+12%）
                <br />
                西部区域：422 万元（+22%）
              </p>

              <h3 className="text-base font-semibold text-[#0a0a0a] leading-[1.5] font-['Noto_Sans_SC']">
                三、重点客户跟进情况
              </h3>
              <p className="text-[13px] text-[#333333] leading-[1.8] font-['Noto_Sans_SC']">
                本季度重点客户续约率达到 91%，高于行业平均水平。新签约 12 家企业级客户，其中 3 家为年合同金额超过
                200 万元的大客户。重点客户满意度评分 4.6/5.0。
              </p>

              <h3 className="text-base font-semibold text-[#0a0a0a] leading-[1.5] font-['Noto_Sans_SC']">
                四、下季度策略建议
              </h3>
              <p className="text-[13px] text-[#333333] leading-[1.8] font-['Noto_Sans_SC']">
                1. 加大华南区域市场投入，增设区域销售团队
                <br />
                2. 优化渠道合作模式，提升间接销售占比
                <br />
                3. 针对大客户推出定制化服务方案
                <br />
                4. 完善销售流程自动化，缩短成交周期
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
