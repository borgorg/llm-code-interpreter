import {
  Body,
  Controller,
  Post,
  Header,
  Route,
} from 'tsoa'
import {
  ProcessManager,
} from '@devbookhq/sdk'

import { CachedSession } from '../sessions/session'
import { openAIConversationIDHeader } from '../constants'
import { Template } from './template'

interface StartProcessParams extends Pick<Parameters<ProcessManager['start']>[0], 'cmd' | 'rootdir'> { }

interface CommandResponse {
  stderr: string
  stdout: string
}

@Route('commands')
export class commandController extends Controller {
  @Post()
  public async executeCommand(
    @Body() requestBody: StartProcessParams,
    @Header('template') template: Template,
    @Header(openAIConversationIDHeader) conversationID: string,
  ): Promise<CommandResponse> {
    const session = await CachedSession
      .findOrStartSession({ sessionID: conversationID, envID: template })

    const cachedProcess = await session.startProcess(requestBody)
    await cachedProcess.process?.exited

    return {
      stderr: cachedProcess.response.stderr.map(({ line }) => line).join('\n'),
      stdout: cachedProcess.response.stdout.map(({ line }) => line).join('\n'),
    }
  }
}