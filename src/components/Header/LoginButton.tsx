import { Button, ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

interface ButtonProps extends ChakraButtonProps {}

export function LoginButton({ ...rest }: ButtonProps) {
  return (
    <Button
      width="28"
      py="5"
      backgroundColor="pink.500"
      color="orange.50"
      borderRadius="4"
      fontWeight="600"
      _hover={{ backgroundColor: 'pink.500', filter: 'brightness(1.1)' }}
      {...rest}
    >
      LOGIN
    </Button>
  )
}
