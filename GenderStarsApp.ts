import { IAppAccessors, ILogger, IConfigurationExtend } from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { GenderStars } from './GenderStars';

export class GenderStarsApp extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

//    public async initialize(configuration: IConfigurationExtend): Promise<void> {
//        await configuration.scheduler.registerProcessors([new GenderStars(this)]);
//    }
}
