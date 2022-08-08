import {ILearner} from '../entities/ILearner';

export class LearnerView {
    private readonly _learner: ILearner;

    public constructor(learner: ILearner)
    {
        if(learner == null) throw new Error('Null reference');
        if(learner.userName == null) throw new Error('Null reference');

        this._learner = learner;
    }

    public renderView(): void
    {
        console.log("User Name: " + this._learner.userName);
        console.log("Courses Completed: " + this._learner.coursesCompleted);
    }
}
