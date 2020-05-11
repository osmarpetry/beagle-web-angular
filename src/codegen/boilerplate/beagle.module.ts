/*
  * Copyright 2020 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *  http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

import { removeExtraIndentation } from '../utils/formatting'

function createBoilerplate(
  componentsModuleImportPath: string,
  componentsModuleName: string,
  baseUrl = '',
) {
  const code = `
    import { BeagleModule } from '@zup-it/beagle-angular'
    // import all the components you wish to use with Beagle. See the examples below:
    // import { LoadingComponent } from './components/loading/loading.component'
    // import { ErrorComponent } from './components/error/error.component'
    
    @BeagleModule({
      baseUrl: '${baseUrl}',
      module: {
        path: '${componentsModuleImportPath}',
        name: '${componentsModuleName}',
      },
      components: {
        // Associate every beagle component to your angular component. See the examples below:
        loading: class Loading {}, // todo: replace by actual component class
        error: class Error {}, // todo: replace by actual component class
      },
    })
    export class Beagle {}
  `

  return `${removeExtraIndentation(code, 4)}\n`
}

export default createBoilerplate