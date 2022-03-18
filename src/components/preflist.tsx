import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Box, IconButton, Td, Tr } from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  name: string;
  slug: string;
  total: number;
  heavy: number;
  dead: number;
}

const Preflist: NextPage<Props> = ({ ...props }: Props) => {
  const colorTotal = (num: number) => {
    if (num < 100) {
      var color = 'green';
    } else if (num < 500) {
      var color = 'orange';
    } else {
      var color = 'red';
    }
    return color;
  };
  const colorHeavy = (num: number) => {
    if (num < 100) {
      var color = 'green';
    } else if (num < 500) {
      var color = 'orange';
    } else {
      var color = 'red';
    }
    return color;
  };
  const colorDead = (num: number) => {
    if (num < 100) {
      var color = 'green';
    } else if (num < 500) {
      var color = 'orange';
    } else {
      var color = 'red';
    }
    return color;
  };

  return (
    <>
      <Tr bgColor={'white'} textAlign="center">
        <Td>{props.name}</Td>
        <Td textAlign="center">
          <Box bgColor={`${colorTotal(props.total)}.400`} w="auto" display={'inline-block'} textColor="white" px={1}>
            {props.total}
          </Box>
        </Td>
        <Td textAlign="center">
          <Box bgColor={`${colorHeavy(props.heavy)}.400`} w="auto" display={'inline-block'} textColor="white" px={1}>
            {props.heavy}
          </Box>
        </Td>
        <Td textAlign="center">
          <Box bgColor={`${colorDead(props.dead)}.400`} w="auto" display={'inline-block'} textColor="white" px={1}>
            {props.dead}
          </Box>
        </Td>
        <Td>
          <Link href={`/detail/${props.slug}`}>
            <IconButton m={-3} aria-label="detail" icon={<InfoOutlineIcon />} bgColor="white" rounded="full" />
          </Link>
        </Td>
      </Tr>
    </>
  );
};

export default Preflist;
