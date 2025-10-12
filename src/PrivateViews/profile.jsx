// src/components/Profile.jsx

import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FiEdit, FiMail, FiUser, FiSave, FiX } from 'react-icons/fi';
import { UseAuth } from '../../context/AuthContext';

export const Profile = () => {
  const { user, updateUserProfile } = UseAuth();
  const toast = useToast();

  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || '',
        email: user.email || '',
      });
    }
  }, [user]);

  const handleCancel = () => {
    setIsEditing(false);
    if (user) {
      setProfileData({
        name: user.name || '',
        email: user.email || '',
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = async () => {
    try {
      toast({
        title: 'Perfil actualizado',
        description: 'Tus datos se han guardado correctamente.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
      setIsEditing(false); // Salir del modo edición
    } catch (error) {
      toast({
        title: 'Error al actualizar',
        description: 'No se pudieron guardar los cambios. Inténtalo de nuevo.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  if (!user) {
    return (
      <Flex justify="center" align="center" h="100vh">
        <Text>Cargando perfil...</Text>
      </Flex>
    );
  }

  return (
    <Flex className="p-[12%]" align="center" justify="center" w="100%">
      <Card maxW="lg" w="100%" borderRadius="xl" boxShadow="lg">
        <CardHeader borderBottomWidth="1px" borderColor="gray.200">
          <HStack spacing={4} justify="space-between">
            <HStack spacing={4}>
              <Avatar
                size="lg"
                name={user.name || ''}
                src={user.profilePictureUrl || ''} // Usa una URL real si la tienes
              />
              <VStack align="flex-start" spacing={0}>
                <Heading as="h2" size="md">
                  {profileData.name}
                </Heading>
                <Text color="gray.500">{profileData.email}</Text>
              </VStack>
            </HStack>
            {!isEditing && (
              <IconButton
                icon={<FiEdit />}
                isRound
                variant="ghost"
                aria-label="Editar Perfil"
                onClick={() => setIsEditing(true)}
              />
            )}
          </HStack>
        </CardHeader>

        <CardBody>
          <Stack spacing={6}>
            <Heading as="h3" size="sm" color="gray.600">
              INFORMACIÓN PERSONAL
            </Heading>

            <FormControl id="name">
              <FormLabel>Nombre de Usuario</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FiUser color="gray.300" />
                </InputLeftElement>
                <Input
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  isReadOnly={!isEditing}
                  variant={isEditing ? 'outline' : 'filled'}
                  _readOnly={{
                    bg: 'gray.50',
                    cursor: 'default',
                    border: 'none',
                  }}
                />
              </InputGroup>
            </FormControl>

            <FormControl id="email">
              <FormLabel>Correo Electrónico</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FiMail color="gray.300" />
                </InputLeftElement>
                <Input
                  name="email"
                  type="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  isReadOnly={!isEditing}
                  variant={isEditing ? 'outline' : 'filled'}
                  _readOnly={{
                    bg: 'gray.50',
                    cursor: 'default',
                    border: 'none',
                  }}
                />
              </InputGroup>
            </FormControl>

            <FormControl id="id">
              <FormLabel>ID de Usuario</FormLabel>
              <Input
                value={user.id || 'No disponible'}
                isReadOnly
                variant="filled"
                bg="gray.100"
                cursor="not-allowed"
              />
            </FormControl>
          </Stack>
        </CardBody>

        {isEditing && (
          <CardFooter>
            <HStack w="100%" justify="flex-end">
              <Button variant="ghost" leftIcon={<FiX />} onClick={handleCancel}>
                Cancelar
              </Button>
              <Button
                colorScheme="purple"
                leftIcon={<FiSave />}
                onClick={handleSave}
              >
                Guardar Cambios
              </Button>
            </HStack>
          </CardFooter>
        )}
      </Card>
    </Flex>
  );
};
