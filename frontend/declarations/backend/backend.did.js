export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getWelcomeMessage' : IDL.Func([], [IDL.Text], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
