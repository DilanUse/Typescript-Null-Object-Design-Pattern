import {ILearner} from './ILearner';

export class Learner implements ILearner {
    public readonly id: number;
    public readonly userName: string;
    public readonly coursesCompleted: number;

    public constructor(id: number, userName: string, coursesCompleted: number) {
        this.id = id;
        this.userName = userName;
        this.coursesCompleted = coursesCompleted;
    }
}
