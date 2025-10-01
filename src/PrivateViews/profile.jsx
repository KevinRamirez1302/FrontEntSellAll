import { UseAuth } from '../../context/AuthContext';
import {
  Input,
  Button,
  Stack,
  useToast,
  FormControl,
  FormLabel,
  Heading,
  Box,
  Flex,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export const Profile = () => {
  const { user, updateUserProfile } = UseAuth(); // Supongamos que tienes una función para actualizar
  const toast = useToast();

  // 1. Manejo de estado para la edición
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
  });

  // 2. Sincronizar el estado local con los datos del usuario al cargar
  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || '',
        email: user.email || '',
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = async () => {
    try {
      // 3. Lógica para guardar los datos (simulación)
      // await updateUserProfile(profileData);

      toast({
        title: 'Perfil actualizado.',
        description: 'Tu información ha sido guardada con éxito.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setIsEditing(false);
    } catch (error) {
      toast({
        title: 'Error al actualizar.',
        description: 'No se pudo guardar la información. Inténtalo de nuevo.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={10} maxW="container.md" mx="auto">
      <Flex direction="column" alignItems="center" mb={10}>
        <img
          className="w-28 h-28 object-cover rounded-full shadow-lg"
          src="https://cdn.pixabay.com/photo/2023/05/08/09/33/cat-7978052_1280.jpg"
          alt="User Profile Picture"
        />
        <Heading as="h1" size="xl" mt={4} color="gray.700">
          Welcome {user?.name?.toUpperCase() || ''}
        </Heading>
      </Flex>

      <Heading as="h2" size="lg" mb={6} color="gray.600" textAlign="center">
        Tu Información de Perfil
      </Heading>

      <Stack spacing={5}>
        <FormControl id="name">
          <FormLabel>Nombre de Usuario</FormLabel>
          <Input
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
            isReadOnly={!isEditing} // Controla si es editable
            variant={isEditing ? 'outline' : 'filled'}
            placeholder="Nombre de usuario"
          />
        </FormControl>

        <FormControl id="email">
          <FormLabel>Correo Electrónico</FormLabel>
          <Input
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
            isReadOnly={!isEditing}
            variant={isEditing ? 'outline' : 'filled'}
            type="email"
            placeholder="Correo electrónico"
          />
        </FormControl>

        <FormControl id="id">
          <FormLabel>ID de Usuario</FormLabel>
          <Input value={user?.id || ''} isReadOnly variant="filled" />{' '}
          {/* Este campo es solo lectura */}
        </FormControl>

        <Flex justify="center" mt={6}>
          {isEditing ? (
            <>
              <Button colorScheme="purple" onClick={handleSave} mr={3}>
                Guardar Cambios
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setIsEditing(false);
                  setProfileData({
                    name: user.name || '',
                    email: user.email || '',
                  });
                }}
              >
                Cancelar
              </Button>
            </>
          ) : (
            <Button colorScheme="purple" onClick={() => setIsEditing(true)}>
              Editar Perfil
            </Button>
          )}
        </Flex>
      </Stack>
    </Box>
  );
};
