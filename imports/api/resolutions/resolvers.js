import Resolutions from './resolutions';

// Resolutions.insert({
//   name: 'test res'
// });

export default {
  Query: {
    resolutions(obj, args, { userId }) {
      console.log(userId);
      return Resolutions.find({
        userId
      }).fetch();
    }
  },

  Mutation: {
    createResolution(obj, { name }, { userId }) {
      console.log(name);
      const resolutionId = Resolutions.insert({
        name, 
        userId
      });
      return Resolutions.findOne(resolutionId);
    }
  }
};