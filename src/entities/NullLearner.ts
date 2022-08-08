import {ILearner} from './ILearner';

export class NullLearner implements ILearner {
    id: number = -1;
    userName: string = 'Just Browsing';
    coursesCompleted: number = 0;
}
