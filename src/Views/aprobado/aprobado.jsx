import { UseAuth } from '../../../context/AuthContext';

export const Aprobado = () => {
  const { user } = UseAuth();

  return (
    <>
      <h1>{user.name}</h1>
    </>
  );
};
