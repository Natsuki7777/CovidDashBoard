import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Badge, IconButton, Td, Tr } from '@chakra-ui/react';
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
          <Badge colorScheme={colorTotal(props.total)}> {props.total}</Badge>
        </Td>
        <Td textAlign="center">
          <Badge colorScheme={colorHeavy(props.heavy)}> {props.heavy}</Badge>
        </Td>
        <Td textAlign="center">
          <Badge colorScheme={colorDead(props.dead)}> {props.dead}</Badge>
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
