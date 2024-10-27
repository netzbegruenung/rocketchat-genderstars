import { IAppAccessors, ILogger, IConfigurationExtend } from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';

import { IPreMessageSentModify } from '@rocket.chat/apps-engine/definition/messages';
import { IMessage } from '@rocket.chat/apps-engine/definition/messages';
import { IMessageBuilder, IModify, IRead, IHttp, IPersistence } from '@rocket.chat/apps-engine/definition/accessors';

export class GenderStarsApp extends App implements IPreMessageSentModify {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    async executePreMessageSentModify(
        message: IMessage,
        builder: IMessageBuilder,
        read: IRead,
        http: IHttp,
        persistence: IPersistence
    ):Promise<IMessage>
    {
        const pattern = /(\w)\*(in|In)/g;
        const replacement = '$1\\*$2';
        if (message.text && pattern.test(message.text)) {
            message.text = message.text.replace(pattern, replacement);
        }
        return message;
    }
}
