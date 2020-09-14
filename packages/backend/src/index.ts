import { Logger } from '~/services/Logger'
import { foo, SharedEnum } from '@monorepo-lerna-typescript-starter/shared'

const t = new Logger()
t.logSuperSecret()

console.log(`${SharedEnum.Hello} ${foo()} from the otheeeeer shared package! `)
