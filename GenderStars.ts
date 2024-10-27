import { IPostMessageSent } from '@rocket.chat/apps-engine/definition/messages';
import { IMessage } from '@rocket.chat/apps-engine/definition/messages';
import { IMessageBuilder, IModify, IRead, IHttp, IPersistence } from '@rocket.chat/apps-engine/definition/accessors';
import { GenderStarsApp } from './GenderStarsApp';

import {
    IAppAccessors,
    ILogger,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';


export class GenderStars implements IPostMessageSent {
    //constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
    //}

    public async executePostMessageSent(message: IMessage, read: IRead, http: IHttp, persistence: IPersistence, modify: IModify
    ): Promise<void> {
        const pattern = /(\w)\*(in|In)/g;
        const replacement = '$1\\*$2';

        if (message.text && pattern.test(message.text)) {
            const newText = message.text.replace(pattern, replacement);
            message.text = newText
            /*const builder: IMessageBuilder = modify.getMessageBuilder()
                .setText(newText)
                .setEditor(message.sender)
                .setRoom(message.room);

            await modify.getUpdater().finish(builder);*/
            message;
        }
    }
}
