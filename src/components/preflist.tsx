import { Box, Td, Tr } from '@chakra-ui/react';

const Preflist = (props: any) => {
  const { name, total, heavy, dead } = props;

  return (
    <>
      <Tr bgColor={'white'} textAlign="center" borderBottom="gray">
        <Td>{name}</Td>
        <Td textAlign="center">
          <Box bgColor={'red.400'} w="auto" display={'inline-block'} textColor="white">
            {total}
          </Box>
        </Td>
        <Td textAlign="center">
          <Box bgColor={'green.400'} w="auto" display={'inline-block'}>
            {heavy}
          </Box>
        </Td>
        <Td textAlign="center">
          <Box bgColor={'orange.400'} w="auto" display={'inline-block'}>
            {dead}
          </Box>
        </Td>
        <Td>aaa</Td>
      </Tr>
    </>
  );
};

export default Preflist;
