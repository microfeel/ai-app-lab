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

import React from 'react';

import { Event } from '@/demo/mcp/types/event';

import BaseContent from '../../baseContent';
import PlayerBroadcast from '../../../PlayerBroadcast';
import CommonTypeBox from '../../../CommonTypeBox';

interface CommonProps {
  data: Event;
}

const Common = (props: CommonProps) => {
  const { data } = props;
  const parsedResults = { results: data.result };

  return (
    <BaseContent header={<PlayerBroadcast type={data.type} />}>
      <CommonTypeBox key={data.id} data={parsedResults} />
    </BaseContent>
  );
};

export default Common;
