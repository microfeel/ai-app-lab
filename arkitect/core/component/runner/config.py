# Copyright 2025 Bytedance Ltd. and/or its affiliates
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from enum import Enum

from pydantic import BaseModel


class MemoryUpdateSetting(str, Enum):
    NO_AUTO_UPDATE = "NO_AUTO_UPDATE"
    BLOCKING = "BLOCKING"
    NON_BLOCKING = "NON_BLOCKING"


class RunnerConfig(BaseModel):
    memory_update_behavior: MemoryUpdateSetting = MemoryUpdateSetting.BLOCKING
