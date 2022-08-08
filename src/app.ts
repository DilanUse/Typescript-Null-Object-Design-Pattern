import {LearnerService} from './services/LearnerService';
import {LearnerView} from './view/LearnerView';

const learnerService = new LearnerService();
const learner = learnerService.getCurrentLearner();

const view = new LearnerView(learner);
view.renderView();
