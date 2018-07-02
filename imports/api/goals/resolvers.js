import Goals from './goals';

export default {
  Mutation: {
    createGoal(obj, { name, resolutionId }) {
      console.log(name);
      const goalId = Goals.insert({
        name, 
        resolutionId,
        completed: false
      });
      return Goals.findOne(goalId);
    }
  }
};