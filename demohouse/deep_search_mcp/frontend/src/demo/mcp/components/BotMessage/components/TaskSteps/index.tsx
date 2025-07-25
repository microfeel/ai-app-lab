// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// Licensed under the 【火山方舟】原型应用软件自用许可协议
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at 
//     https://www.volcengine.com/docs/82379/1433703
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { useContext } from 'react';

import { Timeline } from '@arco-design/web-react';

import StepItem from '@/demo/mcp/components/BotMessage/components/TaskSteps/StepItem';
import { Step } from '@/demo/mcp/types/step';
import { BotMessageContext } from '@/demo/mcp/store/BotMessageContext/context';

import s from './index.module.less';
import Dot from './Dot';

interface Props {
  tasks: Step[];
}

export const TaskSteps = ({ tasks }: Props) => {
  const { finish: messageFinish } = useContext(BotMessageContext);
  const current = tasks.findLastIndex(t => Boolean(t.finish)) + 1;

  return (
    <Timeline className={s.customTimeline} pendingDot={null}>
      {tasks.map((step, index) => (
        <Timeline.Item key={index} dot={<Dot loading={current === index && !messageFinish} />}>
          <StepItem step={step} />
        </Timeline.Item>
      ))}
    </Timeline>
  );
};
