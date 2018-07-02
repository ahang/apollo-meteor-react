import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';

import ResolutionForm from './ResolutionForm';
import GoalForm from './GoalForm';
import Goal from './resolutions/Goal';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const App = ({ loading, resolutions, client, user }) => {
  console.log(resolutions);
  if (loading) return <h1>I Be Loading</h1>;
  return (
    <div>
      {user._id ? (
        <button
          onClick={() => {
            Meteor.logout();
            client.resetStore();
          }}
        >
          LogOut
        </button>
      ) : (
        <div />
      )}

      <RegisterForm client={client} />
      <LoginForm client={client} />
      <ResolutionForm />
      <ul>
        {resolutions.map(resolution => (
          <li key={resolution._id}>
            {resolution.name}
            <ul>
              {resolution.goals.map(goal => (
                <Goal goal={goal} key={goal._id} />
              ))}
            </ul>
            <GoalForm resolutionId={resolution._id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
      goals {
        _id
        name
        completed
      }
    }
    user {
      _id
    }
  }
`;

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
