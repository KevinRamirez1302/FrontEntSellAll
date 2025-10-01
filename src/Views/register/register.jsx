import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { UseAuth } from '../../../context/AuthContext';
import { Link, Navigate } from 'react-router-dom';
import {
  Alert,
  AlertIcon,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
  VStack,
} from '@chakra-ui/react';

// Reutilizamos el componente FormInput para mantener la consistencia
const FormInput = ({ type, placeholder, register, error, name, ...rest }) => (
  <div className="w-full">
    <Input
      variant="filled"
      focusBorderColor="purple.500"
      placeholder={placeholder}
      type={type}
      className="rounded-lg shadow-sm"
      {...register(name, { required: `${placeholder} is required` })}
      {...rest}
    />
    {error && (
      <p className="text-red-500 text-sm mt-1 font-medium">{error.message}</p>
    )}
  </div>
);

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();
  const {
    Signup: authSignup,
    errors: signupErrors,
    isAuthenticated,
  } = UseAuth();
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const password = watch('password', '');

  const onSubmit = async (data) => {
    try {
      await authSignup(data);
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Registration failed.',
        description: 'Please check the information and try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (isAuthenticated) return <Navigate to="/profile" replace />;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl transform transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center text-violet-800 mb-6 tracking-wide">
          Register 📝
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <VStack spacing={4}>
            {signupErrors.length > 0 && (
              <Alert status="error" borderRadius="lg" className="my-2">
                <AlertIcon />
                <div className="flex flex-col">
                  {signupErrors.map((error, i) => (
                    <span key={i} className="text-sm font-medium">
                      {error}
                    </span>
                  ))}
                </div>
              </Alert>
            )}

            <FormInput
              name="username"
              placeholder="Username"
              register={register}
              error={errors.username}
            />

            <FormInput
              name="email"
              placeholder="Email"
              register={register}
              error={errors.email}
            />

            <div className="w-full">
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  variant="filled"
                  focusBorderColor="purple.500"
                  className="rounded-lg shadow-sm"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters long',
                    },
                  })}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    variant="ghost"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 font-medium">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <Input
                variant="filled"
                focusBorderColor="purple.500"
                placeholder="Confirm Password"
                type={showPassword ? 'text' : 'password'}
                className="rounded-lg shadow-sm"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) =>
                    value === password || 'Passwords do not match',
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1 font-medium">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              isLoading={isSubmitting}
              loadingText="Registering..."
              spinnerPlacement="start"
              className="w-full mt-4 bg-violet-800 text-white font-bold py-3 rounded-lg hover:bg-violet-900 transition-colors duration-300"
            >
              Register
            </Button>
          </VStack>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <Link
            to={'/login'}
            className="font-bold text-purple-700 hover:text-purple-500 ml-1 transition-colors duration-200"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};
