import {Learner} from '../entities/Learner';
import {ILearner} from '../entities/ILearner';

export class LearnerService {
    LearnerRepo = class {
        private readonly _learners = new Array<Learner>();

        public constructor() {
            this._learners.push(new Learner(1, "David", 83));
            this._learners.push(new Learner(2, "Julie", 72));
            this._learners.push(new Learner(3, "Scott", 92));
        }

        public getLearner(id: number): ILearner | null {
            const learnerExists = this._learners.some(l => l.id == id);

            if (learnerExists) {
                return this._learners.find(l => l.id == id) ?? null;
            }

            return null;
        }
    }

    private readonly _repo = new this.LearnerRepo();


    public getCurrentLearner(): ILearner
    {
        // go get the Learner's id from a JWT token cookie
        // or by some other appropriate means

        const learnerId = -1;

        const learner = this._repo.getLearner(learnerId);

        if (learner == null) {
            throw new Error('Null reference');
        }

        return learner;
    }
}
